import React, { Component } from "react";
import { Text, View, StyleSheet, Dimensions, FlatList } from "react-native";
import { Colors } from "../Utilities/Constants";
import { connect } from "react-redux";
class DashBoard extends Component {
  renderItem = item => {
    return (
      <View>
        <Text>Mani</Text>
      </View>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[1, 2]}
          renderItem={item => {
            this.renderItem(item);
          }}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  ...state.LoginReducer
});

export default connect(mapStateToProps)(DashBoard);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white
  }
});
