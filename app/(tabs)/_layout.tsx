import { Tabs } from "expo-router";

export default function MainRouter() {
  return (
    <Tabs>
      <Tabs.Screen
        name="library"
        options={{
          title: "Library",
          headerTitle: "Your Library",
        }}
      />
      <Tabs.Screen
        name="config"
        options={{
          title: "Settings",
        }}
      />
    </Tabs>
  );
}
