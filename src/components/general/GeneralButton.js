import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const GeneralButton = ({ innertext }) => {
  return (
    // <View style={styles.buttonwrapperStyle}>
    //   <Button style={styles.buttonStyle} title={innertext}></Button>
    //   <Image
    //     style={styles.buttonArrowStyle}
    //     source={require("../../../assets/ButtonArrow.png")}
    //   />
    // </View>

    <TouchableOpacity style={styles.buttonwrapperStyle}>
      <View style={styles.textStyle}>
        <Text style={styles.innerTextStyle}>{innertext}</Text>
      </View>
      <Image
        style={styles.buttonArrowStyle}
        source={require("../../../assets/ButtonArrow.png")}
      />
    </TouchableOpacity>
  );
};

styles = StyleSheet.create({
  buttonwrapperStyle: {
    width: 104,
    flexDirection: "row",
    borderColor: "#6d503c",
    borderWidth: 1.5,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "space-around",
    color: "blue",
    height: 52,
  },
  textStyle: {
    borderStyle: "solid",
    flexDirection: "row",
    alignItems: "center",
  },
  innerTextStyle: {
    width: 38,
    height: 20,
    color: "#6d503c",
    fontSize: 14,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 20,
    letterSpacing: 0.1,
    textAlign: "center",
  },
  buttonArrowStyle: {},
});

export default GeneralButton;
