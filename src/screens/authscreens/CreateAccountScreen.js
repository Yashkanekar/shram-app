import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Input, Button } from "react-native-elements/dist/input/Input";
import { exp } from "react-native-reanimated";
import GeneralButton from "../../components/general/GeneralButton";
import GeneralTextInput from "../../components/general/GeneralTextInput";
import Passwordinput from "../../components/general/Passwordinput";
import Spacer from "../../components/Helpers/Spacer";
<<<<<<< HEAD
import DateInput from "../../components/general/DatePicker";
import DropdownInput from "../../components/general/DropdownInput";
import CustomHeader from "../../components/general/CustomHeader";
=======

>>>>>>> 52713aeca3a0013bcaef106958be9987818fa0ef

const CreateAccountScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.parentwrapperStyle}>
      <CustomHeader />
      <View style={styles.formwrapper}>
        <Text style={styles.textStyle}>Let's create your account.</Text>
        <Spacer />
        <Spacer />
        <GeneralTextInput inputFor="Email" />
        <Spacer />
        <Spacer />
        <Passwordinput heading="Create Password" />
        <Spacer />
        <Passwordinput heading="Confirm Password" />
        <Spacer />
        <Spacer />
        <View style={styles.buttonwrapper}>
          <GeneralButton style={styles.buttonstyle} innertext="Done" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  parentwrapperStyle: {
    backgroundColor: "#fffbf7",
    flexDirection: "column",
    // alignItems: "center",
    flex: 1,
    // padding: 30,
    paddingLeft: 45,
    paddingRight: 45,
  },
  formwrapper: {
    marginTop: 36,
    // borderWidth: 1,
  },
  buttonwrapper: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 12,
    // borderWidth: 1,
  },
  textStyle: {
    color: "#6d503c",
    fontSize: 25,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 28,
    letterSpacing: 0,
    paddingLeft: 12,
    paddingRight: 12,
  },
  buttonstyle: {},
});
    <View style={styles.wrapper}>
    <Text style={styles.textStyle}>
      Let's create your account.
    </Text>
    <Spacer />
    <GeneralTextInput inputFor='Email' />
    <Spacer />
    <Passwordinput />
    <Spacer />
    <Passwordinput />
    <Spacer />
    <Spacer />
    </View>

    <View style={styles.buttonStyle} >
    <GeneralButton innertext='Done' />
    </View>
  </SafeAreaView>
  )
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
        marginTop: 56,
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
        marginTop: '88%',
        marginLeft: 226,
      },
})

export default CreateAccountScreen;
