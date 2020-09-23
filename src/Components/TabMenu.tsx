import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Main from "../Pages/main";
import Done from "../Pages/donePage";

const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: "black",
        labelStyle: { fontSize: 12, color: "white" },
        style: { backgroundColor: "#3498db" },
        indicatorStyle: { backgroundColor: "white" },
      }}
    >
      <Tab.Screen
        name="Feed"
        component={Main}
        options={{ tabBarLabel: "TO DO LIST" }}
      />
      <Tab.Screen
        name="Notifications"
        component={Done}
        options={{ tabBarLabel: "DONE" }}
      />
    </Tab.Navigator>
  );
}
