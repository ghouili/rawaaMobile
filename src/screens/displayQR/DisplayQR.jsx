import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Avatar, Button, Card, Searchbar } from "react-native-paper";
import QRCode from "react-native-qrcode-svg";

import Octicons from "react-native-vector-icons/Octicons";

import { windowHeight, windowWidth } from "../../utils/Dimensions";

const DisplayQR = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topcontainer}>
        <TouchableOpacity
          onPress={() => alert("Pressed!")}
          style={styles.iconBorder}
        >
          <Octicons name="arrow-left" size={30} />
        </TouchableOpacity>
      </View>
      <View style={styles.maincontainer}>
        <View style={styles.maincard}>
          <Image
            source={{
              uri: "https://reactjs.org/logo-og.png",
              cache: "only-if-cached",
            }}
            style={styles.useravatar}
          />
          <QRCode
            value="http://awesome.link.qr"
            backgroundColor="transparent"
            color="white"
            //   linearGradient=	['rgb(255,0,0)','rgb(0,255,255)']
            style={styles.qr}
          />
          <Text style={styles.usertext}>User Name</Text>
        </View>
        <View style={styles.notecontainer}>
          <Text style={styles.notetext}>
            S'il vous Plait montrer le code QR a la caissier Pour Obtenir une
            reduction sur votre achat
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DisplayQR;

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
  },
  topcontainer: {
    width: "100%",
    height: windowHeight * 0.14,
    paddingTop: windowHeight * 0.05,
    paddingLeft: windowHeight * 0.03,
  },
  iconBorder: {
    width: 45,
    height: 45,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DEEFE7",
    borderRadius: 150,
  },
  maincontainer: {
    width: "100%",
    height: windowHeight * 0.84,
    display: "flex",
    alignItems: "center",
    marginTop: windowHeight * 0.07,
    gap: 30,
  },
  maincard: {
    width: "58%",
    height: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 40,
    borderRadius: 15,
    backgroundColor: "#159A9C",

    // borderStyle: "solid",
    // borderColor: "red",
    // borderWidth: 5,
  },
  notecontainer: {
    // borderStyle: "solid",
    // borderColor: "red",
    // borderWidth: 5,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingHorizontal: windowWidth * 0.1
  },
  useravatar: {
    width: windowWidth * 0.19,
    height: windowWidth * 0.19,
    borderRadius: 150,
    marginTop: -windowWidth * 0.1,
  },
  notetext: {
    fontSize: 12,
    fontWeight: "700",
    color: "#159A9C",
  },
  usertext: {
    fontSize: 25,
    fontWeight: "700",
    color: "white",
  },
  qr: {
    width: "80%",
    height: "80%",
  },
});
