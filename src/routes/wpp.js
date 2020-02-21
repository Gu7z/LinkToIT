import React from "react";

import Container from "../model/container";

export default function WhatsApp() {
  return (
    <Container
      title="Contato"
      alertTitle="WhatsApp"
      name="Gustavo Ferri"
      subTitleContent={`Nome: Gustavo \nTelefone: (67)98112-8661 \nemail: gustavoferri13@gmail.com" `}
      qrValue="MECARD:N:,Gustavo Ferri;TEL:67 981128661;EMAIL:gustavoferri13@gmail.com;URL:;ADR:,,Ladário,MS,,;NOTE:Programador,,;;"
      size={150}
    />
  );
}
