import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { path } from "../utils/Vaiables";
import MontantDialog from "../compnents/MontantDialog";

const ScabQRCode = ({ navigation }) => {
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
    // console.log(`Data: ${data}`);
    // console.log(`Type: ${type}`);
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

      <StatusBar style="auto" />
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
});
