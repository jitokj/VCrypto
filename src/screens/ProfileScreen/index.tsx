import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
const image = require("../../../assets/images/images/Saly-16.png");

const ProfileScreen = () => {
  const [user, setUser] = useState({
    id: 1,
    name: "jito",
    email: "jito@test.com",
    image:
      "https://assets.coingecko.com/coins/images/325/large/Tether-logo.png?1598003707",
    netWorth: 12312,
  });
  const signOut = () => {
    console.warn({ message: "sign out" });
  };
  return (
    <View style={styles.root}>
      <Image style={styles.image} source={image} />
      <View style={styles.userContainer}>
        <View style={styles.left}>
          <Image style={styles.userImage} source={{ uri: user.image }} />
          <View>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.email}>{user.email}</Text>
          </View>
        </View>
        <View style={styles.right}>
          <Text style={styles.value}>${user.netWorth}</Text>
        </View>
      </View>
      <Pressable onPress={signOut} style={{ marginTop: "auto" }}>
        <Text>Sign Out</Text>
      </Pressable>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "white",
  },
  image: {
    height: 175,
    resizeMode: "contain",
  },
  userContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    height: 50,
    marginVertical: 10,
    alignItems: "center",
  },
  userImage: {
    height: 100,
    width: 100,
    marginRight: 10,
    borderRadius: 50,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
  },
  right: {
    alignItems: "flex-end",
  },
  name: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  value: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  email: {},
});
