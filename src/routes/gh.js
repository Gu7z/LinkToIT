import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

import QRCode from 'react-native-qrcode-svg';
import { Linking } from 'expo';

const styles = StyleSheet.create({
  center: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default function FaceBook() {
  return (
    <View style={styles.center} >
        <View style={{backgroundColor: 'white', padding: 15}} >
          <TouchableOpacity onPress={()=>{
            Alert.alert(
              'Linkedin Gustavo Ferri', 
              'https://www.facebook.com/gustavo.ferrialixandre',
              [
                {
                  text: 'Cancelar',
                  onPress: ()=>{console.log('testando')}
                },
                {
                  text: 'Ir até la',
                  onPress: ()=>{Linking.openURL('https://www.facebook.com/gustavo.ferrialixandre')}
                }
              ]
            )
          }} >
            <QRCode
              value="https://www.facebook.com/gustavo.ferrialixandre"
            />
          </TouchableOpacity>
        </View>
    </View>
  );
}
