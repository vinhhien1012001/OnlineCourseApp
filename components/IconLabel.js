import React from "react";
import { View, Image, Text } from "react-native";

import { SIZES, FONTS, COLORS } from "../constants";

const IconLabel = ({ containerStyle, icon, iconStyle, label, labelStyle }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        ...containerStyle,
      }}
    >
      <Image
        source={icon}
        resizeMode="contain"
        style={{ width: 12, height: 12, ...iconStyle }}
      />
      <Text
        style={{
          marginLeft: 5,
          color: COLORS.gray50,
          ...FONTS.body4,
          ...labelStyle,
        }}
      >
        {label}
      </Text>
    </View>
  );
};

export default IconLabel;
