import React, { FC, ReactElement } from "react";
import { Button, Image, Text, View, Linking, TouchableOpacity } from "react-native";
import StyleSheet from 'react-native-media-query';
// import ProgressBar from 'react-native-animated-progress';

const sampleImage = require('../assets/images/Willingness.jpg');

export const RiskWillingness: FC<{}> = ({}): ReactElement => {

    const willingness_text = "Text related to Risk Willingness will appear here. This is a placeholder. Content will be changed. This is temporary text";
    
    const {ids, styles} = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: "column",
            backgroundColor: "white",
            borderRadius: 10,
            marginLeft: 20,
            marginRight: 20,
            marginTop: 20,
            marginBottom: 20,
        },
        heading: {
            width: "100%",
            height: 40,
            fontFamily: "Georgia, serif",
            fontSize: 20,
            marginLeft: 20,
            '@media (max-width: 1600px) and (min-width: 800px)': {
                width:400,
            }
        },
        multiButtonContainer: {
            margin: 20,
            display: "flex",
            flexDirection: 'row',
            justifyContent: 'space-evenly'
          },

        button: {
            width: 30
        }
      });
    return (
      <>
        <View style={{backgroundColor: "#e2dede"}}>
            <Text>{'\n'}</Text>
            <Text style={{marginLeft: 20, fontSize: 25}}>Your Risk Willingness</Text>
            <Text>{'\n'}</Text>
            {/* <ProgressBar progress={30} height={7} backgroundColor="#4a0072" animated={false}/> */}
            <Text style={{marginLeft: 20, fontSize: 15}}>{willingness_text}</Text>
            <View style={styles.container}>
                <Text>{'\n'}</Text>
                <Text style={styles.heading}>Aggressive</Text>
                <View style={{alignItems: 'center' }}>
                    <Text>{'\n'}</Text>
                    <Image source={sampleImage} style={{width: 80, height: 80}}/>
                    <Text>{'\n'}</Text>
                    <Text>{'\n'}</Text>
                    <Text>Risk Return: Highest growth and loss potential,</Text>
                    <Text>with higher volatility</Text>
                    <Text>(Focused mostly on asset appreciation)</Text>
                    <Text>{'\n'}</Text>
                    <Text>Mix: Mostly stocks with limited bonds</Text>
                    <Text>{'\n'}</Text>
                </View>
                
                <Text style={styles.heading} onPress={() => Linking.openURL('https://google.com')}>
                    {'Learn more about risk willingness'}
                </Text>
            </View>
            <View style={styles.multiButtonContainer}>
                <TouchableOpacity style={{backgroundColor: 'white', width: 150, height: 30, borderColor: 'red', borderRadius: 30, justifyContent: 'center', alignItems: 'center'}}>
                    <Text>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor: 'grey', width: 150, borderColor: 'red', borderRadius: 30, justifyContent: 'center', alignItems: 'center'}}>
                    <Text>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
      </>
    );
  };
  
  
 