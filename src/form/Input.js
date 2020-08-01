import React, { useRef, useEffect } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import { useField } from "@unform/core";

function Input({ name, label, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue = "", error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "_lastNativeText",
      getValue(ref) {
        return ref._lastNativeText || "";
      },
      setValue(ref, value) {
        ref.setNativeProps({ text: value });
        ref._lastNativeText = value;
      },
      clearValue(ref) {
        ref.setNativeProps({ text: "" });
        ref._lastNativeText = "";
      },
    });
  }, [fieldName, registerField]);

  return (
    <KeyboardAvoidingView behavior="padding">
      <View style={styles.form}>
        {label && <Text style={styles.text}>{label}</Text>}
        <TextInput
          style={styles.input}
          ref={inputRef}
          defaultValue={defaultValue}
          {...rest}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  form: {
    paddingHorizontal: 30,
    marginTop: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "#035AA6",
    paddingHorizontal: 10,
    fontSize: 16,
    color: "#444",
    width: 225,
    height: 40,
    borderRadius: 5,
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 5,
    fontSize: 18,
  },
});

export default Input;
