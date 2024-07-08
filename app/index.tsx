import { SectionList, Text, View } from "react-native";
import styles from "./styles";

export default function Index() {
  return (
    <View style={styles.container}>
      <SectionList
        sections={[{ title: "A", data: ["Alabama", "Acre", "Almeida"] }]}
        renderItem={({ item }) => <Text style={styles.musicTitle}>{item}</Text>}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionTitle}>{section.title}</Text>
        )}
        keyExtractor={(item) => `music-${item}`}
      />
    </View>
  );
}
