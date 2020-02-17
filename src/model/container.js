import React, { useState } from 'react';
import { Animated, View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

import QRCode from 'react-native-qrcode-svg';

import FadeInView from './fadein'

const styles = StyleSheet.create({
  center: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 150
  }
})

export default function WhatsApp({title = "", alertTitle="", name="", subTitleContent="", array=[{text: 'Ok'}], qrValue="", size}) {
  return (
    <FadeInView>
        <View style={styles.center} >
            <Text style={{color: 'white', fontSize: 50, marginBottom: 100}} >
                {title}
            </Text>
            <View style={{backgroundColor: 'white', padding: 15}} >
                <TouchableOpacity onPress={()=>{
                    Alert.alert(
                    `${alertTitle} ${name}`, 
                    `${subTitleContent}`,
                    array
                    )
                }} 
                >
                <QRCode
                value={qrValue}
                size={size && size}
                />
                </TouchableOpacity>
            </View>
        </View>
    </FadeInView>
  );
}
