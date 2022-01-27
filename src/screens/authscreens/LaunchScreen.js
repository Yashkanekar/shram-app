import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GeneralButton from "../../components/general/GeneralButton";
import Passwordinput from "../../components/general/Passwordinput";
import GeneralTextInput from "../../components/general/GeneralTextInput";
import Spacer from "../../components/Helpers/Spacer";

const LaunchScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.parentwrapperStyle}>
      <Image
        style={styles.logoStyle}
        source={require("../../../assets/LaunchLogo.png")}
      />
      <Text style={styles.textStyle}>Shram</Text>
      <Spacer />
      <Spacer />
      <GeneralTextInput inputFor="Email" />
      <Spacer />
      <Passwordinput heading="Password" />

      <View style={styles.loginContainer}>
        <View style={styles.linkwrapper}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("createAccount");
            }}
          >
            <Text style={styles.newAccountStyle}>Create new account</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.newAccountStyle}>Forgot password?</Text>
          </TouchableOpacity>
        </View>

        <GeneralButton innertext="Login" />
      </View>
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
    // padding: 35,
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
  newAccountStyle: {
    color: "#6d503c",
    fontSize: 11,
    fontWeight: "700",
    fontStyle: "normal",
    lineHeight: 16,
    letterSpacing: 0.5,
    // textAlign: "left",
  },
  loginContainer: {
    width: 300,
    height: 52,
    marginTop: 120,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  linkwrapper: {
    flexDirection: "column",
    justifyContent: "space-around",
  },
});

export default LaunchScreen;
