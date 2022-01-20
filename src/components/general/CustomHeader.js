import React from "react";
import { View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";

const CustomHeader = () => {
  return (
    <View style={styles.headerwrapper}>
      <TouchableOpacity style={styles.touchableopacity}>
        <View>
          <AntDesign name="arrowleft" size={24} color="#6d503c" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerwrapper: {
    borderColor: "red",
    flexDirection: "row",
    marginTop: 32,
  },
  touchableopacity: {
    borderColor: "red",
  },
});

export default CustomHeader;
