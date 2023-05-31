import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity  ,
} from "react-native";
import { Avatar, Button, Card, Searchbar } from "react-native-paper";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { windowHeight, windowWidth } from "../../utils/Dimensions";

const SplashScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topcontainer}>
        <View style={styles.userinfo}>
          <Image
            source={{
              uri: "https://reactjs.org/logo-og.png",
              cache: "only-if-cached",
            }}
            style={styles.useravatar}
          />
          <Text style={styles.usertext}>User Name</Text>
        </View>
        <TouchableOpacity  
        onPress={() => alert('Pressed!')}
        >
        <MaterialCommunityIcons name="qrcode" size={35} color={'#fff'} />
        </TouchableOpacity >
      </View>

      <ScrollView>
        <View style={styles.mainContainer}>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={styles.serchinput}
          />
        </View>
        <View style={styles.mainContainer}>
          {[1, 2, 3, 4, 5, 6, 7].map(({}, index) => {
            return (
              <Card key={index}>
                <Card.Title
                  title="Monoprit"
                  subtitle="Shop"
                  left={(props) => (
                    <Avatar.Image
                      {...props}
                      source={{
                        uri: "https://reactjs.org/logo-og.png",
                        cache: "only-if-cached",
                      }}
                    />
                  )}
                />
                <Card.Content>
                  <View style={styles.ContainerDatPrice}>
                    <Text variant="titleLarge">128 Dt</Text>
                    <Text variant="titleLarge">05/21/2023</Text>
                  </View>
                </Card.Content>
              </Card>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
  },
  topcontainer: {
    width: "100%",
    height: windowHeight * 0.14,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: "#159A9C",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingHorizontal: windowWidth * 0.1,
    paddingBottom: windowHeight * 0.03,
  },
  userinfo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    color: "white",
    gap: 10,
  },
  useravatar: {
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
    borderRadius: 150,
  },
  usertext: {
    fontSize: 19,
    fontWeight: "700",
    color: 'white',
  },
  mainContainer: {
    width: "100%",
    paddingHorizontal: windowWidth * 0.05,
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  serchinput: {
    marginVertical: windowHeight * 0.05,
    borderRadius: 10,
    padding: 1,
  },
  ContainerDatPrice: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: windowWidth * 0.05,
  },
});
