import VideoRecorder from "react-native-beautiful-video-recorder";

start = () => {
    // 30 seconds
    this.videoRecorder.open({ maxLength: 30 },(data) => {
        console.log('captured data', data);
    });
}
 
render() {
    return (
        <View>
            ......
          <TouchableOpacity onPress={this.start}>
          	<Text>Start</Text>
          </TouchableOpacity>
          <VideoRecorder ref={(ref) => { this.videoRecorder = ref; }} />
        </View>
    );
}