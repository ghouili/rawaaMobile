import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Ionicons from "react-native-vector-icons/Ionicons";

import { path } from "../utils/Vaiables";
import MontantDialog from "../compnents/MontantDialog";
import { MainContext } from "../hooks/ProviderContext";

const ScabQRCode = ({ navigation }) => {
  const { setLoggedIn } = useContext(MainContext);
  const [montant, setMontant] = useState("");
  const [visible, setVisible] = useState(true);

  const [user, setUser] = useState({
    name: "partner",
    avatar: "avatar.png",
  });

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  const [hasPermission, setHasPermission] = React.useState(false);
  const [scanData, setScanData] = React.useState();

  const handleLogout = async () => {
    await AsyncStorage.removeItem("user");
    navigation.navigate("Splach");
  };

  const GetUserInfo = async () => {
    let userData = await AsyncStorage.getItem("user");
    setUser(JSON.parse(userData));
  };

  useEffect(() => {
    GetUserInfo();
  }, []);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (!hasPermission) {
    return (
      <View style={styles.container}>
        <Text>Please grant camera permissions to app.</Text>
      </View>
    );
  }

  const handleBarCodeScanned = ({ type, data }) => {
    return submit(data);
  };

  const submit = async (user_id) => {
    let result = await fetch(`${path}achat/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        montant: montant,
        user_id,
        partner_id: user?._id,
      }),
    });

    let resultData = await result.json();
    console.log(resultData);

    if (resultData.success === true) {
      showDialog();
      return setMontant("");
    } else {
      return Alert.alert("Error", resultData.message, [{ text: "fermer" }]);
    }
  };

  return (
    <View style={styles.container}>
      <BarCodeScanner
        style={StyleSheet.absoluteFillObject}
        onBarCodeScanned={visible ? undefined : handleBarCodeScanned}
      />

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Ionicons name="log-out-outline" size={28} color="white" />
        <Text style={{ color: "white", fontWeight: "600", fontSize: 18 }}>
          Logout
        </Text>
      </TouchableOpacity>
      <MontantDialog
        montant={montant}
        setMontant={setMontant}
        visible={visible}
        showDialog={showDialog}
        hideDialog={hideDialog}
      />
    </View>
  );
};

export default ScabQRCode;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logoutButton: {
    display: "flex",
    flexDirection: "row",
    gap: 2,
    color: "white",
    position: "absolute",
    left: 20,
    bottom: 20,
    backgroundColor: "#8B0001",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 4,
    alignItems: "center",
    justifyContent: "center",
  },
});
