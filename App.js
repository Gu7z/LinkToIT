import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Navigation from './src/navigation'

import { NativeRouter, Route, Link } from "react-router-native";

import Linkedin from './src/routes/linkedin'
import FaceBook from './src/routes/gh';

export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Route path="/linkedin">
          <Linkedin />
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
 