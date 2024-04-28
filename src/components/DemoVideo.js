import YoutubePlayer from "react-native-youtube-iframe";
import { View } from "react-native";

export default function DemoVideo({ videoID }) {
  return (
    <View>
      <YoutubePlayer height={220} width={320} videoId={videoID} />
    </View>
  );
}
