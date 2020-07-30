import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/Screens/HomeScreen";
import DetailsScreen from "./src/Screens/DetailsScreen";
import LogoTitle from "./src/LogoTitle";
import ProfileScreen from "./src/Screens/ProfileScreen";
import CreatePostScreen from "./src/Screens/CreatePostScreen";
import ModalScreen from "./src/Screens/ModalScreen";
import TabsScreen from "./src/Screens/Tabs/Screens/TabsScreen";
import DrawerScreen from "./src/Screens/Drawer/Screens/DrawerScreen";
import LoginScreen from "./src/Screens/LoginScreen";

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
        <Stack.Screen
          name="MyModal"
          options={{ headerShown: false }}
          component={ModalScreen}
        />
        <Stack.Screen
          name="Tabs Screen"
          options={{ headerShown: false }}
          component={TabsScreen}
        />
        <Stack.Screen name="Drawer Screen" component={DrawerScreen} />
        <Stack.Screen name="Log in" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
