import { SectionList, Text, View } from "react-native";
import styles from "./styles";
import { pickDirectory } from "react-native-document-picker";
import { useEffect, useState } from "react";
import { useMusicList } from "@/hooks/useMusicList";
import { MusicFile } from "@/types/MusicList";
import { PERMISSIONS, request } from "react-native-permissions";
import { setupPlayer } from "@/services/trackplayer";
import TrackPlayer from "react-native-track-player";

export default function Index() {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [musicList, setMusicList] = useState<MusicFile[]>();
  const { getMusicList } = useMusicList();

  useEffect(() => {
    const loadPage = async () => {
      await request(PERMISSIONS.ANDROID.READ_MEDIA_AUDIO);
      const response = await pickDirectory();
      if (!response) throw Error("Invalid directory");
      setMusicList(await getMusicList(response.uri));
      await setupPlayer();
      setIsLoaded(true);
    };

    loadPage();
  }, []);

  return (
    <View style={styles.container}>
      <SectionList
        style={{ opacity: isLoaded ? 1 : 0 }}
        sections={[{ title: "Música", data: musicList ? musicList : [] }]}
        renderItem={({ item }) => (
          <Text
            onPress={async () => {
              await TrackPlayer.reset();
              await TrackPlayer.add([{ url: item.uri }]);
              await TrackPlayer.play();
            }}
            style={styles.musicTitle}
          >
            {item.title}
          </Text>
        )}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionTitle}>{section.title}</Text>
        )}
        keyExtractor={(item) => `music-${item.uri}`}
      />
    </View>
  );
}
