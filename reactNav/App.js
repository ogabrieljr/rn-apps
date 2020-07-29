import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/Screens/HomeScreen";
import DetailsScreen from "./src/Screens/DetailsScreen";
import LogoTitle from "./src/LogoTitle";
import ProfileScreen from "./src/Screens/ProfileScreen";
import CreatePostScreen from "./src/Screens/CreatePostScreen";
import { Button } from "react-native";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#e858af",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}>
        <Stack.Screen
          options={{
            title: "My Home",
            headerTitle: () => <LogoTitle />,
            headerStyle: {
              backgroundColor: "#4a61e0",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerLeft: () => (
              <Button title="Info" color="white" onPress={() => alert("Info!")} />
            ),
          }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          initialParams={{ id: 42 }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={({ route }) => ({ title: route.params.name })}
        />
        <Stack.Screen name="Create post" component={CreatePostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
