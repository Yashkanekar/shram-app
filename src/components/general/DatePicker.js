import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import DatePicker from "react-native-datepicker";
import { Entypo } from "@expo/vector-icons";

const DateInput = () => {
  const [date, setDate] = useState(new Date());

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Date of birth</Text>
      <DatePicker
        showIcon={true}
        style={styles.datePickerStyle}
        date={date}
        mode="date"
        placeholder="select date"
        format="DD/MM/YYYY"
        minDate="01-01-1950"
        maxDate="01-01-2023"
        // confirmBtnText="Confirm"
        // cancelBtnText="Cancel"
        iconComponent={<Entypo name="calendar" size={24} color="#6d503c" />}
        customStyles={{
          dateIcon: {
            position: "absolute",
            right: 0,
            top: 4,
            marginLeft: 0,
          },
          dateInput: {
            borderColor: "#6d503c",
            alignItems: "flex-start",
            borderWidth: 0,
            borderBottomWidth: 1,
            fontSize: 18,
            fontWeight: "bold",
            fontStyle: "normal",
            lineHeight: 20,
            letterSpacing: 0.1,
            color: "#6d503c",
          },
          dateText: {
            fontSize: 17,
            fontSize: 18,
            fontWeight: "bold",
            fontStyle: "normal",
            lineHeight: 20,
            letterSpacing: 0.1,
            color: "#6d503c",
          },
        }}
        onDateChange={(date) => {
          setDate(date);
        }}
      />
    </View>
  );
};

export default DateInput;

const styles = StyleSheet.create({
  datePickerStyle: {
    width: 198,
  },
  text: {
    textAlign: "left",
    width: 230,
    fontSize: 16,
    color: "#6d503c",
    fontSize: 14,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 20,
    letterSpacing: 0.1,
  },
});
