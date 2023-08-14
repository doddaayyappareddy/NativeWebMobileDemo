import React, { FC, ReactElement, useState } from "react";
import { Button, Image, Text, View, Linking, Animated, TouchableOpacity } from "react-native";
import StyleSheet from 'react-native-media-query';
import Slider from "@react-native-community/slider";
import RadioButton from "../ui-componrts/RadioButton/RadioButton";
import { SafeAreaView } from "react-native";
import RadioButtonContainer from "../ui-componrts/RadioButton/RadioButtonContainer";

const sampleImage = require('../../assets/images/Willingness.jpg');

export const InvestmentStyle = ({navigation}: {navigation: any}) => {

    const investment_text = "For your Moderate Growth and Income portfolio";

    const data = [
        {
            text: "Globally Diversified",
            subText: "Balance risks and reward by investing in domestic and foreign markets.",
            showMoreText: [
                { text: 'Average expense ration of 0.13%.' },
                { text: 'A combination of various ETFs focused on specific classes (such as U.S. stocks and international stocks).' },
                { text: 'Aim for a market average performance with select areas of enhancement.' }
            ]
        },
        {
            text: "Sustainability Focused",
            subText: "Balances risk and reward while incorporating environmental, social, and governance (ESG) principles.",
            showMoreText: [
                { text: 'Average expense ration of 0.13%.' },
                { text: 'A combination of various ETFs focused on specific classes (such as U.S. stocks and international stocks) that meet our ESG criteria.' },
                { text: 'ESG includes criteria related to sustainable business practices, ethical behavior, and corporate governance.' },
                { text: 'This investment strategy may have less exposure to some market sectors, which could result in a market performance that is lower or higher than strategies that do not incorporate ESG factors.' }
            ]
        }
    ];

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
            // width: "100%",
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
            width: 150
        },
        hyperlink: {
            width: "100%",
            height: 40,
            fontFamily: "Helvetica, sans-serif",
            fontSize: 12,
            color: "#00698c",
            paddingTop: 10,
            marginLeft: 20,
            '@media (max-width: 1600px) and (min-width: 800px)': {
                width: 400,
            }
        },
        mainContainer: {
            height: 50,
            marginTop: 5,
            marginBottom: 5,
            marginLeft: 10,
            marginRight: 10,
            justifyContent: "center",
            paddingLeft: 10,
            paddingRight: 10,
            flexDirection: "row",
            alignItems: "center",
        },
        radioButtonIcon: {
            backgroundColor: "white",
            borderWidth: 3,
            height: 20,
            width: 20,
            borderRadius: 20 / 2,
            marginRight: 10,
            alignItems: "center",
            justifyContent: "center",
        },
        radioButtonIconInnerIcon: {
            height: 15,
            width: 15,
            backgroundColor: "red",
            borderRadius: 15 / 2,
            borderWidth: 3,
            borderColor: "white",
        },
        radioButtonTextContainer: {
            flex: 5,
            height: 50,
            justifyContent: "center",
            paddingLeft: 10,
        },
        radioButtonText: {
            fontSize: 18,
        }
    });

    const onRadioButtonPress = (itemIdx: any) => {
        console.log("Clicked", itemIdx);
    };

    return (
        <>
            <View style={{ backgroundColor: "#f4f0ed" }}>
                <Text>{'\n'}</Text>
                <Text style={{ marginLeft: 20, fontSize: 20, fontFamily: "Helvetica, sans-serif" }}>Choose your investment style</Text>
                <Text>{'\n'}</Text>
                {/* <ProgressBar progress={30} height={7} backgroundColor="#4a0072" animated={false}/> */}
                <Text style={{ marginLeft: 20, marginRight: 20, fontSize: 15 }}>{investment_text}</Text>
                <Text>{'\n'}</Text>
                <View style={styles.progressBar}>
                    <Animated.View style={styles.absoluteFill} />
                </View>
                {/* <Text>{'\n'}</Text> */}
                <View style={styles.container}>
                    <Text>{'\n'}</Text>
                    <Text style={styles.heading}>Now select the investment style you'd like to apply to your portfolio:</Text>
                    <Text>{'\n'}</Text>
                    <SafeAreaView>
                        <RadioButtonContainer values={data} onPress={onRadioButtonPress} />
                    </SafeAreaView>
                    <Text>{'\n'}</Text>

                    <View style={{ alignItems: 'center' }}>
                        <View style={{ height: 1, backgroundColor: 'black', width: '95%' }} />
                    </View>

                    <Text style={styles.hyperlink} onPress={() => Linking.openURL('https://google.com')}>
                        {'More on Investment Styles (PDF)'}
                    </Text>

                    <View style={{ alignItems: 'center' }}>
                        <View style={{ height: 1, backgroundColor: 'black', width: '95%' }} />
                    </View>

                    <Text style={styles.hyperlink} onPress={() => Linking.openURL('https://google.com')}>
                        {'Compare asset allocation models'}
                    </Text>

                </View>
            </View>
        </>
    );
};


