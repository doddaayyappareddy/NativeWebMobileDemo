import React, { FC, ReactElement, useState } from "react";
import { Button, Image, Text, View, Linking, Animated, SafeAreaView, TouchableOpacity, Platform, ScrollView } from "react-native";
import StyleSheet from 'react-native-media-query';
import MainGetStarted from "../get_started/MainGetStarted";
import { NavigationContainer } from "@react-navigation/native";

import { WebView } from 'react-native-webview';
import { BottomNavigation } from "../common_components/BottomNavigation";


export const AccountSummary = ({ navigation }: { navigation: any }) => {


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
            width: 90
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
        back_button: {
            backgroundColor: '#fff',
            width: 150, height: 30,
            borderWidth: 2,
            borderColor: '#87190a',
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center'
        },
    });

    const onRadioButtonPress = (itemIdx: any) => {
        console.log("Clicked", itemIdx);
    };

    return (
        <>
            <ScrollView>
                {
                    Platform.OS === "web" ? (
                        <View>
                            <iframe src="https://jsonplaceholder.typicode.com/guide/" height={'1000'} width={'100%'} />
                        </View>
                    ) : (
                        <View style={{ flex: 1 }}>
                            <WebView
                                source={{ uri: "https://jsonplaceholder.typicode.com/guide/" }}
                                style={{ marginTop: 22, flex: 1 }}
                            />
                        </View>
                    )
                }
            </ScrollView>
            <BottomNavigation navigation={navigation} />
        </>
    );
};


