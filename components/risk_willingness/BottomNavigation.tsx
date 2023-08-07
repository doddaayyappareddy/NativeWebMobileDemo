import React, { FC, ReactElement } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import StyleSheet from 'react-native-media-query';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import { UserEnroll } from "../user-enroll/UserEnroll";
// import { Icon } from "react-native-vector-icons/Icon";

const Tab = createBottomTabNavigator();

export const BottomNavigation: FC<{}> = ({ }): ReactElement => {

    const { ids, styles } = StyleSheet.create({
        container: {
            flexDirection: "row",
            backgroundColor: "white",
        },
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
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="summary" component={UserEnroll}/>
                    <Tab.Screen name="need_help" component={UserEnroll}/>
                    <Tab.Screen name="sign_off" component={UserEnroll}/>
                </Tab.Navigator>
            </NavigationContainer>

        </>
    );
};


