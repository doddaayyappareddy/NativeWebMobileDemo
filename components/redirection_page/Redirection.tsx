import React, { useState } from "react";
import { Text, View, SafeAreaView, TouchableOpacity, TextInput } from "react-native";
import StyleSheet from 'react-native-media-query';
import RadioButtonContainer from "../ui-componrts/RadioButton/RadioButtonContainer";

export const Redirection = ({ navigation }: { navigation: any }) => {

    const data = [
        { text: "Account Creation" },
        { text: "Account Summary" }
    ];

    const [ radioSelected, setRadioSelected ] = useState(0);

    const { ids, styles } = StyleSheet.create({
        container: {
            flexDirection: "column",
            backgroundColor: "#fff",
            borderRadius: 10,
            marginLeft: 60,
            marginRight: 60,
            marginTop: 60,
            alignItems: 'center'
        },
        heading: {
            height: 40,
            fontFamily: "Helvetica, sans-serif",
            fontSize: 25,
            marginTop: 30,
            justifyContent: 'center'
        },

        textInput: {
            marginTop: 30,
            height: 40,
            padding: 20,
            borderWidth: 2,
            borderColor: '#87190a',
            borderRadius: 30,
        },
        textValColor: {
            color: '#A9A9A9'
        },
        subHeading: {
            height: 40,
            fontFamily: "Helvetica, sans-serif",
            fontSize: 15,
            marginTop: 15
        },
        multiButtonContainer: {
            margin: 20,
            display: "flex",
            flexDirection: 'row',
            justifyContent: 'space-evenly'
        },
        next_button: {
            backgroundColor: '#87190a',
            height: 40,
            marginTop: 30,
            width: 150, borderWidth: 2,
            borderColor: '#87190a',
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center'
        },
        next_button_text: {
            color: '#fff',
            fontWeight: "bold"
        }
    });

    const onRadioButtonPress = (itemIdx: any) => {
        console.log("Clicked", itemIdx);
        if(itemIdx == 0){
            setRadioSelected(0);
        } else {
            setRadioSelected(1);
        }
    };

    const onSignOnPress = () => {
        if(radioSelected == 0){
            navigation.navigate('Start');
        } else {
            navigation.navigate('AccountSumaary');
        }
    };

    return (
        <>
            <View style={styles.container}>
                <SafeAreaView>
                    <Text style={styles.heading}>Good Afternoon</Text>
                    <Text>Sign on to manage your accounts</Text>
                </SafeAreaView>
                <View style={{ marginTop: 20, flexDirection: 'row' }}>
                    <SafeAreaView >
                        <RadioButtonContainer values={data} onPress={onRadioButtonPress} />
                    </SafeAreaView>
                </View>

                <View>
                    <TextInput style={[styles.textInput, styles.textValColor]} placeholder="Username" placeholderTextColor="#003f5c"></TextInput>
                </View>
                <View>
                    <TextInput style={[styles.textInput, styles.textValColor]} placeholder="Password" placeholderTextColor="#003f5c" secureTextEntry={true}></TextInput>
                </View>
                <TouchableOpacity style={styles.next_button} onPress={onSignOnPress}>
                    <Text style={styles.next_button_text}>Sign on</Text>
                </TouchableOpacity>
                <View style={{backgroundColor: '#b5adad', width: '100%', height: 70, marginTop: 30, alignItems: 'center', paddingTop: 20}}>
                    <TouchableOpacity onPress={() => navigation.navigate('InvestmentStyle')}>
                        <Text >Forgot username or password?</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Text>{'\n'}</Text>
            <Text>{'\n'}</Text>
        </>
    );
};


