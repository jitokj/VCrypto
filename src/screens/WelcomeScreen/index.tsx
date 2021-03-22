import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
const googleImage = require("../../../assets/images/images/google.png");
const image = require("../../../assets/images/images/Saly-1.png");

const WelcomeScreen = () => {
  const signInGoogle = () => {};
  return (
    <View style={styles.root}>
      <Image style={styles.image} source={image} />
      <Text style={styles.title}>Welcome to VCrypto</Text>
      <Text style={styles.subtitle}>
        Invest your virtual $100.00 and compete with others
      </Text>
      <Pressable onPress={signInGoogle} style={styles.googleButton}>
        <Image style={styles.buttonImage} source={googleImage} />
      </Pressable>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  root: {
    padding: 20,
    alignItems: "center",
    flex: 1,
    backgroundColor: "white",
  },
  image: {
    height: "40%",
    aspectRatio: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 20,
    textAlign: "center",
    color: "#707070",
  },
  buttonImage: {
    width: "100%",
    resizeMode: "contain",
  },
  googleButton: {
    marginBottom: 50,
    marginTop: "auto",
    width: "70%",
  },
});
