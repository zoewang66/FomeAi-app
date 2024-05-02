import YoutubePlayer from "react-native-youtube-iframe";
import { View, StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const styles = StyleSheet.create(
  {
    video: {
      aspectRatio: 320 / 220,
      paddingEnd: 5,
    },
  }
)

export default function DemoVideo({ videoID }) {
  const videoWidth = windowWidth > 375 ? 295 : 320;

  return (
    <View>
      <YoutubePlayer height={220} width={videoWidth} videoId={videoID} style={styles.video}/>
    </View>
  );
}
