import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function HomeScreen({ navigation, route }) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Text style={styles.post}>{route.params?.post}</Text>
      <Button
        title="Details"
        onPress={() => navigation.navigate("Details", { name: "Name", id: 1 })}
      />
      <Button
        title="Profile"
        onPress={() => navigation.navigate("Profile", { name: "Custon name" })}
      />
      <Button
        title="Create post"
        onPress={() => navigation.navigate("Create post")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  post: {
    padding: 5,
  },
});
