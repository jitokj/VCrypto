import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import PercentageChange from "../PercentageChange";
import { useNavigation } from "@react-navigation/native";

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
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.root}
      onPress={() => {
        navigation.navigate("CoinDetails");
      }}
    >
      <View style={styles.left}>
        <Image style={styles.image} source={{ uri: image }} />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.symbol}>{symbol}</Text>
        </View>
      </View>
      <View style={styles.right}>
        <Text style={styles.value}>${valueUSD}</Text>
        <PercentageChange value={valueChange24h} />
      </View>
    </Pressable>
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
