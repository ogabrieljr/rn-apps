import React, { useEffect } from "react";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import { connect } from "react-redux";
import { requestData, receiveDataSuccess } from "./redux/actions";
import axios from "axios";
import { FlatList, TextInput } from "react-native-gesture-handler";

const ROOT_ENDPOINT = "http://192.168.1.8:3001";

function List({ requestData, receiveDataSuccess, isFetching, users }) {
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
              <TextInput placeholder="Update status" style={{ borderWidth: 1 }} />
              <Button title="update" />
              <Button title="delete" />
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
