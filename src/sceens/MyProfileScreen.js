import {
  View,
  Text,
  SafeAreaView,
  Image,
  Pressable,
  StyleSheet,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import Axios from 'axios'
import { Context } from '../../App';

const MyProfileScreen = () => {
  const [allUsersID, setallUsersID] = useState()
  const navigation = useNavigation();
  const [text, setText] = useState('');
  const {token} = useContext(Context);
  
  const followButton = ()=>{
    const cloneData = {
        token:token,
        follow_user_id:1028

    }
    Axios.post('http://www.kursadozdemir.com/User/Follow', cloneData).then(
        res=>{
            const resData = res.data
            console.log(resData)
        }
    ).catch(err => console.log(err))
  }
  const followButton2 = ()=>{
    const cloneData = {
        token:token,
        follow_user_id:1009

    }
    Axios.post('http://www.kursadozdemir.com/User/Follow', cloneData).then(
        res=>{
            const resData = res.data
            console.log(resData)
        }
    ).catch(err => console.log(err))
  }

    const getAllUsers = ()=>{
      const cloneData = {
          token
      }
      Axios.post('http://www.kursadozdemir.com/User/GetAllUser', cloneData).then(
          res=>{
              const resData = res.data.NESNE
              console.log(resData)

              allUsersID = resData.map(user => user.user_id)
              console.log(allUsersID)
          }
      ).catch(err => console.log(err))
    }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          backgroundColor: 'white',
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          height: 49,
          padding: 7,
        }}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image
            style={styles.avatarStyle}
            source={require('../../assets/images/left.png')}
          />
        </Pressable>
        <TextInput
          value={text}
          onChangeText={setText}
          placeholder="Arama yapın"
          style={styles.textInputStyle}
        />
        <Pressable>
          <Image
            style={styles.mesajlasmaIconStyle}
            source={require('../../assets/images/mesajlasma.png')}
          />
        </Pressable>
      </View>

      <ScrollView>
        <View
          style={{flex: 1, justifyContent: 'flex-start', marginHorizontal: 15}}>
          <Image
            style={{
              width: 130,
              height: 130,
              borderRadius: 90,
              borderColor: 'white',
              borderWidth: 6,
            }}
            source={require('../../assets/images/avatar.png')}
          />
          <View>
            <Text style={{fontSize: 22, fontWeight: 'bold'}}>
              DATADAN GELEN İSİM
            </Text>
            <Text>--Kişisel İleti</Text>
            <Text>İstanbul Aydın Üniversitesi</Text>
            <Text>İstanbul, Türkiye</Text>
            <Pressable>
              <Text style={{color: 'blue', fontSize: 15}}>
                {' '}
                DATADAN BAĞLANTI(TAKİP-TAKİPÇİ) SAYISI :{' '}
              </Text>
            </Pressable>
          </View>
          <View style={{alignItems:'center', flex:1}}>
            <Pressable
            onPress={followButton}
              style={{
                flex:1,
                backgroundColor: 'black',
                borderRadius: 20,
                width: '50%',
                height: 30,
                alignItems: 'center',
                justifyContent:'center',
                marginTop:50
              }}>
              <Text style={{color:'white', fontWeight:'bold'}}>ID 1028'i Takip Et</Text>
            </Pressable>
            <Pressable
            onPress={followButton2}
              style={{
                flex:1,
                backgroundColor: 'black',
                borderRadius: 20,
                width: '50%',
                height: 30,
                alignItems: 'center',
                justifyContent:'center',
                marginTop:50
              }}>
              <Text style={{color:'white', fontWeight:'bold'}}>ID 1023'i Takip Et</Text>
            </Pressable>
            <Pressable
            onPress={getAllUsers}
              style={{
                flex:1,
                backgroundColor: 'black',
                borderRadius: 20,
                width: '50%',
                height: 30,
                alignItems: 'center',
                justifyContent:'center',
                marginTop:50
              }}>
              <Text style={{color:'white', fontWeight:'bold'}}>Kullanıcıları getir</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  profileSearching: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 49,
    padding: 7,
  },
  textInputStyle: {
    backgroundColor: '#F3F7FF',
    flex: 1,
    height: 26,
    margin: 5,
    borderRadius: 6,
    fontSize: 16,
    textAlign: 'center',
    padding: 5,
  },
  avatarStyle: {
    width: 30,
    height: 30,
    borderRadius: 20,
  },
  mesajlasmaIconStyle: {
    width: 24,
    height: 24,
  },
  appBarIconStyle: {
    width: 20,
    height: 20,
    tintColor: 'gray',
  },
  appBarPressable: {
    alignItems: 'center',
    backgroundColor: '#F3F7FF',
    width: '20%',
  },
  usersAvatarStyle: {
    width: 50,
    height: 50,
    borderRadius: 20,
  },
});

export default MyProfileScreen;
