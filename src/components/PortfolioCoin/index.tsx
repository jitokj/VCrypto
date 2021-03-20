import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export type PortfolioCoinProps = {
  portfolioCoin: {
    image: string;
    name: string;
    symbol: string;
    amount: number;
    valueUSD: number;
  };
};

const PortfolioCoin = (props: PortfolioCoinProps) => {
  const {
    portfolioCoin: { image, name, symbol, amount, valueUSD },
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
        <Text style={styles.symbol}>
          {symbol} {amount}
        </Text>
      </View>
    </Pressable>
  );
};

export default PortfolioCoin;

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
