import React from "react";
import { View, Text, TextInput, Image } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import { Shadow } from "react-native-shadow-2";
import { FlatList } from "react-native-gesture-handler";

import { COLORS, FONTS, SIZES } from "../../constants";
import { CategoryCard } from "../../components";

const Search = () => {
  function renderSearchBar() {
    return (
      <View
        style={{
          marginTop: 40,
          paddingHorizontal: SIZES.padding,
          height: 50,
          borderWidth: 2,
          borderColor: "black",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <FontAwesome5 name="search" size={22} color="black" />
          <TextInput
            style={{
              flex: 1,
              paddingHorizontal: SIZES.padding,
              backgroundColor: COLORS.gray10,
              borderRadius: 5,
            }}
            placeholder={"Search for Topics, Courses & Educators"}
          />
        </View>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      {/* Searching Bar */}
      {renderSearchBar()}
    </View>
  );
};

export default Search;
