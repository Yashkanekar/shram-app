import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Input, Button } from "react-native-elements/dist/input/Input";
import GeneralButton from "../../components/general/GeneralButton";
import GeneralTextInput from "../../components/general/GeneralTextInput";
import Spacer from "../../components/Helpers/Spacer";
import DropdownInput from "../../components/general/DropdownInput";
import DateInput from "../../components/general/DatePicker";
import CustomHeader from "../../components/general/CustomHeader";

const IntroductionScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.parentwrapperStyle}>
      <CustomHeader navigation={navigation} navigateto="createAccount" />
      <View style={styles.wrapper}>
        <Text style={styles.textStyle}>Welcome, tell us about yourself!</Text>
        <Spacer />
        <GeneralTextInput inputFor="First Name" goalDescription="" />
        <Spacer />
        <GeneralTextInput inputFor="Last Name" goalDescription="" />
        <Spacer />
        <DropdownInput></DropdownInput>
        <Spacer></Spacer>
        <Spacer></Spacer>
        <DateInput></DateInput>
      </View>

      <Spacer></Spacer>
      <Spacer></Spacer>
      <View style={styles.buttonStyle}>
        <GeneralButton innertext="Next" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  parentwrapperStyle: {
    backgroundColor: "#fffbf7",
    flexDirection: "column",
    flex: 1,
    paddingLeft: 45,
    paddingRight: 45,
  },
  wrapper: {
    marginTop: 36,
  },
  textStyle: {
    color: "#6d503c",
    fontSize: 26,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 28,
    letterSpacing: 0,
  },
  buttonStyle: {
    marginTop: "95%",
    marginLeft: 226,
  },
});

export default IntroductionScreen;
