import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { TextInput } from 'react-native-paper';
import { Input, Button } from "react-native-elements/dist/input/Input";

const Passwordinput = ({ heading }) => {
  const [inputvalue, setValue] = useState("");

  return (
    <View style={styles.wrapperStyle}>
      <TextInput
        value={inputvalue}
        label={heading}
        // placeholder={heading}
        activeUnderlineColor="#6d503c"
        underlineColor="#c5b4aa"
        containerStyle={styles.containerStyle}
        secureTextEntry={true}
        labelStyle={styles.labelStyle}
        inputContainerStyle={styles.inputStyle}
        inputStyle={styles.inputTextStyles}
        placeholderTextColor="#C5B4AA"
        selectionColor="#6d503c"
        onChangeText={(newValue) => {
          setValue(newValue);
        }}
      />
      {inputvalue.length >= 8 || inputvalue.length === 0 ? (
        <Text style={styles.emptyMessageStyle}></Text>
      ) : (
        <Text style={styles.errorMessageStyle}>
          Password must contain atleast 8 characters
        </Text>
      )}
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
  errorMessageStyle: {
    marginLeft: 10,
    fontSize: 9,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0.5,
    color: "#6d503c",
  },
  wrapperStyle: {
    width: 320,
    flexDirection: "column",
  },
  emptyMessageStyle: {
    marginLeft: 10,
    fontSize: 9,
  },
});

export default Passwordinput;
