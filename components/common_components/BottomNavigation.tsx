import React, {  } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import StyleSheet from 'react-native-media-query';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Icon } from "react-native-vector-icons/Icon";
import { Icon } from "react-native-vector-icons/FontAwesome";
// import { Icon } from 'react-native-elements';

const Tab = createBottomTabNavigator();

export const BottomNavigation = ({navigation}: {navigation: any}) => {

    const { ids, styles } = StyleSheet.create({
        multiButtonContainer: {
            padding: 15,
            display: "flex",
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            color: '#fff'
        },
        button: {
        },
        button_text: {
            fontSize: 12
        },
    });

    return (
        <>
            <View style={styles.multiButtonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Enroll')}>
                    <Icon name="rocket" size={30} color="#900" />
                    <Text style={styles.button_text}>Accounts</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Enroll')}>
                    <Text style={styles.button_text}>Need Help</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Enroll')}>
                    <Text style={styles.button_text}>Sign Off</Text>
                </TouchableOpacity>
            </View>
        </>
    );
};


