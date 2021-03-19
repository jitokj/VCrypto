import React from "react";
import { FlatList, Image, StyleSheet, View } from "react-native";

import UserRankingItem from "../../components/UserRankingItem";
const image = require("../../../assets/images/images/Saly-20.png");

const usersRanking = [
  {
    id: "1",
    image:
      "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
    name: "Bitcoin",
    netWorth: 42,
  },
  {
    id: "2",
    name: "Ethereum",
    image:
      "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
    netWorth: 312,
  },
  {
    id: "3",
    name: "Tether",
    image:
      "https://assets.coingecko.com/coins/images/325/large/Tether-logo.png?1598003707",
    netWorth: 6942,
  },
];

const RankingScreen = () => {
  return (
    <View style={styles.root}>
      <FlatList
        style={{ width: "100%" }}
        data={usersRanking}
        renderItem={({ item, index }) => (
          <UserRankingItem user={item} place={index + 1} />
        )}
        showsVerticalScrollIndicator={false}
        ListHeaderComponentStyle={{ alignItems: "center" }}
        ListHeaderComponent={() => (
          <>
            <Image style={styles.image} source={image} />
          </>
        )}
      />
    </View>
  );
};

export default RankingScreen;

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
