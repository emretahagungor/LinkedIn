import { View, Text, Pressable, Image, } from 'react-native'
import React from 'react'

const LikeCommentShare = () => {
  return (
    <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginStart: 9,
      marginEnd: 9,
      alignItems: 'center',
    }}>
    <Pressable style={{alignItems: 'center'}}>
      <Image
        style={{width: 16, height: 16}}
        source={require('../../assets/images/likepost.png')}
      />
      <Text>Beğen</Text>
    </Pressable>
    <Pressable style={{alignItems: 'center'}}>
      <Image
        style={{width: 16, height: 16}}
        source={require('../../assets/images/commentpost.png')}
      />
      <Text>Yorum Yap</Text>
    </Pressable>
    <Pressable style={{alignItems: 'center'}}>
      <Image
        style={{width: 16, height: 16}}
        source={require('../../assets/images/retweet.png')}
      />
      <Text>Yeniden Yayınla</Text>
    </Pressable>
    <Pressable style={{alignItems: 'center'}}>
      <Image
        style={{width: 16, height: 16}}
        source={require('../../assets/images/send.png')}
      />
      <Text>Gönder</Text>
    </Pressable>
  </View>
  )
}

export default LikeCommentShare