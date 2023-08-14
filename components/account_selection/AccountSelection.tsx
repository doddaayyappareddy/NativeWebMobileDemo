import React, { FC, ReactElement, useState } from "react";
import { Button, Image, Text, View, Linking, Animated, SafeAreaView } from "react-native";
import StyleSheet from 'react-native-media-query';
import Slider from "@react-native-community/slider";
import RadioButtonContainer from "../ui-componrts/RadioButton/RadioButtonContainer";

const sampleImage = require('../../assets/images/Willingness.jpg');

export const AccountSelection = ({ navigation }: { navigation: any }) => {
    const data = [
        {
            text: "Traditional IRA",
            subText: "Contribute pre-tax income and have taxable withdrawals.",
            showMoreText: [
                { text: 'Potential earnings grow tax-deferred.' },
                { text: 'Penality applied to some withdrawals made before age 59.5.' },
                { text: 'Required minimum distributions (RMDs) start at age 72.' },
                { text: 'No age limit to begin contributing as long as you have earned income.' }
            ],
            alertText: [
                {text:'Got it! For your Intuitive Investor Traditional \u00AE IRA, you have a few funding options.'}
            ]
        },
        {
            text: "Roth IRA",
            subText: "Contribute after-tax income and have tax-free withdrawals (If income is below the limit).",
            showMoreText: [
                { text: 'You\'ll have penalty-free access to your contributions.' },
                { text: 'Withdraw potential earnings tax-free after age 59.5 (If IRA has been open for 5+ years).' },
                { text: 'No required minimum distributions.' },
                { text: 'No age limit to begin contributing, but eligibility is based on your annual income.' }
            ]
        },
        {
            text: "Inherited Traditional IRA",
            subText: "Not Eligible for cash contributions but money grows tax-deferred.",
            showMoreText: [
                { text: 'Appropriate for non-spouse beneficiaries who inherited a Traditional IRA.' },
                { text: 'Distributions are required.' },
                { text: 'Assets can be withdrawn penalty-free (withdrawals are taxed as ordinary income).' }
            ]
        },
        {
            text: "Inherited Roth IRA",
            subText: "Not Eligible for cash contributions but money grows tax-free.",
            showMoreText: [
                { text: 'Appropriate for non-spouse beneficiaries who inherited a Roth IRA.' },
                { text: 'Distributions are required.' },
                { text: 'Assets can be withdrawn penalty-free (withdrawals are not taxed).' }
            ]
        },
        {
            text: "Simplified Employee Pension (SEP) IRA",
            subText: "Employers contribute tax-deductible money for employees.",
            showMoreText: [
                { text: 'Appropriate for self-employed individuals or small business owners.' },
                { text: 'Employees can not contribute to their account (self-employed individuals are exempt from this rule).' },
                { text: 'Potential earnings grow tax-deferred.' },
                { text: 'Penalities applied to some withdrawals made befor afe 59.5.' },
                { text: 'Required minimum distribution (RMDs) start at age 72.' },
                { text: 'Contribution limits are based on compensation with no age limit.' }
            ]
        },
        {
            text: "Individual",
            subText: "A taxable investment account owned by one person.",
            showMoreText: [
                { text: 'Appropriate for general investing and building wealth.' },
                { text: 'Potential earnings are taxable.' },
                { text: 'No contribution limits or eligibility restrictions (besides account minimum).' }
            ]
        },
        {
            text: "Joint",
            subText: "A taxable investment account owned by two people.",
            showMoreText: [
                { text: 'Appropriate for general investing and building wealth.' },
                { text: 'Potentials earnings are taxable.' },
                { text: 'No contribution limits or eligibility restrictions (besides account minimum).' },
                { text: 'Both account owners will have full account privileges (including investing, withdrawing funds, closing the account, and more).' },
                { text: 'Recommended for owners who have the same investment goal and risk tolerance in mind.' }
            ]
        },
        {
            text: "Trust",
            subText: "An account where assets are held and managed on behalf of a beneficiary.",
            showMoreText: [
                { text: 'A trust is a legal entity created by one or more grantors (typically as an estate-planning tool).' },
                { text: 'Trustee (or trustees) controls and manages assets according to the trust\'s guidelines.' },
                { text: 'This account should be opened by a trustee.' },
                { text: 'Trust accounts with non-individual trustees or grantors are ineligible for the Intuitive Investor program.' }
            ]
        },
        {
            text: "Custodial",
            subText: "An account used to transfer and invest assets on behalf of a minor.",
            showMoreText: [
                { text: 'Depending on state law, there are two account types: Uniform Gifts to Minors Act (UGMA) and Uniform Transfers to Minors Act (UTMA).' },
                { text: 'Funds are irrevocable gifts to the minor (they can only be used for the benefit of the minor).' },
                { text: 'Earnings may be taxable.' },
                { text: 'The minor receives the account assets upon reaching the age of termination (varies by state).' }
            ]
        }
    ];


    const { ids, styles } = StyleSheet.create({
        container: {
            flexDirection: "column",
            backgroundColor: "#fff",
            borderRadius: 10,
            marginLeft: 20,
            marginRight: 20,
            marginTop: 20,
            marginBottom: 20,
        },
        heading: {
            height: 40,
            fontFamily: "Helvetica, sans-serif",
            fontSize: 20,
            marginLeft: 20,
            '@media (max-width: 1600px) and (min-width: 800px)': {
                width: 400,
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
            backgroundColor: '#fff',
            borderRadius: 10,
            marginLeft: 20
        },
        absoluteFill: {
            backgroundColor: "purple",
            width: 180
        },
        hyperlink: {
            height: 40,
            fontFamily: "Helvetica, sans-serif",
            fontSize: 12,
            color: "#00698c",
            marginLeft: 20,
            marginRight: 20,
            '@media (max-width: 1600px) and (min-width: 800px)': {
                width: 400,
            }
        },
    });

    const onRadioButtonPress = (itemIdx: any) => {
        console.log("Clicked", itemIdx);
    };

    return (
        <>
            <View style={{ backgroundColor: "#f4f0ed" }}>
                <Text>{'\n'}</Text>
                <Text style={{ marginLeft: 20, fontSize: 20, fontFamily: "Helvetica, sans-serif" }}>Select an account</Text>
                <Text>{'\n'}</Text>
                <View style={styles.progressBar}>
                    <Animated.View style={styles.absoluteFill} />
                </View>
                {/* <Text>{'\n'}</Text> */}
                <View style={styles.container}>
                    <Text>{'\n'}</Text>
                    <Text style={styles.heading}>What type of retirement account would you like?</Text>
                    <Text>{'\n'}</Text>
                    <Text style={styles.hyperlink} onPress={() => Linking.openURL('https://google.com')}>
                        {'Help me choose an account type or roll over a qualified retirement plan'}
                    </Text>
                    <SafeAreaView>
                        <RadioButtonContainer values={data} onPress={onRadioButtonPress} />
                    </SafeAreaView>
                    <Text>{'\n'}</Text>
                </View>
            </View>
        </>
    );
};


