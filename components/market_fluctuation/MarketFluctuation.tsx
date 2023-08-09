import React, { FC, ReactElement, useState } from "react";
import { Button, Image, Text, View, Linking, Animated } from "react-native";
import StyleSheet from 'react-native-media-query';
import Slider from "@react-native-community/slider";

const sampleImage = require('../../assets/images/Willingness.jpg');

export const MarketFluctuation = ({navigation}: {navigation: any}) => {

    const { ids, styles } = StyleSheet.create({
        container: {
            flexDirection: "column",
            backgroundColor: "#fff",
            borderRadius: 10,
            marginLeft: 20,
            marginRight: 20,
            marginTop: 20,
            marginBottom: 20,
        },
        heading: {
            width: "100%",
            height: 40,
            fontFamily: "Helvetica, sans-serif",
            fontSize: 20,
            marginLeft: 20,
            '@media (max-width: 1600px) and (min-width: 800px)': {
                width: 400,
            }
        },
        multiButtonContainer: {
            margin: 20,
            display: "flex",
            flexDirection: 'row',
            justifyContent: 'space-evenly'
        },

        button: {
            width: 30
        },
        progressBar: {
            height: 7,
            flexDirection: "row",
            width: '90%',
            backgroundColor: '#fff',
            borderRadius: 10,
            marginLeft: 20
        },
        absoluteFill: {
            backgroundColor: "purple",
            width: 30
        }, 
        hyperlink: {
            width: "100%",
            height: 40,
            fontFamily: "Helvetica, sans-serif",
            fontSize: 12,
            color: "#00698c",
            marginLeft: 20,
            '@media (max-width: 1600px) and (min-width: 800px)': {
                width: 400,
            }
        },
    });
    return (
        <>
            <View style={{ backgroundColor: "#f4f0ed" }}>
                <Text>Market Fluctuation Screen</Text>
            </View>
        </>
    );
};


