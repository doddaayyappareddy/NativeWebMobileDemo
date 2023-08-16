import React, { FC, ReactElement, useState } from "react";
import { TouchableOpacity, Image, Text, ImageBackground, View } from "react-native";
import StyleSheet from 'react-native-media-query';

import image from '../../assets/images/office.jpg';
import mobileImage from '../../assets/images/mobile.png';
import Icon from "react-native-vector-icons/Ionicons";

export const SignOff = ({navigation}: {navigation: any}) => {

    const base_text = "Thanks for Visiting";
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
            height: 650,
        },
        baseText: {
            fontSize: 30,
            color: '#946e3a',
            fontFamily: "Georgia, serif",
            marginLeft: 20,
            marginTop: 80,
            width: '100%'
        },
        baseSubText: {
            fontSize: 20,
            color: '#946e3a',
            fontFamily: "Georgia, serif",
            marginLeft: 20,
            marginTop: 20,
            width: '100%'
        },
        startButton: {
            alignItems: 'center',
            backgroundColor: '#ffffff',
            height: 40,
            width: '50%',
            justifyContent: 'center',
            borderRadius: 30,
            borderWidth: 1,
            alignSelf: 'center',
            flexDirection: 'row',
            marginTop: 400
        }
    });
    return (
        <>
            <View style={styles.container}>
                <ImageBackground source={image} resizeMode='stretch' style={styles.image}>
                    <Text style={styles.baseText}>{base_text}</Text>
                    <Text style={styles.baseSubText}>{'You\'ve securely ended your session.'}</Text>

                    <TouchableOpacity style={styles.startButton}
                        onPress={() => navigation.navigate('Start')}>
                        <Icon name="lock-closed" size={15} />
                        <Text style={{ color: 'black', fontWeight: "bold", fontSize: 15 }}>{'  Sign on'}</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        </>
    );
};


