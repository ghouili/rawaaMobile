import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Avatar, Button, Card, Searchbar } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { path, windowHeight, windowWidth } from "../../utils/Vaiables";

const HomeScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [user, setUser] = useState({
    firstname: "user",
    lastname: "user",
    avatar: "avatar.png",
  });

  const [filterData, setfilterData] = useState([]);
  const [masterData, setMasterData] = useState([]);
  const [search, setSearch] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  /// fitering data using seaarch input ::
  const searchFilter = (text) => {
    if (text) {
      const newData = masterData.filter((item) => {
        const itemData = Object.values(item).join(" ").toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setfilterData(newData);
      setSearch(text);
    } else {
      setfilterData(masterData);
      setSearch(text);
    }
  };

  const fetchData = async () => {
    const response = await fetch(`${path}achat`, {
      method: "GET",
    });

    const result = await response.json();
    if (result.success) {
      setMasterData(result.data);
      setfilterData(result.data);
    }
  };

  const GetUserInfo = async () => {
    let userData = await AsyncStorage.getItem("user");
    // console.log(userData);
    // console.log(userData.avatar);
    setUser(JSON.parse(userData));
  };

  useEffect(() => {
    GetUserInfo();
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topcontainer}>
        <View style={styles.userinfo}>
          <Image
            source={{
              uri: `${path}uploads/images/${user?.avatar}`,
              cache: "only-if-cached",
            }}
            style={styles.useravatar}
          />
          <Text style={styles.usertext}>{user.firstname} {user.lastname}</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("QRcode")}
          // onPress={() => alert("QRcode!")}
        >
          <MaterialCommunityIcons name="qrcode" size={35} color={"#fff"} />
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style={styles.mainContainer}>
          <Searchbar
            placeholder="Search"
            onChangeText={(texte) => searchFilter(texte)}
            value={search}
            style={styles.serchinput}
            autoCapitalize="none"
          />
        </View>
        <View style={styles.mainContainer}>
          {filterData.map(
            ({ date, montant, user_id, company_id, partner_id }, index) => {
              return (
                <Card key={index}>
                  <Card.Title
                    title={partner_id?.name}
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
                      <Text variant="titleLarge">{montant} Dt</Text>
                      <Text variant="titleLarge">{date}</Text>
                    </View>
                  </Card.Content>
                </Card>
              );
            }
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

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
    color: "white",
  },
  mainContainer: {
    width: "100%",
    paddingHorizontal: windowWidth * 0.05,
    paddingBottom: windowHeight * 0.01,
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
