import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
import BottomLine from "../Helpers/BottomLine";

class DropdownInput extends Component {
  state = { gender: "" };
  showGender = (option) => {
    if (option !== "disabled") {
      this.setState({ gender: option });
    }
  };

  render() {
    return (
      <>
        <View style={styles.body}>
          <Picker
            onValueChange={this.showGender}
            selectedValue={this.state.gender}
            color="#6d503c"
            style={styles.pickerstyle}
          >
            <Picker.Item label="Gender" value="disabled" color="#C5B4AA" />
            <Picker.Item label="Male" value="male" color="#6d503c" />
            <Picker.Item label="Female" value="female" color="#6d503c" />
          </Picker>
        </View>
        <BottomLine />
      </>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    width: 198,
    borderBottomColor: "#6d503c",
    height: 50,
    padding: 0,
  },
  itemStyle: {
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 20,
    letterSpacing: 0.1,
    color: "#6d503c",
  },
  pickerstyle: {
    borderWidth: 1,
    borderBottomColor: "#6d503c",
  },
});

export default DropdownInput;
