import { SectionList, Text, View } from "react-native";
import styles from "./styles";
import { pickDirectory } from "react-native-document-picker";
import { useEffect, useState } from "react";
import { useMusicList } from "@/hooks/useMusicList";

export default function Index() {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const { getMusicList } = useMusicList();
  useEffect(() => {
    const loadPage = async () => {
      const response = await pickDirectory()
      if(!response) throw Error("Invalid directory");
      console.log(await getMusicList(response.uri));
    };

    loadPage();
  }, []);
  return (
    <View style={styles.container}>
      <SectionList
        style={{ opacity: isLoaded ? 1 : 0 }}
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
