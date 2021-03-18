import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import MarketCoin from "../../components/MarketCoin";
const image = require("../../../assets/images/images/Saly-17.png");

const marketCoins = [
  {
    id: "1",
    image:
      "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
    name: "Bitcoin",
    symbol: "BTC",
    valueChange24h: 6.42,
    valueUSD: 42,
  },
  {
    id: "2",
    name: "Ethereum",
    image:
      "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
    symbol: "ETH",
    valueChange24h: 3.0,
    valueUSD: 312,
  },
  {
    id: "3",
    name: "Tether",
    image:
      "https://assets.coingecko.com/coins/images/325/large/Tether-logo.png?1598003707",
    symbol: "USDT",
    valueChange24h: -9.42,
    valueUSD: 6942,
  },
];

const MarketScreen = () => {
  return (
    <View style={styles.root}>
      <FlatList
        style={{ width: "100%" }}
        data={marketCoins}
        renderItem={({ item }) => <MarketCoin marketCoin={item} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponentStyle={{ alignItems: "center" }}
        ListHeaderComponent={() => (
          <>
            <Image style={styles.image} source={image} />

            <Text style={styles.label}>Market</Text>
          </>
        )}
      />
    </View>
  );
};

export default MarketScreen;

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
  },
});
