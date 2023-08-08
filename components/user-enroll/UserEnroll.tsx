import React, { FC, ReactElement } from "react";
import { Button, Image, Text, View, Linking, TouchableOpacity, Animated } from "react-native";
import StyleSheet from 'react-native-media-query';
import SelectList from "./SelectList";
// import ProgressBar from 'react-native-animated-progress';

export const UserEnroll = ({navigation}: {navigation: any}) => {

    const willingness_text = "Let's get started by learning by your investment goal - tis information will help us suggest a suitble xxxxxxxxx for you.";
    const [selected, setSelected] = React.useState("");
  
    const investerCat = [
        {key:'1', value:'retire'},
        {key:'2', value:'student'},
        {key:'3', value:'employee'},
        {key:'4', value:'house worker'},
        {key:'5', value:'gov employee'},
    ]

    const investYears = [
        {key:'1', value:'0-4 years'},
        {key:'2', value:'5-10 years'},
        {key:'3', value:'11-15 years'},
        {key:'4', value:'16-20 years'},
        {key:'5', value:'21-25 years'},
    ]

    const initInvest = [
        {key:'1', value:'$5k - $10k'},
        {key:'2', value:'$11k - $20k'},
        {key:'3', value:'$21k - $30k'},
        {key:'4', value:'$31k - $40k'},
        {key:'5', value:'$41k - $100k'},
    ]

    const investerDemand = [
        {key:'1', value:'will'},
        {key:'2', value:'no'},
    ]
  
    const {ids, styles} = StyleSheet.create({
        container: {
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
        },
        progressBar: {
            height: 7,
            flexDirection: "row",
            width: '90%',
            backgroundColor: 'white',
            borderRadius: 10,
            marginLeft: 20
          },
          absoluteFill : {
            backgroundColor: "purple",
            width: 30
          },
          rowContainer: {
            flexDirection: "row",
            backgroundColor: "white",
            marginTop: 1,
            color:"grey",
            marginBottom: 20,
            textAlign:'justify',
            flexWrap:"wrap",
        }
      });
    return (
      <>
        <View style={{backgroundColor: "#e2dede"}}>
            <Text>{'\n'}</Text>
            <Text style={{marginLeft: 20, fontSize: 25}}>Welcome, ABCDEF</Text>
            <Text>{'\n'}</Text>
            {/* <ProgressBar progress={30} height={7} backgroundColor="#4a0072" animated={false}/> */}
            <Text style={{marginLeft: 20, fontSize: 15}}>{willingness_text}</Text>
            <Text>{'\n'}</Text>
            <View style={styles.progressBar}>
                <Animated.View style={styles.absoluteFill}/>
            </View>
            <Text>{'\n'}</Text>
            <View style={styles.container}>
                <Text>{'\n'}</Text>
                <View style={{alignItems: 'center' }}>
                    <Text>{'\n'}</Text>
                    <Image source={require('../../assets/images/user.jpeg')}  style={{width: 100, height: 100}}/>
                    <Text>{'\n'}</Text>
                    <View style={styles.rowContainer}>
                    <Text style={{fontSize:14}}>I'm Investing to </Text><SelectList 
                            setSelected={(val:string) => setSelected(val)} 
                            data={investerCat} 
                            save="value"
                            search={false}/>
                    </View>
                    <View style={styles.rowContainer}>
                    <Text style={{fontSize:14}}>I'll start needing this money in </Text>
                    <SelectList 
                            setSelected={(val:string) => setSelected(val)} 
                            data={investYears} 
                            save="value"
                            search={false}/>
                    </View> 
                    <View style={styles.rowContainer}>
                    <Text style={{fontSize:14}}>I'll initiall invest </Text><SelectList 
                            setSelected={(val:string) => setSelected(val)} 
                            data={initInvest} 
                            save="value"
                            search={false}/>
                    </View> 
                    <View style={[{marginLeft:30 },styles.rowContainer]}>
                    <Text style={{fontSize:14, width:130, textAlign:"left"}}>In an emergency, I </Text><SelectList 
                            setSelected={(val:string) => setSelected(val)} 
                            data={investerDemand} 
                            save="value"
                            search={false}/>
                     <Text style={{fontSize:14}}>need to access this money</Text>               
                    </View> 
                              
                </View>
                
                <Text style={{margin:20,fontSize:14}} onPress={() => Linking.openURL('https://google.com')}>
                    {'Why this information matters'}
                </Text>
            </View>
        </View>
      </>
    );
  };
  