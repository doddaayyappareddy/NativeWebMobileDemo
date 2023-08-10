import Slider from "@react-native-community/slider";
import React, { FC, ReactElement, useState } from "react";
import { Animated, Image, Text, View } from "react-native";
import StyleSheet from 'react-native-media-query';

export const CompletionPage = ({ navigation }: { navigation: any }) => {



    const { ids, styles } = StyleSheet.create({
        container: {
            flexDirection: "column",
            backgroundColor: "#fff",
            marginLeft: 20,
            marginRight: 20,
            marginTop: 20,
            marginBottom: 20,
            borderWidth: 5,
            borderColor: "red"
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
            width: 240
        }, 

    });

    return (
        <>
            <View style={{ backgroundColor: "#f4f0ed" }}>
                <Text>{'\n'}</Text>
                <Text style={{ marginLeft: 20, fontSize: 20, fontFamily: "Helvetica, sans-serif" }}>Intuitive Investor account submission</Text>
                <Text>{'\n'}</Text>
                <View style={styles.progressBar}>
                    <Animated.View style={styles.absoluteFill} />
                </View>

                <Text>{'\n'}</Text>

                <Text style={{ marginLeft: 20, fontSize: 15, fontFamily: "Helvetica, sans-serif" }}>Application Submitted</Text>
                
                <View style={styles.container}>
                    <Text>{'\n'}</Text>
                    <Text style={styles.heading}>Congratulations, Abcdefgh!</Text>
                    <View style={{marginLeft: 20,}}>
                        <Text>{'\n'}</Text>
                        <Text>Your application has been submitted and is now under review. You'll receive an email at abcdefg@generalbank.com in the next 1 - 3 business days regarding next steps.</Text>
                        <Text>{'\n'}</Text>
                        <Text>{'\n'}</Text>
                        <Text>{'\n'}</Text>
                    </View>
                </View>
            </View>
        </>
    );
};


