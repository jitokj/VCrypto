import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import PortfolioCoin from "../../components/PortfolioCoin";
const image = require("../../../assets/images/images/Saly-10.png");

const portfolioCoins = [
  {
    id: "1",
    image:
      "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
    name: "Bitcoin",
    symbol: "BTC",
    amount: 69.42,
    valueUSD: 42,
  },
  {
    id: "2",
    name: "Ethereum",
    image:
      "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
    symbol: "ETH",
    amount: 30,
    valueUSD: 312,
  },
  {
    id: "3",
    name: "Tether",
    image:
      "https://assets.coingecko.com/coins/images/325/large/Tether-logo.png?1598003707",
    symbol: "USDT",
    amount: 69.42,
    valueUSD: 6942,
  },
];

const PortFolioScreen = () => {
  return (
    <View style={styles.root}>
      <Image style={styles.image} source={image} />
      <View style={styles.balanceContainer}>
        <Text style={styles.label}>Portfolio balance</Text>
        <Text style={styles.balance}>$69.420</Text>
      </View>
      <FlatList
        style={{ width: "100%" }}
        data={portfolioCoins}
        renderItem={({ item }) => <PortfolioCoin portfolioCoin={item} />}
      />
    </View>
  );
};

export default PortFolioScreen;

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
  label: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#777777",
  },
  balanceContainer: {
    width: "100%",
    marginVertical: 20,
  },
  balance: {
    fontSize: 36,
    fontWeight: "bold",
  },
});
