import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export type UserRankingItemProps = {
  user: {
    image: string;
    name: string;
    netWorth: number;
  };
  place: number;
};

const UserRankingItem = (props: UserRankingItemProps) => {
  const {
    user: { image, name, netWorth },
    place,
  } = props;
  return (
    <View style={styles.root}>
      <View style={styles.left}>
        <Text style={styles.place}>{place}</Text>
        <Image style={styles.image} source={{ uri: image }} />
        <View>
          <Text style={styles.name}>{name}</Text>
        </View>
      </View>
      <View style={styles.right}>
        <Text style={styles.value}>${netWorth}</Text>
      </View>
    </View>
  );
};

export default UserRankingItem;

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
  place: {
    fontSize: 18,
    width: 20,
  },
});
