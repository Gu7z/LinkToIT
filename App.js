import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView
} from "react-native";

import Navigation from "./src/navigation";

import { NativeRouter, Route } from "react-router-native";

import Icon from "react-native-vector-icons/Feather";

import Linkedin from "./src/routes/linkedin";
import GitHub from "./src/routes/gh";
import WhatsApp from "./src/routes/wpp";
import FaceBook from "./src/routes/fb";
import SideBar from "./src/sidebar";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <NativeRouter>
      <View style={styles.container}>
        <SideBar open={open} style={{ backgroundColor: "powderblue" }} />
        <Icon
          onPress={() => {
            setOpen(!open);
          }}
          style={{ position: "absolute", top: 25, left: 10, zIndex: 2 }}
          name="menu"
          size={30}
          color={open ? "#000" : "#fff"}
        />
        <Route exact path="/">
          <View
            style={{
              display: "flex",
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              paddingBottom: 100
            }}
          >
            <Text style={{ fontSize: 50, textAlign: "center", color: "white" }}>
              Bem Vindo ao LinkToIT
            </Text>
            <Text
              style={{
                fontSize: 18,
                textAlign: "center",
                color: "white",
                padding: 50
              }}
            >
              A sua plataforma para facilitar conexões
            </Text>
          </View>
        </Route>
        <Route path="/linkedin">
          <Linkedin />
        </Route>
        <Route path="/github">
          <GitHub />
        </Route>
        <Route path="/whatsapp">
          <WhatsApp />
        </Route>
        <Route path="/facebook">
          <FaceBook />
        </Route>
        <Navigation style={styles.bottom}></Navigation>
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#035AA6",
    alignItems: "center",
    position: "relative"
  },
  bottom: {
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    paddingTop: 15,
    paddingBottom: 15,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around"
  },
  side: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: Dimensions.get("window").height - 90,
    zIndex: 1,
    width: 0,
    position: "absolute",
    top: StatusBar.currentHeight,
    left: 0,
    backgroundColor: "white"
  },
  icon: {}
});
