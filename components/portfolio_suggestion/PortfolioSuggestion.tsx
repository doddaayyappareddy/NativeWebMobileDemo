import React, { FC, ReactElement, useState } from "react";
import { Button, Image, Text, View, Linking, Animated, SafeAreaView } from "react-native";
import StyleSheet from 'react-native-media-query';
import RadioButtonContainerPortfolio from "../ui-componrts/RadioButtonPortfolio/RadioButtonContainerPortfolio";

const option1 = require('../../assets/images/option1.jpg');
const option2 = require('../../assets/images/option2.jpg');
const option3 = require('../../assets/images/option3.jpg');

export const PortfolioSuggestion = ({navigation}: {navigation: any}) => {

    const market_text = "Thank you, Michelle! We suggested a portfolio with a stock and bond mix that align with your responses. If you'd prefer a portfolio with a slightly adjusted risk level, you can select another.";

    const data = [
        {
            id: 1,
            text: "Suggested for you",
            subText: "Moderate Growth and Income",
            showMoreText: [
                { text: 'You\'ll take on a balanced amount of growth and loss potential.' },
                { text: 'This growth and income portfolio aims to provide income (through dividends and interest) and asset appreciation over time.' }
            ],
            bonds: ['58% stocks', '42% bonds'],
            imageUrl: option1,
            sliderPosition: 5
        },
        {
            id: 2,
            text: "Slightly more conservative",
            subText: "Conservative Growth & Income",
            bonds: ['49% stocks', '51% bonds'],
            imageUrl: option2,
            sliderPosition: 3
        },
        {
            id: 3,
            text: "Slightly More aggressive",
            subText: "Aggressive Growth and Income",
            bonds: ['66% stocks', '34% bonds'],
            imageUrl: option3,
            sliderPosition: 7
        }
    ];

    const { ids, styles } = StyleSheet.create({
        container: {
            flexDirection: "column",
            backgroundColor: "#fff",
            marginLeft: 20,
            marginRight: 20,
            marginTop: 20,
            marginBottom: 20
        },
        heading: {
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
            width: 120
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

    const onRadioButtonPress = (itemIdx: any) => {
        console.log("Clicked", itemIdx);
    };

    return (
        <>
            <View style={{ backgroundColor: "#f4f0ed" }}>
                <Text>{'\n'}</Text>
                <Text style={{ marginLeft: 20, fontSize: 20, fontFamily: "Helvetica, sans-serif" }}>Choose your portfolio</Text>
                <Text>{'\n'}</Text>
                {/* <ProgressBar progress={30} height={7} backgroundColor="#4a0072" animated={false}/> */}
                <Text style={{ marginLeft: 20, marginRight: 20, fontSize: 15 }}>{market_text}</Text>
                <Text>{'\n'}</Text>
                <View style={styles.progressBar}>
                    <Animated.View style={styles.absoluteFill} />
                </View>
                {/* <Text>{'\n'}</Text> */}
                <View style={styles.container}>
                    <SafeAreaView>
                        <RadioButtonContainerPortfolio values={data} onPress={onRadioButtonPress} />
                    </SafeAreaView>
                </View>
            </View>
        </>
    );
};


