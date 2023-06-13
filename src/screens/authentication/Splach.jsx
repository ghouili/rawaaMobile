import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { Card } from "react-native-shadow-cards";

import { windowHeight, windowWidth } from "../../utils/Vaiables";

const Splach = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={["rgba(166,223,240, 0.8)", "transparent"]}
        style={styles.background}
      />

      <View
        style={{
          height: windowHeight * 0.5,
          width: "100%",
          paddingHorizontal: "5%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          style={{ width: windowWidth * 0.7, resizeMode: "contain" }}
          source={require("../../../assets/logo.png")}
        />
      </View>

      <View
        style={{
          height: windowHeight * 0.46,
          width: "100%",
          paddingHorizontal: "5%",
          alignItems: "center",
          marginTop: "30%",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            color: "#0A66C2",
            fontWeight: "700",
            marginBottom: "10%",
          }}
        >
          We Care for you!!
        </Text>

        <TouchableOpacity
          style={{}}
          onPress={() => navigation.navigate("Login")}
        >
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
            <Text style={{ fontSize: 18, color: "#000576", fontWeight: "700" }}>
              Log In
            </Text>
          </Card>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Splach;

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
