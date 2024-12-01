import { Stack } from "expo-router";
import { AppRegistry } from "react-native";
import { expo } from "../app.json";

AppRegistry.registerComponent(expo.name, () => App);

export default function App() {
  return (
    <Stack>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="index"
      />
    </Stack>
  );
}
