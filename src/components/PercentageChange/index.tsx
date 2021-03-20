import React from "react";
import { StyleSheet, Text, View } from "react-native";
interface PercentageProps {
  value: number;
  style?: {};
}

const PercentageChange = ({ value, style = {} }: PercentageProps) => {
  return (
    <Text style={[style, { color: value > 0 ? "#398f0a" : "#f10000" }]}>
      {value > 0 && "+"} {value} %
    </Text>
  );
};

export default PercentageChange;

const styles = StyleSheet.create({});
