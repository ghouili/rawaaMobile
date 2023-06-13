import React, { useContext } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Coming_Soon from "../../../assets/coming_soon.png";
import { MainContext } from "../../hooks/ProviderContext";

const ComingSoon = () => {
  const { setLoggedIn } = useContext(MainContext);

  const Logout = async () => {
    await AsyncStorage.removeItem("user");
    setLoggedIn(false);
  };
  return (
    <View style={styles.container}>
      <Image source={Coming_Soon} style={styles.image} />
      <Button
        title="Logout"
        icon={<Ionicons name="log-out-outline" size={24} color="white" />}
        onPress={Logout}
        buttonStyle={styles.logoutButton}
      />
    </View>
  );
};

export default ComingSoon;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
  logoutButton: {
    marginTop: 20,
    width: 200,
    backgroundColor: "red",
  },
});
