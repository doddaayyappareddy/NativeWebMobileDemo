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
            subText: "Exchnage Traded funds (ETFs) from different providers."
        },
        {
            text: "Sustainability Focused",
            subText: "Divercified ETFs that incorporate environmental, social, and governance (ESG) considerations and criteria."
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
                </View>
            </View>
        </>
    );
};


