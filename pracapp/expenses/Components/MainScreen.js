import { StyleSheet, Text, View } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Icon from "@expo/vector-icons/Ionicons";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

import { Image } from "native-base";

import Dashboard from "./Dashboard";
import Entry from "./Entry";
import Profile from "./Profile";

const Tab = createBottomTabNavigator();

const MainScreen = ({ navigation }) => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerLeft: ({ tintColor }) => (
            <MaterialCommunityIcons
              name="view-dashboard-outline"
              style={{ color: tintColor, fontSize: 20, paddingLeft: 20 }}
            />
          ),
          title: "Dashboard",
          headerRight: ({ tintColor }) => (
            <Image
              source={require("../assets/01.jpg")}
              style={{
                height: 40,
                width: 40,
                marginRight: 20,
                borderRadius: 10,
              }}
              alt="No Image"
            />
          ),
          tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-home" style={{ color: tintColor, fontSize: 20 }} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerLeft: () => {},
          title: "yash.raj.goel",
          headerTitleAlign: "center",
          headerRight: () => {},
          tabBarIcon: ({ tintColor }) => (
            <Icon name="person" style={{ color: tintColor, fontSize: 20 }} />
          ),
        }}
      />
      <Tab.Screen
        name="Entry"
        component={Entry}
        options={{
          headerLeft: () => (
            <MaterialIcons
              name="arrow-back-ios"
              size={24}
              color="black"
              style={{ paddingLeft: 30 }}
              onPress={() => navigation.goBack()}
            />
          ),
          title: "Add Amount",
          headerRight: () => {},
          tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-add" style={{ color: tintColor, fontSize: 30 }} />
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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
