import { SectionList, Text, View } from "react-native";
import styles from "./styles";
import { pickDirectory } from "react-native-document-picker";
import { useEffect, useState } from "react";
import { useMusicList } from "@/hooks/useMusicList";
import { MusicFile } from "@/types/MusicList";
import { PERMISSIONS, request } from "react-native-permissions";
import { addTracks, setupPlayer } from "@/services/trackplayer";
import TrackPlayer, { AddTrack } from "react-native-track-player";

export default function Index() {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const [musicList, setMusicList] = useState<MusicFile[]>();
  const { getMusicList } = useMusicList();

  useEffect(() => {
    const loadPage = async () => {
      await request(PERMISSIONS.ANDROID.READ_MEDIA_AUDIO);
      const response = await pickDirectory();
      if (!response) throw Error("Invalid directory");
      setMusicList(await getMusicList(response.uri));
      let isSetup = await setupPlayer();

      setIsPlayerReady(isSetup);
      setIsLoaded(true);
    };

    loadPage();
  }, []);

  const addSong = (song: MusicFile) => {
    addTracks([{ url: song.uri }]);
    return;
  };
  return (
    <View style={styles.container}>
      <SectionList
        style={{ opacity: isLoaded ? 1 : 0 }}
        sections={[{ title: "Música", data: musicList ? musicList : [] }]}
        renderItem={({ item }) => (
          <Text
            onPress={() => {
              console.log(item);
              addSong(item);
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
