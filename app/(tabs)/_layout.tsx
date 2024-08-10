import { Tabs } from "expo-router";

export default function MainRouter() {
  return <Tabs>
    <Tabs.Screen name="library" />
    <Tabs.Screen name="config" />
  </Tabs>;
}
