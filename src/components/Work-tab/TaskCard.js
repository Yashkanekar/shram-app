import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import CustomChip from "../general/CustomChip";
import { MaterialIcons } from "@expo/vector-icons";
import { exp } from "react-native-reanimated";

const TaskCard = () => {
  return (
    <View style={styles.cardwrapper}>
      <View style={styles.header1style}>
        <CustomChip innerText="UI/UX" />
        <MaterialIcons name="warning" size={12} color="#ba1b1b" />
      </View>
      <Text style={{ color: "#6d503c", marginTop: 6 }}>
        Sketch and analyse number of screens...
      </Text>
      <View style={styles.header2style}>
        <Text
          style={{
            color: "#6d503c",
            width: 44,
            fontSize: 13,
          }}
        >
          3 DAYS TO GO
        </Text>
        <Text
          style={{
            fontSize: 32,
            fontWeight: "normal",
            fontStyle: "normal",
            lineHeight: 40,
            letterSpacing: 0,
            textAlign: "right",
            color: "#6d503c",
          }}
        >
          8H
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardwrapper: {
    width: 162,
    height: 140,
    borderRadius: 12,
    backgroundColor: "#fffbf7",
    borderStyle: "solid",
    borderWidth: 1,
    padding: 12,
    marginRight: 12,
    // marginBottom: 12,
    borderColor: "#6d503c",
  },
  chipstyle: {
    width: 42,
    height: 16,
    borderRadius: 16,
    backgroundColor: "rgba(186, 27, 27, 0.1)",
  },
  header1style: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  header2style: {
    marginTop: 17,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default TaskCard;
