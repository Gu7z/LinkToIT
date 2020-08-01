import React, { useState, useEffect } from "react";
import { Dimensions, Animated } from "react-native";
import SignIn from "./form";

const bar = Dimensions.get("window").width / 2;

const SideBar = ({ style, open = false, children }) => {
  const [wdt] = useState(new Animated.Value(0)); // Initial value for opacity: 0
  const [opc] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(wdt, {
      toValue: open ? bar : 0,
      duration: 300,
    }).start();

    Animated.timing(opc, {
      toValue: open ? 1 : 0,
      duration: open ? 500 : 150,
    }).start();
  }, [open]);

  return (
    <Animated.View
      style={{
        ...style,
        height: "100%",
        width: wdt,
      }}
    >
      <Animated.View
        style={{
          alignItems: "center",
          justifyContent: "center",
          opacity: opc,
        }}
      >
        <SignIn open={open}></SignIn>
      </Animated.View>
    </Animated.View>
  );
};

export default SideBar;
