import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { selectCount, increment, decrement } from "./redux/counterSlice";

export default function HomeScreen() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text>Home!</Text>
      <Text>{count}</Text>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={() => dispatch(increment())}>
          <Text style={styles.titleStyle}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => dispatch(decrement())}>
          <Text style={styles.titleStyle}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttons: {
    flexDirection: "row",
  },
  titleStyle: {
    fontSize: 26,
    padding: 15,
  },
});
