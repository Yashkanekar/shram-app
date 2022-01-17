import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Input, Button } from "react-native-elements/dist/input/Input";
import GeneralButton from "../../components/general/GeneralButton";
import Passwordinput from "../../components/general/Passwordinput";
import GeneralTextInput from "../../components/general/GeneralTextInput";
import Spacer from "../../components/Helpers/Spacer";

const LaunchScreen = () => {
  return (
    <SafeAreaView style={styles.parentwrapperStyle}>
      <Image
        style={styles.logoStyle}
        source={require("../../../assets/LaunchLogo.png")}
      />
      <Text style={styles.textStyle}>Shram</Text>
      <GeneralButton innertext="Login" />
      <Passwordinput />
      <Spacer />
      <GeneralTextInput inputFor="Email" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  parentwrapperStyle: {
    backgroundColor: "#fffbf7",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    padding: 35,
  },
  logoStyle: {},
  textStyle: {
    color: "#6d503c",
    width: 238,
    height: 64,
    fontSize: 57,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 64,
    letterSpacing: -0.25,
    textAlign: "center",
    marginTop: 25,
  },
});

export default LaunchScreen;
