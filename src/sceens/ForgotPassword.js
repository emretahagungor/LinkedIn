import {View, Text, TextInput, Image, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useFormik} from 'formik';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios';

const ForgotPassword = () => {
  [token, setToken] = useState(null);
  useEffect(() => {getData()}, []);
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
        setToken(value);
        // value previously stored
      }
    } catch (e) {
      // error reading value
    }
  };

  const formik = useFormik({
    initialValues: {password: ''},
    onSubmit: value => {
      const cloneData = {
        token: token,
        password: value.password,
      };
      console.log(cloneData);
      if(token) {Axios.post('http://www.kursadozdemir.com/User/UpdatePassword', cloneData)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))}
    },
  });

  return (
    <View>
      <Image
        style={{height: 100, width: 200, resizeMode: 'contain'}}
        source={require('../../assets/images/LinkedInLogo.png')}
      />
      <View>
        <Text>Şifrenizi giriniz</Text>
        <TextInput
          name="forgotpassword"
          value={formik.values.password}
          onChangeText={value => formik.setFieldValue('password', value)}
          placeholder="şifrenizi giriniz"
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            fontSize: 15,
          }}
        />
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
            Gönder
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ForgotPassword;
