import React from "react";
import { View, StyleSheet } from "react-native";

const Spacer = ({ children }) => {
  return <View style={styles.spacerStyle}>{children}</View>;
};
const styles = StyleSheet.create({
  spacerStyle: {
    marginBottom: 8,
  },
});

export default Spacer;
