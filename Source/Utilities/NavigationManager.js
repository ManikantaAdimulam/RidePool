import React from "react";
import { Image } from "react-native";
import { Router, Stack, Scene, Tabs } from "react-native-router-flux";
import Login from "../Screens/Login";
import DashBoard from "../Screens/DashBoard";
import CreateRide from "../Screens/CreateRide";
import { Colors } from "./Constants";

const NavigationManager = () => (
  <Router>
    <Stack
      key="root"
      navigationBarStyle={{ backgroundColor: Colors.secondaryColor }}
      titleStyle={{
        color: Colors.white,
        fontFamily: "Courier",
        fontWeight: "bold",
        fontSize: 22
      }}
    >
      <Scene key="first" hideNavBar>
        <Stack key="initial" hideNavBar>
          <Scene key="login" component={Login} hideNavBar />
        </Stack>
      </Scene>
      <Scene key="second" hideNavBar>
        <Stack key="main" title={"Ride Pool"}>
          <Tabs
            key="tabs"
            activeTintColor={Colors.buttonColor}
            tabBarStyle={{
              backgroundColor: Colors.secondaryColor
            }}
            inactiveTintColor={Colors.white}
          >
            <Scene
              key="Rides"
              component={DashBoard}
              hideNavBar
              icon={({ focused }) => <ListIcon selected={focused} />}
            />
            <Scene
              key="Create"
              component={CreateRide}
              hideNavBar
              icon={({ focused }) => <RideIcon selected={focused} />}
            />
          </Tabs>
        </Stack>
      </Scene>
    </Stack>
  </Router>
);

const listSelected = require("../../Assets/listSelected.png");
const listUnSelected = require("../../Assets/listUnSelected.png");
const rideSelected = require("../../Assets/bikeSelected.png");
const rideUnSelected = require("../../Assets/bikeUnSelected.png");

const ListIcon = ({ selected }) => {
  return (
    <Image
      source={selected ? listSelected : listUnSelected}
      style={{ height: 25, width: 25 }}
    />
  );
};

const RideIcon = ({ selected }) => {
  return (
    <Image
      source={selected ? rideSelected : rideUnSelected}
      style={{ height: 25, width: 25 }}
    />
  );
};

export default NavigationManager;
