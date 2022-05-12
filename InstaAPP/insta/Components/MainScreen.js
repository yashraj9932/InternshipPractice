import React from "react";
import { StyleSheet, Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import EntypoIcon from "react-native-vector-icons/Entypo";

import HomeTab from "./AppTabNavigator/HomeTab";
import SearchTab from "./AppTabNavigator/SearchTab";
import AddMediaTab from "./AppTabNavigator/AddMediaTab";
import LikesTab from "./AppTabNavigator/LikesTab";
import ProfileTab from "./AppTabNavigator/ProfileTab";

import { Icon } from "native-base";
const Tab = createBottomTabNavigator();

const MainScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        animationEnabled: true,
        swipeEnabled: true,
        tabBarPosition: "bottom",
        tabBarOptions: {
          style: {
            ...Platform.select({
              android: {
                backgroundColor: "white",
              },
            }),
          },
          activeTintColor: "#000",
          inactiveTintColor: "#d1cece",
          showLabel: false,
          showIcon: true,
        },
      })}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeTab}
        options={{
          tabBarIcon: ({ tintColor }) => (
            <Icon as={Ionicons} name="ios-home" style={{ color: tintColor }} />
          ),
          headerLeft: () => (
            <Icon
              as={Ionicons}
              name="ios-camera-outline"
              style={{ paddingLeft: 10 }}
            />
          ),
          title: "Instagram",
          headerTitleAlign: "center",

          headerRight: () => (
            <Icon
              as={Ionicons}
              style={{ paddingRight: 10 }}
              name="ios-send-outline"
            />
          ),
        }}
      />
      <Tab.Screen
        name="SearchTab"
        component={SearchTab}
        options={{
          tabBarIcon: ({ tintColor }) => (
            <Ionicons
              name="ios-search"
              style={{ color: tintColor, fontSize: 20 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="AddMediaTab"
        component={AddMediaTab}
        options={{
          tabBarIcon: ({ tintColor }) => (
            <Ionicons
              name={Platform.OS === "ios" ? "ios-add-circle" : "md-add-circle"}
              style={{ color: tintColor, fontSize: 20 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="LikesTab"
        component={LikesTab}
        options={{
          tabBarIcon: ({ tintColor }) => (
            <Ionicons
              name="ios-heart"
              style={{ color: tintColor, fontSize: 20 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileTab}
        options={{
          tabBarIcon: ({ tintColor }) => (
            <Ionicons
              name="person"
              style={{ color: tintColor, fontSize: 20 }}
            />
          ),
          headerLeft: () => (
            <Icon
              as={Ionicons}
              style={{ paddingLeft: 10 }}
              name="md-person-add"
            />
          ),
          title: "yash.raj.goel",
          headerTitleAlign: "center",
          headerRight: () => (
            <EntypoIcon
              name="back-in-time"
              style={{ paddingRight: 10, fontSize: 20 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
