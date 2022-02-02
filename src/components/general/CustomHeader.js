import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const CustomHeader = ({ navigation, navigateto }) => {
  return (
    <View style={styles.headerwrapper}>
      <TouchableOpacity
        style={styles.touchableopacity}
        onPress={() => {
          navigation.navigate(`${navigateto}`);
        }}
      >
        <View>
          <AntDesign name="arrowleft" size={24} color="#6d503c" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerwrapper: {
    borderColor: "black",
    flexDirection: "row",
    marginTop: 32,
    // borderWidth: 1,
  },
  touchableopacity: {
    borderColor: "red",
    // borderWidth: 1,
  },
});

export default CustomHeader;
