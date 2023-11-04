import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';


const SearchBoxHeader = () => {
  const navigation = useNavigation();
  const [text, setText] = useState('Arama yapın');

  const textInputOnFocus = () => {
    if (text === 'Arama yapın') setText('');
  };
  const textInputOnBlur = () => {
    if (text === '') setText('Arama yapın');
  };

  return (
    <View
      style={{
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 49,
        padding: 7,
      }}>
      <Pressable onPress={() => navigation.navigate('MyProfile')}>
        <Image
          style={styles.avatarStyle}
          source={require('../../assets/images/avatar.png')}
        />
      </Pressable>
      <TextInput
        value={text}
        onChangeText={setText}
        onBlur={textInputOnBlur}
        onFocus={textInputOnFocus}
        style={styles.textInputStyle}
      />
      <Pressable>
        <Image
          style={styles.mesajlasmaIconStyle}
          source={require('../../assets/images/mesajlasma.png')}
        />
      </Pressable>
    </View>
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

export default SearchBoxHeader;
