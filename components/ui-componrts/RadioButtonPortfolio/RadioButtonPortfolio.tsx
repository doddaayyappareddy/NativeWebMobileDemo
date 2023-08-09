import React from "react";
import Slider from "@react-native-community/slider";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function RadioButtonPortfolio(
    { isChecked, text, onRadioButtonPress, subText, showMoreText, bonds, imageUrl, sliderPosition }
) {

    const [icon, setIcon] = React.useState(true);

    const _renderCheckedView = () => {
        return isChecked ? (
            <View style={[styles.radioButtonIconInnerIcon]} />
        ) : null;
    };

    const toggleIcon = () => {
        return setIcon(!icon);
    };

    const styles = StyleSheet.create({
        mainContainer: {
            height: 35,
            marginTop: 5,
            marginBottom: 5,
            marginLeft: 10,
            marginRight: 10,
            justifyContent: "center",
            paddingLeft: 10,
            paddingRight: 10,
            //   borderWidth: 0.5,
            //   borderColor: "red",
            flexDirection: "row",
            alignItems: "center",
        },
        radioButtonIcon: {
            backgroundColor: "white",
            borderWidth: 1,
            //   borderColor: "red",
            height: 20,
            width: 20,
            borderRadius: 20 / 2,
            marginRight: 5,
            alignItems: "center",
            justifyContent: "center",
        },
        radioButtonIconInnerIcon: {
            height: 15,
            width: 15,
            backgroundColor: "red",
            borderRadius: 15 / 2,
            borderWidth: 3,
            borderColor: "white",
        },
        radioButtonTextContainer: {
            flex: 5,
            height: 35,
            justifyContent: "center",
            paddingLeft: 10,
        },
        radioButtonText: {
            fontSize: 14,
        },
        radioButtonSubText: {
            fontSize: 12,
            paddingLeft: 5
        },
        radioShowMore: {
            fontSize: 12,
            paddingLeft: 5,
            fontWeight: 'bold'
        },
        radioSelected: {
            borderWidth: 1
        }
    });


    return (
        <View style={isChecked ? styles.radioSelected : ''}>
            <TouchableOpacity style={styles.mainContainer} onPress={onRadioButtonPress}>
                <View style={[styles.radioButtonIcon]}>{_renderCheckedView()}</View>
                <View style={[styles.radioButtonTextContainer]}>
                    <Text style={styles.radioButtonText}>{text}</Text>
                </View>
            </TouchableOpacity>


            {
                subText &&
                <View style={{ flexDirection: "row", marginLeft: 50 }}>
                    <Text style={styles.radioButtonSubText}>{subText}</Text>
                </View>
            }

            {
                imageUrl &&
                // <Image source={imageUrl} style={{ width: "100%", height: 80, marginLeft: 50}}></Image>
                <View style={{ width: '100%', height: 50, alignItems: 'center', alignContent: 'center' }}>
                    <Slider value={sliderPosition}
                        thumbTintColor="#87190a"
                        minimumValue={1} step={1} maximumValue={10}
                        minimumTrackTintColor="#87190a"
                        style={{ width: '60%'}}>
                    </Slider>
                </View>

            }

            {
                showMoreText &&
                <View style={{ flexDirection: "column", marginLeft: 50, paddingTop: 10, marginRight: 10 }}>
                    {
                        showMoreText.map((item: any) => (
                            <View style={{ flexDirection: "row", paddingBottom: 20 }}>
                                <Text style={styles.radioButtonSubText}>{item.text}</Text>
                            </View>
                        )
                        )}
                </View>
            }

            {
                bonds &&
                <View style={{ flexDirection: "row", marginLeft: 50, paddingTop: 10, paddingBottom: 20 }}>
                    <Text style={{ fontWeight: 'bold' }}>{bonds[0]}</Text>
                    <Text style={{ marginLeft: 30, fontWeight: 'bold' }}>{bonds[1]}</Text>
                </View>
            }

        </View>
    );

}