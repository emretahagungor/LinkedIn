import React, {useState} from 'react';
import Axios from 'axios';

import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView
} from 'react-native';
import TabBar from '../components/TabBar';

import {SelectList} from 'react-native-dropdown-select-list';
import {Formik, useFormik} from 'formik';
import {useNavigation} from '@react-navigation/native'

const AddContentScreen = ({token}) => {
  const [select, setSelect] = useState('');
  const [disabled, setDisabled] = useState(true);
  const navigation = useNavigation();
  console.log('AddContent sayfası token : ',token);

  const TruncateText = ({text, maxLength}) => {
    if (text.length <= maxLength) {
      return {text};
    }

    const truncatedText = text.substring(0, maxLength - 6) + '...';
    return {truncatedText};
  };

  const handleSubmit = values => {
    console.log(values.desc);
    
  };


  
  const handlePost = (values) => {
    const descriptionx = formik.values.desc
    console.log(descriptionx)
    const postData = {
      token: token,
      description: descriptionx
    };  
    console.log(postData)
    Axios.post('http://www.kursadozdemir.com/Share/Share', postData)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };
  
  const formik = useFormik({
    initialValues: {desc: ''},
    validate: values => values.desc,
    onSubmit: values => {
      handlePost(values);
    },
  });
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flex: 0.15,
          flexDirection: 'row',
          backgroundColor: 'white',
          justifyContent: 'space-between',
          maxHeight: 65,
        }}>
        <View style={{flex: 0.25, flexDirection: 'row'}}>
          <Pressable
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 15,
              marginRight: 15,
            }}
            onPress={()=>navigation.goBack()}>
            <Image
              style={{height: 15, width: 15}}
              source={require('../../assets/images/x.png')}
            />
          </Pressable>
          <Pressable
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 15,
            }}
            onPress={() => {}}>
            <Image
              style={{height: 35, width: 35, borderRadius: 20}}
              source={require('../../assets/images/avatar.png')}
            />
          </Pressable>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            flex: 0.75,
          }}>
          <View style={{flex: 1}}>
            <SelectList
              setSelected={val => setSelect(val)}
              data={[
                {key: 1, value: 'Herhangi biri'},
                {key: 2, value: 'Sadece sen görebilirsin'},
              ]}
              save="value"
              boxStyles={{
                height: 65,
                justifyContent: 'space-between',
                alignItems: 'center',
                flex: 1,
                borderColor: 'white',
                padding: 0,
                position: 'relative',
              }}
              dropdownItemStyles={{backgroundColor: '#dedede'}}
              inputStyles={{
                flex: 1,
                padding: 1,
                fontSize: 22,
                fontWeight: '900',
                height: 35,
                overflow: 'hidden',
              }}
              defaultOption={{key: 1, value: 'Herhangi biri'}}
            />
          </View>
          <Pressable
            onPress={handlePost}
            disabled={formik.isValid}
            style={{
              backgroundColor: formik.isValid ? '#DEDEDE' : 'blue',
              
              height: 35,
              width: 85,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 20,
            }}>
            <Text style={{fontSize: 15, color: 'white', fontWeight: '900'}}>
              Yayınla
            </Text>
          </Pressable>
        </View>
      </View>
      <View style={{flex: 0.7, marginHorizontal: 15}}>
        <TextInput
          value={formik.values.desc}
          onChangeText={value => {
            formik.setFieldValue('desc', value);
          }}
          style={{fontSize: 20}}
          placeholder="Ne hakkında konuşmak istiyorsunuz?"
        />
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
          padding: 15,
          flex: 0.15,
          marginBottom: 25,
        }}>
        <View style={{alignItems: 'center'}}>
          <Pressable style={styles.addButtons}>
            <Image
              style={styles.buttonImages}
              source={require('../../assets/images/image-gallery.png')}
            />
          </Pressable>
          <Text>Fotoğraf/Video</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Pressable style={styles.addButtons}>
            <Image
              style={styles.buttonImages}
              source={require('../../assets/images/template.png')}
            />
          </Pressable>
          <Text>Şablon</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Pressable style={styles.addButtons}>
            <Image
              style={styles.buttonImages}
              source={require('../../assets/images/more.png')}
            />
          </Pressable>
          <Text>Daha Fazla</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  addButtons: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: '#DEDEDE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonImages: {
    height: 25,
    width: 25,
  },
});

export default AddContentScreen;
