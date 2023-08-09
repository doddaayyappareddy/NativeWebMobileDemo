import React, { FC, ReactElement } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import StyleSheet from 'react-native-media-query';

export const ButtonsComp = ({navigation}: {navigation: any}) => {
    const { ids, styles } = StyleSheet.create({
        multiButtonContainer: {
            margin: 5,
            display: "flex",
            flexDirection: 'row',
            justifyContent: 'space-evenly',
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
        next_button: {
            backgroundColor: '#87190a',
            width: 150, borderWidth: 2,
            borderColor: '#87190a',
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center'
        },
        back_button_text: {
            color: '#87190a',
            fontWeight: "bold"
        },
        next_button_text: {
            color: '#fff',
            fontWeight: "bold"
        }
    });

    return (
        <>
            <View style={styles.multiButtonContainer}>
                <TouchableOpacity style={styles.back_button} onPress={() => navigation.navigate('PortfolioSelection')}>
                    <Text style={styles.back_button_text}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.next_button} onPress={() => navigation.navigate('AccountSelection')}>
                    <Text style={styles.next_button_text}>Next</Text>
                </TouchableOpacity>
            </View>
        </>
    );
};


