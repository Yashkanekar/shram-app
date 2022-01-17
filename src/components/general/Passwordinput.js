import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements/dist/input/Input";

const Passwordinput = () => {
  const [inputvalue, setValue] = useState("");

  return (
    <View style={styles.wrapperStyle}>
      <Input
        value={inputvalue}
        label="password"
        placeholder="Password"
        containerStyle={styles.containerStyle}
        secureTextEntry={true}
        labelStyle={styles.labelStyle}
        inputContainerStyle={styles.inputStyle}
        inputStyle={styles.inputTextStyles}
        underlineColorAndroid="transparent"
        placeholderTextColor="#C5B4AA"
        selectionColor="#6d503c"
        onChangeText={(newValue) => {
          setValue(newValue);
          console.log(inputvalue);
        }}
      />
      {inputvalue.length < 8 ? (
        <Text style={styles.errorMessageStyle}>
          Password must be atleast 8 characters
        </Text>
      ) : (
        <Text style={styles.emptyMessageStyle}></Text>
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
    width: 300,
    flexDirection: "column",
  },
  emptyMessageStyle: {
    marginLeft: 10,
    fontSize: 9,
  },
});

export default Passwordinput;
