import React, {useEffect, useState, createContext} from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePageScreen from './src/sceens/HomePage';
import NotificationScreen from './src/sceens/Notification';
import AddContentScreen from './src/sceens/AddContent';
import LogInScreen from './src/sceens/AuthScreen/LogIn';
import RegisterScreen from './src/sceens/AuthScreen/registerIn';
import RegEmailScreen from './src/sceens/AuthScreen/regEmail';
import RegPasswordScreen from './src/sceens/AuthScreen/regPassword';
import {useFormik} from 'formik';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios';
import ForgotPassword from './src/sceens/ForgotPassword';
import postScreen from './src/sceens/PostScreen';
import LoginInScreen from './src/sceens/AuthScreen/LoginIn';
import MyProfileScreen from './src/sceens/MyProfileScreen';
import MyNetwork from './src/sceens/MyNetwork';
import CommentScreen from './src/sceens/CommentScreen';

const Stack = createNativeStackNavigator();

export const Context = createContext({});

const AuthScreen = () => {
 
  const getData = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token !== null) {
        console.log('giriş başarılı');
        setToken(token);
        console.log('async getItem ile depodaki token alındı Token : ',token);
        return true;
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  };
  const [token, setToken] = useState('');
  const [isLoggin, setIsLoggin] = useState(false);
  const navigation = useNavigation();

  // useEffect(() => {
  //   if (token === null) {
  //     AsyncStorage.removeItem('token');
  //     navigation.navigate('Login');
  //   } 
  // }, [token]);
  
  useEffect(() => {
    const checkAutoLogin = async () => {
      try {
        const storedToken = await AsyncStorage.getItem('token');
        if (storedToken) {
          setIsLoggin(true);
          setToken(storedToken);
          navigation.navigate('Home'); 
        }
      } catch (error) {
        console.error('Otomatik giriş sırasında bir hata oluştu: ', error);
      }
    };

    checkAutoLogin();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      setIsLoggin(result);
    };

    fetchData();
  }, []);

  const handleRegister = values => {
    const cloneData = {
      display_name: values.name,
      job_title: values.jobTitle,
      email: values.email,
      password: values.password,
    };

    Axios.post('http://www.kursadozdemir.com/User/Register', cloneData)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  const formik = useFormik({
    initialValues: {name: '', jobTitle: '', email: '', password: ''},
    onSubmit: values => {
      handleRegister(values);
    },
  });
console.log("token-state",token)
  if (!isLoggin) {
    return (
      <Context.Provider value={{
        token,
        setToken,
        isLoggin,
        setIsLoggin
      }}>
      <Stack.Navigator
        initialRouteName={isLoggin ? 'Home' : 'Login'}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Loginin" component={LoginInScreen} />
        <Stack.Screen name="Login" component={LogInScreen} />
        <Stack.Screen name="forgetPassword" component={ForgotPassword} />
        <Stack.Screen name="Register">
          {props => <RegisterScreen {...props} formik={formik} />}
        </Stack.Screen>
        <Stack.Screen name="regEmail">
          {props => <RegEmailScreen {...props} formik={formik} />}
        </Stack.Screen>
        <Stack.Screen name="regPassword">
          {props => <RegPasswordScreen {...props} formik={formik} />}
        </Stack.Screen>
      </Stack.Navigator>
      </Context.Provider>
    );
  }

  return (
    <Context.Provider
      value={{
        token,
        setToken,
        isLoggin,
        setIsLoggin
      }}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomePageScreen} />
        <Stack.Screen name="Notification" component={NotificationScreen} />
        <Stack.Screen name="AddContent">
          {props => <AddContentScreen {...props} token={token} />}
        </Stack.Screen>
        <Stack.Screen name='MyProfile' component={MyProfileScreen}/>
        <Stack.Screen name="Posting" component={postScreen} />
        <Stack.Screen name="MyNetwork" component={MyNetwork} />
        <Stack.Screen name="Comment" component={CommentScreen} />


      </Stack.Navigator>
    </Context.Provider>
  );
};

function App() {  
  return (
    <NavigationContainer>
      <AuthScreen />
    </NavigationContainer>
  );
}

export default App;
