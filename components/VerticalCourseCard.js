import React from "react";
import { TouchableOpacity, Text, Image, View } from "react-native";

import IconLabel from "./IconLabel";
import { SIZES, FONTS, COLORS, icons } from "../constants";

const VerticalCourseCard = ({ contentContainerStyle, course }) => {
  return (
    <TouchableOpacity style={{ width: 270, ...contentContainerStyle }}>
      {/* Thumbnail */}
      <Image
        source={course.thumbnail}
        resizeMode="contain"
        style={{
          width: "100%",
          height: 150,
          marginBottom: SIZES.radius,
          borderRadius: SIZES.radius,
        }}
      />

      {/* Detail */}
      <View
        style={{
          flexDirection: "row",
        }}
      >
        {/* PlayIcons */}
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: SIZES.radius,
          }}
        >
          <View
            style={{
              width: 45,
              height: 45,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 25,
              backgroundColor: COLORS.primary,
            }}
          >
            <Image
              source={icons.play}
              resizeMode="contain"
              style={{
                width: 20,
                height: 20,
              }}
            />
          </View>
        </View>

        {/* Content */}
        <View
          style={{
            paddingLeft: SIZES.radius,
            flex: 1,
          }}
        >
          <Text style={{ paddingTop: SIZES.padding, ...FONTS.h3 }}>
            {course.title}
          </Text>
          <IconLabel icon={icons.time} label={course.duration} />
          {/* <View
            style={{
              flexDirection: "row",
              height: 30,
              alignItems: "center",
              marginTop: -5,
            }}
          >
            <Image
              source={icons.time}
              resizeMode="contain"
              style={{ width: 15, height: 15 }}
            />
            <Text
              style={{
                marginLeft: SIZES.radius,
                color: COLORS.gray50,
                ...FONTS.body4,
              }}
            >
              {course.duration}
            </Text>
          </View> */}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default VerticalCourseCard;
