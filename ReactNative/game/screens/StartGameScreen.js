import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  Keyboard,
  Alert,
  TouchableWithoutFeedback,
} from "react-native";
import Card from "../components/Card";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";

const StartGameScreen = (props) => {
  const [val, setVal] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [final, setFinal] = useState();

  const onChange = (inputText) => {
    console.log(inputText);
    setVal(inputText.replace(/[^0-9]/g, ""));
  };

  const resetInput = () => {
    setVal("");
    setConfirmed(false);
  };

  const confirmInput = () => {
    const fval = parseInt(val);
    if (isNaN(fval) || fval <= 0 || fval > 99) {
      Alert.alert("Invalid Number!", "Number has to be between 0 and 99", [
        { text: "Okay", style: "destructive", onPress: resetInput },
      ]);
      return;
    }
    setConfirmed(true);
    setFinal(fval);
    setVal("");
    // Keyboard.dismiss();
  };

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text>You selected</Text>
        <NumberContainer>{final}</NumberContainer>
        <Button
          title="Start Game"
          onPress={() => {
            props.onStartGame(final);
          }}
        />
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        // Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Start A New Game</Text>
        <Card style={styles.inputContainer}>
          <Text>Select A Number</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={onChange}
            value={val}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Reset" onPress={resetInput} color="#c717fc" />
            </View>
            <View style={styles.button}>
              <Button title="Confirm" onPress={confirmInput} color="#f7287b" />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

//shadow properties only work on iOS and elevate on android

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  button: {
    width: "40%",
  },
  input: {
    width: 50,
    textAlign: "center",
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: "center",
  },
});

export default StartGameScreen;
