import React, { useState } from "react";
import { View } from "react-native";
import {
  Button,
  Dialog,
  Portal,
  PaperProvider,
  Text,
  TextInput,
} from "react-native-paper";

const MontantDialog = ({
  montant,
  setMontant,
  visible,
  showDialog,
  hideDialog,
}) => {
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Title>purchase amount</Dialog.Title>
        <Dialog.Content>
          <TextInput
            label="Montant"
            value={montant}
            onChangeText={(text) => setMontant(text)}
          />
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={hideDialog}>Scan</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default MontantDialog;
