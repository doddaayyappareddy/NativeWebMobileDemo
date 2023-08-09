import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function RadioButton({ isChecked, text, onRadioButtonPress, subText, showMoreText }) {

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
    });


    return (
        <>
            <TouchableOpacity style={styles.mainContainer} onPress={onRadioButtonPress}>
                <View style={[styles.radioButtonIcon]}>{_renderCheckedView()}</View>
                <View style={[styles.radioButtonTextContainer]}>
                    <Text style={styles.radioButtonText}>{text}</Text>
                </View>
            </TouchableOpacity>

            {
                subText &&
                <View style={{ flexDirection: "row", marginLeft: 50 }}>
                    <Text style={{ fontSize: 8 }}>{'\u2B24' + '  '}</Text>
                    <Text style={styles.radioButtonSubText}>{subText}</Text>
                </View>
            }

            {
                showMoreText && !icon &&
                <View style={{ flexDirection: "column", marginLeft: 60, paddingTop: 10 }}>
                    {
                        showMoreText.map((item: any) => (
                            <View style={{ flexDirection: "row", paddingBottom: 10 }}>
                                <Text style={{ fontSize: 8 }}>{'\u2B24' + '  '}</Text>
                                <Text style={styles.radioButtonSubText}>{item.text}</Text>
                            </View>

                            // <Text key={item.text} style={{ fontSize: 10, paddingBottom: 10 }}>{'\u2B24' + ' '}{item.text}</Text>
                        )
                        )}
                </View>
            }

            {
                showMoreText &&
                <View style={{ flexDirection: "row", marginLeft: 50, paddingTop: 15 }}>
                    <TouchableOpacity onPress={() => { toggleIcon() }}>
                        {icon && <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{'\u002B' + '  '}</Text>}
                        {!icon && <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{'\u2212' + '  '}</Text>}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { toggleIcon() }}>
                        {icon && <Text style={styles.radioShowMore}>Show More</Text>}
                        {!icon && <Text style={styles.radioShowMore}>Show Less</Text>}
                    </TouchableOpacity>

                </View>
            }

        </>
    );

}