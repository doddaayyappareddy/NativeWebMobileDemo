import React, { FC, ReactElement, useState } from "react";
import { Button, Image, Text, View, Linking, Animated, SafeAreaView } from "react-native";
import StyleSheet from 'react-native-media-query';
import Slider from "@react-native-community/slider";
import RadioButtonContainer from "../ui-componrts/RadioButton/RadioButtonContainer";
import Icon from "react-native-vector-icons/Ionicons";

const sampleImage = require('../../assets/images/Willingness.jpg');

export const NeedHelp = ({ navigation }: { navigation: any }) => {
    
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
            marginLeft: 20
        },
        subHeading: {
            fontFamily: "Helvetica, sans-serif",
            fontSize: 15,
            marginLeft: 20
        },
        hyperlink: {
            width: "100%",
            height: 40,
            fontFamily: "Helvetica, sans-serif",
            fontSize: 15,
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
                
                <View style={styles.container}>
                    <Text>{'\n'}</Text>
                    <Text style={styles.heading}>Investment Professional</Text>
                    <Text>{'\n'}</Text>

                    <Text style={styles.subHeading}>WELLSTRADE</Text>
                    <Text style={styles.subHeading}>1-800-TRADERS</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.subHeading}>(000) 782-7733</Text>
                        <Icon name="call" size={15} />
                    </View>
                    <Text>{'\n'}</Text>

                    <Text style={styles.subHeading}>MAC P00005-014</Text>
                    <Text style={styles.subHeading}>PO BOX 87654</Text>
                    <Text style={styles.subHeading}>ST LOUIS, MO 09876-0987</Text>
                    <Text>{'\n'}</Text>

                    <Text style={styles.hyperlink} onPress={() => Linking.openURL('https://google.com')}>
                        {'Get Directions'}
                    </Text>

                    <Text style={styles.heading}>Online Brokerage</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.subHeading}>(000) 782-7733</Text>
                        <Icon name="call" size={15} />
                    </View>
                    <Text style={styles.subHeading}>Monday - Friday, 8:00 am - 8:00 pm ET</Text>

                    <Text>{'\n'}</Text>
                    <Text style={styles.heading}>Online Booking & Bill Pay</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.subHeading}>(000) 782-7733</Text>
                        <Icon name="call" size={15} />
                    </View>
                    <Text style={styles.subHeading}>24 hours a day, 7 days a week</Text>
                    <Text>{'\n'}</Text>
                    <Text>{'\n'}</Text>

                </View>
            </View>
        </>
    );
};


