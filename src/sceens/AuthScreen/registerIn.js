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

const RegisterScreen = ({formik}) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex:1,}}>
      <View>
        <View>
        <Image
          style={{height: 100, width: 200, resizeMode: 'contain'}}
          source={require('../../../assets/images/LinkedInLogo.png')}
        />
        </View>
        <View style={{marginTop: 50, marginLeft:15,
        marginRight:15, }}>
          <Text style={{fontSize: 32, fontWeight: '400'}}>Adınızı ekleyin</Text>
          <TextInput
            name="name"
            onChangeText={value => formik.setFieldValue('name', value)}
            placeholder="Adınız"
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              fontSize: 15,
            }}></TextInput>
          <TextInput
            name="jobTitle"
            value={formik.values.jobTitle}
            onChangeText={value => formik.setFieldValue('jobTitle', value)}
            placeholder="Soyadınız"
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              fontSize: 15,
            }}></TextInput>
          <Pressable
            onPress={() => navigation.navigate('regEmail')}
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

export default RegisterScreen;
