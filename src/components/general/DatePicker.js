import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import DatePicker from "react-native-datepicker";
import { Entypo } from "@expo/vector-icons";

const DateInput = ({ label, placeholder, customstyles }) => {
  const [date, setDate] = useState();

  return (
    <View style={styles.container}>
      {label ? <Text style={styles.text}>{label}</Text> : null}
      <DatePicker
        showIcon={true}
        style={{ ...customstyles }}
        date={date}
        mode="date"
        placeholder={placeholder}
        format="DD/MM/YYYY"
        minDate="01-01-1950"
        maxDate="01-01-2023"
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

const styles = StyleSheet.create({
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
export default DateInput;
