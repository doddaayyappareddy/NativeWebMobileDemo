import React, { FC, ReactElement, useState } from "react";
import { Button, Image, Text, View, Linking, Animated } from "react-native";
import StyleSheet from 'react-native-media-query';
// import ProgressBar from 'react-native-animated-progress';
import Slider from "@react-native-community/slider";

const sampleImage = require('../../assets/images/Willingness.jpg');

export const RiskWillingness = ({navigation}: {navigation: any}) => {
// export const RiskWillingness: FC<{}> = (): ReactElement => {

    const willingness_text = "Text related to Risk Willingness will appear here. This is a placeholder. Content will be changed. This is temporary text";

    const [range, setRange] = useState(0);

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
            width: "100%",
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
            width: 60
        }, 
        hyperlink: {
            width: "100%",
            height: 40,
            fontFamily: "Helvetica, sans-serif",
            fontSize: 12,
            color: "#00698c",
            marginLeft: 20,
            '@media (max-width: 1600px) and (min-width: 800px)': {
                width: 400,
            }
        },
    });
    return (
        <>
            <View style={{ backgroundColor: "#f4f0ed" }}>
                <Text>{'\n'}</Text>
                <Text style={{ marginLeft: 20, fontSize: 20, fontFamily: "Helvetica, sans-serif" }}>Your Risk Willingness</Text>
                <Text>{'\n'}</Text>
                {/* <ProgressBar progress={30} height={7} backgroundColor="#4a0072" animated={false}/> */}
                <Text style={{ marginLeft: 20, marginRight: 20, fontSize: 15, fontFamily: "Georgia, serif" }}>{willingness_text}</Text>
                <Text>{'\n'}</Text>
                <View style={styles.progressBar}>
                    <Animated.View style={styles.absoluteFill} />
                </View>
                {/* <Text>{'\n'}</Text> */}
                <View style={styles.container}>
                    <Text>{'\n'}</Text>
                    <Text style={styles.heading}>Aggressive</Text>
                    <View style={{ alignItems: 'center' }}>
                        <Text>{'\n'}</Text>
                        <Image source={sampleImage} style={{ width: 80, height: 80, borderRadius: 40, borderWidth: 3 }} />
                        <Text>{'\n'}</Text>
                        <Text>{'\n'}</Text>
                        <Text style={{ fontFamily: "Georgia, serif" }}>Risk Return: Highest growth and loss potential,</Text>
                        <Text style={{ fontFamily: "Georgia, serif" }}>with higher volatility</Text>
                        <Text style={{ fontFamily: "Georgia, serif" }}>(Focused mostly on asset appreciation)</Text>
                        <Text>{'\n'}</Text>
                        <Text style={{ fontFamily: "Georgia, serif" }}>Mix: Mostly stocks with limited bonds</Text>
                        <Text>{'\n'}</Text>
                    </View>

                    <View>
                        <Slider value={8} thumbTintColor="#87190a" minimumValue={1} step={1} maximumValue={10}
                            minimumTrackTintColor="#87190a"
                            style={{ width: '90%', height: 50, marginLeft: 20}}></Slider>
                    </View>

                    <Text style={styles.hyperlink} onPress={() => Linking.openURL('https://google.com')}>
                        {'Learn more about risk willingness'}
                    </Text>
                </View>
            </View>
        </>
    );
};


