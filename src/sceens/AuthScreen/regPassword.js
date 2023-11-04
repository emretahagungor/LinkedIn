import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Image,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Pressable,
} from 'react-native';
import axios from 'axios';

const regPasswordScreen = ({formik}) => {
  // const [password, setPassword] = useState(
  //   'Şifreniz en az 6 hane uzunluğunda olmalıdır',
  // );

  // const textInputOnFocus = () => {
  //   if (password === 'Şifreniz en az 6 hane uzunluğunda olmalıdır') {
  //     setText('');
  //   }
  // };

  const navigation = useNavigation();

  return (
    <SafeAreaView style={{backgroundColor: 'white', flex:1}}>
      <View>
        <Image
          style={{height: 100, width: 200, resizeMode: 'contain'}}
          source={require('../../../assets/images/LinkedInLogo.png')}
        />
        <View style={{margin: 10}}>
          <Text style={{fontSize: 32, fontWeight: '400'}}>
            Şifrenizi oluşturun
          </Text>
          <TextInput
            name="password"
            value={formik.values.password}
            onChangeText={value => formik.setFieldValue('password', value)}
            placeholder="Şifre oluşturun"
            // onFocus={textInputOnFocus}
            keyboardType="visible-password"
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              fontSize: 15,
            }}></TextInput>

          <Pressable
            onPress={formik.handleSubmit}
            style={{
              marginTop: 25,
              height: 55,
              width: '90%',
              justifyContent: 'center',
              borderRadius: 30,
              alignItems: 'center',
              backgroundColor: 'blue',
            }}>
            <Text style={{color: 'white', fontSize: 18, fontWeight: '500'}}>
              Devam Et
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default regPasswordScreen;
