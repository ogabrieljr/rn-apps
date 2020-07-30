import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./HomeScreen";
import NotificationsScreen from "./NotificationScreen";

const Drawer = createDrawerNavigator();

export default function DrawerScreen() {
  return (
    <Drawer.Navigator
      // openByDefault
      drawerContentOptions={{
        activeTintColor: "#e91e63",
        itemStyle: { marginVertical: 7 },
      }}
      drawerStyle={{
        backgroundColor: "#c6cbef",
        width: 220,
      }}
      initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    </Drawer.Navigator>
  );
}
