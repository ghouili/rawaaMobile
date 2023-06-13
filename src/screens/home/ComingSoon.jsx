import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import Coming_Soon from '../../../assets/coming_soon.png';

const ComingSoon = () => {
  return (
    <View style={styles.container}>
      <Image source={Coming_Soon} style={styles.image} />
    </View>
  );
};

export default ComingSoon;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  text: {
    marginTop: 20,
    fontSize: 20,
  },
});
