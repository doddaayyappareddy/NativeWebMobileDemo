import React, { FC, ReactElement, useState } from "react";
import { TouchableOpacity, Image, Text, ImageBackground, View } from "react-native";
import StyleSheet from 'react-native-media-query';

import image from '../../assets/images/office.jpg';
import mobileImage from '../../assets/images/mobile.png';

export const GetStarted = ({navigation}: {navigation: any}) => {

    const base_text = "Start investing with just $500";
    const data = [
        { key: "A low cost, professionally designed portfolio" },
        { key: "Automated investing technology" },
        { key: "Access to financial advisors" }
    ];
    const { ids, styles } = StyleSheet.create({
        container: {
            flexDirection: "column",
            backgroundColor: "#e2dede"
        },
        image: {
            width: '100%',
            height: 270,
        },
        baseText: {
            fontSize: 25,
            color: '#946e3a',
            fontFamily: "Georgia, serif",
            marginLeft: 20,
            marginTop: 20,
            width: '50%'
        },
        startButton: {
            alignItems: 'center',
            backgroundColor: '#87190a',
            height: 40,
            width: 150,
            justifyContent: 'center',
            borderRadius: 30,
            bottom: -120,
            alignSelf: 'center'
        },
        belowText: {
            fontSize: 23,
            color: '#946e3a',
            fontStyle: 'italic',
            fontWeight: 400,
            fontFamily: "Georgia, serif",
            justifyContent: 'center',
            marginLeft: 20,
            marginTop: 20
        },
        bulletText: {
            fontSize: 15,
            color: 'black',
            textAlign: 'center',
            fontStyle: 'italic',
        }
    });
    return (
        <>
            <View style={styles.container}>
                <ImageBackground source={image} resizeMode='stretch' style={styles.image}>
                    <Text style={styles.baseText}>{base_text}</Text>

                    <TouchableOpacity style={styles.startButton}
                        onPress={() => navigation.navigate('Enroll')}>
                        <Text style={{ color: '#fff', fontWeight: "bold", fontFamily: "Georgia, serif", }}>Get Started</Text>
                    </TouchableOpacity>
                </ImageBackground>
                <View>
                    <Text style={styles.belowText}> {'With Intuitive Investor'}{'\u00AE'}{', you get:'} </Text>
                    {
                        data.map((item) =>
                            <Text key={item.key} style={{ fontSize: 15, marginLeft: 20, marginRight: 20, paddingTop: 10, fontFamily: "Georgia, serif" }}>
                                {'\u2B24' + ' '}{item.key}
                            </Text>
                        )
                    }
                </View>
                <View style={{ alignItems: 'center', width: '100%', height: 300, paddingTop: 15, paddingBottom: 20 }}>
                    <Image source={mobileImage} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                </View>
            </View>
        </>
    );
};


