import { useState } from "react";
import { Alert } from "react-native";
import { RNCamera } from "react-native-camera";
import TimerService from "../utils/TimerService";

const timerService = new TimerService();

const useCamera = (ref) => {
  const [recording, setRecording] = useState(false);
  const [seconds, setSeconds] = useState(45);

  const cameraActionProxy = (cb) => {
    if (!ref) {
      return () => {};
    }
    return () => cb(ref.current);
  };

  const takePicture = async (camera) => {
    try {
      const { uri } = await camera.takePictureAsync();
      // do anything you want with the uri of the image
      // for example, take to the preview screen
      // navigation.navigate('ImagePreview', {uri});
      Alert.alert("Image", uri);
    } catch (e) {
      console.log("Failed to take a picture: ", e);
    }
  };

  const startRecordingVideo = async (camera) => {
    try {
      setRecording(true);
      const { uri } = await camera.recordAsync();
      // do anything you want with the uri of the video
      // for example, take to the preview screen
      // navigation.navigate('VideoPreview', {uri});
      Alert.alert("Video", uri);
    } catch (e) {
      console.log("Failed to start recording: ", e);
    }
  };

  const stopRecordingVideo = async (camera) => {
    if (!recording) {
      return;
    }
    try {
      setRecording(false);
      await camera.stopRecording();
    } catch (e) {
      console.log("Failed to stop recording: ", e);
    }
  };

  const countdown = () => {
    setSeconds((prevSeconds) => {
      const newSeconds = prevSeconds - 1;
      if (newSeconds === 0) {
        stopRecordingVideo(ref.current);
      }
      return newSeconds;
    });
  };

  return {
    seconds,
    recording,
    takePicture: cameraActionProxy(takePicture),
    startRecordingVideo: cameraActionProxy(startRecordingVideo),
    stopRecordingVideo: cameraActionProxy(stopRecordingVideo),
  };
};

export default useCamera;
