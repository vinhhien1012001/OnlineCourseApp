import React from "react";
import { View, Text, TextInput, Image } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import { Shadow } from "react-native-shadow-2";
import { FlatList } from "react-native-gesture-handler";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

import { COLORS, FONTS, SIZES, dummyData, icons } from "../../constants";
import { CategoryCard, TextButton, TopSearchCard } from "../../components";

const Search = () => {
  const scrollViewRef = React.useRef();

  const scrollY = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  function renderSearchBar() {
    const inputRange = [0, 55];

    const searchBarAnimatedStyle = useAnimatedStyle(() => {
      return {
        height: interpolate(
          scrollY.value,
          inputRange,
          [55, 0],
          Extrapolate.CLAMP
        ),
        opacity: interpolate(
          scrollY.value,
          inputRange,
          [1, 0],
          Extrapolate.CLAMP
        ),
      };
    });

    return (
      <Animated.View
        style={[
          {
            position: "absolute",
            top: 50,
            left: 0,
            right: 0,
            paddingHorizontal: SIZES.padding,
            height: 50,
          },
          searchBarAnimatedStyle,
        ]}
      >
        <Shadow>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              width: SIZES.width - SIZES.padding * 2,
              paddingHorizontal: SIZES.radius,
              borderRadius: SIZES.radius,
              backgroundColor: COLORS.white,
            }}
          >
            <FontAwesome5
              style={{ width: 25, height: 25 }}
              name="search"
              size={22}
              color="black"
            />
            <TextInput
              style={{
                flex: 1,
                marginLeft: SIZES.base,
                ...FONTS.h4,
                fontSize: 15,
              }}
              placeholder={"Search for Topics, Courses & Educators"}
            />
          </View>
        </Shadow>
      </Animated.View>
    );
  }

  function renderTopSearch() {
    return (
      <View
        style={{
          paddingHorizontal: SIZES.padding,
          marginTop: SIZES.base,
        }}
      >
        <Text style={{ ...FONTS.h2, marginBottom: SIZES.radius }}>
          Top Searches
        </Text>
        <FlatList
          horizontal
          listKey="TopSearch"
          data={dummyData.top_searches}
          keyExtractor={(item) => `TopSearch-${item.id}`}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <TopSearchCard
              keyword={item}
              styleContainer={{
                marginLeft: index == 0 ? 0 : 5,
              }}
            />
          )}
        />
      </View>
    );
  }

  function renderBrowseCategories() {
    return (
      <View
        style={{
          // flex: 1,
          marginTop: SIZES.padding,
        }}
      >
        <Text
          style={{ ...FONTS.h3, fontSize: 20, marginHorizontal: SIZES.padding }}
        >
          Browse Categories
        </Text>

        <FlatList
          showsHorizontalScrollIndicator={false}
          data={dummyData.categories}
          numColumns={2}
          listKey="BrowseCategories"
          keyExtractor={(item) => `BrowseCategories-${item.id}`}
          contentContainerStyle={{
            marginTop: SIZES.padding,
          }}
          renderItem={({ item, index }) => (
            <CategoryCard
              category={item}
              containerStyle={{
                marginTop: SIZES.radius,
                width: (SIZES.width - SIZES.padding * 2 - SIZES.radius) / 2,
                marginLeft: (index + 1) % 2 == 0 ? SIZES.radius : SIZES.padding,
                height: 130,
              }}
            />
          )}
        />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <Animated.ScrollView
        ref={scrollViewRef}
        contentContainerStyle={{ marginTop: 100, paddingBottom: 300 }}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        keyboardDismissMode="on-drag"
        onScroll={onScroll}
        onScrollEndDrag={(event) => {
          if (
            event.nativeEvent.contentOffset.y > 10 &&
            event.nativeEvent.contentOffset.y < 50
          ) {
            scrollViewRef.current?.scrollTo({
              x: 0,
              y: 60,
              animated: true,
            });
          }
        }}
      >
        {/* TopSearch */}
        {renderTopSearch()}

        {/* Browse Categories */}
        {renderBrowseCategories()}
      </Animated.ScrollView>
      {/* Searching Bar */}
      {renderSearchBar()}
    </View>
  );
};

export default Search;
