import React from "react";
import { View } from "react-native";

import { COLORS } from "../constants";

const LineDivider = ({ lineStyle }) => {
  return (
    <View
      style={{
        height: 2,
        backgroundColor: COLORS.gray10,
        width: "100%",
        ...lineStyle,
      }}
    ></View>
  );
};

export default LineDivider;
