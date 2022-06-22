import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { SIZES, FONTS, COLORS } from "../constants";

const TopSearchCard = ({ styleContainer, keyword, styleKeywords }) => {
  return (
    <TouchableOpacity
      style={{
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.gray10,
        borderRadius: 10,
        ...styleContainer,
      }}
    >
      <Text
        style={{
          color: COLORS.gray50,
          paddingHorizontal: SIZES.padding,
          ...FONTS.h4,
          ...styleKeywords,
        }}
      >
        {keyword.label}
      </Text>
    </TouchableOpacity>
  );
};

export default TopSearchCard;
