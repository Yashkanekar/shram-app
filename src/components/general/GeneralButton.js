import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const GeneralButton = ({ innertext, navigateto, navigation }) => {
  return (
    <TouchableOpacity
      style={styles.buttonwrapperStyle}
      onPress={() => {
        navigation.navigate(`${navigateto}`);
      }}
    >
      <View style={styles.textStyle}>
        <Text style={styles.innerTextStyle}>{innertext}</Text>
      </View>
      {/* <Image
        style={styles.buttonArrowStyle}
        source={require("../../../assets/ButtonArrow.png")}
      /> */}
    </TouchableOpacity>
  );
};

styles = StyleSheet.create({
  buttonwrapperStyle: {
    // width: 104,
    flexDirection: "row",
    borderColor: "#6d503c",
    borderWidth: 1.5,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    // height: 52,
  },
  innerTextStyle: {
    color: "#6d503c",
    fontSize: 16,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 20,
    letterSpacing: 0.1,
    textAlign: "center",
    margin: 16,
  },
  buttonArrowStyle: {},
});

export default GeneralButton;
