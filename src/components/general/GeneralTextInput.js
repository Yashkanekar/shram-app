import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { Input, Button } from "react-native-elements/dist/input/Input";
import { fonts } from "react-native-elements/dist/config";

const GeneralTextInput = ({ inputFor, goalDescription }) => {
  const [inputvalue, setValue] = useState(`${goalDescription}`);

  return (
    <View style={styles.wrapperStyle}>
      <TextInput
        value={inputvalue}
        label={inputFor}
        multiline
        style={styles.inputstyle}
        theme={{
          colors: {
            primary: "#6d503c",
            text: "#6d503c",
            placeholder: "#c5b4aa",
          },
        }}
        onChangeText={(newValue) => {
          setValue(newValue);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperStyle: {
    width: 320,
    flexDirection: "column",
  },
  inputstyle: {
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 12,
    letterSpacing: 0.5,
    backgroundColor: "#fffbf7",
  },
});

export default GeneralTextInput;
