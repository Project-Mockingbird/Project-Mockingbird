import { Redirect } from "expo-router";
import { View } from "react-native";

export default () => {
  return (
    <View style={{ flex: 1 }}>
      <Redirect href="library" />
    </View>
  );
};
