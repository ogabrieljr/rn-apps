import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "./src/Screens/SearchScreen";
import ResultScreen from "./src/Screens/ResultScreen";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search Screen" component={SearchScreen} />
      <Stack.Screen name="Details" component={ResultScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
