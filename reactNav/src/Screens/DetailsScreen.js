import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function DetailsScreen({ route, navigation }) {
  const { name, id } = route.params;
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Text>{id}</Text>
      <Button
        title="Update the title"
        onPress={() => navigation.setOptions({ title: "Updated" })}
      />
      <Button
        title="Details"
        onPress={() =>
          navigation.push("Details", {
            name: Math.random().toString(36).substring(2, 15),
            id: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
