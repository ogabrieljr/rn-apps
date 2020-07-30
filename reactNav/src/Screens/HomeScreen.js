import React, { useState, useLayoutEffect } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function HomeScreen({ navigation, route }) {
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button title="Info" color="white" onPress={() => alert("Info!")} />
      ),
      headerRight: () => (
        <Button
          title="Add"
          color="white"
          onPress={() => setCount(count => count + 1)}
        />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Text>{count}</Text>
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
      <Button title="Open Modal" onPress={() => navigation.navigate("MyModal")} />
      <Button title="Open Tabs" onPress={() => navigation.navigate("Tabs Screen")} />
      <Button
        title="Open Drawer"
        onPress={() => navigation.navigate("Drawer Screen")}
      />
      <Button title="Log in" onPress={() => navigation.navigate("Log in")} />
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
