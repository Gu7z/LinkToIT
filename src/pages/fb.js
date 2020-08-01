import React from "react";
import { Linking } from "expo";

import Container from "../model/container";

export default function FaceBook({ name = "", facebook = "" }) {
  return (
    <Container
      title="Facebook"
      alertTitle="Facebook"
      subTitleContent="Gustavo Ferri"
      qrValue="https://www.facebook.com/gustavoferri.alixandre"
      array={[
        {
          text: "Cancelar",
        },
        {
          text: "Ir até la",
          onPress: () => {
            Linking.openURL("https://www.facebook.com/gustavoferri.alixandre");
          },
        },
      ]}
    />
  );
}
