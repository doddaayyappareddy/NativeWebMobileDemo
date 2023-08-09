import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import RadioButtonPortfolio from "./RadioButtonPortfolio";

export default function RadioButtonContainerPortfolio({ values, onPress }) {
  const [currentSelectedItem, setCurrentSelectedItem] = useState(0);

  const _onPress = (idx: any) => {
    onPress(idx);
    setCurrentSelectedItem(idx);
  };

  const _renderRadioButtons = () => {
    return (values || []).map((listItem: any, idx: any) => {
      let isChecked = currentSelectedItem === idx ? true : false;
      return (
        <RadioButtonPortfolio
          key={idx}
          onRadioButtonPress={() => _onPress(idx)}
          isChecked={isChecked}
          text={listItem.text}
          subText={listItem.subText}
          showMoreText={listItem.showMoreText}
          bonds={listItem.bonds}
          imageUrl={listItem.imageUrl}
          sliderPosition={listItem.sliderPosition}
        />
      );
    });
  };
  return <View>{_renderRadioButtons()}</View>;
}
