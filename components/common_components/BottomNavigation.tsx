import React, { } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import StyleSheet from 'react-native-media-query';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export const BottomNavigation = ({ navigation }: { navigation: any }) => {

    const { ids, styles } = StyleSheet.create({
        multiButtonContainer: {
            padding: 12,
            display: "flex",
            flexDirection: 'row',
            justifyContent: 'space-around',
            backgroundColor: "#fff",
        },
        button: {

        },
        button_text: {
            fontSize: 12,
            color: "#00698c",
        },
    });

    return (
        <>
            <View style={styles.multiButtonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                    <View style={{ alignItems: 'center' }}>
                        <Icon name="home-outline" size={15} />
                        <Text style={styles.button_text}>Home</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Start')}>
                    <View style={{ alignItems: 'center' }}>
                        <Icon name="construct-outline" size={15} />
                        <Text style={styles.button_text}>Account</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AccountSumaary')}>
                    <View style={{ alignItems: 'center' }}>
                        <Icon name="home-outline" size={15} />
                        <Text style={styles.button_text}>Activity</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NeedHelp')}>
                    <View style={{ alignItems: 'center' }}>
                        <Icon name="help-circle-outline" size={15} />
                        <Text style={styles.button_text}>Need Help</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignOff')}><View style={{ alignItems: 'center' }}>
                    <Icon name="lock-closed" size={15} />
                    <Text style={styles.button_text}>Sign Off</Text>
                </View>
                </TouchableOpacity>
            </View>
        </>
    );
};


