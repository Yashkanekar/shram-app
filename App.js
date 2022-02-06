import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/navigation/Tabs";
import AuthStackScreen from "./src/navigation/AuthStackScreen";

const App = () => {
  return (
    <NavigationContainer>
      <Tabs />
      {/* <AuthStackScreen /> */}
    </NavigationContainer>
  );
};

export default App;
