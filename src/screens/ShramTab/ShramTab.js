import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Card, Title, Chip, ProgressBar, Colors } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-navigation";
import Spacer from "../../components/Helpers/Spacer";
import AppHeader from "../../components/Work-tab/AppHeader";
import TaskCard from "../../components/Work-tab/TaskCard";

const ShramTab = () => {
  return (
    <SafeAreaView style={styles.parentWrapper}>
      <View style={styles.upperWrapper}>
        <AppHeader />

        <Card style={styles.cardStyle}>
          <Card.Content>
            <View style={styles.iconStyle}>
              <Chip
                mode="outlined"
                selectedColor="#e53a69"
                style={styles.chipStyle}
              >
                UI-UX
              </Chip>
            </View>

            <Text style={styles.textStyle}>Sketch basic user flow</Text>

            <ProgressBar
              style={{ marginTop: 45 }}
              progress={0.5}
              color="#489fb5"
            />

            <View style={styles.headerStyle}>
              <Text
                style={{
                  color: "#6d503c",
                  fontSize: 13,
                  fontWeight: "500",
                  fontStyle: "normal",
                  lineHeight: 20,
                  letterSpacing: 0.5,
                  textAlign: "left",
                }}
              >
                TOMORROW MORNING
              </Text>
              <Text
                style={{
                  color: "#6d503c",
                  fontSize: 32,
                  fontWeight: "normal",
                  fontStyle: "normal",
                  lineHeight: 40,
                  textAlign: "right",
                }}
              >
                4H
              </Text>
            </View>
          </Card.Content>
        </Card>
      </View>

      <View style={styles.bottomWrapper}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Chip
            mode="outlined"
            selectedColor="#6d503c"
            style={styles.filterStyle}
          >
            <MaterialIcons name="filter-list" size={24} color="#6d503c" />
          </Chip>
          <Chip
            mode="outlined"
            selectedColor="#6d503c"
            style={styles.filterStyle}
          >
            ALL
          </Chip>
          <Chip
            mode="outlined"
            selectedColor="#6d503c"
            style={styles.filterStyle}
          >
            Hours to go
          </Chip>
          <Chip
            mode="outlined"
            disabled="true"
            selectedColor="#6d503c"
            style={styles.filterStyle}
          >
            1 Day to go
          </Chip>
          <Chip
            mode="outlined"
            disabled="true"
            selectedColor="#6d503c"
            style={styles.filterStyle}
          >
            2 Days to go
          </Chip>
          <Chip
            mode="outlined"
            disabled="true"
            selectedColor="#6d503c"
            style={styles.filterStyle}
          >
            3 Days to go
          </Chip>
        </ScrollView>

        <View style={styles.iconStyle}>
          <Text style={{ color: "#c5b4aa" }}>TASKS | 3</Text>
          <Ionicons name="arrow-forward-sharp" size={16} color="#6d503c" />
        </View>

        <View style={styles.taskCardWrapper}>
          <TaskCard />
          <TaskCard />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  parentWrapper: {
    backgroundColor: "#fffbf7",
    marginTop: 20,
    flex: 1,
  },
  upperWrapper: {
    backgroundColor: "rgba(197, 180, 170, 0.15)",
  },
  chipStyle: {
    marginTop: -10,
    backgroundColor: "#fffbf7",
    borderRadius: 16,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#e53a69",
  },
  textStyle: {
    fontSize: 22,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 28,
    color: "#6d503c",
    marginTop: 25,
  },
  cardStyle: {
    backgroundColor: "#fffbf7",
    borderColor: "#6d503c",
    borderWidth: 1,
    borderRadius: 24,
    borderStyle: "solid",
    padding: 24,
    marginHorizontal: 50,
    marginTop: 45,
    marginBottom: 53,
  },
  iconStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerStyle: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bottomWrapper: {
    backgroundColor: "#fffbf7",
    paddingHorizontal: 12,
  },
  filterStyle: {
    backgroundColor: "#fffbf7",
    marginTop: 12,
    marginBottom: 24,
    marginRight: 8,
    borderRadius: 16,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#6d503c",
  },
  taskCardWrapper: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default ShramTab;
