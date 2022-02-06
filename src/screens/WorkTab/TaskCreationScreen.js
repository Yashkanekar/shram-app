import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { Chip } from "react-native-paper";
import TaskInput from "../../components/Work-tab/TaskInput";
import DateInput from "../../components/general/DatePicker";
import CustomTimePicker from "../../components/Work-tab/TimePicker";
import HourInput from "./HourInput";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import GeneralButton from "../../components/general/GeneralButton";

const TaskCreationScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.parentwrapper}>
      <TouchableOpacity
        style={{ flexDirection: "row-reverse" }}
        onPress={() => {
          navigation.navigate("tasks");
        }}
      >
        <MaterialIcons name="close" size={24} color="#6d503c" />
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          // borderWidth: 1,
          marginTop: 36,
        }}
      >
        <Chip mode="outlined" selectedColor="#e53a69" style={styles.chipStyle}>
          UI/UX
        </Chip>
        <View
          style={{
            borderWidth: 0.5,
            borderColor: "#c5b4aa",
            height: "100%",
            backgroundColor: "#c5b4aa",
          }}
        ></View>
        <Text
          style={{
            flex: 0.9,
            fontSize: 14.5,
            fontWeight: "bold",
            fontStyle: "normal",
            lineHeight: 20,
            letterSpacing: 0.1,
            color: "#6d503c",
          }}
        >
          TARGET 1: Make wireframe
        </Text>
      </View>
      <View style={{ marginTop: 29 }}>
        <TaskInput
          customStyle={{
            fontSize: 22,
            fontWeight: "bold",
            fontStyle: "normal",
            lineHeight: 29,
            letterSpacing: 0.1,
            color: "#c5b4aa",
            // borderWidth: 1,
            height: 26,
          }}
          placeholder="Add Task Title"
        />
        <TaskInput
          placeholder="Add Task Description"
          customStyle={{
            marginTop: 0,
            fontSize: 18,
            fontWeight: "normal",
            fontStyle: "normal",
            lineHeight: 20,
            letterSpacing: 0.1,
            // borderWidth: 1,
            height: 24,
          }}
        />
        <View
          style={{
            marginTop: 29,
            // borderWidth: 1,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={{ color: "#6d503c" }}>DEADLINE</Text>
            <DateInput
              placeholder="Day"
              customstyles={{ width: 146 }}
            ></DateInput>
          </View>
          <View>
            <Text style={{ color: "#6d503c" }}>TASK DURATION</Text>
            <HourInput />
          </View>
        </View>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 341,
        }}
      >
        <GeneralButton innertext="Create Task" />
      </View>
    </SafeAreaView>
  );
};

export default TaskCreationScreen;

const styles = StyleSheet.create({
  parentwrapper: {
    backgroundColor: "#fffbf7",
    flex: 1,
    padding: wp(6.7),
  },
  chipStyle: {
    backgroundColor: "#fffbf7",
    borderRadius: 16,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#e53a69",
    width: 63,
    height: 34,
  },
});
