import React from "react";
import { StyleSheet, View, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { connect } from "react-redux";
import {
  changeName,
  changeStatus,
  receiveDataSuccess,
  initializeForm,
  receiveDataFailed,
  requestData,
} from "./redux/actions";
import axios from "axios";

const ROOT_ENDPOINT = "http://192.168.1.8:3001";

function Form({
  changeName,
  changeStatus,
  name,
  status,
  initializeForm,
  receiveDataSuccess,
  requestData,
}) {
  const createUser = () => {
    axios
      .post(ROOT_ENDPOINT + "/users/create", {
        name,
        status,
      })
      .then(response => {
        initializeForm();
        requestData();
        receiveDataSuccess(response.data);
      })

      .catch(error => {
        console.log(error);
        alert("Try again");
        receiveDataFailed();
      });
  };

  return (
    <View>
      <TextInput
        value={name}
        style={styles.input}
        onChangeText={changeName}
        placeholder="Name"
      />
      <TextInput
        value={status}
        style={styles.input}
        onChangeText={changeStatus}
        placeholder="Status"
      />
      <Button title="Submit" onPress={createUser} />
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
  receiveDataSuccess,
  initializeForm,
  receiveDataFailed,
  requestData,
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
