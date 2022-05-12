import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  StatusBar,
  ScrollView,
  Image,
  Dimensions,
  Animated,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Category from "./components/Explore/Category";
import Home from "./components/Explore/Home";
import Tag from "./components/Explore/Tag";
const { height, width } = Dimensions.get("window");

const Explore = () => {
  const [scrollY, setScrollY] = useState(
    () => new Animated.Value(0, { useNativeDriver: true })
  );
  let startHeaderHeight = 80;
  let endHeaderHeight = 50;
  const [animatedHeaderHeight, setAnimationHeaderHeight] = useState(
    () => new Animated.Value(0, { useNativeDriver: true })
  );
  const [animatedOpacity, setAnimationOpacity] = useState(
    () => new Animated.Value(0, { useNativeDriver: true })
  );
  const [animatedTagTop, setAnimationTagTop] = useState(
    () => new Animated.Value(0, { useNativeDriver: true })
  );
  const [animatedMarginTop, setAnimationMarginTop] = useState(
    () => new Animated.Value(0, { useNativeDriver: true })
  );
  useEffect(() => {
    if (Platform.OS == "android") {
      startHeaderHeight = 100 + StatusBar.currentHeight;
      endHeaderHeight = 70 + StatusBar.currentHeight;
    }

    setAnimationHeaderHeight(() =>
      scrollY.interpolate({
        inputRange: [0, 50],
        outputRange: [startHeaderHeight, endHeaderHeight],
        extrapolate: "clamp",
      })
    );

    setAnimationOpacity(() =>
      animatedHeaderHeight.interpolate({
        inputRange: [endHeaderHeight, startHeaderHeight],
        outputRange: [0, 1],
        extrapolate: "clamp",
      })
    );
    setAnimationTagTop(() =>
      animatedHeaderHeight.interpolate({
        inputRange: [endHeaderHeight, startHeaderHeight],
        outputRange: [-30, 10],
        extrapolate: "clamp",
      })
    );
    setAnimationMarginTop(() =>
      animatedHeaderHeight.interpolate({
        inputRange: [endHeaderHeight, startHeaderHeight],
        outputRange: [50, 30],
        extrapolate: "clamp",
      })
    );
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Animated.View
          style={{
            height: animatedHeaderHeight,
            backgroundColor: "white",
            borderBottomWidth: 1,
            borderBottomColor: "#dddddd",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              padding: 10,
              backgroundColor: "white",
              marginHorizontal: 20,
              shadowOffset: { width: 0, height: 0 },
              shadowColor: "black",
              shadowOpacity: 0.2,
              elevation: 1,
              marginTop: Platform.OS == "android" ? 30 : null,
            }}
          >
            <Icon name="ios-search" size={20} style={{ marginRight: 10 }} />
            <TextInput
              underlineColorAndroid="transparent"
              placeholder="Try New Delhi"
              placeholderTextColor="grey"
              style={{ flex: 1, fontWeight: "700", backgroundColor: "white" }}
            />
          </View>
          <Animated.View
            style={{
              flexDirection: "row",
              marginHorizontal: 20,
              position: "relative",
              top: animatedTagTop,
              opacity: animatedOpacity,
            }}
          >
            <Tag name="Guests" />
            <Tag name="Dates" />
          </Animated.View>
        </Animated.View>
        <ScrollView
          scrollEventThrottle={16}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { y: scrollY } } },
          ])}
        >
          <View style={{ flex: 1, backgroundColor: "white", paddingTop: 20 }}>
            <Text
              style={{ fontSize: 24, fontWeight: "700", paddingHorizontal: 20 }}
            >
              What can we help you find, Varun?
            </Text>

            <View style={{ height: 130, marginTop: 20 }}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <Category
                  imageUri={require("../assets/home.jpg")}
                  name="Home"
                />
                <Category
                  imageUri={require("../assets/experiences.jpg")}
                  name="Experiences"
                />
                <Category
                  imageUri={require("../assets/restaurant.jpg")}
                  name="Resturant"
                />
              </ScrollView>
            </View>
            <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
              <Text style={{ fontSize: 24, fontWeight: "700" }}>
                Introducing Airbnb Plus
              </Text>
              <Text style={{ fontWeight: "100", marginTop: 10 }}>
                A new selection of homes verified for quality & comfort
              </Text>
              <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                <Image
                  style={{
                    flex: 1,
                    height: null,
                    width: null,
                    resizeMode: "cover",
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: "#dddddd",
                  }}
                  source={require("../assets/home.jpg")}
                />
              </View>
            </View>
          </View>
          <View style={{ marginTop: 40 }}>
            <Text
              style={{ fontSize: 24, fontWeight: "700", paddingHorizontal: 20 }}
            >
              Homes around the world
            </Text>
            <View
              style={{
                paddingHorizontal: 20,
                marginTop: 20,
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              <Home
                width={width}
                name="The Cozy Place"
                type="PRIVATE ROOM - 2 BEDS"
                price={82}
                rating={4}
              />
              <Home
                width={width}
                name="The Cozy Place"
                type="PRIVATE ROOM - 2 BEDS"
                price={82}
                rating={4}
              />
              <Home
                width={width}
                name="The Cozy Place"
                type="PRIVATE ROOM - 2 BEDS"
                price={82}
                rating={4}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default Explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
