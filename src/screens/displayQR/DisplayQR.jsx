import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import QRCode from "react-native-qrcode-svg";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Octicons from "react-native-vector-icons/Octicons";

import { path, windowHeight, windowWidth } from "../../utils/Vaiables";

const DisplayQR = ({ navigation }) => {
  const [user, setUser] = useState({
    firstname: "user",
    lastname: "user",
    avatar: "avatar.png",
  });

  const GetUserInfo = async () => {
    let userData = await AsyncStorage.getItem("user");
    setUser(JSON.parse(userData));
  };

  useEffect(() => {
    GetUserInfo();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topcontainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.iconBorder}
        >
          <Octicons name="arrow-left" size={30} />
        </TouchableOpacity>
      </View>
      <View style={styles.maincontainer}>
        <View style={styles.maincard}>
          <Image
            source={{
              uri: `${path}uploads/images/${user?.avatar}`,
              cache: "only-if-cached",
            }}
            style={styles.useravatar}
          />
          <QRCode
            value={user?._id}
            backgroundColor="transparent"
            color="white"
            style={styles.qr}
          />
          <Text style={styles.usertext}>
            {user.firstname} {user.lastname}
          </Text>
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
    paddingHorizontal: windowWidth * 0.1,
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
