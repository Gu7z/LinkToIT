import React from "react";
import { Route } from "react-router-native";

import Linkedin from "./pages/linkedin";
import Github from "./pages/gh";
import Facebook from "./pages/fb";
import Whatsapp from "./pages/wpp";

import { useSelector } from "react-redux";

export default function Routes() {
  const {
    reducer: {
      data: {
        name,
        social: { facebook },
      },
    },
  } = useSelector((state) => state);

  return (
    <>
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
