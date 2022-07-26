import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  PixelRatio,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';

import colors from './assets/colors/colors';

export default StyleSheet.create({
    body: {
      flex: 1,
      //flexDirection: 'column',
      backgroundColor: colors.bg,
      alignItems: 'stretch',
      //justifyContent: 'center',
    },
    scroll:{
      flex: 1,
    },
    eventCreator: {
      justifyContent: 'space-between',
      flexDirection: 'row',
      marginHorizontal: 2,
      paddingHorizontal: 8,
      marginTop: 20,
    },
    creatorTitle: {
      color: colors.white,
      fontSize: 14,
      lineHeight: 21.84,
      fontFamily: 'Visby CF Medium',
    },
    creatorSubTitle: {
      color: colors.text_3,
      fontSize: 12,
      lineHeight: 18.72,
      fontFamily: 'Visby CF Medium',
    },
    MainTitle: {
      color: colors.white,
      fontSize: 25,
      lineHeight: 42.12,
      fontWeight: 'bold',
      fontFamily: 'Visby CF Medium',
    },
    avatar:{
      width: 45,
      height: 45,
      borderRadius: 45/2,
      overflow: 'hidden',
      borderWidth: 1,
      borderColor: 'black',
      alignItems: 'center',
      
    },
    messageBtn:{
      width: 25,
      height: 25,
      overflow: 'hidden',
    },
    followBtn:{
      width: 77,
      height: 38,
      overflow: 'hidden',
      marginHorizontal: 8,
    },
    messFollow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',

    },
    locationAndTime: {
      height: 80,
      marginTop: 10,
      marginHorizontal: 2,
      paddingHorizontal: 8,
      flexDirection: 'column',
    },
    LocationAvatar:{
      width: 32,
      height: 32,
      overflow: 'hidden',
    },
    locationText:{
      color: colors.white,
      fontSize: 16,
      lineHeight: 24.96,
      fontFamily: 'Visby CF Medium',
    },
    timing: {
      flexDirection: 'row',
      marginTop: 7,
    },
    about: {
      flexDirection: 'column',
      height: 110,
      marginTop: 10,
      marginBottom: 20,
      marginHorizontal: 4,
      paddingHorizontal: 8,
    },
    aboutTitle: {
      color: '#ffffff',
      fontSize: 14,
      lineHeight: 21.84,
      fontWeight: 'bold',
      fontFamily: 'Visby CF Medium',
    },
    aboutText: {
      color: '#B5ACC7',
      fontSize: 15,
      lineHeight: 23.4,
      fontFamily: 'Visby CF Medium',
    },
    buttons:{
      resizeMode: 'cover',
      overflow: 'hidden',
      borderRadius: 15/2,
      height: 48,
      marginTop: 12,
      marginHorizontal: 8,
      paddingHorizontal: 8,
      backgroundColor: '#252045',
      flexDirection: 'column',
    },
    coupon1: {
      flexDirection: 'row',
      height: 80,
      marginTop: 10,
      marginHorizontal: 4,
      paddingHorizontal: 8,
      justifyContent: 'space-between',
    },
    discAvatar:{
      width: 28,
      height: 29,
      overflow: 'hidden',
    },
    btnTitle:{
      color: colors.white,
      fontSize: 15,
      fontWeight: 'bold',
      lineHeight: 23.4,
      fontFamily: 'Visby CF Medium',
      marginLeft: 1,
    },
    ApplyTitle:{
      color: colors.brand,
      fontSize: 14,
      lineHeight: 21.84,
      fontFamily: 'Visby CF Medium',
      marginLeft: 1,
    },
    btnTxt:{
      color: colors.text_3,
      fontSize: 15,
      lineHeight: 23.4,
      fontFamily: 'Visby CF Medium',
      marginLeft: 1,
    },
    groupAvatar:{
      width: 105.47,
      height: 32.99,
      overflow: 'hidden',
    },
    VectorAvatar:{
      width: 15.84,
      height: 15.87,
      overflow: 'hidden',
    },
    btnGetTitle:{
      color: colors.text_black,
      fontSize: 16,
      fontWeight: "bold",
      fontFamily: 'Visby CF Medium',
      marginTop: 12,
    },
    btnStyle:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      
    },
    videoView: {
     // position: absolute,
      resizeMode: 'cover',
      overflow: 'hidden',
      height: 200,
      marginTop: 16,
      marginHorizontal: 1,
      paddingHorizontal: 8,
    },
    titleView: {
      resizeMode: 'cover',
      overflow: 'hidden',
      height: 80,
      marginTop: 10,
      marginHorizontal: 4,
      paddingHorizontal: 8,
    },

    btnGet:{
      resizeMode: 'cover',
      overflow: 'hidden',
      borderRadius: 20/2,
      height: 50,
      marginBottom: 10,
      marginHorizontal: 8,
      paddingHorizontal: 8,
      backgroundColor: '#7B62FF',
      flexDirection: 'column',
    },
    getBtn: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    coupon: {
      flexDirection: 'row',
      height: 80,
      marginTop: 10,
      marginHorizontal: 4,
      paddingHorizontal: 8,
    },


    authAvatar: {
      flexDirection: 'row',
    },


    video:{
      //width: 427,
      //height: 272,
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      //derRadius: 50/2,
      //overflow: 'hidden',
      //resizeMode: 'cover',
      //background: 'transparent',
      //borderWidth: 1,
      //borderColor: 'black',
      //alignItems: 'center',
      //flexWrap: 'wrap',
    },
    separator:{
      marginTop: 16,
      marginHorizontal: 4,
      height: 1,
      backgroundColor: '#322956',
    },
    buttenStyle:{
      title: 'APPLY IT',
    },
  });

