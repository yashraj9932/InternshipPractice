import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Box, Center } from "native-base";
import Item from "./Item";

const Dashboard = () => {
  const [items, setItems] = useState([
    {
      icon: "menu-outline",
      name: "Coffee",
      description: "with Yash Raj",
      price: "$50",
    },
    {
      icon: "person",
      name: "Coffee",
      description: "with Yash Raj",
      price: "$50",
    },
    {
      icon: "person",
      name: "Coffee",
      description: "with Yash Raj",
      price: "$50",
    },
    {
      icon: "person",
      name: "Coffee",
      description: "with Yash Raj",
      price: "$50",
    },
  ]);
  return (
    <Center style={{ backgroundColor: "#FFFFFF", flex: 1 }}>
      <Box style={{ maxWidth: "80%" }}>
        <Box
          alignSelf="flex-start"
          bg="#080707"
          style={{
            paddingVertical: 30,
            paddingHorizontal: 30,
            borderRadius: 30,
            flexDirection: "row",
          }}
        >
          <Text style={{ color: "white", fontSize: 30, paddingRight: 60 }}>
            $ 17,800{" "}
          </Text>
          <View style={{ justifyContent: "flex-end" }}>
            <Text style={{ color: "white", fontSize: 12 }}>USD</Text>
          </View>
        </Box>
        <View
          alignItems="center"
          style={{ flexDirection: "row", paddingTop: 40, paddingBottom: 10 }}
        >
          <Text style={{ flex: 1, fontWeight: "bold" }}>All Expenses</Text>
          <Text style={{ padding: 5, backgroundColor: "#eceff4" }}>
            View All
          </Text>
        </View>
        <View>
          <Text>Today</Text>
        </View>
        {items.map((item, index) => {
          return <Item key={index} item={item} />;
        })}
      </Box>
    </Center>
  );
};

export default Dashboard;
