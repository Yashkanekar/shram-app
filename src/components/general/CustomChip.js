import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const CustomChip = ({ innerText }) => {
  return (
    <TouchableOpacity>
      <View style={styles.chipwrapper}>
        <Text style={styles.innertextstyle}>{innerText}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomChip;

const styles = StyleSheet.create({
  chipwrapper: {
    width: 42,
    height: 16,
    borderRadius: 16,
    backgroundColor: "rgba(186, 27, 27, 0.1)",
    justifyContent: "center",
    alignItems: "center",
  },
  innertextstyle: {
    width: 30,
    height: 9,
    fontSize: 9,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 9,
    letterSpacing: 0.1,
    color: "#ba1b1b",
  },
});
