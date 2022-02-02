import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MultilineTextInput from "../../components/Work-tab/MultilineTextInput";
import AppHeader from "../../components/Work-tab/AppHeader";

const WorkTabScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AppHeader />
      <View style={styles.textStyle}>
        <Text style={styles.textInput}>ORGANIZATION GOAL</Text>
      </View>

      <MultilineTextInput />

      <View style={styles.textStyle}>
        <Text style={styles.textInput}>Q1 until Mar end </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fffbf7",
    padding: 8,
  },
  textStyle: {
    marginLeft: 40,
  },
  textInput: {
    color: "#c5b4aa",
  },
});

export default WorkTabScreen;
