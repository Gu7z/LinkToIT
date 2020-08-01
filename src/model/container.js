import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Dimensions,
} from "react-native";

import QRCode from "react-native-qrcode-svg";

import FadeInView from "./fadein";

export default function WhatsApp({
  title = "",
  alertTitle = "",
  name = "",
  subTitleContent = "",
  array = [{ text: "Ok" }],
  qrValue = "",
  size = 150,
}) {
  return (
    <FadeInView>
      <View style={styles.center}>
        <Text style={styles.titleText}>{title}</Text>
        <View style={styles.text}>
          <TouchableOpacity
            onPress={() => {
              Alert.alert(`${alertTitle} ${name}`, `${subTitleContent}`, array);
            }}
          >
            <QRCode value={qrValue} size={size && size} />
          </TouchableOpacity>
        </View>
      </View>
    </FadeInView>
  );
}

const styles = StyleSheet.create({
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 150,
  },

  titleText: {
    color: "#FFF",
    fontSize: 50,
    marginBottom: 100,
  },

  text: {
    backgroundColor: "#FFF",
    padding: 15,
  },
});
