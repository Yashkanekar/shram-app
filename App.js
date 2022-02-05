import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from "./src/navigation/Tabs";

import CreateAccountScreen from "./src/screens/authscreens/CreateAccountScreen";
import IntroductionScreen from "./src/screens/authscreens/IntroductionScreen";
import LaunchScreen from "./src/screens/authscreens/LaunchScreen";
import WorkTabScreen from "./src/screens/WorkTab/WorkTabScreen";
import UnitGoalsScreen from "./src/screens/WorkTab/UnitGoalsScreen";
import TargetScreen from "./src/screens/WorkTab/TargetScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="launchScreen">
        <Stack.Screen
          name="launchScreen"
          component={LaunchScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="createAccount"
          component={CreateAccountScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="introduction"
          component={IntroductionScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="workTab"
          component={WorkTabScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="unitGoals"
          component={UnitGoalsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="targets"
          component={TargetScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      {/* <Tabs /> */}
    </NavigationContainer>
  );
};

export default App;
