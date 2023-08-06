import React, { FC, ReactElement } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import StyleSheet from 'react-native-media-query';

export const ButtonsComp: FC<{}> = ({ }): ReactElement => {

    const { ids, styles } = StyleSheet.create({
        multiButtonContainer: {
            margin: 5,
            display: "flex",
            flexDirection: 'row',
            justifyContent: 'space-evenly',
        },
        button: {
            width: 30
        },
    });

    return (
        <>
            <View style={styles.multiButtonContainer}>
                <TouchableOpacity style={{ backgroundColor: 'white', width: 150, height: 30, borderWidth: 2, borderColor: 'red', borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: 'grey', width: 150, borderWidth: 2, borderColor: 'red', borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Next</Text>
                </TouchableOpacity>
            </View>
        </>
    );
};


