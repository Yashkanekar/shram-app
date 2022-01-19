import React from "react";
import { View, Text, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { Input, Button } from "react-native-elements/dist/input/Input";
import GeneralButton from "../../components/general/GeneralButton";
import GeneralTextInput from "../../components/general/GeneralTextInput";
import Spacer from "../../components/Helpers/Spacer";

const IntroductionScreen = () => {
  return (
    <SafeAreaView style={styles.parentwrapperStyle}>
      <View style={styles.wrapper}>
      <Text style={styles.textStyle}>
        Welcome, tell us about yourself!
      </Text>
      <Spacer />
      <GeneralTextInput inputFor='First Name' />
      <Spacer />
      <GeneralTextInput inputFor='Last Name' />
      <Spacer />
      </View>
      <GeneralButton innertext='Next' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  parentwrapperStyle: {
    backgroundColor: "#fffbf7",
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
    padding: 35,
  },
  wrapper: {
    marginTop: 96,
  },
  textStyle: {
    color: "#6d503c",
    fontSize: 26,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 28,
    letterSpacing: 0,
  },
});

export default IntroductionScreen;