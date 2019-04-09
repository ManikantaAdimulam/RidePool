import React from "react";
import { Router, Stack, Scene } from "react-native-router-flux";
import Login from "../Components/Login";

const NavigationManager = () => (
  <Router>
    <Stack key="root" navigationBarStyle={{ backgroundColor: "#4ff7b6" }}>
      <Scene key="login" component={Login} hideNavBar />
    </Stack>
  </Router>
);

export default NavigationManager;
