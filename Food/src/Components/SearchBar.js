import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function SearchBar({ setSearch, submit }) {
  return (
    <View style={styles.background}>
      <Feather style={styles.icon} name="search" color="black" />
      <TextInput
        placeholder="Search"
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        onChangeText={setSearch}
        onEndEditing={submit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#cbced4",
    height: 40,
    borderRadius: 5,
    marginHorizontal: 15,
    marginVertical: 10,
    flexDirection: "row",
  },
  input: {
    flex: 1,
    fontSize: 18,
  },
  icon: {
    alignSelf: "center",
    fontSize: 32,
    marginHorizontal: 5,
  },
});
