import React, { FC, ReactElement, useState } from "react";
import {TouchableOpacity, Image, Text, ImageBackground, View } from "react-native";
import StyleSheet from 'react-native-media-query';

import image from '../assets/images/office.jpg';
import mobileImage from '../assets/images/mobile.png';

export const GetStarted=() => {

    const base_text = "Placeholder container for the heading to get started!!";
    const {ids, styles} = StyleSheet.create({
    container:{ flex: 1,},
    image:{
        width: '100%',
        height: '100%',
        },
    baseText:{
        fontSize:25,
        color: 'black',
        textAlign: 'left',
        width: '60%',
        alignItems: 'left',
    },
    startButton:{
        alignItems: 'center',
        backgroundColor: 'brown',
        height: 30,
        width: 150,
        justifyContent: 'center',
        borderRadius: 30,
        bottom:-150,
        alignSelf:'center',
    },
    belowText:{
        display: 'flex',
        fontSize: 25,
        paddingTop: -100,
        color: 'brown',
        fontStyle: 'italic',
        fontWeight: 300,
        justifyContent: 'center',
    },
    bulletText:{
        fontSize: 15,
        color: 'black',
        textAlign: 'center',
        fontStyle: 'italic',
    }
      });
    return (

    <View style={{ backgroundColor: "#e2dede"}}>
    <Text>{'\n'}</Text>
    <ImageBackground source={image} resizeMode='stretch' style={styles.image}>
    <Text style={styles.baseText}>{base_text}</Text>

    <TouchableOpacity style={styles.startButton} onPress={()=>{}}>
        <Text style={{color:'white'}}>Get Started</Text>
    </TouchableOpacity>

    <Text>Ganeshaaa</Text>
    </ImageBackground>
    <Text>{'\n'}</Text>

    <Text style={styles.belowText}> Placeholder for the options to consider while starting:: </Text>
    <Text>{'\n'}</Text>
    <Text style={styles.bulletText}> {`\u2022 `} Placeholder for option detail 1</Text>
    <Text style={styles.bulletText}> {`\u2022 `} Placeholder for option detail 2</Text>
    <Text style={styles.bulletText}> {`\u2022 `} Placeholder for option detail 3</Text>
    <Text>{'\n'}</Text>
    <View style={{ alignItems:'center', width: '100%', height: '100%'}}>
    <Image source={mobileImage}  style={{ width: '50%', height: '50%', resizeMode:'contain', flex:1}}/>
    </View>

       </View>

    );
  };
  
  
 