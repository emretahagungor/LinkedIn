import { View, Text, SafeAreaView, Image, FlatList, StyleSheet } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import ContentBoxHeader from '../components/ContentBoxHeader';
import ActionButtons from '../components/ActionButtons';
import { Context } from '../../App';
import Axios from 'axios';


const DiscriptionBox = () => {
  console.log("discriptionBox", token);
  const { token } = useContext(Context);
  const [getTimeLine, setGetTimeLine] = useState([]);

  const getTimeLineDesc = () => {
    const cloneData = { token };
    console.log("GETTIMELINE'NIN İÇİNDEKİ TOKEN", token);
    Axios.post("http://www.kursadozdemir.com/Share/GetTimeline", cloneData)
      .then(res => {
        const timeline = res.data.NESNE;
        console.log(timeline);
        setGetTimeLine(timeline);
      })
      .catch(err => console.error('getTimeLine hata döndü', err));
  };

  useEffect(() => {
    getTimeLineDesc();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.container}>
      <ContentBoxHeader
        date={item.create_date}
        followers={item.share_id}
        image={{uri : 'https://picsum.photos/200'}}
        title={item.user_display_name + ' ' + item.user_job_title }
      />
      <View style={styles.descriptionContainer}>
        <Text>{item.description}</Text>
      </View>
      <ActionButtons likeStatus={item.like_status} likeCount={item.like_count}/>
    </View>
  );

  return (
    <SafeAreaView style={{backgroundColor:'white'}}>
      <FlatList
        data={getTimeLine}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
  },
  descriptionContainer: {
    backgroundColor: "white",
    minHeight: 70,
    marginHorizontal: 5,
    marginBottom: 10,
    padding: 10,
  },
});

export default DiscriptionBox;
