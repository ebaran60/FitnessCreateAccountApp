import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import Welcome from "./pages/WelcomeScreen";
import MemberSign from "./pages/MemberSign";
import MemberResault from "./pages/MemberResault";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="WelcomeScreen" component={Welcome} />
        <Stack.Screen name="MemberSignScreen" component={MemberSign} />
        <Stack.Screen name="MemberResaultScreen" component={MemberResault} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;