import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppLoading from "expo-app-loading";

import useFont from "./constants/useFonts";
import { MainLayout } from "./screens";

const Stack = createNativeStackNavigator();

const App = () => {
  const [IsReady, SetIsReady] = React.useState(false);

  const LoadFonts = async () => {
    await useFont();
  };

  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={() => {}}
      />
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={"Dashboard"}
      >
        <Stack.Screen name="Dashboard" component={MainLayout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
