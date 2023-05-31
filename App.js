import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import QRCode from 'react-native-qrcode-svg';
import { DisplayQR, LogIn, Splach, SplashScreen } from './src';
import BottomTab from './src/navigations/BottomTab';


export default function App() {
  return (
    // <View style={styles.container}>
    //   {/* <QRCode
    //     value="http://awesome.link.qr"
    //   /> */}
    //   <StatusBar style="auto" />
    // </View>
    // <ScabQRCode />
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
