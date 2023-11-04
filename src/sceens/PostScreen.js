import {
  View,
  Text,
  Pressable,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import LikeCommentShare from '../components/LikeCommentShare';
import ProfileAvatarStatus from '../components/ProfileAvatarStatus';
import {useNavigation} from '@react-navigation/native';
import TabBar from '../components/TabBar';

const PostScreen = () => {
  const navgation = useNavigation();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'space-between',
      }}>
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginRight: 15,
          }}>
          <Pressable onPress={navgation.goBack}>
            <Image
              style={{height: 45, width: 45}}
              source={require('../../assets/images/left.png')}
            />
          </Pressable>
          <Pressable>
            <Image
              style={{height: 25, width: 25}}
              source={require('../../assets/images/more.png')}
            />
          </Pressable>
        </View>
        <View>
          <View
            style={{
              width: '100%',
              height: 1,
              backgroundColor: '#dedede',
            }}></View>
          <ProfileAvatarStatus
            date={'şimdi'}
            image={require('../../assets/images/DATADANAVATAR.png')}
            profileStatus={'--komşu komşunun külüne muhtaçtır...'}
            title={'Taha Emre Güngör'}
            style={{}}
          />

          <Text style={{fontSize: 22, marginBottom: 20, marginHorizontal: 15}}>
            Bu gün React Native ile ilk projemi yapıyorum.
          </Text>

          <View
            style={{
              width: '90%',
              height: 1,
              backgroundColor: '#dedede',
              margin: 10,
            }}></View>

          <LikeCommentShare />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 15,
              marginVertical: 15,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{
                  width: 15,
                  height: 15,
                  marginRight: 4,
                  tintColor: '#bababa',
                }}
                source={require('../../assets/images/statistical.png')}
              />
              <Text style={{fontSize: 14, fontWeight: '900', color: 'black'}}>
                28 Gösterim
              </Text>
            </View>
            <Text style={{fontSize: 14, fontWeight: '900', color: 'blue'}}>
              Görüntüle
            </Text>
          </View>
        </View>
        <Text style={{fontSize: 20, marginLeft: 15, fontWeight: '700'}}>
          Yorumlar
        </Text>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            marginVertical: 5,
          }}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'white',
            }}>
            <Image
              style={{width: 177, height: 177, resizeMode: 'contain'}}
              source={require('../../assets/images/firstcomment.jpg')}
            />
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <Pressable
            onPress={() => {}}
            style={{
              backgroundColor: 'white',
              height: 35,
              width: 85,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 20,
              borderColor: 'blue',
              borderWidth: 2,
            }}>
            <Text style={{fontSize: 15, color: 'blue', fontWeight: '900'}}>
              Yorum Yap
            </Text>
          </Pressable>
        </View>
      </View>
      <KeyboardAvoidingView style={{flex: 1}} behavior="height">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <TextInput style={{backgroundColor: '#dedede'}} />
        </TouchableWithoutFeedback>{' '}
      </KeyboardAvoidingView> 
      <View>
        <TabBar />
      </View>
    </SafeAreaView>
  );
};

export default PostScreen;
