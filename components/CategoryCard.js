import React from "react";
import { TouchableOpacity, Text, ImageBackground } from "react-native";

import { FONTS, SIZES, COLORS } from "../constants";

const CategoryCard = ({ containerStyle, category }) => {
  return (
    <TouchableOpacity>
      <ImageBackground
        source={category?.thumbnail}
        resizeMode="cover"
        style={{
          width: 200,
          height: 150,
          paddingHorizontal: SIZES.radius,
          paddingVertical: SIZES.padding,
          justifyContent: "flex-end",
          ...containerStyle,
        }}
      >
        <Text style={{ color: COLORS.white, ...FONTS.h2 }}>
          {category?.title}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default CategoryCard;
