import React, { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import PercentageChange from "../../components/PercentageChange";

const CoinDetailScreen = () => {
  const [coinData, setCoinData] = useState({
    id: "1",
    image:
      "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
    symbol: "ETH",
    valueChange1h: -1.2,
    valueChange1d: 2.3,
    valueChange1w: 3.4,
    curentPrice: 5940,
    name: "ETHEREUM",
    amount: 2,
  });
  const onBuy = () => {
    console.log("Buy");
  };
  const onSell = () => {};
  return (
    <View style={styles.root}>
      <View style={styles.topContainer}>
        <View style={styles.left}>
          <Image style={styles.image} source={{ uri: coinData.image }} />
          <View>
            <Text style={styles.name}>{coinData.name}</Text>
            <Text style={styles.symbol}>{coinData.symbol}</Text>
          </View>
        </View>
        <View style={styles.right}>
          <AntDesign color={"#2f95dc"} size={30} name="staro" />
        </View>
      </View>
      <View style={styles.row}>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <View style={styles.valueContainer}>
            <Text style={styles.label}>Current Price</Text>
            <Text style={styles.value}>{coinData.curentPrice}</Text>
          </View>
          <View style={styles.valueContainer}>
            <Text style={styles.label}>1 hour</Text>
            <PercentageChange value={coinData.valueChange1h} />
          </View>
          <View style={styles.valueContainer}>
            <Text style={styles.label}>1 day</Text>
            <PercentageChange value={coinData.valueChange1d} />
          </View>
          <View>
            <Text style={styles.label}>7 days</Text>
            <PercentageChange value={coinData.valueChange1w} />
          </View>
        </View>
      </View>
      <View style={styles.row}>
        <Text>Position</Text>
        <Text>
          {coinData.symbol} {coinData.amount} {"  "} (${" "}
          {coinData.curentPrice * coinData.amount})
        </Text>
      </View>
      <View style={[styles.row, { marginTop: "auto" }]}>
        <Pressable
          style={[styles.button, { backgroundColor: "#20b100" }]}
          onPress={onBuy}
        >
          <Text style={styles.buttonText}>BUY</Text>
        </Pressable>
        <Pressable
          style={[styles.button, { backgroundColor: "#d60000" }]}
          onPress={onSell}
        >
          <Text style={styles.buttonText}>SELL</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CoinDetailScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    backgroundColor: "white",
  },
  topContainer: {
    flexDirection: "row",
    // flex: 1,
    justifyContent: "space-between",
    height: 50,
    marginVertical: 5,
    alignItems: "center",
    width: "100%",
  },
  row: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginVertical: 15,
  },
  image: {
    height: 50,
    width: 50,
    marginRight: 10,
    borderRadius: 25,
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
  symbol: {
    color: "#6b6b6b",
  },
  label: {
    color: "#545454",
    marginBottom: 5,
  },
  value: {
    fontSize: 24,
  },
  valueContainer: {
    alignItems: "center",
    marginHorizontal: 20,
  },
  button: {
    flex: 1,
    height: 50,
    margin: 5,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});
