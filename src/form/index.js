import React, { useRef } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInput,
} from "react-native";
import Input from "./Input";

export default function SignIn() {
  const formRef = useRef(null);

  function handleSubmit(data) {
    console.log(data);
    // { email: 'test@example.com', password: '123456' }
  }

  return (
    <View>
      <TextInput></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: "#035AA6",
    marginTop: 20,
    height: 40,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "#035AA6",
  },
  buttonText: {
    color: "powderblue",
    fontWeight: "bold",
    fontSize: 16,
  },
});
