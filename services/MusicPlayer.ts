import { MusicFile } from "@/types/MusicList";
import TrackPlayer, {
  AppKilledPlaybackBehavior,
  Capability,
  State,
  Track,
} from "react-native-track-player";

class MusicPlayer {
  constructor() {}

  async initializePlayer(): Promise<boolean> {
    const state = { isSetup: false };
    try {
      await TrackPlayer.getActiveTrackIndex();
      state.isSetup = true;
    } catch {
      await TrackPlayer.setupPlayer();
      await TrackPlayer.updateOptions({
        android: {
          appKilledPlaybackBehavior:
            AppKilledPlaybackBehavior.StopPlaybackAndRemoveNotification,
        },
        capabilities: [
          Capability.Play,
          Capability.Pause,
          Capability.SkipToNext,
          Capability.SkipToPrevious,
          Capability.SeekTo,
        ],
        compactCapabilities: [
          Capability.Play,
          Capability.Pause,
          Capability.SkipToNext,
        ],
        progressUpdateEventInterval: 2,
      });

      state.isSetup = true;
    } finally {
      return state.isSetup;
    }
  }

  async playMusic(item: MusicFile) {
    await TrackPlayer.reset();
    await TrackPlayer.add([{ url: item.uri }]);
    await TrackPlayer.play();
  }
}

export default MusicPlayer;
