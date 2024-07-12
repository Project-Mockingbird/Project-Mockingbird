import { MusicFile } from "@/types/MusicList";
import RNFS from "react-native-fs";

export const useMusicList = () => {
    const formatUri = (uri: string) => {
        const uriComponents = uri.split("%20").join("\ ").split("%3A");
        const fileNameAndExtension = uriComponents[uriComponents.length - 1]
        return `${RNFS.ExternalStorageDirectoryPath}/${fileNameAndExtension}`;
      }
    const getMusicList = async (uri: string): Promise<MusicFile[]> => {
        const contentData = { uri }
        if (contentData.uri.startsWith('content://')) contentData.uri = formatUri(contentData.uri)
        const musicList: MusicFile[] = []
        const files = await RNFS.readDir(contentData.uri);
        for(const file of files){
          if(file.isDirectory()) musicList.concat(await getMusicList(file.path));
          const fileNameComponents = file.name.split('.')
          const extensionName = fileNameComponents[fileNameComponents.length - 1];
          if(["mp3", "m4a"].indexOf(extensionName)) {
            const music = {
              uri: file.path,
              title: fileNameComponents[0]
            }
            musicList.push(music)
          }
        }
        return musicList;
      };
    return {
        getMusicList
    }
}