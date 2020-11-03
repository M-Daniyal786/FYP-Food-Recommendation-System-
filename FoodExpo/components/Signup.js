import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { Context as AuthContext } from "../context/AuthContext";

//export default class Signup extends Component {
//render() {

const Signup = () => {
  const { state, signup } = useContext(AuthContext);
  const [name, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validName, setValidName] = useState(true);
  const [validEmail, setValidEmail] = useState(true);
  const [validPassword, setValidPassword] = useState(true);

  const validateEmailHandler = (val) => {
    // const expression = /\S+@\S+/;
    const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

    if (val.trim().length >= 4 && expression.test(String(val))) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  };
  const validatePasswordHandler = (val) => {
    if (val.trim().length >= 4) {
      setValidPassword(true);
    } else {
      setValidPassword(false);
    }
  };
  const validateUsernameHandler = (val) => {
    if (val.trim().length >= 4) {
      setValidName(true);
    } else {
      setValidName(false);
    }
  };

  //  console.log(state);
  return (
    <KeyboardAvoidingView behavior="height">
      <View style={{ padding: 20 }}>
        <TextInput
          placeholder="Username"
          value={name}
          onChangeText={setUsername}
          placeholderTextColor="#ffffff"
          underlineColorAndroid="rgba(0,0,0,0)"
          style={styles.inputBox}
          onEndEditing={(val) => validateUsernameHandler(val.nativeEvent.text)}
        />
        {validName ? null : (
          <Text style={styles.error}>Username minimum length:4</Text>
        )}
        {/* <TextInput placeholder='Phone No.' placeholderTextColor="#ffffff" underlineColorAndroid='rgba(0,0,0,0)' style={styles.inputBox}/> */}

        <TextInput
          placeholder="Email ID"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="#ffffff"
          underlineColorAndroid="rgba(0,0,0,0)"
          style={styles.inputBox}
          onEndEditing={(val) => validateEmailHandler(val.nativeEvent.text)}
        />

        {validEmail ? null : (
          <Text style={styles.error}>
            Invalid email! example:"xyz@gmail.com"
          </Text>
        )}
        {/* <TextInput placeholder='Gender' placeholderTextColor="#ffffff" underlineColorAndroid='rgba(0,0,0,0)' style={styles.inputBox}/> */}

        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          placeholderTextColor="#ffffff"
          underlineColorAndroid="rgba(0,0,0,0)"
          style={styles.inputBox}
          // onEndEditing={val=>validatePasswordHandler(val.nativeEvent.text)}
        />

        <View style={{ margin: 7 }} />

        {state.errorMessage ? (
          <Text style={styles.error}>{state.errorMessage}</Text>
        ) : null}

        {validName && validEmail ? (
          <TouchableOpacity
            style={styles.button}
            onPress={() => signup({ name, email, password })}
          >
            <Text style={styles.buttonText}>SignUp</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log("Cant SignUp")}
          >
            <Text style={styles.buttonText}>SignUp</Text>
          </TouchableOpacity>
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  error: {
    marginLeft: 10,
    color: "red",
    marginBottom: 5,
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inputBox: {
    width: 300,
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: 25,
    paddingHorizontal: 16,
    marginVertical: 10,
    height: 40,
    fontSize: 16,
    color: "#ffffff",
  },
  button: {
    width: 300,
    backgroundColor: "#1c313a",
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#ffffff",
    textAlign: "center",
  },
});
export default Signup;
