import React, { useState } from "react";
import { StyleSheet, TextInput, Button } from "react-native";

export default function CreatePostScreen({ navigation }) {
  const [post, setPost] = useState("");

  return (
    <>
      <TextInput
        placeholder="What's on your mind?"
        style={styles.input}
        multiline
        onChangeText={setPost}
        value={post}
      />
      <Button title="Done" onPress={() => navigation.navigate("Home", { post })} />
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 200,
    padding: 10,
    backgroundColor: "white",
  },
});
