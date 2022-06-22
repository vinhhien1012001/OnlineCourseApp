import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import * as Progress from "react-native-progress";

import {
  IconButton,
  TextButton,
  LineDivider,
  ProfileValue,
  ProfileRadioButton,
} from "../../components";
import {
  SIZES,
  FONTS,
  COLORS,
  icons,
  images,
  dummyData,
} from "../../constants";

const Profile = () => {
  const [newCourseNotification, setNewCourseNotification] =
    React.useState(false);
  const [studyReminder, setStudyReminder] = React.useState(false);

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
          backgroundColor: COLORS.primary3,
          marginTop: SIZES.padding,
          borderRadius: 20,
        }}
      >
        {/* Avatar */}
        <View
          style={{
            paddingHorizontal: SIZES.radius,
            paddingTop: SIZES.padding,
            alignItems: "center",
          }}
        >
          <Image
            source={images.student_1}
            resizeMode="contain"
            style={{
              width: 80,
              height: 80,
              borderRadius: 50,
            }}
          />
          <View
            style={{
              width: 25,
              height: 25,
              borderRadius: 50,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: COLORS.primary,
              marginTop: -15,
            }}
          >
            <IconButton
              icon={icons.camera}
              iconStyle={{
                tintColor: COLORS.white,
                width: 12,
                height: 12,
              }}
            />
          </View>
        </View>

        {/* Profile Description */}
        <View
          style={{
            paddingTop: SIZES.padding,
            flex: 1,
          }}
        >
          <Text
            style={{
              ...FONTS.h3,
              color: COLORS.white,
            }}
          >
            Samuel_Dev
          </Text>
          <Text
            style={{
              ...FONTS.body3,
              color: COLORS.white,
              paddingVertical: SIZES.radius,
            }}
          >
            Full Stack Dien Thoai
          </Text>
          {/* Progress View */}
          <View style={{ width: 200 }}>
            <Progress.Bar
              progress={0.8}
              width={200}
              color={COLORS.primary}
              backgroundColor={COLORS.white}
            />
            <View
              style={{ justifyContent: "space-between", flexDirection: "row" }}
            >
              <Text style={{ ...FONTS.body5, color: COLORS.white }}>
                Overall Progress
              </Text>
              <Text style={{ ...FONTS.body5, color: COLORS.white }}>80%</Text>
            </View>
          </View>
          <TextButton
            label={"+ Become Member"}
            contentContainerStyle={{
              width: 150,
              backgroundColor: COLORS.white,
              borderRadius: 25,
              marginVertical: SIZES.radius,
              paddingHorizontal: SIZES.base,
            }}
            labelStyle={{
              color: COLORS.primary,
              paddingVertical: 5,
              ...FONTS.h4,
            }}
          />
        </View>
      </View>
    );
  }

  function renderProfileSection1() {
    return (
      <View style={styles.profileSectionContainer}>
        <ProfileValue icon={icons.profile} label={"Name"} value="Samuel" />
        <LineDivider />
        <ProfileValue
          icon={icons.email}
          label={"Email"}
          value="samuel_dev@gmail.com"
        />
        <LineDivider />
        <ProfileValue
          icon={icons.password}
          label={"Password"}
          value="Updated 1 months ago"
        />
        <LineDivider />
        <ProfileValue
          icon={icons.call}
          label={"Contact Number"}
          value="Samuel"
        />
        <LineDivider />
        <ProfileValue
          icon={icons.profile}
          label={"Name"}
          value="+84 912 34 2290"
        />
      </View>
    );
  }

  function renderProfileSection2() {
    return (
      <View style={styles.profileSectionContainer}>
        <ProfileValue icon={icons.star_1} value="Pages" />
        <LineDivider />
        <ProfileRadioButton
          icon={icons.new_icon}
          label="New Course Notifications"
          isSelected={newCourseNotification}
          onPress={() => setNewCourseNotification(!newCourseNotification)}
        />
        <LineDivider />
        <ProfileRadioButton
          icon={icons.reminder}
          label="Study Reminder"
          isSelected={studyReminder}
          onPress={() => setStudyReminder(!studyReminder)}
        />
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

        {/* Profile Section 1 */}
        {renderProfileSection1()}

        {/* Profile Section 2 */}
        {renderProfileSection2()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  profileSectionContainer: {
    marginTop: SIZES.padding,
    paddingHorizontal: SIZES.padding,
    borderWidth: 1,
    borderRadius: SIZES.radius,
    borderColor: COLORS.gray20,
  },
});

export default Profile;
