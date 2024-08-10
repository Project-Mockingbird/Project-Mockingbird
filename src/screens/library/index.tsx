import { View } from "react-native";
import styles from "./styles";
import MusicCard from "@/src/components/music-card";

const Library = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardGrid}>
        <MusicCard
          style={styles.cardStyle}
          cardName="Sertanejo Facultativo"
          cardDuration="1:10:00"
          cardArtist="João & Joãozinho"
        />
        <MusicCard
          style={styles.cardStyle}
          cardName="Funk Permitido"
          cardDuration="10:00"
          cardArtist="MC Manin"
        />
        <MusicCard
          style={styles.cardStyle}
          cardName="Eletrônica Gospel"
          cardDuration="6:66:00"
          cardArtist="Padre Kelman"
        />
        <MusicCard
          style={styles.cardStyle}
          cardName="Polka Tailandesa"
          cardDuration="3:00"
          cardArtist="Rodtang"
        />
      </View>
    </View>
  );
};

export default Library;
