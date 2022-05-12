import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const BtnComponent = (props) => {
  return (
    <View>
      {props.status === 0 ? (
        <View style={styles.btncomponent}>
          <Button
            title="Start"
            className="stopwatch-btn stopwatch-btn-gre"
            onPress={props.start}
          />
        </View>
      ) : (
        <View></View>
      )}

      {props.status === 1 ? (
        <View style={styles.btncomponent}>
          <View style={styles.btnmargin}>
            <Button
              style={styles.btnmargin}
              title="Stop"
              className="stopwatch-btn stopwatch-btn-red"
              onPress={props.stop}
            />
          </View>
          <View style={styles.btnmargin}>
            <Button
              style={styles.btnmargin}
              title="Lap"
              className="stopwatch-btn stopwatch-btn-gre"
              onPress={props.lap}
            />
          </View>
          <View style={styles.btnmargin}>
            <Button
              style={styles.btnmargin}
              title="Reset"
              className="stopwatch-btn stopwatch-btn-yel"
              onPress={props.reset}
            />
          </View>
        </View>
      ) : (
        <View></View>
      )}

      {props.status === 2 ? (
        <View style={styles.btncomponent}>
          <View style={styles.btnmargin}>
            <Button
              style={styles.btnmargin}
              title="Resume"
              className="stopwatch-btn stopwatch-btn-gre"
              onPress={props.resume}
            />
          </View>

          <View style={styles.btnmargin}>
            <Button
              style={styles.btnmargin}
              title="Lap"
              className="stopwatch-btn stopwatch-btn-gre"
              onPress={props.lap}
            />
          </View>

          <View style={styles.btnmargin}>
            <Button
              style={styles.btnmargin}
              title="Reset"
              className="stopwatch-btn stopwatch-btn-yel"
              onPress={props.reset}
            />
          </View>
        </View>
      ) : (
        <View></View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  btncomponent: {
    flexDirection: "row",
  },
  btnmargin: {
    marginRight: "1rem",
  },
});

export default BtnComponent;
