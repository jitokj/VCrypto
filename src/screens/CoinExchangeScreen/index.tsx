import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
const image = require("../../../assets/images/images/Saly-31.png");

const CoinExchangeScreen = () => {
  const [coinAmount, setCoinAmount] = useState("");
  const [coinUsdValue, setCoinUsdValue] = useState("");
  const route = useRoute();
  const maxUsd = 10000;

  const onPlaceOrder = () => {
    if (isBuy && parseFloat(coinUsdValue) > maxUsd) {
      Alert.alert("Error", `Not Enough Coins.Max: ${maxUsd} `, [
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    }
    if (!isBuy && parseFloat(coinAmount) > coinData?.amount) {
      Alert.alert(
        "Error",
        `Not Enough ${coinData?.symbol} Coins.Max: ${coinData.amount}`,
        [{ text: "OK", onPress: () => console.log("OK Pressed") }]
      );
    }
  };
  const isBuy = route?.params?.isBuy;
  const coinData = route?.params?.coinData;
  useEffect(() => {
    const amount = parseFloat(coinAmount);
    if (!amount && amount !== 0) {
      setCoinAmount("");
      setCoinUsdValue("");
      return;
    }
    setCoinUsdValue((amount * coinData?.curentPrice).toString());
  }, [coinAmount]);

  useEffect(() => {
    const amount = parseFloat(coinUsdValue);
    if (!amount && amount !== 0) {
      setCoinAmount("");
      setCoinUsdValue("");
      return;
    }
    setCoinAmount((amount / coinData?.curentPrice).toString());
  }, [coinUsdValue]);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={100}
      style={styles.root}
    >
      <Text style={styles.title}>
        {isBuy ? "Buy" : "Sell"} {coinData.name}
      </Text>
      <Text style={styles.subtitle}>
        1 {coinData?.symbol}
        {" = "}${coinData?.curentPrice}
      </Text>
      <Image style={styles.image} source={image} />
      <View style={styles.inputsContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="0"
            keyboardType="decimal-pad"
            value={coinAmount}
            onChangeText={(text) => setCoinAmount(text)}
          />
          <Text>{coinData?.symbol}</Text>
        </View>
        <Text style={{ fontSize: 30 }}>=</Text>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="0"
            keyboardType="decimal-pad"
            value={coinUsdValue}
            onChangeText={(text) => setCoinUsdValue(text)}
          />
          <Text>USD</Text>
        </View>
      </View>
      <Pressable style={styles.button} onPress={onPlaceOrder}>
        <Text style={styles.buttonText}>Place Order</Text>
      </Pressable>
    </KeyboardAvoidingView>
  );
};

export default CoinExchangeScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
  },
  subtitle: {
    fontSize: 18,
    marginVertical: 10,
    color: "#5f5f5f",
  },
  image: {
    height: 200,
    resizeMode: "contain",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    borderWidth: 1,
    borderColor: "#b1b1b1",
    flex: 1,
    margin: 20,
  },
  inputsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#0097ff",
    marginTop: "auto",
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});
