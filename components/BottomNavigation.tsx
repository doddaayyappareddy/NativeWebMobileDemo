import React, { FC, ReactElement } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import StyleSheet from 'react-native-media-query';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Header } from "./Header";
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
            <Tab.Navigator>
                <Tab.Screen
                    name="Summary"
                    component={Header}
                    options={{
                        tabBarLabel: 'Summary',
                        // tabBarIcon: ({color, size}) => (
                        //     <Icon name="ios-add" size={30} color={'red'} />
                        // )
                    }}
                />
            </Tab.Navigator>
        </>
    );
};


