import React, { FC, ReactElement, useState } from "react";
import {Text, View, ScrollView } from "react-native";
import StyleSheet from 'react-native-media-query';

export const TermsInfoDetails = ({ navigation }: { navigation: any }) => {


const contactInfo = [
        { key: "Contact you at any phone number you provide during this online session, which may include using an autodialer or automatic dialling technology to call or text you" },
        { key: "Contact you at any email address you provide during this online session, you can revoke your aggrement to receive marketing emails at any time" },
        { key: "use personal or financial information about you from our affiliated companies to prefill the application " }
    ];


    const { ids, styles } = StyleSheet.create({
        container: {

            backgroundColor: "#fff",
            borderRadius: 10,
            marginLeft: 20,
            marginRight: 20,
            marginBottom: 20,
            height: 400,
            fontFamily: "Helvetica, sans-serif",
            fontSize: 12,
            marginLeft: 20,
            '@media (max-width: 1600px) and (min-width: 800px)': {
                     width: 400,
             }
        },
        heading: {

        },


    });

    return (
        <>

        <ScrollView>
        <View style={{alignSelf:'center',borderBottomColor:'black',borderBottomWidth:1,height:'50%',width:'100%'}}/>
           <View style={styles.container}>

               <Text>{'\n'}</Text>
               <Text> 1. You agree to provide personal information so we can comply with the mentioned XXX ACT.navigation. </Text>
               <Text>{'\n'}</Text>
               <Text> Why we collect this information. </Text>
               <Text>{'\n'}</Text>
               <Text> To help the government fight the funding terrorism and money laundering activites. Government requires financial information to
               obtain, verify and record information. </Text>
               <Text>{'\n'}</Text>
               <Text> What this means for you: </Text>
               <Text>{'\n'}</Text>
               <Text> When you open an account, we will ask for identifying information. This includes basic information like your SSN, residential address and DOB and further personal info. </Text>
               <Text>{'\n'}</Text>
               <Text> 2. You authorize our team to make inquiries considered appropriate in deciding to open and maintain your XXX account, This may include obtaining all other background reports. </Text>
               <Text>{'\n'}</Text>
               <Text> 3. You may agree that we may contact you. </Text>
               <Text>{'\n'}</Text>
               <Text> We may need to contact you about your application. By continuing, you agree that our team may: </Text>
               <Text>{'\n'}</Text>
                <View>

                                   {
                                       contactInfo.map((item) =>
                                           <Text key={item.key} style={{ fontSize: 10, marginLeft: 20, marginRight: 20, paddingTop: 10 }}>
                                               {'\u25CF' + ' '}{item.key}
                                           </Text>
                                       )
                                   }
                </View>
                <Text>{'\n'}</Text>
               <Text> 4. You acknowledge that XXX accounts are exclusively online accounts. </Text>
               <Text>{'\n'}</Text>
               <Text> 5. You certify that all information you provided is true, complete and correct. </Text>
               <Text>{'\n'}</Text>
               <Text> By selecting <Text  style={{fontWeight: "bold"}}>Agree and Continue</Text>, you agree to the above. </Text>
            </View>
            </ScrollView>
        </>
    );
};


