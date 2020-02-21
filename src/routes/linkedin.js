import React from "react";
import { Linking } from "expo";

import Container from "../model/container";

export default function Linkedin() {
  return (
    <Container
      title="LinkedIn"
      alertTitle="LinkedIn"
      name="Gustavo Ferri"
      subTitleContent="linkedin.com/in/gustavo-ferri/"
      qrValue="https://www.linkedin.com/in/gustavo-ferri/"
      array={[
        {
          text: "Cancelar"
        },
        {
          text: "Ir até la",
          onPress: () => {
            Linking.openURL("https://www.linkedin.com/in/gustavo-ferri/");
          }
        }
      ]}
    />
  );
}
