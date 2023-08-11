import React, { FC, ReactElement, useState } from "react";
import { TouchableOpacity, Button, Text, ScrollView, View } from "react-native";
import StyleSheet from 'react-native-media-query';
import AwesomeAlert from "react-native-awesome-alerts";
import { TermsInfoDetails } from "./TermsInfoDetails";
import {useDetectDevice} from '../toolkits';

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
   {
    !useDetectDevice.isAndroid   &&  <View style={styles.container}>

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
           }

{
    useDetectDevice.isAndroid   &&  <ScrollView>

                    <AwesomeAlert messageStyle={{marginTop:8,maxHeight:800}}
                      show={true}
                      showProgress={false}
                      title={title}
                      message={` 1. You agree to provide personal information so we can comply with the mentioned XXX ACT.navigation.
 Why we collect this information.
To help the government fight the funding terrorism and money laundering activites. Government requires financial information to obtain, verify and record information. 
What this means for you: 
When you open an account, we will ask for identifying information. This includes basic information like your SSN, residential address and DOB and further personal info. 
2. You authorize our team to make inquiries considered appropriate in deciding to open and maintain your XXX account, This may include obtaining all other background reports. 
3. You may agree that we may contact you. 
We may need to contact you about your application. By continuing, you agree that our team may: 
   ● Contact you at any phone number you provide during this online session, which may include using an autodialer or automatic dialling technology to call or text you
   ● Contact you at any email address you provide during this online session, you can revoke your aggrement to receive marketing emails at any time
   ● use personal or financial information about you from our affiliated companies to prefill the application 
4. You acknowledge that XXX accounts are exclusively online accounts. 
5. You certify that all information you provided is true, complete and correct. 
   By selecting Agree and Continue, you agree to the above.`}
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
                </ScrollView>
           }
        </>
        );
};
