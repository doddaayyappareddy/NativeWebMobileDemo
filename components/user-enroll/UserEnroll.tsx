import React, { FC, ReactElement } from "react";
import { Image, Text, View, Linking, TouchableOpacity, Animated } from "react-native";
import StyleSheet from 'react-native-media-query';
import Dropdown from "../ui-componrts/Dropdown";

export const UserEnroll = ({navigation}: {navigation: any}) => {

    const willingness_text = "Let's get started by learning by your investment goal - tis information will help us suggest a suitble xxxxxxxxx for you.";
    const [selected, setSelected] = React.useState("");
    const [investerCatValue, setInvesterCatValue] = React.useState(null);
    const [years, setYears] = React.useState(null);
    const [investAmt, setInvestAmt] = React.useState(null);
    const [decesion, setDecesion] = React.useState(null);
    const [isFocus, setIsFocus] = React.useState(false);
  
    const investerCat = [
        {label:'retire', value:'retire',search:'retire'},
        {label:'student', value:'student',search:'student'},
        {label:'employee', value:'employee',search:'employee'},
        {label:'house worker', value:'house worker',search:'house worker'},
        {label:'gov employee', value:'gov employee',search:'gov employee'},
    ]

    const investYears = [
        {label:'0-4 years', value:'0-4 years'},
        {label:'5-10 years', value:'5-10 years'},
        {label:'11-15 years', value:'11-15 years'},
        {label:'16-20 years', value:'16-20 years'},
        {label:'21-25 years', value:'21-25 years'},
    ]

    const initInvest = [
        {label:'$5k - $10k', value:'$5k - $10k'},
        {label:'$11k - $20k', value:'$11k - $20k'},
        {label:'v$21k - $30k', value:'$21k - $30k'},
        {label:'$31k - $40k', value:'$31k - $40k'},
        {label:'$41k - $100k', value:'$41k - $100k'},
    ]

    const investerDemand = [
        {label:'will', value:'will'},
        {label:'no', value:'no'},
    ]
  
    const {ids, styles} = StyleSheet.create({
        container: {
            flexDirection: "column",
            backgroundColor: "white",
            fontFamily: "roboto",
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
            },
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
        },
        dropdown: {
            height: 45,
            borderColor: 'gray',
            borderTopWidth: 0,
            borderBottomWidth:1,
            paddingHorizontal: 2,
            paddingBottom:1
          },
          icon: {
            marginRight: 5,
          },
          label: {
            position: 'absolute',
            backgroundColor: 'white',
            left: 22,
            top: 0,
            zIndex: 999,
            paddingHorizontal: 8,
            fontSize: 14,
          },
          placeholderStyle: {
            fontSize: 16,
          },
          selectedTextStyle: {
            fontSize: 16,
          },
          iconStyle: {
            width: 20,
            height: 20,
          },
          inputSearchStyle: {
            height: 40,
            fontSize: 16,
          },
      });
    return (
      <>
        <View style={{backgroundColor: "#e2dede"}}>
            <Text>{'\n'}</Text>
            <Text style={{marginLeft: 20, fontSize: 25, fontFamily: "Georgia, serif"}}>Welcome, ABCDEF</Text>
            <Text>{'\n'}</Text>
            {/* <ProgressBar progress={30} height={7} backgroundColor="#4a0072" animated={false}/> */}
            <Text style={{marginLeft: 20, fontSize: 15, fontFamily: "Georgia, serif"}}>{willingness_text}</Text>
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
                    <Text style={{fontSize:14,fontFamily: "Georgia, serif"}}>I'm Investing to </Text>
                     <View style={{width:150,marginTop:-25}}>     
                     <Dropdown
                        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={investerCat}
                        search={false}
                        maxHeight={300}
                        minHeight={100}
                        labelField="label"
                        valueField="value"
                        searchField="search"
                        placeholder={!isFocus ? 'Select' : ''}
                        searchPlaceholder="Search..."
                        value={investerCatValue || 'Select'}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={(item) => {
                        setInvesterCatValue(item.value);
                        setIsFocus(true);
                        }}/>
                    </View>  
                    </View>
                    <View style={styles.rowContainer}>
                    <Text style={{fontSize:14, fontFamily: "Georgia, serif"}}>I'll start needing this money in </Text>
                     <View style={{width:125,marginTop:-25}}>     
                     <Dropdown
                        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={investYears || 'Select'}
                        search={false}
                        maxHeight={300}
                        minHeight={100}
                        labelField="label"
                        valueField="value"
                        placeholder={!years ? 'Select' : ''}
                        searchPlaceholder="Search..."
                        value={years}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={(item) => {
                        setYears(item.value);
                        setIsFocus(true);
                        }}/>
                    </View>  
                    </View> 
                    <View style={styles.rowContainer}>
                    <Text style={{fontSize:14, fontFamily: "Georgia, serif"}}>I'll initiall invest </Text>
                    <View style={{width:150,marginTop:-25}}>     
                     <Dropdown
                        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={initInvest}
                        search={false}
                        maxHeight={300}
                        minHeight={100}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Select' : ''}
                        searchPlaceholder="Search..."
                        value={investAmt|| 'Select'}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={(item) => {
                        setInvestAmt(item.value);
                        setIsFocus(true);
                        }}/>
                    </View>
                    </View>  
                    <View style={[{marginLeft:'2%'},styles.rowContainer]}>
                    <Text style={{fontSize:14, width:150, textAlign:"right", fontFamily: "Georgia, serif"}}>In an emergency, I </Text>
                    <View style={{width:100,marginTop:-25}}>     
                     <Dropdown
                        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={investerDemand}
                        search={false}
                        maxHeight={300}
                        minHeight={100}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Select' : ''}
                        searchPlaceholder="Search..."
                        value={decesion || 'Select'}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={(item) => {
                        setDecesion(item.value);
                        setIsFocus(true);
                        }}/>
                    </View>
                     <Text style={{fontSize:14, fontFamily: "Georgia, serif"}}>need to </Text>
                     <Text style={{marginLeft:'24%',marginTop:10, fontFamily: "Georgia, serif"}}>access this money</Text>            
                    </View> 
                              
                </View>
                
                <Text style={{margin:20,fontSize:14, fontFamily: "Georgia, serif",}} onPress={() => Linking.openURL('https://google.com')}>
                    {'Why this information matters'}
                </Text>
            </View>
        </View>
      </>
    );
  };
  