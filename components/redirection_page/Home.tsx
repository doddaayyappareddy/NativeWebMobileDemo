import React, { FC, ReactElement, useState } from "react";
import { Button, Image, Text, View, Linking, Animated, SafeAreaView, TouchableOpacity, Platform, ScrollView } from "react-native";
import StyleSheet from 'react-native-media-query';
import MainGetStarted from "../get_started/MainGetStarted";
import { NavigationContainer } from "@react-navigation/native";

import { WebView } from 'react-native-webview';
import Icon from "react-native-vector-icons/Ionicons";
import { BottomNavigation } from "../common_components/BottomNavigation";

export const Home = ({ navigation }: { navigation: any }) => {


    const { ids, styles } = StyleSheet.create({
        container: {
            flexDirection: "column",
            backgroundColor: "#fff",
            borderRadius: 10,
            marginLeft: 20,
            marginRight: 20,
            marginTop: 5,
            marginBottom: 20,
        },
        heading: {
            height: 40,
            fontFamily: "Helvetica, sans-serif",
            fontSize: 20,
            marginLeft: 20
        },
        multiButtonContainer: {
            margin: 20,
            display: "flex",
            flexDirection: 'row',
            justifyContent: 'space-evenly'
        },
        hyperlink: {
            height: 40,
            fontFamily: "Helvetica, sans-serif",
            fontSize: 12,
            color: "#00698c",
            marginLeft: 20
        }
    });

    const onRadioButtonPress = (itemIdx: any) => {
        console.log("Clicked", itemIdx);
    };

    return (
        <>
            <ScrollView>
                <View style={{ backgroundColor: "#f4f0ed" }}>
                    <Text>{'\n'}{'\n'}</Text>
                    <Text style={{ marginLeft: 20, fontSize: 30, fontFamily: "Helvetica, sans-serif" }}>Good Evening,{'\n'}Chadx</Text>
                    <Text>{'\n'}</Text>
                    <Text style={{ marginLeft: 20, fontSize: 20, fontFamily: "Helvetica, sans-serif" }}>Customer since 2019</Text>
                    <Text>{'\n'}</Text>
                    <View style={styles.container}>
                        <Text>{'\n'}</Text>
                        <Text style={styles.heading}>EVERYDAY CHECKING ...0406</Text>
                        <Text style={styles.heading}>$9,900.00</Text>
                        <Text style={{ marginLeft: 20, fontSize: 15, fontFamily: "Helvetica, sans-serif" }}>Available Balance</Text>

                        <View style={{ flexDirection: "column", marginLeft: 20, paddingTop: 15, backgroundColor: '#dcdcdc', marginRight: 10, marginTop: 20, borderRadius: 10 }}>
                            <View style={{ marginLeft: 10, marginBottom: 10, flexDirection: "row" }}>
                                <View>
                                    <Icon name="timer-outline" size={20} />
                                </View>
                                <View style={{ marginLeft: 5, width: '90%' }}>
                                    <Text style={{ fontSize: 15 }}>Guided Account Setup</Text>
                                    <Text style={{ fontSize: 12, paddingTop: 5 }}>Get started with deposits, alerts, transfers, and more.</Text>
                                </View>
                            </View>
                            <View>
                                <Text style={styles.hyperlink} onPress={() => Linking.openURL('https://google.com')}>
                                    {'Set up your account'}
                                </Text>
                            </View>
                        </View>
                        <Text>{'\n'}</Text>
                    </View>

                    <View style={styles.container}>
                        <Text>{'\n'}</Text>
                        <Text style={styles.heading}>WELLSTRADE IRA ...6902</Text>
                        <Text style={styles.heading}>$5,922.00</Text>
                        <Text style={{ marginLeft: 20, fontSize: 15, fontFamily: "Helvetica, sans-serif" }}>Total Account Value (as of previous close)</Text>
                        <Text>{'\n'}</Text>
                    </View>
                </View>
            </ScrollView>
            <BottomNavigation navigation={navigation} />
        </>
    );
};


