import { View, Text, SafeAreaView, ScrollView, TextInput, Pressable, Image } from 'react-native'
import React, {useContext} from 'react'
import TabBar from '../components/TabBar'
import ContentBoxHeader from '../components/ContentBoxHeader'
import DiscriptionBox from './DiscriptionBox'
import Axios from 'axios'


const CommentScreen = ({item}) => {

  return (
    <SafeAreaView style={{flex:1}}>
        <ScrollView>
    <ContentBoxHeader date={"08.10.2023"} followers={"734"} title={"Taha Emre Güngör"} image={{uri: "https://picsum.photos/200"}}/>

        </ScrollView>
        <View style={{flexDirection:'row'}}>
        <TextInput
        style={{marginBottom:50}}
            placeholder='Düşüncelerinizi yazın'
            
            />
            <Pressable>
                <Image style={{width:20,height:20}} source={require('../../assets/images/x.png')}/>
            </Pressable>
            </View>
        <TabBar/>
    </SafeAreaView>
  )
}

export default CommentScreen