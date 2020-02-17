import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Navigation from './src/navigation'

import { NativeRouter, Route, Link } from "react-router-native";

import Linkedin from './src/routes/linkedin'
import GitHub from './src/routes/gh';
import WhatsApp from './src/routes/wpp';
import FaceBook from './src/routes/fb';

export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Route exact path="/" >
          <View style={{display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center', paddingBottom: 100}} >
            <Text style={{fontSize: 50, textAlign: "center", color: 'white'}} >
              Bem Vindo ao LinkToIT
            </Text>
            <Text style={{fontSize: 18, textAlign: "center", color: 'white', padding: 50}} >
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
        <Navigation style={styles.bottom} ></Navigation>
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#035AA6',
    alignItems: 'center',
    position: 'relative'
  },
  bottom:{
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    paddingTop: 15,
    paddingBottom: 15,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around', 
  }
});
 