import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GeneralButton from "../../components/general/GeneralButton";
import Spacer from "../../components/Helpers/Spacer";

const SetupScreen = () => {
  return (
    <SafeAreaView style={styles.parentwrapperStyle}>
      <Image
        style={styles.logoStyle}
        source={require("../../../assets/LaunchLogo.png")}
      />
      <Spacer />
      <Spacer />
      <GeneralButton innertext="Set up Shram" />
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
});

export default SetupScreen;