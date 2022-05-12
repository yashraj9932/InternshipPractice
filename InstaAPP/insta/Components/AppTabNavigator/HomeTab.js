import React from "react";
import { StyleSheet, Text } from "react-native";

import { View, Box, ScrollView, Image } from "native-base";
import CardComponent from "../CardComponent";
import { Ionicons } from "@expo/vector-icons";
import { Icon } from "native-base";

const HomeTab = () => {
  return (
    <Box style={styles.container}>
      <View style={{ height: 100 }}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 7,
            paddingTop: 7,
          }}
        >
          <Text style={{ fontWeight: "bold" }}>Stories</Text>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon as={Ionicons} name="md-play" style={{ fontSize: 14 }}></Icon>
            <Text style={{ fontWeight: "bold" }}> Watch All</Text>
          </View>
        </View>
        <View style={{ flex: 3 }}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              alignItems: "center",
              paddingStart: 5,
              paddingEnd: 5,
            }}
          >
            <Image
              style={{
                marginHorizontal: 5,
                borderColor: "pink",
                borderRadius: 30,
                borderWidth: 2,
                height: 50,
                width: 50,
              }}
              source={require("../../assets/StoriesHeaderThumbnails/1.jpg")}
              alt="Alternate Image"
            />
            <Image
              style={{
                marginHorizontal: 5,
                borderColor: "pink",
                borderWidth: 2,
                borderRadius: 30,
                height: 50,
                width: 50,
              }}
              alt="Alternate Image"
              source={require("../../assets/StoriesHeaderThumbnails/2.jpg")}
            />
            <Image
              style={{
                marginHorizontal: 5,
                borderColor: "pink",
                borderRadius: 30,
                borderWidth: 2,
                height: 50,
                width: 50,
              }}
              alt="Alternate Image"
              source={require("../../assets/StoriesHeaderThumbnails/3.jpg")}
            />
            <Image
              style={{
                marginHorizontal: 5,
                borderColor: "pink",
                borderRadius: 30,
                borderWidth: 2,
                height: 50,
                width: 50,
              }}
              alt="Alternate Image"
              source={require("../../assets/StoriesHeaderThumbnails/4.jpg")}
            />

            <Image
              style={{
                marginHorizontal: 5,
                borderColor: "pink",
                borderRadius: 30,
                borderWidth: 2,
                height: 50,
                width: 50,
              }}
              alt="Alternate Image"
              source={require("../../assets/StoriesHeaderThumbnails/5.jpg")}
            />
            <Image
              source={require("../../assets/StoriesHeaderThumbnails/6.jpg")}
              style={{
                marginHorizontal: 5,
                borderColor: "pink",
                borderRadius: 30,
                borderWidth: 2,
                height: 50,
                width: 50,
              }}
              alt="Alternate Image"
            />
            <Image
              style={{
                marginHorizontal: 5,
                borderColor: "pink",
                borderWidth: 2,
                borderRadius: 30,
                height: 50,
                width: 50,
              }}
              alt="Alternate Image"
              source={require("../../assets/StoriesHeaderThumbnails/7.jpg")}
            />
          </ScrollView>
        </View>
      </View>
      <ScrollView>
        <CardComponent imageSource="1" likes="101" />
        <CardComponent imageSource="2" likes="201" />
        <CardComponent imageSource="3" likes="301" />
      </ScrollView>
    </Box>
  );
};
export default HomeTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
