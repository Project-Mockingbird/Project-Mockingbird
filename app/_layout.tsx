import { Tabs } from "expo-router";
import { AppRegistry } from "react-native";
import {expo} from "../app.json";

AppRegistry.registerComponent(expo.name, () => App);

export default function App() {
  return (
    <Tabs initialRouteName="config">
      <Tabs.Screen name="library"/>
      <Tabs.Screen name="config"/>
    </Tabs>
  );
}
