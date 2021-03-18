import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export type MarketCoinProps = {
  marketCoin: {
    image: string;
    name: string;
    symbol: string;
    valueChange24h: number;
    valueUSD: number;
  };
};

const MarketCoin = (props: MarketCoinProps) => {
  const {
    marketCoin: { image, name, symbol, valueChange24h, valueUSD },
  } = props;
  return (
    <View style={styles.root}>
      <View style={styles.left}>
        <Image style={styles.image} source={{ uri: image }} />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.symbol}>{symbol}</Text>
        </View>
      </View>
      <View style={styles.right}>
        <Text style={styles.value}>${valueUSD}</Text>
        <Text style={{ color: valueChange24h > 0 ? "#398f0a" : "f10000" }}>
          {valueChange24h > 0 && "+"} {valueChange24h}
        </Text>
      </View>
    </View>
  );
};

export default MarketCoin;

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    flex: 1,
    width: "90%",
    justifyContent: "space-between",
    height: 50,
    marginVertical: 10,
    alignItems: "center",
  },
  image: {
    height: 50,
    width: 50,
    marginRight: 10,
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
  symbol: {
    color: "#6b6b6b",
  },
});
