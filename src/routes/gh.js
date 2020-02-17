import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  center: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default function GitHub() {
  return (
    <View style={styles.center} >
        <Text>GitHub</Text>
    </View>
  );
}
