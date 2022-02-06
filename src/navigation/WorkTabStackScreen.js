import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WorkTabScreen from "../screens/WorkTab/WorkTabScreen";
import UnitGoalsScreen from "../screens/WorkTab/UnitGoalsScreen";
import TargetScreen from "../screens/WorkTab/TargetScreen";
import TaskScreen from "../screens/WorkTab/TaskScreen";
import TaskCreationScreen from "../screens/WorkTab/TaskCreationScreen";

const WorkTabStack = createNativeStackNavigator();
const WorkTabStackScreen = () => {
  return (
    <WorkTabStack.Navigator initialRouteName="unitGoals">
      <WorkTabStack.Screen
        name="workTab"
        component={WorkTabScreen}
        options={{ headerShown: false }}
      />
      <WorkTabStack.Screen
        name="unitGoals"
        component={UnitGoalsScreen}
        options={{ headerShown: false }}
      />
      <WorkTabStack.Screen
        name="targets"
        component={TargetScreen}
        options={{ headerShown: false }}
      />
      <WorkTabStack.Screen
        name="tasks"
        component={TaskScreen}
        options={{ headerShown: false }}
      />
      <WorkTabStack.Screen
        name="taskcreation"
        component={TaskCreationScreen}
        options={{ headerShown: false }}
      />
    </WorkTabStack.Navigator>
  );
};

export default WorkTabStackScreen;
