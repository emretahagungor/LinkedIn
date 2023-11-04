import React, {useContext} from 'react';
import { Image, Pressable, Text, View, StyleSheet } from 'react-native';

const ContentBoxHeader = ({ title, image, followers, date, item }) => {
  
const handleFollow = ({item}) => {
const postData = {
  token : token,
  follow_user_id : item.follow_user_id 
}
Axios.post("http://www.kursadozdemir.com/User/Follow", postData).then (res => console.log(res)).catch(err=>console.log(err))

}

  return (
    <View style={styles.container}>
      <Pressable style={styles.userContainer}>
        <Image
          style={styles.usersAvatarStyle}
          source={image}
          resizeMode="cover"
        />
        <View style={styles.userInfoContainer}>
          <Text style={styles.titleStyle}>{title}</Text>
          <Text style={styles.infoStyle}>{followers}</Text>
          <Text style={styles.infoStyle}>{date}</Text>
        </View>
      </Pressable>
      <View style={styles.followButtonContainer}>
        <Pressable onPress={handleFollow}
          style={styles.followButton}
        >
          <Image
            style={styles.addButtonIcon}
            source={require('../../assets/images/add.png')}
          />
          <Text style={styles.followButtonText}>Takip Et</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',  
    paddingVertical: 10,  
    paddingHorizontal: 15,  
    backgroundColor: 'white',  
    borderBottomWidth: 1,  
    borderBottomColor: 'lightgray',  
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  usersAvatarStyle: {
    width: 50,
    height: 50,
    borderRadius: 20,
  },
  userInfoContainer: {
    margin: 5,
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: '900',
  },
  infoStyle: {
    fontSize: 12,
  },
  followButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginEnd: 25,
  },
  followButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addButtonIcon: {
    tintColor: '#0060EF',
    width: 12,
    height: 12,
    margin: 5,
  },
  followButtonText: {
    color: '#0060EF',
    fontSize: 16,
    fontWeight: '900',
  },
});

export default ContentBoxHeader;
