import React, { useEffect, useState } from "react";
import { StyleSheet, Text, Button, ScrollView } from "react-native";
import { connect } from "react-redux";
import { requestData, receiveDataSuccess } from "./redux/actions";
import axios from "axios";
import { FlatList, TextInput } from "react-native-gesture-handler";

const ROOT_ENDPOINT = "http://192.168.1.8:3001";

function List({ requestData, receiveDataSuccess, isFetching, users }) {
  const [status, setStatus] = useState("");

  useEffect(() => {
    requestData();
    axios
      .get(ROOT_ENDPOINT + "/users")
      .then(response => {
        receiveDataSuccess(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const deleteUser = id => {
    requestData();
    axios
      .delete(ROOT_ENDPOINT + "/users/delete", {
        data: {
          id,
        },
      })

      .then(function (response) {
        receiveDataSuccess(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const updateStatus = id => {
    requestData();
    axios
      .put(ROOT_ENDPOINT + "/users/update", {
        id,
        status,
      })
      .then(function (response) {
        receiveDataSuccess(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      {isFetching ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={users}
          keyExtractor={user => user.id.toString()}
          renderItem={({ item }) => (
            <ScrollView>
              <Text>
                {item.name} : {item.status}
              </Text>
              <TextInput
                onChangeText={setStatus}
                placeholder="Update status"
                style={{ borderWidth: 1 }}
              />
              <Button title="Update" onPress={() => updateStatus(item.id)} />
              <Button title="Delete" onPress={() => deleteUser(item.id)} />
            </ScrollView>
          )}
        />
      )}
    </>
  );
}

const dispatch = {
  requestData,
  receiveDataSuccess,
};

const state = state => ({
  isFetching: state.usersReducer.isFetching,
  users: state.usersReducer.users,
});

export default connect(state, dispatch)(List);

const styles = StyleSheet.create({});
