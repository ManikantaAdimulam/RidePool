import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  Image
} from "react-native";
import { Colors } from "../Utilities/Constants";
import { db } from "../Utilities/FireBase";

const Login = () => {
  const [isSignUp, setSignUp] = useState(false);
  const addItem = item => {
    db.ref("/items").push({
      name: item
    });
  };
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.logoView}>
          <Image
            source={require("../../Assets/icon.png")}
            style={styles.logo}
          />
          <Text style={styles.title}> Ride Pool</Text>
        </View>
        <View style={styles.btnView}>
          <TouchableOpacity
            onPress={() => {
              setSignUp(false);
            }}
          >
            <View
              style={[
                styles.button,
                {
                  backgroundColor: isSignUp
                    ? Colors.primaryDarkGreen
                    : Colors.white
                }
              ]}
            >
              <Text
                style={[
                  styles.btnText,
                  {
                    color: isSignUp ? Colors.white : Colors.primaryDarkGreen
                  }
                ]}
              >
                LogIn
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSignUp(true);
            }}
          >
            <View
              style={[
                styles.button,
                {
                  backgroundColor: !isSignUp
                    ? Colors.primaryDarkGreen
                    : Colors.white
                }
              ]}
            >
              <Text
                style={[
                  styles.btnText,
                  {
                    color: !isSignUp ? Colors.white : Colors.primaryDarkGreen
                  }
                ]}
              >
                SignUp
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.textInput}
            placeholder={"Enter user name"}
            placeholderTextColor={Colors.white}
          />

          <TextInput
            style={styles.textInput}
            placeholder={"Enter password"}
            placeholderTextColor={Colors.white}
            secureTextEntry
          />
          {isSignUp && (
            <TextInput
              style={styles.textInput}
              placeholder={"Confirm Password"}
              placeholderTextColor={Colors.white}
              secureTextEntry
            />
          )}
          <TouchableOpacity>
            <View style={styles.submitButton}>
              <Text style={styles.submitBtnText}> Submit</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Login;
const { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryGreen,
    alignItems: "center"
  },
  button: {
    height: 60,
    width: width * 0.45,
    backgroundColor: Colors.primaryDarkGreen,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15
  },
  submitButton: {
    height: 60,
    width: width * 0.6,
    backgroundColor: Colors.white,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15
  },
  btnView: {
    flexDirection: "row",
    justifyContent: "space-around",
    width
  },
  inputView: {
    width,
    alignItems: "center",
    justifyContent: "center"
  },
  btnText: {
    fontWeight: "bold",
    fontSize: 18,
    fontFamily: "Courier",
    color: Colors.white
  },
  submitBtnText: {
    fontWeight: "bold",
    fontSize: 18,
    fontFamily: "Courier",
    color: Colors.primaryGreen
  },
  textInput: {
    height: 54,
    width: width * 0.8,
    borderWidth: 2,
    borderRadius: 27,
    borderColor: Colors.white,
    color: Colors.white,
    marginBottom: 15,
    // paddingLeft: 8,
    textAlign: "center",
    fontFamily: "Courier",
    fontWeight: "700",
    fontSize: 16
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.white,
    // marginTop: height * 0.2,
    fontFamily: "Courier",
    marginBottom: 8
  },
  logo: {
    height: height * 0.18,
    width: height * 0.18,
    borderRadius: (height * 0.18) / 2,
    borderColor: Colors.white,
    borderWidth: 3,
    resizeMode: "cover",
    marginBottom: 15
  },
  logoView: {
    height: height * 0.35,
    width,
    alignItems: "center",
    justifyContent: "center"
  }
});
