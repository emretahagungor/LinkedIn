import React, { useState } from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';

const ActionButtons = ({ likeCount, initialLikeStatus }) => {
  const [likeStatus, setLikeStatus] = useState(initialLikeStatus);
  const [currentLikeCount, setCurrentLikeCount] = useState(245 + likeCount);

  const handleLikePress = () => {
    
    setLikeStatus(likeStatus === 1 ? 0 : 1);

    
    if (likeStatus === 1) {
      setCurrentLikeCount(currentLikeCount - 1);
    } else {
      setCurrentLikeCount(currentLikeCount + 1);
    }
  };

  const likeButtonStyle = likeStatus === 1 ? styles.likeButtonActive : styles.likeButtonInactive;

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <Image
            style={styles.icon}
            source={require('../../assets/images/parcalanacakk.png')}
          />
          <Text>{currentLikeCount}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoText}>78 Yorum</Text>
          <Text style={styles.infoText}>283 Paylaşım</Text>
        </View>
      </View>
      <View style={styles.separator} />
      <View style={styles.actionButtons}>
        <Pressable style={[styles.actionButton, likeButtonStyle]} onPress={handleLikePress}>
          <Image
            style={styles.actionButtonIcon}
            source={require('../../assets/images/likepost.png')}
          />
          <Text>Beğen</Text>
        </Pressable>
        <Pressable style={styles.actionButton}>
          <Image
            style={styles.actionButtonIcon}
            source={require('../../assets/images/commentpost.png')}
          />
          <Text>Yorum Yap</Text>
        </Pressable>
        <Pressable style={styles.actionButton}>
          <Image
            style={styles.actionButtonIcon}
            source={require('../../assets/images/retweet.png')}
          />
          <Text>Yeniden Yayınla</Text>
        </Pressable>
        <Pressable style={styles.actionButton}>
          <Image
            style={styles.actionButtonIcon}
            source={require('../../assets/images/send.png')}
          />
          <Text>Gönder</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
    paddingHorizontal: 15,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginStart: 7,
    marginEnd: 5,
    height: 15,
    width: 45,
  },
  infoText: {
    fontSize: 16,
  },
  separator: {
    width: '90%',
    height: 1,
    backgroundColor: 'gray',
    marginHorizontal: '5%',
    marginVertical: 10,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: '5%',
    alignItems: 'center',
    paddingVertical: 10,
  },
  actionButton: {
    alignItems: 'center',
  },
  actionButtonIcon: {
    width: 18,
    height: 18,
  },
  likeButtonActive: {
    backgroundColor: 'red', // Beğenildiğinde kırmızı renk
  },
  likeButtonInactive: {
    backgroundColor: 'white', // Beğenilmediğinde şeffaf renk
  },
});

export default ActionButtons;
