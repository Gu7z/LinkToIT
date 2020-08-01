import React from "react";
import { Route } from "react-router-native";

import Linkedin from "./pages/linkedin";
import Github from "./pages/gh";
import Facebook from "./pages/fb";
import Whatsapp from "./pages/wpp";
import Home from "./pages/home";

import { useSelector } from "react-redux";

export default function Routes() {
  return (
    <>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/linkedin">
        <Linkedin />
      </Route>
      <Route path="/github">
        <Github />
      </Route>
      <Route path="/facebook">
        <Facebook />
      </Route>
      <Route path="/whatsapp">
        <Whatsapp />
      </Route>
    </>
  );
}
