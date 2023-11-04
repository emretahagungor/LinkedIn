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

const regEmailScreen = ({formik}) => {
  const navigation = useNavigation();

  const [mail, setMail] = useState('E-Posta ya da Telefon*');
  const textInputOnFocus = () => {
    if (mail === 'E-Posta ya da Telefon*') {
      setMail('');
    }
  };
  const textInputOnBlur = () => {
    if (mail === '') {
      setMail('E-Posta ya da Telefon*');
    }
  };

  return (
    <SafeAreaView style={{backgroundColor: 'white', flex:1}}>
      <View>
        <Image
          style={{height: 80, width: 160, resizeMode: 'contain'}}
          source={require('../../../assets/images/LinkedInLogo.png')}
        />
        <View style={{margin: 10}}>
          <Text style={{fontSize: 32, fontWeight: '400'}}>
            E-Postanızı veya Telefonunuzu ekleyin
          </Text>
          <TextInput
            value={formik.values.email}
            onChangeText={value => formik.setFieldValue('email', value)}
            placeholder="Mail adresiniz"
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              fontSize: 15,
            }}></TextInput>

          <Pressable
            onPress={() => navigation.navigate('regPassword')}
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

export default regEmailScreen;
