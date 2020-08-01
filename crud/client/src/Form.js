import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { changeName, changeStatus } from "./redux/actions";

function Form({ changeName, changeStatus }) {
  return (
    <View>
      <TextInput style={styles.input} onChangeText={changeName} placeholder="Name" />
      <TextInput
        style={styles.input}
        onChangeText={changeStatus}
        placeholder="Status"
      />
      <Button title="Submit" />
    </View>
  );
}

const state = state => ({
  name: state.formReducer.name,
  status: state.formReducer.status,
});

const dispatch = {
  changeName,
  changeStatus,
};

export default connect(state, dispatch)(Form);

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 5,
    margin: 3,
    height: 25,
    borderBottomColor: "gray",
  },
});
