import {View, Text, SafeAreaView, Image, Pressable, StyleSheet} from 'react-native';
import React from 'react';

const ProfileAvatarStatus = ({title, image, profileStatus, date}) => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <Pressable style={{flexDirection: 'row'}}>
        <Image style={styles.usersAvatarStyle} source={image} />
        <View style={{margin: 5}}>
          <Text style={{fontSize: 22, fontWeight: '900'}}>{title}</Text>
          <Text style={{fontSize: 14}}>{profileStatus}</Text>
          <Text style={{fontSize: 12}}>{date}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  usersAvatarStyle: {
    width: 80,
    height: 80,
    borderRadius: 20,
  },
});

export default ProfileAvatarStatus;
