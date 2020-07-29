import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function ModalScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is a modal!</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 40,
  },
});
