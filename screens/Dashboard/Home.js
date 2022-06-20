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
  HorizontalCourseCard,
  LineDivider,
  CategoryCard,
} from "../../components";

const Section = ({ containerStyle, title, onPress, children }) => {
  return (
    <View style={{ ...containerStyle }}>
      <View style={{ flexDirection: "row", paddingHorizontal: SIZES.padding }}>
        <Text style={{ flex: 1, ...FONTS.h2 }}>{title}</Text>
        <TextButton
          contentContainerStyle={{
            width: 80,
            borderRadius: 30,
            backgroundColor: COLORS.primary,
          }}
          label="See All"
          onPress={onPress}
        />
      </View>
      {children}
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

  function renderCategories() {
    return (
      <Section title={"Categories"}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={dummyData.categories}
          listKey="Categories"
          keyExtractor={(item) => `Categories-${item.id}`}
          contentContainerStyle={{ marginTop: SIZES.padding }}
          renderItem={({ item, index }) => (
            <CategoryCard
              category={item}
              containerStyle={{
                marginLeft: index == 0 ? SIZES.padding : SIZES.base,
                marginRight:
                  index == dummyData.categories.length - 1 ? SIZES.padding : 0,
              }}
            />
          )}
        />
      </Section>
    );
  }

  function renderPopularCourses() {
    return (
      <Section
        title={"Popular Courses"}
        containerStyle={{ marginTop: SIZES.padding }}
      >
        <FlatList
          data={dummyData.courses_list_2}
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
          listKey="PopularCourses"
          keyExtractor={(item) => `PopularCourses-${item.id}`}
          contentContainerStyle={{
            marginTop: SIZES.radius,
            paddingHorizontal: SIZES.padding,
          }}
          renderItem={({ item, index }) => (
            <HorizontalCourseCard
              course={item}
              containerStyle={{
                marginTop: index == 0 ? 5 : SIZES.padding,
              }}
            />
          )}
          ItemSeparatorComponent={() => (
            <LineDivider lineStyle={{ backgroundColor: COLORS.gray20 }} />
          )}
        />
      </Section>
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
        {renderCategories()}

        {/* Popular Courses */}
        {renderPopularCourses()}
      </ScrollView>
    </View>
  );
};

export default Home;
