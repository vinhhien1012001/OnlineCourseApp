import React from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import { IconLabel } from "../components";
import LineDivider from "../components";
import { COLORS, FONTS, SIZES, icons } from "../constants";

const HorizontalCourseCard = ({ containerStyle, course }) => {
  return (
    <View style={{ ...containerStyle }}>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          width: "100%",
          marginBottom: 30,
        }}
      >
        {/* Images */}
        <View
          style={{
            height: "100%",
            width: 120,
          }}
        >
          <ImageBackground
            source={course.thumbnail}
            imageStyle={{ width: 120, height: 120, borderRadius: 10 }}
            resizeMode="cover"
            style={{
              // flex: 1,
              justifyContent: "flex-start",
              alignItems: "flex-end",
              paddingTop: 5,
              paddingRight: 5,
            }}
          >
            <View
              style={{
                height: 25,
                width: 25,
                backgroundColor: "rgba(52, 52, 52, 0.5)",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 5,
              }}
            >
              <Image
                source={
                  course.is_favourite == true
                    ? icons.favourite
                    : icons.favourite_outline
                }
                style={{
                  width: 15,
                  height: 15,
                }}
                resizeMode="contain"
              />
            </View>
          </ImageBackground>
        </View>

        {/* Content */}
        <View
          style={{
            flex: 1,
            paddingLeft: SIZES.radius,
            height: "100%",
            top: 0,
          }}
        >
          {/* Header */}
          <Text style={{ ...FONTS.h3 }}>{course.title}</Text>

          {/* Details */}
          <View
            style={{
              flexDirection: "row",
              paddingVertical: SIZES.radius,
            }}
          >
            {/* Author */}
            <Text
              style={{
                width: 120,
                ...FONTS.body5,
                color: COLORS.gray40,
              }}
            >
              By {course.instructor}
            </Text>

            {/* Time */}
            <IconLabel icon={icons.time} label={course.duration} />
          </View>
          <View style={{ flexDirection: "row" }}>
            {/* Price */}
            <Text
              style={{
                color: COLORS.primary,
                marginRight: SIZES.radius,
                ...FONTS.h2,
              }}
            >
              ${course.price.toFixed(2)}
            </Text>
            {/* Rate */}
            <IconLabel
              icon={icons.star}
              label={course.ratings}
              labelStyle={{ ...FONTS.h3, color: COLORS.black }}
            />
          </View>
        </View>
      </TouchableOpacity>
      {/* <View
        style={{
          height: 2,
          backgroundColor: COLORS.gray10,
          width: "100%",
        }}
      ></View> */}
    </View>
  );
};

export default HorizontalCourseCard;
