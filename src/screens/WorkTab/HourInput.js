import React, { useReducer } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

const HourInput = () => {
  const [state, dispatch] = useReducer(reducer, { count: 1 });

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderBottomColor: "#6d503c",
        // paddingBottom: 3,
        width: 146,
        color: "#6d503c",
        marginTop: 6,
      }}
    >
      <TouchableOpacity onPress={() => dispatch({ type: "decrement" })}>
        <AntDesign name="minuscircleo" size={24} color="#6d503c" />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          fontStyle: "normal",
          lineHeight: 36,
          letterSpacing: 0.5,
          color: "#6d503c",
        }}
      >
        {state.count}
      </Text>
      <TouchableOpacity onPress={() => dispatch({ type: "increment" })}>
        <AntDesign name="pluscircleo" size={24} color="#6d503c" />
      </TouchableOpacity>
    </View>
  );
};

export default HourInput;
