import {
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  Switch,
  SafeAreaView,
} from 'react-native';
import React, {useState, useContext} from 'react';
import {useFormik} from 'formik';
import {Context} from '../../../App';

import {useNavigation} from '@react-navigation/native';
import Axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginInScreen = () => {
  const {token, setToken, isLoggin, setIsLoggin} = useContext(Context);

  const [showPassword, SetshowPassword] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const navigation = useNavigation();

  const storeData = async (name, value) => {
    try {
      await AsyncStorage.setItem(name, value);
    } catch (e) {
      // saving error
    }
  };

  const handleLogin = values => {
    const cloneData = {
      email: values.email,
      password: values.password,
    };

    Axios.post('http://www.kursadozdemir.com/User/Login', cloneData)
      .then(res => {
        const responseData = res.data;
        const token = responseData.NESNE.token;

        console.log('AXIOS ile giriş isteği gönderildi');
        console.log(token);
        if (token) {
          storeData('token', token);
          setIsLoggin(true);
          setToken(token);
        } else {
          console.log('AXIOS token alınamadı');
        }
      })
      .catch(err => console.error('Giriş sırasında bir hata oluştu:', err));
  };

  const formik = useFormik({
    initialValues: {email: '', password: ''},
    onSubmit: values => {
      handleLogin(values);
    },
  });

  const loginButton = () => {
    if (!formik.values.email || !formik.values.password) {
      return console.log('E-mail ve Password doldurulmalıdır.');
    }

    formik.handleSubmit();
  };

  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <Image
        style={{
          height: 100,
          width: 200,
          resizeMode: 'contain',
          marginBottom: 30,
          marginTop: 25,
        }}
        source={require('../../../assets/images/LinkedInLogo.png')}
      />

      <Text
        style={{
          marginLeft: 20,
          fontSize: 30,
          color: 'black',
          fontWeight: 'bold',
        }}>
        Oturum aç.
      </Text>
      <View style={{flexDirection: 'row', marginLeft: 20, marginBottom: 15}}>
        <Text>veya </Text>
        <Pressable onPress={() => navigation.navigate('Register')}>
          <Text style={{color: 'blue'}}>Linkedin'e katılın</Text>
        </Pressable>
      </View>

      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <TextInput
          value={formik.values.email}
          onChangeText={value => {
            formik.setFieldValue('email', value);
          }}
          style={{borderBottomColor: 'black', borderBottomWidth: 2, width: 250}}
          placeholder="Mail ya da Telefon"
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TextInput
            value={formik.values.password}
            onChangeText={value => {
              formik.setFieldValue('password', value);
            }}
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 2,
              width: 250,
            }}
            placeholder="Şifreniz"
            secureTextEntry={!showPassword}
          />
          <Pressable onPress={() => SetshowPassword(prev => !prev)}>
            <Image
              style={{
                height: 15,
                width: 15,
              }}
              source={
                showPassword
                  ? require('../../../assets/images/invisible.png')
                  : require('../../../assets/images/visibility.png')
              }
            />
          </Pressable>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Switch
            value={isEnabled}
            onValueChange={toggleSwitch}
            trackColor={{false: 'black', true: 'blue'}}
            thumbColor={isEnabled ? 'green' : 'red'}
          />
          <Text>Beni hatırla </Text>
          <Text style={{color: 'blue'}}>Daha fazla bilgi edinin.</Text>
        </View>
        <Pressable onPress={() => navigation.navigate('forgetPassword')}>
          <Text style={{color: 'blue'}}>Şifrenizi mi unuttunuz?</Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: 'blue',
            flexDirection: 'row',
            margin: 5,
            height: 55,
            justifyContent: 'center',
            width: '100%',
            borderRadius: 30,
            alignItems: 'center',
            borderColor: 'black',
            borderWidth: 1,
          }}
          onPress={() => loginButton()}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>Devam Et</Text>
        </Pressable>

        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              backgroundColor: 'gray',
              width: '100%',
              height: 2,
              margin: 5,
            }}></View>
          <Text>veya</Text>
          <View
            style={{
              backgroundColor: 'gray',
              width: '100%',
              height: 2,
              margin: 5,
            }}></View>
        </View>
        <Pressable
          style={{
            flexDirection: 'row',
            margin: 5,
            height: 55,
            justifyContent: 'center',
            width: '100%',
            borderRadius: 30,
            alignItems: 'center',
            borderColor: 'black',
            borderWidth: 1,
          }}
          onPress={() => {}}>
          <Text style={{color: 'black', fontWeight: 'bold'}}>
            Apple ile oturum açın
          </Text>
        </Pressable>

        <Pressable
          style={{
            flexDirection: 'row',
            margin: 5,
            height: 55,
            justifyContent: 'center',
            width: '100%',
            borderRadius: 30,
            alignItems: 'center',
            borderColor: 'black',
            borderWidth: 1,
          }}>
          <Image
            style={{
              width: 17,
              height: 17,
              borderRadius: 5,
              margin: 3,
              justifyContent: 'center',
            }}
            source={require('../../../assets/images/facebook.png')}
          />
          <Text style={{fontSize: 18, fontWeight: '500'}}>
            Facebook ile Devam Et
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default LoginInScreen;
