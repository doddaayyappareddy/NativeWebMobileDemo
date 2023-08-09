import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function RadioButton({ isChecked, text, onRadioButtonPress, subText }) {
    const _renderCheckedView = () => {
        return isChecked ? (
            <View style={[styles.radioButtonIconInnerIcon]} />
        ) : null;
    };

    const styles = StyleSheet.create({
        mainContainer: {
            height: 50,
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
            height: 50,
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
                subText &&
                <View style={{ flexDirection: "row", marginLeft: 50, paddingTop: 25 }}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{'\u002B' + '  '}</Text>
                    <Text style={styles.radioShowMore}>Show More</Text>
                </View>
            }
        </>
    );

}