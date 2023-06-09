import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Card } from "react-native-shadow-cards";
import Ionicons from "react-native-vector-icons/Ionicons";

import { windowHeight, windowWidth, path } from "../../utils/Vaiables";
import { MainContext } from "../../hooks/ProviderContext";

const LogIn = ({ navigation }) => {
  const { setLoggedIn } = useContext(MainContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secured, setSecured] = useState(true);

  const submit = async () => {
    let result = await fetch(`${path}partner/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    let resultData = await result.json();

    if (resultData.success === true) {
      const jsonValue = JSON.stringify(resultData.data);

      await AsyncStorage.setItem("user", jsonValue);
      if (resultData.isUser === true) {
        setLoggedIn(true);
        return Alert.alert(
          "Success",
          `Welcome Mr(s) ${resultData.data.email}`,
          [{ text: "fermer" }]
        );
      } else {
        // ScanQR
        navigation.navigate("ScanQR");
      }
    } else {
      Alert.alert("Error", resultData.message, [{ text: "fermer" }]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <LinearGradient
          // Background Linear Gradient
          colors={["rgba(166,223,240, 0.8)", "transparent"]}
          style={styles.background}
        />

        <View
          style={{
            height: windowHeight * 0.4,
            width: "100%",
            paddingHorizontal: "5%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            style={{ width: windowWidth * 0.4, resizeMode: "contain" }}
            source={require("../../../assets/logo.png")}
          />
          <Text style={{ fontSize: 25, color: "#0A66C2", fontWeight: "700" }}>
            Welcome on Board
          </Text>
          <Text style={{ fontSize: 18, color: "#0A66C2", fontWeight: "600" }}>
            Sign in on our platform
          </Text>
        </View>

        <View
          style={{
            width: "100%",
            paddingHorizontal: "5%",
            alignItems: "center",
            marginTop: "3%",
            height: windowHeight * 0.5,
            flexDirection: "column",
            paddingTop: "10%",
          }}
        >
          <Card
            style={{
              width: windowWidth * 0.85,
              backgroundColor: "#fff",
              borderRadius: 15,
              paddingHorizontal: "3%",
              paddingVertical: "1.5%",
            }}
          >
            <TextInput
              style={{ fontSize: 16 }}
              placeholder="Email"
              placeholderTextColor="#919191"
              onChangeText={(texte) => setEmail(texte)}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </Card>

          <View style={{ height: "5%" }}></View>
          <Card
            style={{
              width: windowWidth * 0.85,
              backgroundColor: "#fff",
              borderRadius: 15,
              paddingHorizontal: "3%",
              paddingVertical: "1.5%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TextInput
              style={{ fontSize: 16, width: "90%" }}
              placeholder="Password"
              placeholderTextColor="#919191"
              secureTextEntry={secured}
              onChangeText={(texte) => setPassword(texte)}
              autoCapitalize="none"
            />
            <TouchableOpacity
              style={{ marginLeft: -45 }}
              onPress={() => setSecured(!secured)}
            >
              {!secured ? (
                <Ionicons name="eye-outline" size={30} />
              ) : (
                <Ionicons name="eye-off-outline" size={30} />
              )}
            </TouchableOpacity>
          </Card>

          <TouchableOpacity style={{ marginTop: "18%" }} onPress={submit}>
            <Card
              style={{
                width: windowWidth * 0.85,
                backgroundColor: "#fff",
                borderRadius: 15,
                paddingHorizontal: "10%",
                paddingVertical: "3%",
                alignItems: "center",
              }}
            >
              <Text
                style={{ fontSize: 18, color: "#000576", fontWeight: "700" }}
              >
                Log In
              </Text>
            </Card>
          </TouchableOpacity>

          <View style={{ flexDirection: "row", marginTop: "1%" }}>
            <Text style={{ fontSize: 16, color: "#808389" }}>
              Forgot Password?{" "}
            </Text>
            <TouchableOpacity onPress={() => alert("Pressed!")}>
              <Text
                style={{ fontSize: 16, color: "#000576", fontWeight: "600" }}
              >
                Forgotten
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LogIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F7F8",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: windowHeight,
  },
});
