import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateAccountScreen from "../screens/authscreens/CreateAccountScreen";
import IntroductionScreen from "../screens/authscreens/IntroductionScreen";
import LaunchScreen from "../screens/authscreens/LaunchScreen";

const AuthStack = createNativeStackNavigator();
const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="launchScreen"
        component={LaunchScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="createAccount"
        component={CreateAccountScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="introduction"
        component={IntroductionScreen}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthStackScreen;
