import { StyleSheet, View, Text } from "react-native";
import React from "react";
import StopW from "./components/StopW";

const App = () => {
  return (
    <View style={styles.container}>
      <StopW />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    transform: [{ translateY: "-5rem" }],
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
