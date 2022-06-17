import React from "react";
import { View, Text, Image, ImageBackground, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from "react-native-gesture-handler";

import {
  icons,
  images,
  SIZES,
  COLORS,
  FONTS,
  dummyData,
} from "../../constants";
import {
  IconButton,
  TextButton,
  VerticalCourseCard,
  LineDivider,
} from "../../components";

const Section = ({ containerStyle, title, children, onPress }) => {
  return (
    <View
      style={{
        height: 45,
        justifyContent: "center",
        alignItems: "center",
        ...containerStyle,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: SIZES.padding,
          paddingVertical: 5,
        }}
      >
        <Text style={{ flex: 1, ...FONTS.h2 }}>{title}</Text>
        <TextButton
          label={"See All"}
          contentContainerStyle={{
            paddingHorizontal: SIZES.padding,
            borderRadius: 25,
            height: 32,
          }}
        />
      </View>
    </View>
  );
};

const Home = () => {
  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: "row",
          marginTop: 40,
          marginBottom: 10,
          paddingHorizontal: SIZES.padding,
          alignItems: "center",
          height: 80,
        }}
      >
        {/* Greeting */}
        <View
          style={{
            flex: 1,
          }}
        >
          <Text style={{ ...FONTS.h2 }}>Hello, Samuel!</Text>
          <Text style={{ color: "gray", ...FONTS.body4 }}>
            Wednesday, 16th June 2022
          </Text>
        </View>

        {/* Notification */}
        <IconButton
          icon={icons.notification}
          iconStyle={{
            tintColor: COLORS.black,
          }}
        />
      </View>
    );
  }

  function renderStartLearning() {
    return (
      <ImageBackground
        source={images.featured_bg_image}
        style={{
          marginHorizontal: SIZES.padding,
          marginTop: SIZES.padding,
          padding: 15,
          alignItems: "flex-start",
        }}
        imageStyle={{
          borderRadius: SIZES.radius,
        }}
      >
        {/* Info */}
        <View>
          <Text style={{ color: COLORS.white, ...FONTS.body2 }}>HOW TO</Text>
          <Text
            style={{
              marginBottom: SIZES.radius,
              color: COLORS.white,
              ...FONTS.h2,
            }}
          >
            Make your brand more visible with our checklist
          </Text>
          <Text style={{ color: COLORS.white, ...FONTS.body4 }}>
            By Scott Harris
          </Text>
        </View>

        {/* Image */}
        <Image
          source={images.start_learning}
          style={{ marginTop: SIZES.padding, width: "100%", height: 110 }}
        />

        {/* Text Button */}
        <TextButton
          label={"Start Learning"}
          contentContainerStyle={{
            height: 40,
            backgroundColor: COLORS.white,
            paddingHorizontal: SIZES.padding,
            borderRadius: SIZES.padding,
          }}
          labelStyle={{ color: COLORS.black }}
        />
      </ImageBackground>
    );
  }

  function renderCourses() {
    return (
      <FlatList
        horizontal
        data={dummyData.courses_list_1}
        listKey="Courses"
        keyExtractor={(item) => `Courses-${item.id}`}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ marginTop: SIZES.padding }}
        renderItem={({ item, index }) => (
          <VerticalCourseCard
            contentContainerStyle={{
              marginLeft: index == 0 ? SIZES.padding : SIZES.radius,
              marginRight:
                index == dummyData.courses_list_1.length - 1
                  ? SIZES.padding
                  : 0,
            }}
            course={item}
          />
        )}
      />
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      {/* Header */}
      {renderHeader()}

      {/* Content */}
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 150,
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* Start Learning */}
        {renderStartLearning()}

        {/* Courses */}
        {renderCourses()}

        <LineDivider
          lineStyle={{
            marginVertical: SIZES.padding,
          }}
        />

        {/* Categories */}
        <Section title={"Categories"} />
      </ScrollView>
    </View>
  );
};

export default Home;
