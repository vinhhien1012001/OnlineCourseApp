import React from "react";
import { Text, TouchableOpacity } from "react-native";

import { FONTS, COLORS } from "../constants";

const TextButton = ({
  contentContainerStyle,
  disabled,
  label,
  labelStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.primary,
        ...contentContainerStyle,
      }}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={{ color: COLORS.white, ...FONTS.h3, ...labelStyle }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default TextButton;
