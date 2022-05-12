import React from "react";
import { StyleSheet, Text, View, Image, Platform } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";

import { Ionicons } from "@expo/vector-icons";

import Explore from "./screens/Explore";
import Saved from "./screens/Saved";
import Inbox from "./screens/Inbox";
import Trips from "./screens/Trips";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            activeTintColor: "red",
            inactiveTintColor: "grey",
            style: {
              backgroundColor: "white",
              borderTopWidth: 0,
              shadowOffset: { width: 5, height: 3 },
              shadowColor: "black",
              shadowOpacity: 0.5,
              elevation: 5,
            },
          }}
        >
          <Tab.Screen
            name="Explore"
            component={Explore}
            navigationOptions={{
              tabBarLabel: "EXPLORE",
              tabBarIcon: ({ tintColor }) => (
                <Ionicons
                  name={
                    Platform.OS == "ios"
                      ? "ios-search-outline"
                      : "md-search-outline"
                  }
                  color={tintColor}
                  size={24}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Saved"
            component={Saved}
            navigationOptions={{
              tabBarLabel: "SAVED",
              tabBarIcon: ({ tintColor }) => (
                <Ionicons
                  name="ios-heart-outline"
                  color={tintColor}
                  size={24}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Trips"
            component={Trips}
            navigationOptions={{
              tabBarLabel: "TRIPS",
              tabBarIcon: ({ tintColor }) => (
                <Image
                  source={require("./assets/airbnb.png")}
                  style={{ height: 24, width: 24, tintColor: tintColor }}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Inbox"
            component={Inbox}
            navigationOptions={{
              tabBarLabel: "INBOX",
              tabBarIcon: ({ tintColor }) => (
                <Ionicons
                  name="ios-chatboxes-outline"
                  color={tintColor}
                  size={24}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Inbox}
            navigationOptions={{
              tabBarLabel: "PROFILE",
              tabBarIcon: ({ tintColor }) => (
                <Ionicons
                  name="ios-person-outline"
                  color={tintColor}
                  size={24}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
