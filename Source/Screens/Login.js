import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  Image,
  InteractionManager
} from "react-native";
import { Colors, Fonts } from "../Utilities/Constants";
import { db } from "../Utilities/FireBase";
import FireBase from "firebase";
import { Actions } from "react-native-router-flux";
import Loader from "../Components/Loader";
import { connect } from "react-redux";
import { getUserData } from "../Redux/ActionCreators";

const Login = ({ setData }) => {
  const [isSignUp, setSignUp] = useState(false);
  const [userName, setUserName] = useState("manikantaa544@gmail.com");
  const [password, setPassword] = useState("manikanta");
  const [showLoader, setShowLoader] = useState(false);

  const addUser = async () => {
    setShowLoader(true);
    if (isSignUp) {
      await FireBase.auth()
        .createUserWithEmailAndPassword(userName, password)
        .then(result => {
          console.log(setData);
          setData(result);
          setShowLoader(false);
        })
        .catch(error => {
          console.log(error, "ERROR");
        });
    } else {
      await FireBase.auth()
        .signInWithEmailAndPassword(userName, password)
        .then(result => {
          console.log(setData);
          setData(result);
          setShowLoader(false);
          if (result.operationType == "signIn") {
            Actions.reset("second");
          }
        })
        .catch(error => {
          console.log(error, "ERROR");
        });
    }
  };
  return (
    <View style={styles.container}>
      {showLoader && <Loader visible={showLoader} />}
      <SafeAreaView>
        <View style={styles.logoView}>
          <Image
            source={require("../../Assets/icon.png")}
            style={styles.logo}
          />
          <Text style={styles.title}> Ride Pool</Text>
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.textInput}
            placeholder={"Enter user name"}
            placeholderTextColor={Colors.white}
            onChangeText={text => {
              setUserName(text);
            }}
          />

          <TextInput
            style={styles.textInput}
            placeholder={"Enter password"}
            placeholderTextColor={Colors.white}
            secureTextEntry
            onChangeText={text => {
              setPassword(text);
            }}
          />
          {isSignUp && (
            <TextInput
              style={styles.textInput}
              placeholder={"Confirm Password"}
              placeholderTextColor={Colors.white}
              secureTextEntry
            />
          )}
          <TouchableOpacity
            onPress={() => {
              addUser();
            }}
          >
            <View style={styles.submitButton}>
              <Text style={styles.submitBtnText}> Submit</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
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
                backgroundColor: isSignUp ? Colors.black : Colors.secondaryColor
              }
            ]}
          >
            <Text
              style={[
                styles.btnText,
                {
                  fontSize: isSignUp ? 18 : 22
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
                  ? Colors.backgroundColor
                  : Colors.secondaryColor
              }
            ]}
          >
            <Text
              style={[
                styles.btnText,
                {
                  fontSize: isSignUp ? 22 : 18
                }
              ]}
            >
              SignUp
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  ...state.LoginReducer
});

const mapDispatchToProps = dispatch => ({
  setData: result => dispatch(getUserData(result))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

const { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryColor,
    alignItems: "center"
  },
  button: {
    height: 44,
    width: width * 0.5,
    backgroundColor: Colors.primaryColor,
    alignItems: "center",
    justifyContent: "center"
  },
  submitButton: {
    height: 60,
    width: width * 0.6,
    backgroundColor: Colors.buttonColor,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15
  },
  btnView: {
    flexDirection: "row",
    width,
    borderBottomWidth: 1,
    marginBottom: 15,
    bottom: -20,
    position: "absolute",
    height: 74,
    backgroundColor: Colors.black,
    borderTopWidth: 4
  },
  inputView: {
    width,
    alignItems: "center",
    justifyContent: "center"
  },
  btnText: {
    fontWeight: "bold",
    fontSize: 22,
    fontFamily: Fonts.Courier,
    color: Colors.white
  },
  submitBtnText: {
    fontWeight: "bold",
    fontSize: 18,
    fontFamily: "Courier",
    color: Colors.white
  },
  textInput: {
    height: 54,
    width: width * 0.8,
    borderWidth: 2,
    borderRadius: 27,
    borderColor: Colors.secondaryColor,
    color: Colors.white,
    marginBottom: 15,
    backgroundColor: Colors.black,
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
