/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  PixelRatio,
  Image,
  ScrollView,
  SafeAreaView,
  Button,
  Pressable,
} from 'react-native';

import colors from './assets/colors/colors';
import styles from './styles';
//import Player from './Player';

const App = () => {

  {/*TEXT: */}

  {/*Main title*/}
  const [title, setTitle] = useState('Honour Your Higher Self Circle In The Lion\'s Gate Portal');
  {/*Creator title + subtitle*/}
  const [creatorText, setCreatorText] = useState('Title');
  const [creatorSubText, setCreatorSubText] = useState('Creator');
  {/*Location text*/}
  const [location_Text, setLocation_Text] = useState('865 Second St, Jersey, United States');
  {/*Time text*/}
  const [timeText, setTimeText] = useState('Today at 9 am - 3 pm');
  {/*About info*/}
  const [infoText, setInfoText] = useState('A new weekly gathering has come to Hollywood bringing together some of LAs hottest socialites and up and coming djs & producers ranging from melodic, teouse every');
  {/*Line up text*/}
  const [lineupText, setLineupText] = useState('Echoes From Agartha');
  {/*Venue text*/}
  const [venueText, setVenueText] = useState('865 Second St, Jers');


  return (
    <SafeAreaView style={styles.body}> 
      <ScrollView style = {styles.scroll} >
        
        {/*Video*/}
        
        <View style={styles.videoView}>
          
        </View>
        {/*Title*/}
        <View style={styles.titleView}>
          <Text style={styles.MainTitle}>{title}</Text>
        </View>

        {/*Event creator*/}
        <View style={styles.eventCreator}>
          
          {/*Author title*/}
          <View style={styles.authAvatar}>
            <Image source={require('./assets/images/Ellipse.png')} style={styles.avatar}/>
            <View style={{marginLeft: 10}}>
              <Text style={styles.creatorTitle}>{creatorText}</Text>
              <Text style={styles.creatorSubTitle}>{creatorSubText}</Text>
            </View>
          </View>
          
          {/*Message / follow*/}
          <View style={styles.messFollow}>
            <Image source={require('./assets/images/message.png')} style={styles.messageBtn}/>
            <Image source={require('./assets/images/Button.png')} style={styles.followBtn}/>
          </View>
        </View>

        {/*Location and Time*/}
        <View style={styles.locationAndTime}>
          <View style={styles.timing}>
            <Image source={require('./assets/images/routing.png')} style={styles.LocationAvatar}/>
            <View style={{marginLeft: 10}}>
              <Text style={styles.locationText}>{location_Text}</Text>
            </View>
          </View>
          <View style={styles.timing}>
            <Image source={require('./assets/images/clock.png')} style={styles.LocationAvatar}/>
            <View style={{marginLeft: 10}}>
              <Text style={styles.locationText}>{timeText}</Text>
            </View>
          </View>
        </View>

        {/*separator*/}
        <View style={styles.separator}/>

        {/*about*/}
        <View style={styles.about}>
          <Text style={styles.aboutTitle}>ABOUT</Text>
          <Text style={styles.aboutText}>{infoText}</Text>
        </View>
        
        {/*Buttons*/}

        {/*coupon*/}
        <View style={styles.buttons}>
            <View style={styles.coupon1}>
              <View style={styles.btnStyle}>
                <Image source={require('./assets/images/receipt-disscount.png')} style={styles.discAvatar}/>
                <Text style={styles.btnTitle}>Got coupon?</Text>
              </View>
              <Pressable style={styles.btnStyle} onPress={()=>alert("Opens coupon page")}>
                <Text style={styles.ApplyTitle}>APPLY IT</Text>
              </Pressable>
            </View>
        </View>

        {/*Line-up*/}
        <View style={styles.buttons}>
          <Pressable style={styles.coupon1} onPress={()=>alert("Opens lineup page")}>
              <View style={styles.btnStyle}>
                <Text style={styles.btnTitle}>Line-up: </Text>
                <Text style={styles.btnTxt}>{lineupText}</Text>
              </View>
              <View style={styles.btnStyle}>
              <Image source={require('./assets/images/Group.png')} style={styles.groupAvatar}/>
              </View>
            </Pressable>
        </View>

        {/*Venue*/}
        <View style={styles.buttons}>
            <Pressable style={styles.coupon1} onPress={()=>alert("Opens venue page")}>
              <View style={styles.btnStyle}>
                <Text style={styles.btnTitle}>Venue: </Text>
                <Text style={styles.btnTxt}>{venueText}</Text>
              </View>
              <View style={styles.btnStyle}>
              <Image source={require('./assets/images/Vector.png')} style={styles.VectorAvatar}/>
              </View>
            </Pressable>
        </View>
      </ScrollView>

      <View style={styles.btnGet}>
            {/*Venue*/}
            <Pressable style={styles.getBtn} onPress={()=>alert("Opens tickets page")}>
              <Text style={styles.btnGetTitle}>Get Tickets</Text>
            </Pressable>
        </View>
    </SafeAreaView>
  );
};


export default App;
