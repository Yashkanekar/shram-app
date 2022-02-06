import * as React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import GeneralTextInput from "../../components/general/GeneralTextInput";
import Spacer from "../../components/Helpers/Spacer";
import { SafeAreaView } from "react-native-safe-area-context";

const UnitGoalsScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.parentwrapperStyle}>
      <ScrollView>
        <View style={styles.textContainer}>
          <Text
            style={{
              color: "#c5b4aa",
            }}
          >
            ORGANIZATION GOAL
          </Text>
          <Text style={styles.textStyle}>
            Build Shram MVP 1.0 and gain traction pre-launch.
          </Text>
          <Text
            style={{
              color: "#c5b4aa",
              marginTop: 30,
              marginBottom: 24.5,
            }}
          >
            Q1 until Mar end
          </Text>
        </View>

        <View
          style={{
            borderBottomColor: "#c5b4aa",
            borderBottomWidth: 1,
          }}
        ></View>
        <View
          style={{
            borderLeftColor: "#c5b4aa",
            height: 60,
            borderLeftWidth: 1,
            left: "50%",
          }}
        ></View>

        <Card style={styles.cardStyle}>
          <Card.Content>
            <View style={styles.iconStyle}>
              <Title style={styles.cardTitle}>UNIT GOALS</Title>
              <MaterialIcons name="edit" size={18} color="#c5b4aa" />
            </View>
            <Spacer />

            <TouchableOpacity
              onPress={() => {
                navigation.navigate("targets");
              }}
            >
              <GeneralTextInput
                inputFor="RESEARCH"
                goalDescription="Validate User requirements"
                style={styles.textInputStyle}
              />
            </TouchableOpacity>
            <Spacer />
            <GeneralTextInput
              inputFor="TECH"
              goalDescription="Build Foundation for Shram MVP"
            />
            <Spacer />
            <GeneralTextInput
              inputFor="UI-UX"
              goalDescription="Create high fidelity MVP 2.0"
            />
            <Spacer />
            {/* <GeneralTextInput inputFor="MARKETING" goalDescription="Create brand presence" />
          <Spacer />
          <GeneralTextInput inputFor="ADMIN" goalDescription="Build a strong team and onboard everyone completely" />
          <Spacer /> */}

            <View style={styles.iconStyle}>
              <Text
                style={{
                  marginTop: 20,
                  color: "#6d503c",
                }}
              >
                Term till Jan end 4w to go
              </Text>
              <AntDesign name="pluscircleo" size={48} color="#6d503c" />
            </View>
          </Card.Content>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  parentwrapperStyle: {
    backgroundColor: "#fffbf7",
    flex: 1,
  },
  textContainer: {
    marginHorizontal: 40,
    marginTop: 113,
  },
  textStyle: {
    fontSize: 30,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 37,
    color: "#6d503c",
  },
  cardStyle: {
    backgroundColor: "#fffbf7",
    borderColor: "#6d503c",
    borderWidth: 1,
    borderRadius: 20,
    marginHorizontal: 20,
  },
  cardTitle: {
    color: "#6d503c",
    marginBottom: 28,
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 20,
    letterSpacing: 0.1,
    textAlign: "left",
  },
  textInputStyle: {
    color: "#6d503c",
    fontSize: 16,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 24,
    letterSpacing: 0.1,
    textAlign: "left",
  },
  iconStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default UnitGoalsScreen;
