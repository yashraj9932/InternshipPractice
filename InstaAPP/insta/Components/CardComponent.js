import React from "react";
import { Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Box, Image, Button, Icon, VStack, Divider, Stack } from "native-base";

const CardComponent = (props) => {
  const images = {
    1: require("../assets/feed_images/1.jpg"),
    2: require("../assets/feed_images/2.jpg"),
    3: require("../assets/feed_images/3.png"),
  };

  return (
    <Box style={{ padding: 10 }}>
      <Stack direction="row" space="4" divider={<Divider />}>
        <Image
          source={require("../assets/me.jpg")}
          style={{
            height: 30,
            width: 30,

            borderRadius: 30,
          }}
          alt="Alternate Text"
        />
        <Box>
          <Text>Varun </Text>
          <Text note>Jan 15, 2018</Text>
        </Box>
      </Stack>
      <VStack>
        <Image
          source={images[props.imageSource]}
          style={{ height: 200, width: null, flex: 1 }}
          alt="
            Alternate
            Text"
        />
      </VStack>
      <Stack direction="row" style={{ height: 45 }}>
        <Button style={{ color: "black", backgroundColor: "white" }}>
          <Icon as={Ionicons} name="ios-heart-outline" />
        </Button>
        <Button style={{ color: "black", backgroundColor: "white" }}>
          <Icon as={Ionicons} name="ios-chatbubbles-outline" />
        </Button>
        <Button style={{ color: "black", backgroundColor: "white" }}>
          <Icon as={Ionicons} name="ios-send-outline" />
        </Button>
      </Stack>

      <Box style={{ height: 20 }}>
        <Text>{props.likes} likes </Text>
      </Box>
      <Box>
        <Text>
          <Text style={{ fontWeight: "900" }}>varun</Text>
          Ea do Lorem occaecat laborum do. Minim ullamco ipsum minim eiusmod
          dolore cupidatat magna exercitation amet proident qui. Est do irure
          magna dolor adipisicing do quis labore excepteur. Commodo veniam
          dolore cupidatat nulla consectetur do nostrud ea cupidatat ullamco
          labore. Consequat ullamco nulla ullamco minim.
        </Text>
      </Box>
    </Box>
  );
};
export default CardComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
