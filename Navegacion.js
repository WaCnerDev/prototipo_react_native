import React from "react";
import "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; //1. importar tab
import { NavigationContainer } from "@react-navigation/native";

import Home from "./Navegacion/Home";
import Home2 from "./Navegacion/Home2";
import HomeBtn from "./Navegacion/HomeBtn";

const TabNav = createBottomTabNavigator();

function Tabs() {
  return (
    <TabNav.Navigator>
      <TabNav.Screen name="Home" component={Home} />
      <TabNav.Screen name="Home2" component={Home2} />
      <TabNav.Screen name="HomeBtn" component={HomeBtn} />
    </TabNav.Navigator>
  );
}

export default function Navegacion() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}
