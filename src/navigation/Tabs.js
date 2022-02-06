import { View, StyleSheet, Text, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import WorkTabScreen from "../screens/WorkTab/WorkTabScreen";
import ShramTab from "../screens/ShramTab/ShramTab";
import PeopleTab from "../screens/PeopleTab/PeopleTab";
import WorkTabStackScreen from "./WorkTabStackScreen";

import { MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#fffbf7",
          height: 60,
          borderTopWidth: 0.5,
          borderTopColor: "#6D503C",
          bottom: 0,
          left: 0,
        },
      }}
    >
      <Tab.Screen
        name="peopletablaunch"
        component={PeopleTab}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <View style={{ color: focused ? "#6d503c" : "#c5b4aa" }}>
                <MaterialIcons
                  name="group"
                  size={24}
                  color={focused ? "#6d503c" : "#c5b4aa"}
                />
              </View>
              <Text
                style={{
                  color: focused ? "#6d503c" : "#c5b4aa",
                  height: 14,
                  fontFamily: "Roboto",
                  fontSize: 10,
                  fontWeight: "normal",
                  fontStyle: "normal",
                  lineHeight: 10,
                  letterSpacing: 0.5,
                  textAlign: "center",
                }}
              >
                PEOPLE
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="shramtablaunch"
        component={ShramTab}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={require("../../assets/LaunchLogo.png")}
                // resizeMode="contain"
                style={{
                  height: 38,
                  width: 38,
                  tintColor: focused ? "#6d503c" : "#c5b4aa",
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="worktabscreenlaunch"
        component={WorkTabStackScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <View style={{ color: focused ? "#6d503c" : "#c5b4aa" }}>
                <MaterialIcons
                  name="work"
                  size={24}
                  color={focused ? "#6d503c" : "#c5b4aa"}
                />
              </View>
              <Text
                style={{
                  color: focused ? "#6d503c" : "#c5b4aa",
                  height: 14,
                  fontFamily: "Roboto",
                  fontSize: 10,
                  fontWeight: "normal",
                  fontStyle: "normal",
                  lineHeight: 10,
                  letterSpacing: 0.5,
                  textAlign: "center",
                }}
              >
                WORK
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  wrapperstyle: {},
  iconstyle: {},
  labelstyle: {},
});
