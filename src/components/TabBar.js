import {View, Text, Pressable, Image, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Context} from '../../App';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TabBar = () => {
  const {token, setToken, isLoggin, setIsLoggin} = useContext(Context);
  const navigation = useNavigation();
  const handleLogout = async () => {
    console.log('TabBar handleLogout fonksiyonu çalıştı')
    try {
      
      // Token'i AsyncStorage'den kaldır
      await AsyncStorage.removeItem('token');
      console.log('Async removeItem çalıştı. Token : ', token);
      
      setIsLoggin(false);
      setToken("")
      console.log('Async removeItem içindeki setIsLoggin durumu değiştirildi Token : ', token);
    } catch (error) {
      console.log('async removeItem çalışmadı Hata : ', error);
    }
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 8,
        height: 55,
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
      }}>
      <Pressable style={styles.appBarPressable}>
        <Image
          style={styles.appBarIconStyle}
          source={require('../../assets/images/home.png')}
        />
        <Text>Ana Sayfa</Text>
      </Pressable>
      <Pressable 
      onPress={()=>navigation.navigate('MyNetwork')}
      style={styles.appBarPressable}>
        <Image
          style={styles.appBarIconStyle}
          source={require('../../assets/images/friends.png')}
        />
        <Text>Ağım</Text>
      </Pressable>
      <Pressable
        style={styles.appBarPressable}
        onPress={() => navigation.navigate('AddContent')}>
        <Image
          style={styles.appBarIconStyle}
          source={require('../../assets/images/add.png')}
        />
        <Text>Ekle</Text>
      </Pressable>
      <Pressable
        style={styles.appBarPressable}
        onPress={() => navigation.navigate('Comment')}>
        <Image
          style={styles.appBarIconStyle}
          source={require('../../assets/images/notification.png')}
        />
        <Text>Bildirimler</Text>
      </Pressable>
      <Pressable style={styles.appBarPressable}
                  onPress={handleLogout} >
        <Image
          style={styles.appBarIconStyle}
          source={require('../../assets/images/worksell.png')}
        />
        <Text>İş İlanları</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  appBarIconStyle: {
    width: 20,
    height: 20,
    tintColor: 'gray',
  },
  appBarPressable: {
    alignItems: 'center',
    backgroundColor: 'white',
    width: '20%',
  },
});

export default TabBar;
