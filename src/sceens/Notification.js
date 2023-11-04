import React from 'react';
import { Image, Text, View } from 'react-native';

const NotificationCard = ({ avatar, userName, action, people }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image source={avatar} style={{ borderRadius: 20, height: 25, width: 25, resizeMode: "cover" }} />
      <Text>{userName}</Text>
      <Text>{action}</Text>
      <Text>{people}</Text>
    </View>
  );
};

const NotificationScreen = () => {
  return (
    <><NotificationCard
          avatar={require('../../assets/images/avatar.png')}
          userName={"Emre Güngör"}
          action={"fotoğrafını beğendi."} />
          <NotificationCard avatar={require('../../assets/images/avatar.png')} action={"fotoğrafına yorum yaptı"} />
          <NotificationCard></NotificationCard></>
  );
};

export default NotificationScreen;
