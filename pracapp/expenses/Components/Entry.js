import React from "react";
import { View, Text, TextInput } from "react-native";
import { Box, VStack, HStack } from "native-base";

const Entry = () => {
  const [text, setText] = React.useState("");

  const onChangeText = (text) => {
    setText(text);
  };

  const handleChange = (text) => setValue(text);

  return (
    <Box alignItems="center" style={{ backgroundColor: "white", flex: 1 }}>
      <VStack>
        <Text style={{ fontWeight: "bold", color: "grey" }}>Amount</Text>

        <Box
          style={{
            marginBottom: 30,
            alignItems: "flex-end",
            flexDirection: "row",
            color: "black",
          }}
        >
          <Text>$</Text>
          <TextInput
            value={text}
            keyboardType="numeric"
            style={{
              paddingRight: 90,
              paddingLeft: 15,
              fontSize: 40,
              color: "black",
              paddingBottom: 0,
              marginBottom: -10,
            }}
            w="75%"
            maxLength={300}
            onChangeText={onChangeText}
            placeholder="500"
          />
          <Text>USD</Text>
        </Box>
        <View style={{ borderWidth: 1, borderStyle: "solid" }}></View>
      </VStack>
    </Box>
  );
};

export default Entry;
