import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  Text,
  View,
  SafeAreaView,
  Pressable,
  StyleSheet,
} from 'react-native';

const LogInScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'space-around',
        backgroundColor: 'white',
      }}>
      <View>
        <Image
          style={{height: 155, width: '100%'}}
          source={require('../../../assets/images/LinkedIn.png')}
        />
      </View>
      <View>
        <Pressable
          onPress={() => navigation.navigate('Register')}
          style={{
            margin: 5,
            height: 55,
            width: '100%',
            justifyContent: 'center',
            borderRadius: 30,
            alignItems: 'center',
            backgroundColor: 'blue',
          }}>
          <Text style={{color: 'white', fontSize: 18, fontWeight: '500'}}>
            Hemen katıl
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
        <Pressable
          onPress={() => navigation.navigate('Loginin')}
          style={{alignItems: 'center', marginTop: 24}}>
          <Text style={{ color: 'blue', fontSize: 18, fontWeight: '500'}}>
            Oturum aç
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default LogInScreen;
