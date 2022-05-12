import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Container, Icon, Box, Button } from "native-base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
var { height, width } = Dimensions.get("window");

import CardComponent from "../CardComponent";

var images = [
  require("../../assets/feed_images/1.jpg"),
  require("../../assets/feed_images/2.jpg"),
  require("../../assets/feed_images/3.png"),
  require("../../assets/feed_images/4.jpg"),
  require("../../assets/feed_images/5.jpg"),
  require("../../assets/feed_images/6.jpg"),
  require("../../assets/feed_images/7.jpg"),
  require("../../assets/feed_images/8.png"),
  require("../../assets/feed_images/9.jpg"),
  require("../../assets/feed_images/10.jpg"),
  require("../../assets/feed_images/11.jpg"),
  require("../../assets/feed_images/12.jpg"),
];

const ProfileTab = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const segmentClicked = (index) => {
    setActiveIndex(index);
  };
  const checkActive = (index) => {
    if (activeIndex !== index) {
      return { color: "grey" };
    } else {
      return {};
    }
  };

  const renderSectionOne = () => {
    return images.map((image, index) => {
      return (
        <View
          key={index}
          style={[
            { width: width / 3 },
            { height: width / 3 },
            { marginBottom: 2 },
            index % 3 !== 0 ? { paddingLeft: 2 } : { paddingLeft: 0 },
          ]}
        >
          <Image
            style={{
              flex: 1,
              alignSelf: "stretch",
              width: undefined,
              height: undefined,
            }}
            source={image}
          ></Image>
        </View>
      );
    });
  };

  const renderSection = () => {
    if (activeIndex == 0) {
      return (
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          <>{renderSectionOne()}</>
        </View>
      );
    } else if (activeIndex == 1) {
      console.log("renderSectionTwo");
      return (
        <View>
          <CardComponent imageSource="1" likes="101" />
          <CardComponent imageSource="2" likes="101" />
          <CardComponent imageSource="3" likes="101" />
        </View>
      );
    }
  };

  return (
    <Container style={styles.container}>
      <Box>
        <View style={{ paddingTop: 10 }}>
          {/** User Photo Stats**/}
          <View style={{ flexDirection: "row" }}>
            {/**User photo takes 1/3rd of view horizontally **/}
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <Image
                source={require("../../assets/me.jpg")}
                style={{ width: 75, height: 75, borderRadius: 37.5 }}
              />
            </View>

            {/**User Stats take 2/3rd of view horizontally **/}
            <View style={{ flex: 3 }}>
              {/** Stats **/}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "flex-end",
                }}
              >
                <View style={{ alignItems: "center" }}>
                  <Text>20</Text>
                  <Text style={{ fontSize: 10, color: "grey" }}>Posts</Text>
                </View>
                <View style={{ alignItems: "center" }}>
                  <Text>205</Text>
                  <Text style={{ fontSize: 10, color: "grey" }}>Followers</Text>
                </View>
                <View style={{ alignItems: "center" }}>
                  <Text>167</Text>
                  <Text style={{ fontSize: 10, color: "grey" }}>Following</Text>
                </View>
              </View>

              {/**Edit profile and Settings Buttons **/}
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "flex-start",
                  paddingTop: 10,
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  {/** Edit profile takes up 3/4th **/}
                  <Button
                    variant="outline"
                    colorScheme="dark"
                    style={{
                      flex: 3,
                      marginLeft: 10,
                      justifyContent: "center",
                      height: 34,
                      backgroundColor: "white",
                    }}
                  >
                    <Text>Edit Profile</Text>
                  </Button>

                  {/** Settings takes up  1/4th place **/}
                  <Button
                    variant="outline"
                    colorScheme="dark"
                    style={{
                      flex: 1,
                      height: 34,
                      marginRight: 10,
                      backgroundColor: "white",
                      marginLeft: 5,
                      padding: 2,
                      justifyContent: "center",
                    }}
                  >
                    <Icon
                      as={Ionicons}
                      name="settings"
                      style={{
                        color: "black",
                        backgroundColor: "white",
                        fontSize: 20,
                      }}
                    ></Icon>
                  </Button>
                </View>
              </View>
              {/**End edit profile**/}
            </View>
          </View>

          <View style={{ paddingBottom: 10 }}>
            <View style={{ paddingHorizontal: 10 }}>
              <Text style={{ fontWeight: "bold" }}>Yash Raj Goel</Text>
              <Text>Lark | Computer Jock | Commercial Pilot</Text>
              <Text>www.unsureprogrammer.com</Text>
            </View>
          </View>
        </View>

        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              borderTopWidth: 1,
              borderTopColor: "#eae5e5",
              backgroundColor: "white",
            }}
          >
            <Button
              onPress={() => segmentClicked(0)}
              active={activeIndex == 0}
              style={{ backgroundColor: "white" }}
            >
              <Icon
                as={Ionicons}
                name="ios-apps-outline"
                style={[activeIndex == 0 ? {} : { color: "grey" }]}
              ></Icon>
            </Button>
            <Button
              onPress={() => segmentClicked(1)}
              active={activeIndex == 1}
              style={{ backgroundColor: "white" }}
            >
              <Icon
                as={Ionicons}
                name="ios-list-outline"
                style={[
                  { fontSize: 32 },
                  activeIndex == 1 ? {} : { color: "grey" },
                ]}
              ></Icon>
            </Button>
            <Button
              onPress={() => segmentClicked(2)}
              transparent
              active={activeIndex == 2}
              style={{ backgroundColor: "white" }}
            >
              <Icon
                as={Ionicons}
                name="ios-bookmark-outline"
                style={activeIndex == 2 ? {} : { color: "grey" }}
              ></Icon>
            </Button>
            <Button
              onPress={() => segmentClicked(3)}
              transparent
              last
              style={{ backgroundColor: "white" }}
              active={activeIndex == 3}
            >
              <Icon
                as={Ionicons}
                name="ios-people-outline"
                style={[
                  { fontSize: 32 },
                  activeIndex == 3 ? {} : { color: "grey" },
                ]}
              ></Icon>
            </Button>
          </View>

          {/** Height =width/3 so that image sizes vary according to size of the phone yet remain squares **/}

          {renderSection()}
        </View>
      </Box>
    </Container>
  );
};

export default ProfileTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    maxWidth: "100%",
    width: "100%",
  },
});
