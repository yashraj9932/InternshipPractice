import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";

// The default axis for the flex is column(not like row in webdev) and though
//in web dev divs dont use flexbox by default here the views use flexbox by default
//justify content is for main axis while alignitems is for cross axis
//we can do stretch in the cross axis but not on the main axis

//we apply the flex property to the child element

const App2 = () => {
  return (
    <View
      style={{
        padding: 50,
        flexDirection: "row",
        width: "80%",
        height: 300,
        justifyContent: "space-around",
        alignItems: "stretch",
      }}
    >
      <View
        style={{
          backgroundColor: "red",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>1</Text>
      </View>
      <View
        style={{
          backgroundColor: "blue",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>2</Text>
      </View>
      <View
        style={{
          backgroundColor: "green",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>3</Text>
      </View>
    </View>
  );
};

export default App2;
