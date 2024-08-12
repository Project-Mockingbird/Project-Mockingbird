import { Tabs } from "expo-router";

export default function MainRouter() {
  return (
    <Tabs
      screenOptions={{
        headerTintColor: "#EEF4ED",
        headerStyle: { backgroundColor: "#282828", borderBottomWidth: 0 },
        tabBarStyle: { borderTopWidth: 0, backgroundColor: "#282828" },
        tabBarActiveTintColor: "#EEF4ED",
      }}
    >
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
