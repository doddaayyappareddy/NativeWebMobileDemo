import React, { FC, ReactElement, useState } from "react";
import { Text, ScrollView, View, TouchableOpacity } from "react-native";
import StyleSheet from 'react-native-media-query';
import AwesomeAlert from "react-native-awesome-alerts";

export const ButtonsComp = ({ navigation }: { navigation: any }) => {
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
    const [showPopup, setShowPopup] = useState(false);
    return (
        <>
            {showPopup && <AwesomeAlert show={true}
                showProgress={false}
                titleStyle={{ color: 'black', fontWeight: 'bold' }}
                title="Are you sure?"
                message={
                    <View style={{ width: 300,}}>

                        <ScrollView>
                            <Text style={{ height: 70, width: 300, color: 'black', fontSize: 12, paddingRight:10 }}>{'\n'}
                                Your response seems inconsistent with your investment risk answer. Select "No" to review or update
                                your response to the last question. Select "Yes" to continue. {'\n'}{'\n'}</Text>
                        </ScrollView>

                    </View>
                }
                messageStyle={{ }}
                closeOnTouchOutside={false}
                closeOnHardwareBackPress={false}
                showCancelButton={true}
                showConfirmButton={true}
                cancelText="No"
                confirmText="Yes"
                confirmButtonTextStyle={{ width: 50, textAlign: 'center', fontWeight: "bold" }}
                confirmButtonColor="#DD6B55"
                onConfirmPressed={() => {
                    setShowPopup(false)
                    navigation.navigate('PortfolioSelection')
                }}
                confirmButtonStyle={{ borderColor: '#87190a', borderWidth: 2, borderRadius: 30, backgroundColor: '#87190a', }}
                cancelButtonTextStyle={{ width: 50, textAlign: 'center', color: '#87190a', borderColor: '#87190a', fontWeight: "bold" }}
                onCancelPressed={() => { setShowPopup(false) }}
                cancelButtonStyle={{ borderColor: '#87190a', borderWidth: 2, borderRadius: 30 }}
            />
            }
            {!showPopup && <View style={styles.multiButtonContainer}>
                <TouchableOpacity style={styles.back_button} onPress={() => navigation.navigate('Risk')}>
                    <Text style={styles.back_button_text}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.next_button} onPress={() => setShowPopup(true)}>
                    <Text style={styles.next_button_text}>Next</Text>
                </TouchableOpacity>
            </View>
            }
        </>
    );
};


