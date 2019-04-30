import React, { useEffect } from "react";
import { Text, View, StyleSheet, FlatList, Dimensions } from "react-native";
import { Colors } from "../Utilities/Constants";
import { connect } from "react-redux";
import { FireBaseManager } from "../Utilities/FireBase";
import { getRides } from "../Redux/ActionCreators";

const DashBoard = ({ dispatch, uid, rides }) => {
  useEffect(() => {
    FireBaseManager.getFromDB(uid, rides => {
      dispatch(getRides(rides));
    });
  });
  return (
    <View style={styles.container}>
      <FlatList
        data={rides}
        renderItem={renderItem}
        keyExtractor={(item, index) => {
          index.toString();
        }}
      />
    </View>
  );
};

const renderItem = ({
  item: { from, to, contact, date, name, seats, time }
}) => {
  return (
    <View style={{ padding: 8 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between"
        }}
      >
        <Text>{from}</Text>
        <Text>{to}</Text>
        <Text>{`Seats: ${seats}`}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between"
        }}
      >
        <Text>{`Name: ${name}`}</Text>
        <Text>{contact}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between"
        }}
      >
        <Text>{date}</Text>
        <Text>{time}</Text>
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  ...state.RideReducer
});

export default connect(mapStateToProps)(DashBoard);

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white
  }
});
