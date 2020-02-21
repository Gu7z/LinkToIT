import React from "react";
import { Linking } from "expo";

import Container from "../model/container";

export default function GitHub() {
  return (
    <Container
      title="GitHub"
      alertTitle="GitHub"
      name="Gustavo Ferri"
      subTitleContent="github.com/gu7z"
      qrValue="https://www.github.com/gu7z"
      array={[
        {
          text: "Cancelar"
        },
        {
          text: "Ir até la",
          onPress: () => {
            Linking.openURL("https://www.github.com/gu7z");
          }
        }
      ]}
    />
  );
}
