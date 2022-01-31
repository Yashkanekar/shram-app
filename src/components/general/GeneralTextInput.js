import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { TextInput } from 'react-native-paper';
import { Input, Button } from "react-native-elements/dist/input/Input";

const GeneralTextInput = ({ inputFor, goalDescription }) => {
  const [inputvalue, setValue] = useState(`${goalDescription}`);

  return (
    <View style={styles.wrapperStyle}>
      <TextInput
        value={inputvalue}
        label={inputFor} 
        // placeholder={inputFor}
        // editable={false} 
        multiline
        activeUnderlineColor="#6d503c"
        underlineColor="#c5b4aa"
        containerStyle={styles.containerStyle}
        labelStyle={styles.labelStyle}
        inputContainerStyle={styles.inputStyle}
        inputStyle={styles.inputTextStyles}
        placeholderTextColor="#C5B4AA"
        selectionColor="#6d503c"
        onChangeText={(newValue) => {
          setValue(newValue);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputTextStyles: {
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 20,
    letterSpacing: 0.1,
    color: "#6d503c",
  },
  containerStyle: {
    fontSize: 14,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 20,
    letterSpacing: 0.1,
    // borderWidth: 1,
  },
  inputStyle: {
    color: "#6d503c",
    marginBottom: -20,
  },
  labelStyle: {
    textTransform: "capitalize",
    color: "#6d503c",
    color: "#C5B4AA",
  },
  wrapperStyle: {
    width: 320,
    flexDirection: "column",
  },
});

export default GeneralTextInput;
