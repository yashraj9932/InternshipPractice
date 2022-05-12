import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import DisplayComponent from "./DisplayComponent";
import BtnComponent from "./BtnComponent";

const StopW = () => {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
  const [lapv, setLapv] = useState([]);

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  };

  var updatedMs = time.ms,
    updatedS = time.s,
    updatedM = time.m,
    updatedH = time.h;

  const run = () => {
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    if (updatedMs === 100) {
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH });
  };

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ ms: 0, s: 0, m: 0, h: 0 });
    setLapv([]);
  };

  const resume = () => start();

  const lap = () => {
    setLapv([...lapv, time]);
  };

  return (
    <View style={styles.mainsection}>
      <View style={styles.stopwatch}>
        <DisplayComponent time={time} />
        {lapv &&
          lapv.map((lapp, i) => {
            return (
              <View style={styles.laps} key={i}>
                {lapp.h !== 0 ? <Text>{lapp.h}</Text> : <View></View>}
                <Text>{lapp.m} : </Text>
                <Text>{lapp.s} : </Text>
                <Text>{lapp.ms}</Text>
              </View>
            );
          })}
        <BtnComponent
          status={status}
          resume={resume}
          reset={reset}
          stop={stop}
          start={start}
          lap={lap}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainsection: {},
  stopwatch: {},
  laps: {
    flexDirection: "row",
  },
  lol: {},
});

export default StopW;
