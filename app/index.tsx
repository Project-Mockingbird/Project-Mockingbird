import { SectionList, Text, View } from "react-native";
import styles from "./styles";
import { useEffect, useState } from "react";

type MusicFile = {
  uri: string;
  title: string;
};

const getContentsOfFolder = async (source: string): Promise<MusicFile[]> => {
  const musicList: MusicFile[] = [];
  const files =
    await FileSystem.StorageAccessFramework.readDirectoryAsync(source);
  for (const fileUri of files) {
    console.log(fileUri);
    const musicFileInfo = await FileSystem.getInfoAsync(fileUri);
    console.log(musicFileInfo);

    if (musicFileInfo.isDirectory) {
      const dirList = await getContentsOfFolder(musicFileInfo.uri);
      console.log("Aqui está a dirList: " + dirList);
      musicList.concat(dirList);
      continue;
    }
    musicList.push({
      uri: musicFileInfo.uri,
      title: musicFileInfo.uri,
    });
  }
  console.log(musicList);
  return musicList;
};

export default function Index() {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  useEffect(() => {
    const loadPage = async () => {
      const permissions =
        await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();
      if (permissions.granted) {
        const source = permissions.directoryUri;
        console.log(await getContentsOfFolder(source));
        setIsLoaded(true);
      }

      console.log(permissions);
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
