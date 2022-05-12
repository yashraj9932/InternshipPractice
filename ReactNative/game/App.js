import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";
import { useState } from "react";
import GameOverScreen from "./screens/GameOverScreen";

const App = () => {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const configureNew = () => {
    setGuess(0);
    setUserNumber(null);
  };

  const startGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  };

  const gameOver = (numRounds) => {
    setGuessRounds(numRounds);
  };

  let content = <StartGameScreen onStartGame={startGame} />;

  if (userNumber && guessRounds <= 0) {
    content = <GameScreen userChoice={userNumber} gameOver={gameOver} />;
  } else if (guessRounds > 0) {
    content = <GameOverScreen onRestart={configureNew} />;
  }

  return (
    <View styles={styles.screen}>
      <Header title="Guess A Number!" />
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default App;
