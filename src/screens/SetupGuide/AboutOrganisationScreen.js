import React from "react";
import { View, Text, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { Input, Button } from "react-native-elements/dist/input/Input";
import GeneralButton from "../../components/general/GeneralButton";
import GeneralTextInput from "../../components/general/GeneralTextInput";
import Passwordinput from "../../components/general/Passwordinput";
import Spacer from "../../components/Helpers/Spacer";
import DropdownInput from "../../components/general/DropdownInput";


const AboutOrganisationScreen= () => {
  return(
    <SafeAreaView style={styles.parentwrapperStyle}>
    <View style={styles.wrapper}>
    <Text style={styles.textStyle}>
      Tell us about your Organistaion
    </Text>
    <Spacer />
    <GeneralTextInput inputFor='Email' />
    <Spacer />
    <DropdownInput />
    <Spacer />
    <DropdownInput />
    <Spacer />
    <Spacer />
    </View>

    <View style={styles.buttonStyle} >
    <GeneralButton innertext='Next' />
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

export default AboutOrganisationScreen;