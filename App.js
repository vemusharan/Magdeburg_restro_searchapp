import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import StartScreen from "./src/screens/StartScreen";
import ResultsShowScreen from "./src/screens/ResultsShowScreen";

const navigator = createStackNavigator(
  {
    Screen: StartScreen,
    ResultsShow: ResultsShowScreen,
  },
  {
    initialRouteName: "Screen",
    defaultNavigationOptions: {
      title: "Magdeburg Business Search",
    },
  }
);

export default createAppContainer(navigator);
