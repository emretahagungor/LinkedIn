import React, {useEffect, useContext , useState} from 'react';
import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import AddContentScreen from './AddContent';
import {useNavigation} from '@react-navigation/native';
import ContentBoxHeader from '../components/ContentBoxHeader';
import SearchBoxHeader from '../components/SearchBoxHeader';
import TabBar from '../components/TabBar';
import {Context} from '../../App';
import Axios from 'axios'




export default HomePageScreen = () => {
  const {token} = useContext(Context);
  const [getTimeLine, setGetTimeLine] = useState()
  const [timelineData, setTimelineData] = useState([]);
  const navigation = useNavigation();
   console.log('Ana ekrana gelindi token :',token)

   
 
  const getTimeLineDesc = () => {
    const cloneData = { token };
    console.log("GETTIMELINE'NIN İÇİNDEKİ TOKEN", token)
    Axios.post("http://www.kursadozdemir.com/Share/GetTimeline", cloneData)
      .then(res => {
        const timeline = res.data
        console.log(timeline)
      })
      .catch(err => console.error('getTimeLine hata döndü', err));
  };

  useEffect(() => {
    getTimeLineDesc();
  }, []);
 


  const getMyProfile = () => {
    const cloneData = {token}
    Axios.post('http://www.kursadozdemir.com/User/GetMyProfile', cloneData).then(res =>{
      const resProfileData = res.data
      console.log(res.data)
    }).catch(err => console.error('getMyProfile hata döndü', err))
  }
  


  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <SearchBoxHeader />
      </View>
      <View style={{flex: 1}}>
        <FlatList data={timelineData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <ContentBoxHeader
            followers={'Data Takipçi'}
            date={'Data Tarihi'}
            title={item}
            image={require('../../assets/images/avatar.png')}
          />
        )}/>
        <ContentBoxHeader
          followers={'Data Takipçi'}
          date={'Data Tarihi'}
          title={' Datadan Gelen Profil'}
          image={require('../../assets/images/avatar.png')}
        />
        {/* <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Pressable style={{flexDirection: 'row'}}>
                <Image
                  style={styles.usersAvatarStyle}
                  source={require('../../assets/images/DATADANAVATAR.png')}
                />
                <View style={{margin: 5}}>
                  <Text style={{fontSize: 18, fontWeight: '900'}}>
                    Datadan Gelen Profil
                  </Text>
                  <Text style={{fontSize: 12}}>Data Takipçi</Text>
                  <Text style={{fontSize: 12}}>Data Tarih</Text>
                </View>
              </Pressable>
              <View style={{flexDirection: 'row'}}>
            
                <Pressable
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginEnd: 25,
                  }}>
                  <Image
                    style={{tintColor: '#0060EF', width: 12, height: 12, margin: 5}}
                    source={require('../../assets/images/add.png')}
                  />
                  <Text style={{color: '#0060EF', fontSize: 16, fontWeight: '900'}}>
                    Takip Et
                  </Text>
                </Pressable>
              </View>
            </View> */}

        <Text style={{marginLeft: 7}}> DATADAN GELEN GÖNDERİ AÇIKLAMASI</Text>
        <Image
          style={{maxWidth: '100%', height: 450}}
          source={require('../../assets/images/DATADANGONDERI.png')}
        />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 5,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                style={{marginStart: 7, marginEnd: 5, height: 15, width: 45}}
                source={require('../../assets/images/parcalanacakk.png')}
              />
              <Text>9862</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{marginRight: 15}}>78 Yorum</Text>
              <Text style={{marginRight: 10}}>283 Paylaşım</Text>
            </View>
          </View>
          <View
            style={{
              width: '90%',
              height: 1,
              backgroundColor: 'gray',
              margin: 10,
            }}></View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginStart: 9,
              marginEnd: 9,
              alignItems: 'center',
            }}>
            <Pressable style={{alignItems: 'center'}}>
              <Image
                style={{width: 18, height: 18}}
                source={require('../../assets/images/likepost.png')}
              />
              <Text>Beğen</Text>
            </Pressable>
            <Pressable style={{alignItems: 'center'}}>
              <Image
                style={{width: 18, height: 18}}
                source={require('../../assets/images/commentpost.png')}
              />
              <Text>Yorum Yap</Text>
            </Pressable>
            <Pressable style={{alignItems: 'center'}}>
              <Image
                style={{width: 18, height: 18}}
                source={require('../../assets/images/retweet.png')}
              />
              <Text>Yeniden Yayınla</Text>
            </Pressable>
            <Pressable style={{alignItems: 'center'}}>
              <Image
                style={{width: 18, height: 18}}
                source={require('../../assets/images/send.png')}
              />
              <Text>Gönder</Text>
            </Pressable>
          </View>
      </View>
      <TabBar/>
      
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
