import {
  Image,
  View,
  Text,
  ViewProps,
  ImageSourcePropType,
} from "react-native";
import styles from "./styles";

const defaultAlbum = require("../../../assets/images/default_album.png");

interface MusicCardProps extends ViewProps {
  cardImage?: ImageSourcePropType;
  cardName: string;
  cardArtist: string;
  cardDuration: string;
}

const MusicCard: React.FC<MusicCardProps> = ({ ...props }) => {
  return (
    <View style={styles.container} {...props}>
      <Image
        style={styles.albumImage}
        source={props.cardImage ? props.cardImage : defaultAlbum}
      />
      <View>
        <Text style={styles.cardName}>{props.cardName}</Text>
        <Text style={styles.lowerCardInfo}>
          {props.cardArtist} - {props.cardDuration}
        </Text>
      </View>
    </View>
  );
};

export default MusicCard;
