import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";

import { IconButton, TextButton, LineDivider } from "../../components";
import { SIZES, FONTS, COLORS, icons, images } from "../../constants";

const Profile = () => {
  function renderHeader() {
    return (
      <View
        style={{
          marginTop: 40,
          width: "100%",
          paddingHorizontal: SIZES.padding,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ ...FONTS.h2, fontSize: 25 }}>Profile</Text>
        <IconButton
          icon={icons.sun}
          iconStyle={{
            tintColor: COLORS.black,
          }}
        />
      </View>
    );
  }

  function renderProfileCard() {
    return (
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: SIZES.padding,
          backgroundColor: COLORS.primary3,
          marginTop: SIZES.padding,
          borderRadius: 20,
          height: 200,
        }}
      >
        {/* Avatar */}
        <View style={{ paddingTop: SIZES.padding }}>
          <Image
            source={images.student_1}
            resizeMode="contain"
            style={{
              width: 80,
              height: 80,
              borderRadius: 50,
            }}
          />
        </View>

        {/* Profile Descripe */}
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      {/* Header */}
      {renderHeader()}

      {/* Container */}
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: SIZES.padding,
          paddingBottom: 150,
        }}
      >
        {/* Profile Card */}
        {renderProfileCard()}
      </ScrollView>
    </View>
  );
};

export default Profile;
