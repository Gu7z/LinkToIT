import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Linkedin() {
  return (
    <View style={styles.main}>
      <Text style={styles.welcomeText}>Bem Vindo ao LinkToIT</Text>

      <Text style={styles.text}>A sua plataforma para facilitar conexões</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  welcomeText: {
    fontSize: 42,
    textAlign: "center",
    color: "#FFF",
  },
  text: {
    fontSize: 18,
    textAlign: "center",
    color: "#FFF",
    padding: 50,
  },
  main: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 100,
  },
});
