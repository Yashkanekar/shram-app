import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const AppHeader = () => {
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
      <View style={styles.righticons}>
        <TouchableOpacity>
          <MaterialIcons name="notifications" size={24} color="#6d503c" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="support-agent" size={24} color="#c5b4aa" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="user-circle" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  headerwrapper: {
    borderColor: "black",
    flexDirection: "row",
    marginTop: 32,
    justifyContent: "space-between",
  },
  touchableopacity: {
    flex: 1,
  },

  righticons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    flex: 0.4,
  },
});
