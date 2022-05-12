import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import StarRating from "react-native-star-rating";
const Home = (props) => {
  return (
    <View
      style={{
        width: props.width / 2 - 30,
        height: props.width / 2 - 30,
        borderWidth: 0.5,
        borderColor: "#dddddd",
      }}
    >
      <View style={{ flex: 1 }}>
        <Image
          style={{ flex: 1, width: null, height: null, resizeMode: "cover" }}
          source={require("../../../assets/home.jpg")}
        />
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "flex-start",
          justifyContent: "space-evenly",
          paddingLeft: 10,
        }}
      >
        <Text style={{ fontSize: 10, color: "#b63838" }}>{props.type}</Text>
        <Text style={{ fontSize: 12, fontWeight: "bold" }}>{props.name}</Text>
        <Text style={{ fontSize: 10 }}>{props.price}$</Text>
        <StarRating
          disable={true}
          maxStars={5}
          rating={props.rating}
          starSize={10}
        />
      </View>
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
