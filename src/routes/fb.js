import React from 'react';
import { Linking } from 'expo';

import Container from '../model/container'

export default function FaceBook() {
  return (
    <Container 
        title="Facebook" 
        alertTitle="Facebook" 
        name="Gustavo Ferri" 
        subTitleContent="facebook.com/gustavoferri.alixandre" 
        qrValue="https://www.facebook.com/gustavoferri.alixandre"
        array={[
          {
            text: 'Cancelar'
          },
          {
            text: 'Ir até la',
            onPress: ()=>{Linking.openURL('https://www.facebook.com/gustavoferri.alixandre')}
          }
        ]}
    />
  );
}
