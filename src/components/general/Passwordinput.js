import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { Input, Button } from "react-native-elements/dist/input/Input";

const Passwordinput = ({ heading }) => {
  const [inputvalue, setValue] = useState("");

  return (
    <View style={styles.wrapperStyle}>
      <TextInput
        value={inputvalue}
        label={heading}
        secureTextEntry={true}
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
  wrapperStyle: {
    width: 320,
    flexDirection: "column",
  },
  inputstyle: {
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "normal",
    color: "#6d503c",
    lineHeight: 12,
    letterSpacing: 0.5,
    backgroundColor: "#fffbf7",
  },
  errorMessageStyle: {
    marginLeft: 10,
    fontSize: 9,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0.5,
    color: "#6d503c",
  },
  emptyMessageStyle: {
    marginLeft: 10,
    fontSize: 9,
  },
});

export default Passwordinput;
