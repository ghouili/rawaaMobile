import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';

import { ProviderContext } from './src/hooks/ProviderContext';
import { MainNavigation } from './src/navigations';


export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <ProviderContext>
          <MainNavigation />
        </ProviderContext >
      </PaperProvider>
    </NavigationContainer>
  );
}
