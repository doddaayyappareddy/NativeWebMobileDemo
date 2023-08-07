import React, { FC, ReactElement } from "react";
import { Text, View } from "react-native";
import StyleSheet from 'react-native-media-query';

export const Header: FC<{}> = ({ }): ReactElement => {

  const { ids, styles } = StyleSheet.create({
    container: {
      flexDirection: "column",
    },
    heading: {
      fontFamily: "Georgia, serif",
      fontSize: 25,
      color: "#fff",
      textAlign: "center",
      textAlignVertical: "center",
      verticalAlign: "middle",
      backgroundColor: '#946e3a',
      height: 40,
      '@media (max-width: 1600px) and (min-width: 800px)': {
        width: 400,
        height: 100
      }
    },
    sub_heading: {
      fontFamily: "Georgia, serif",
      fontSize: 25,
      color: "black",
      textAlign: "center",
      textAlignVertical: "center",
      verticalAlign: "middle",
      backgroundColor: '#f4f0ed',
      borderBottomWidth: 1,
      borderColor: "#946e3a",
      height: 40,
      '@media (max-width: 1600px) and (min-width: 800px)': {
        width: 400,
        height: 50
      }
    }
  });
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.heading}>HEADING</Text>
        <Text style={styles.sub_heading}>Sub - Heading</Text>
      </View>
    </>
  );
};


