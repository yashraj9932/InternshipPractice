import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";

const genarateRandom = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const random = Math.floor(Math.random() * (max - min)) + min;
  if (random === exclude) {
    return genarateRandom(min, max, exclude);
  } else {
    return random;
  }
};

const GameScreen = (props) => {
  const [guess, setGuess] = useState(genarateRandom(1, 100, props.userChoice));
  const [round, setRound] = useState(0);
  const cLow = useRef(1);
  const cHigh = useRef(100);

  const { userChoice, gameOver } = props;

  useEffect(() => {
    if (guess === userChoice) {
      gameOver(round);
    }
  }, [guess, gameOver, userChoice]);

  const nextGuess = (direction) => {
    if (
      (direction === "lower" && guess < props.userChoice) ||
      (direction === "greater" && guess > props.userChoice)
    ) {
      Alert.alert("Jhoot", "Sahi Karle Bhai!", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      cHigh.current = guess;
    } else {
      cLow.current = guess;
    }
    const nextNum = genarateRandom(cLow.current, cHigh.current, guess);
    setGuess(nextNum);
    setRound((curr) => curr + 1);
  };

  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <NumberContainer>{guess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button
          title="Lower"
          onPress={() => {
            nextGuess("lower");
          }}
        ></Button>
        <Button
          title="Greater"
          onPress={() => {
            nextGuess("greater");
          }}
        ></Button>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
  },
});

export default GameScreen;
