import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LaunchScreen from "./src/screens/authscreens/LaunchScreen";
const navigator = createStackNavigator(
  {
    LaunchScreen: LaunchScreen,
  },
  {
    initialRouteName: "LaunchScreen",
    defaultNavigationOptions: {
      headerShown: false,
    },
  }
);

export default createAppContainer(navigator);
