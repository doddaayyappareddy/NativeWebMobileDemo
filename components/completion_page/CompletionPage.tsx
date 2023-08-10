import React, { FC, ReactElement, useState } from "react";
import {Text, View } from "react-native";
import StyleSheet from 'react-native-media-query';

export const CompletionPage = ({ navigation }: { navigation: any }) => {



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
           <View style={styles.container}>
                               <Text>{'\n'}</Text>
                               <Text style={styles.heading}>Congratulations! You have successfully completed the process!!</Text>
                               <Text>{'\n'}</Text>
                                 <Text style={styles.hyperlink} onPress={() =>  navigation.navigate('Start')}>
                                                       {'Go back to home page'}
                                 </Text>
            </View>
        </>
    );
};


