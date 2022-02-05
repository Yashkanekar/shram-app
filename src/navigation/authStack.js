import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CreateAccountScreen from "../screens/authscreens/CreateAccountScreen";
import IntroductionScreen from "../screens/authscreens/IntroductionScreen";
import LaunchScreen from "../screens/authscreens/LaunchScreen";
import WorkTabScreen from "../screens/WorkTab/WorkTabScreen";
import UnitGoalsScreen from "../screens/WorkTab/UnitGoalsScreen";
import TargetScreen from "../screens/WorkTab/TargetScreen";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="worktab1">
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
  );
};

export default AuthStack;
