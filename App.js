import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CreateAccountScreen from "./src/screens/authscreens/CreateAccountScreen";
import IntroductionScreen from "./src/screens/authscreens/IntroductionScreen";
import LaunchScreen from "./src/screens/authscreens/LaunchScreen";
import WorkTabScreen from "./src/screens/WorkTab/WorkTabScreen";
import UnitGoalsScreen from "./src/screens/WorkTab/UnitGoalsScreen";
import TargetScreen from "./src/screens/WorkTab/TargetScreen";

const navigator = createStackNavigator(
  {
    launchScreen: LaunchScreen,
    createAccount: CreateAccountScreen,
    introduction: IntroductionScreen,
    workTab: WorkTabScreen,
    unitGoals: UnitGoalsScreen,
    targets: TargetScreen,
  },
  {
    initialRouteName: "unitGoals",
    defaultNavigationOptions: {
      headerShown: false,
    },
  }
);

export default createAppContainer(navigator);
