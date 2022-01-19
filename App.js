import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CreateAccountScreen from "./src/screens/authscreens/CreateAccountScreen";
import IntroductionScreen from "./src/screens/authscreens/IntroductionScreen";
import LaunchScreen from "./src/screens/authscreens/LaunchScreen";
const navigator = createStackNavigator(
  {
    launchScreen: LaunchScreen,
    introduction: IntroductionScreen,
    createAccount: CreateAccountScreen,
  },
  {
    initialRouteName: "launchScreen",
    defaultNavigationOptions: {
      headerShown: false,
    },
  }

);

export default createAppContainer(navigator);
