import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SearchTab = () => {
  return (
    <View style={styles.container}>
      <Text>SearchTab</Text>
    </View>
  );
};
export default SearchTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
