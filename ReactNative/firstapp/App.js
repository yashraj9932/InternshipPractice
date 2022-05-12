import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Modal,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";

const App = () => {
  const [egoal, setEgoal] = useState("");
  const [goals, setGoals] = useState([]);
  const [openn, setOpenn] = useState(false);

  const goalInputHandler = (eText) => {
    setEgoal(eText);
  };

  const addGoalHandler = () => {
    setGoals((currentGoal) => [
      ...currentGoal,
      { key: Math.random().toString(), value: egoal },
    ]);
    setOpenn(false);
  };

  const goalDelete = (goalId) => {
    setGoals((current) => {
      return current.filter((goal) => goal.key !== goalId);
    });
  };

  const cancelAdding = () => {
    setOpenn(false);
  };

  return (
    <View style={styles.root}>
      <Button title="Add New Goal" onPress={() => setOpenn(true)} />
      <Modal visible={openn} animationType="slide">
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Course Goal"
            style={styles.input}
            onChangeText={goalInputHandler}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Cancel" color="red" onPress={cancelAdding} />
            </View>
            <View style={styles.button}>
              <Button title="Add" onPress={addGoalHandler} />
            </View>
          </View>
        </View>
      </Modal>
      <FlatList
        data={goals}
        renderItem={(itemData) => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => goalDelete(itemData.item.key)}
          >
            <View style={styles.listItem}>
              <Text>{itemData.item.value}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 50,
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
  },
  button: {
    width: "40%",
  },
});

export default App;
