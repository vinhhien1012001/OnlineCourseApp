import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";

import { SIZES, FONTS, COLORS, icons } from "../constants";
import LineDivider from "./LineDivider";

const ProfileValue = ({ icon, label, value, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        height: 80,
        paddingVertical: SIZES.radius,
        flexDirection: "row",
        alignItems: "center",
      }}
      onPress={onPress}
    >
      {/* Icons */}
      <View
        style={{
          width: 40,
          height: 40,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 25,
          backgroundColor: COLORS.additionalColor11,
        }}
      >
        <Image
          source={icon}
          resizeMode="contain"
          style={{ width: 25, height: 25, tintColor: COLORS.primary }}
        />
      </View>

      {/* Label & Value */}
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ paddingLeft: SIZES.radius, flex: 1 }}>
          {label && (
            <Text style={{ ...FONTS.body4, color: COLORS.gray40 }}>
              {label}
            </Text>
          )}
          <Text style={{ ...FONTS.h3 }}>{value}</Text>
        </View>

        {/* Right Arrorw */}
        <Image
          source={icons.right_arrow}
          style={{
            width: 15,
            height: 15,
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default ProfileValue;
