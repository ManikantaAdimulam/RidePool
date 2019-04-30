import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { Colors, Fonts } from "../Utilities/Constants";
import FloatingLabelInput from "../Components/FloatingLabelInput";
import { FireBaseManager } from "../Utilities/FireBase";
import { connect } from "react-redux";
import Loader from "../Components/Loader";

const CreateRide = ({ uid }) => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [seats, setSeats] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [showLoader, setShowLoader] = useState(false);
  const insertIntoDB = async () => {
    setShowLoader(true);
    await FireBaseManager.createRide(
      uid,
      from,
      to,
      seats,
      name,
      contact,
      date,
      time
    );
    setShowLoader(false);
  };
  return (
    <View style={styles.container}>
      {showLoader && <Loader visible={showLoader} />}
      <Text style={styles.title}>Create Pool Ride</Text>
      <View style={styles.regView}>
        <FloatingLabelInput
          label={"From"}
          onChangeText={text => {
            setFrom(text);
          }}
        />
        <FloatingLabelInput
          label={"To"}
          onChangeText={text => {
            setTo(text);
          }}
        />
        <FloatingLabelInput
          label={"No. of available seats"}
          onChangeText={text => {
            setSeats(text);
          }}
        />
        <FloatingLabelInput
          label={"Name"}
          onChangeText={text => {
            setName(text);
          }}
        />
        <FloatingLabelInput
          label={"Contact"}
          onChangeText={text => {
            setContact(text);
          }}
        />
        <FloatingLabelInput
          label={"Date"}
          onChangeText={text => {
            setDate(text);
          }}
        />
        <FloatingLabelInput
          label={"Time"}
          onChangeText={text => {
            setTime(text);
          }}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          insertIntoDB();
        }}
      >
        <View style={styles.button}>
          <Text style={styles.btnText}> Submit</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const mapStateToProps = state => ({
  ...state.LoginReducer
});

export default connect(mapStateToProps)(CreateRide);

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: "center"
  },
  title: {
    fontFamily: Fonts.Courier,
    fontSize: 22,
    color: Colors.black,
    fontWeight: "bold",
    top: 25
  },
  button: {
    height: 54,
    width: 250,
    backgroundColor: Colors.buttonColor,
    borderRadius: 27,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25
  },
  btnText: {
    fontFamily: Fonts.Courier,
    fontSize: 22,
    color: Colors.white,
    fontWeight: "bold"
  },
  regView: {
    width: width * 0.9,
    marginTop: 25
  }
});
