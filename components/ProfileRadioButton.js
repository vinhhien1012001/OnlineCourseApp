import React from "react";
import { TouchableOpacity, View, Text, Image, Animated } from "react-native";

import { COLORS, FONTS, SIZES, icons } from "../constants";

const ProfileRadioButton = ({ icon, label, isSelected, onPress }) => {
  const radioAnimated = React.useRef(new Animated.Value(0)).current;

  const circleColorAnimated = radioAnimated.interpolate({
    inputRange: [0, 17],
    outputRange: [COLORS.gray40, COLORS.primary],
  });

  const lineColorAnimated = radioAnimated.interpolate({
    inputRange: [0, 17],
    outputRange: [COLORS.additionalColor4, COLORS.primary],
  });

  React.useEffect(() => {
    if (isSelected) {
      Animated.timing(radioAnimated, {
        toValue: 17,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(radioAnimated, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  }, [isSelected]);

  return (
    <View style={{ height: 80, flexDirection: "row", alignItems: "center" }}>
      {/* Icon */}
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

      {/* Label */}
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ paddingLeft: SIZES.radius, flex: 1 }}>
          {/* {label && (
            <Text style={{ ...FONTS.body4, color: COLORS.gray40 }}>
              {label}
            </Text>
          )} */}
          <Text style={{ ...FONTS.h3 }}>{label}</Text>
        </View>

        {/* Radio Button */}
        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={onPress}
        >
          <Animated.View
            style={{
              width: "100%",
              height: 5,
              borderRadius: 3,
              backgroundColor: lineColorAnimated,
            }}
          />

          <Animated.View
            style={{
              position: "absolute",
              left: radioAnimated,
              width: 25,
              height: 25,
              borderRadius: 50,
              borderWidth: 5,
              borderColor: circleColorAnimated, //Animated
              backgroundColor: COLORS.white,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileRadioButton;
