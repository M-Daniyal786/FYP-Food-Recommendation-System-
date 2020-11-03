import React from "react";

import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

import Signup from "../components/Signup";

const SignupScreen = (props) => {
  return (
    <View style={styles.container}>
      
        <Signup />
      
      <Text style={styles.signupText}>Don`t Have an account yet? </Text>
      <TouchableOpacity>
        <Text
          style={styles.signupbtn}
          onPress={() => {
            props.navigation.navigate("Home");
          }}
        >
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#37474f",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  signupTextContainer: {
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  signupText: {
    color: "rgba(255,255,255,0.6)",
  },
  signupbtn: {
    color: "#ffffff",
  },
});

export default SignupScreen;
