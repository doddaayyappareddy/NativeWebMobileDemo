import React, { FC, ReactElement, useState } from "react";
import { Button, Image, Text, View, Linking, Animated, SafeAreaView } from "react-native";
import StyleSheet from 'react-native-media-query';
import Slider from "@react-native-community/slider";
import RadioButtonContainer from "../ui-componrts/RadioButton/RadioButtonContainer";

const sampleImage = require('../../assets/images/Willingness.jpg');

export const AccountSelection = ({ navigation }: { navigation: any }) => {

    const data = [
        {
            text: "Traditional IRA",
            subText: "Contribute pre-tax income and have taxable withdrawals.",
            showMoreText: [
                { text: 'Contribute pre-tax income and have taxable withdrawals.' },
                { text: 'Potential earnings grow tax-deferred.' },
                { text: 'Penality applied to some withdrawals made before age 59%.' },
                { text: 'Required minimum distributions (RMDs) start at age 72.' },
                { text: 'No age limit to begin contributing as long as you have earned income.' }
            ]
        },
        {
            text: "Roth IRA",
            subText: "Contribute after-tax income and have tax-free withdrawals (If income is below the limit).",
            showMoreText: [
                { text: 'Contribute pre-tax income and have taxable withdrawals.' },
                { text: 'Potential earnings grow tax-deferred.' },
                { text: 'Penality applied to some withdrawals made before age 59%.' },
                { text: 'Required minimum distributions (RMDs) start at age 72.' },
                { text: 'No age limit to begin contributing as long as you have earned income.' }
            ]
        },
        {
            text: "Inherited Traditional IRA",
            subText: "Not Eligible for cash contributions but money grows tax-deferred.",
            showMoreText: [
                { text: 'Contribute pre-tax income and have taxable withdrawals.' },
                { text: 'Potential earnings grow tax-deferred.' },
                { text: 'Penality applied to some withdrawals made before age 59%.' },
                { text: 'Required minimum distributions (RMDs) start at age 72.' },
                { text: 'No age limit to begin contributing as long as you have earned income.' }
            ]
        },
        {
            text: "Inherited Roth IRA",
            subText: "Not Eligible for cash contributions but money grows tax-free.",
            showMoreText: [
                { text: 'Contribute pre-tax income and have taxable withdrawals.' },
                { text: 'Potential earnings grow tax-deferred.' },
                { text: 'Penality applied to some withdrawals made before age 59%.' },
                { text: 'Required minimum distributions (RMDs) start at age 72.' },
                { text: 'No age limit to begin contributing as long as you have earned income.' }
            ]
        },
        {
            text: "Simplified Employee Pension (SEP) IRA",
            subText: "Employers contribute tax-deductible money for employees.",
            showMoreText: [
                { text: 'Contribute pre-tax income and have taxable withdrawals.' },
                { text: 'Potential earnings grow tax-deferred.' },
                { text: 'Penality applied to some withdrawals made before age 59%.' },
                { text: 'Required minimum distributions (RMDs) start at age 72.' },
                { text: 'No age limit to begin contributing as long as you have earned income.' }
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

    const onRadioButtonPress = (itemIdx: any) => {
        console.log("Clicked", itemIdx);
    };

    return (
        <>
            <View style={{ backgroundColor: "#f4f0ed" }}>
                <Text>{'\n'}</Text>
                <Text style={{ marginLeft: 20, fontSize: 20, fontFamily: "Helvetica, sans-serif" }}>Select an account</Text>
                <Text>{'\n'}</Text>
                <View style={styles.progressBar}>
                    <Animated.View style={styles.absoluteFill} />
                </View>
                {/* <Text>{'\n'}</Text> */}
                <View style={styles.container}>
                    <Text>{'\n'}</Text>
                    <Text style={styles.heading}>What type of retirement account would you like?</Text>
                    <Text>{'\n'}</Text>
                    <Text style={styles.hyperlink} onPress={() => Linking.openURL('https://google.com')}>
                        {'Help me choose an account type or roll over a qualified retirement plan'}
                    </Text>
                    <SafeAreaView>
                        <RadioButtonContainer values={data} onPress={onRadioButtonPress} />
                    </SafeAreaView>
                    <Text>{'\n'}</Text>
                </View>
            </View>
        </>
    );
};


