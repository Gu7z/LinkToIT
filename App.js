import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
  TouchableWithoutFeedback,
} from "react-native";
import Navigation from "./src/navigation";
import { Provider } from "react-redux";
import { NativeRouter, Route } from "react-router-native";
import store from "./src/store";
import Icon from "react-native-vector-icons/Feather";
import SideBar from "./src/sidebar";
import Routes from "./src/routes";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <NativeRouter>
      <Provider store={store}>
        <View style={styles.container}>
          <Routes />
          <Navigation style={styles.bottom}></Navigation>
        </View>
      </Provider>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#035AA6",
    alignItems: "center",
    position: "relative",
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    alignContent: "center",
    justifyContent: "center",
  },
  sidebar: {
    backgroundColor: "powderblue",
    position: "absolute",
    borderTopRightRadius: 30,
    borderBottomEndRadius: 30,
    zIndex: 1,
    left: 0,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
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
    justifyContent: "space-around",
  },
  side: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: Dimensions.get("window").height - 90,
    zIndex: 1,
    width: 0,
    position: "absolute",
    top: StatusBar.currentHeight,
    left: 0,
    backgroundColor: "white",
  },
  icon: {
    position: "absolute",
    top: 20,
    left: 10,
    zIndex: 2,
  },
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
