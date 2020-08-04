import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  Button,
  ScrollView,
  FlatList,
  TextInput,
} from "react-native";
import { connect } from "react-redux";
import { requestData, receiveDataSuccess, receiveDataFailed } from "./redux/actions";
import axios from "axios";

const ROOT_ENDPOINT = "http://192.168.1.8:3001";

function List({
  requestData,
  receiveDataSuccess,
  isFetching,
  users,
  receiveDataFailed,
}) {
  const [status] = useState([]);

  useEffect(() => {
    requestData();
    axios
      .get(ROOT_ENDPOINT + "/users")
      .then(response => {
        receiveDataSuccess(response.data);
      })
      .catch(error => {
        console.log(error);
        alert("Try again");
        receiveDataFailed();
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
      .then(response => receiveDataSuccess(response.data))
      .catch(error => {
        console.log(error);
        alert("Try again");
        receiveDataFailed();
      });
  };

  const updateStatus = (id, index) => {
    if (status[index]) {
      if (status[index].length > 10) alert("Status too long");
      else {
        axios
          .put(ROOT_ENDPOINT + "/users/update", {
            id,
            status: status[index],
          })
          .then(response => {
            if (typeof response.data === "string") alert(response.data);
            else {
              requestData();
              receiveDataSuccess(response.data);
            }
          })
          .catch(error => {
            console.log(error);
            alert("Try again");
            receiveDataFailed();
          });
      }
    } else alert("Submit a status.");
  };

  return (
    <>
      {isFetching ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={users}
          keyExtractor={user => user.id.toString()}
          renderItem={({ item, index }) => (
            <ScrollView>
              <Text>
                {item.name} : {item.status}
              </Text>
              <TextInput
                onChangeText={text => (status[index] = text)}
                placeholder="Update status"
                style={{ borderWidth: 1 }}
              />
              <Button title="Update" onPress={() => updateStatus(item.id, index)} />
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
  receiveDataFailed,
};

const state = state => ({
  isFetching: state.usersReducer.isFetching,
  users: state.usersReducer.users,
});

export default connect(state, dispatch)(List);

const styles = StyleSheet.create({});
