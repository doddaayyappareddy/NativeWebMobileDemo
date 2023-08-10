import React, { FC, ReactElement, useState } from "react";
import { TouchableOpacity, Button, Text, ScrollView, View } from "react-native";
import StyleSheet from 'react-native-media-query';
import AwesomeAlert from "react-native-awesome-alerts";
import { TermsInfoDetails } from "./TermsInfoDetails";

export const TermsAlert= ({navigation}: {navigation: any})=>{

const title = "Please agree to the following information before continuing";

const { ids, styles } = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            paddingTop: 240,
            height: '100%',
          },
       });
return (
        <>

            <View style={styles.container}>

                    <AwesomeAlert
                      show={true}
                      showProgress={false}
                      title={title}
                      message={<TermsInfoDetails/>}
                      closeOnTouchOutside={false}
                      closeOnHardwareBackPress={false}
                      showCancelButton={false}
                      showConfirmButton={true}
                      confirmText="Agree and Continue"
                      confirmButtonColor="#DD6B55"
                      onConfirmPressed={() => {
                        navigation.navigate('CompletionPage')
                      }}
                    />
                </View>



        </>
        );
};
