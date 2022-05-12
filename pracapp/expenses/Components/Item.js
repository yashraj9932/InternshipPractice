import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Box, Center } from "native-base";
import Icon from "@expo/vector-icons/Ionicons";

const Item = ({ item }) => {
  const { icon, name, description, price } = item;
  return (
    <Center style={{ paddingTop: 10 }}>
      <Box style={{ maxWidth: "90%" }}>
        <Box
          alignSelf="center"
          bg="#eceff4"
          style={{
            paddingVertical: 10,
            paddingHorizontal: 30,
            borderRadius: 20,
            flexDirection: "row",
          }}
        >
          <Icon
            name={icon}
            style={{
              color: "white",
              fontSize: 20,
              backgroundColor: "#3930d8",
              padding: 12,
              marginRight: 20,
              borderRadius: 20,
            }}
          />
          <View style={{ paddingRight: 40, justifyContent: "center" }}>
            <Text style={{ fontWeight: "bold" }}>{name}</Text>
            <Text>{description}</Text>
          </View>
          <View style={{ justifyContent: "center" }}>
            <Text style={{ fontWeight: "bold" }}>{price}</Text>
          </View>
        </Box>
      </Box>
    </Center>
  );
};

export default Item;
