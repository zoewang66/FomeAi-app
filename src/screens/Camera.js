import React from "react";
import { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Camera, CameraType } from "expo-camera/legacy";
import * as MediaLibrary from "expo-media-library";
import ButtonInCamera from "../components/ButtonInCamera";
import { Video } from "expo-av";
import * as ImagePicker from "expo-image-picker";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#E4EBEE",
  },
  camera: {
    flex: 1,
    borderRadius: 7,
    flexDirection: "column",
    justifyContent: "flex-start",
    flexGrow: 1,
    flexShrink: 0.6,
    width: "100%",
    marginBottom: 0,
  },
  buttonContainer: {
    flexDirection: "row",
    columnGap: 20,
    justifyContent: "center",
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: "center",
  },

  button: {
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    marginTop: 7,
    alignItems: "center",
    fontWeight: "bold",
    fontSize: 16,
    color: "#4A7AD1",
  },

  flippedVideo: {
    alignSelf: "center",
    flex: 1,
    flexGrow: 1,
    width: "100%",
  },
});

const TriggerCamera = ({ navigation }) => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [hasAudioPermission, setHasAudioPermission] = useState(null);
  const [record, setRecord] = useState(null);
  // const [status, setStatus] = React.useState({});
  const [isRecording, setIsRecording] = useState(false);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flashMode, setFlashMode] = useState(Camera.Constants.FlashMode.off);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [draftvideo, setDraftVideo] = useState(null);
  const cameraRef = useRef(null);
  const flippedVideo = useRef(null);

  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");

      const audioStatus = await Camera.requestMicrophonePermissionsAsync();
      setHasAudioPermission(audioStatus.status === "granted");
    })();
  }, []);

  const takeVideo = async () => {
    setIsRecording(true);
    if (cameraRef) {
      try {
        const data = await cameraRef.current.recordAsync();
        setDraftVideo(data.uri);
        setIsRecording(false);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const stopVideo = async () => {
    setIsRecording(false);
    cameraRef.current.stopRecording();
  };

  if (hasCameraPermission === null || hasAudioPermission === null) {
    return <View />;
  }
  if (hasCameraPermission === false || hasAudioPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const saveVideo = async () => {
    if (draftvideo) {
      try {
        await MediaLibrary.createAssetAsync(draftvideo);
        alert("Video Saved! 🎉");
      } catch (e) {
        console.log(e);
      }
    }
  };

  const pickVideo = async () => {
    try {
      const permissionResult =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (!permissionResult.granted) {
        alert("Permission to access media library is required!");
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Videos,
        allowsEditing: true,
        quality: 1,
      });

      console.log("ImagePicker result:", result.assets[0].uri); // Log ImagePicker result

      setSelectedVideo(result.assets[0].uri);
    } catch (error) {
      console.error("Error picking video:", error);
    }
  };

  const handleUpload = async () => {
    //Replace with your local host IP address
    const backendUrl = "http://172.16.11.254:3000/api/CVProcessing";
    try {
      const formData = new FormData();
      formData.append("video", {
        uri: selectedVideo,
        name: "testvideoQUT_plank.mp4",
        type: "video/mp4",
      });

      const response = await fetch(`${backendUrl}`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Upload failed");
      }
      alert("Video Uploaded Successfully! 🎉");
      console.log("Upload successful");
    } catch (error) {
      console.error("Error uploading video:", error.message);
      throw error; // rethrow error to be caught by the saveVideo function
    }
  };

  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      {!draftvideo ? (
        <Camera
          style={styles.camera}
          type={CameraType}
          flashMode={flashMode}
          ref={cameraRef}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 30,
            }}
          >
            <ButtonInCamera
              icon={"retweet"}
              onPress={() => {
                setType(
                  type === CameraType.back ? CameraType.front : CameraType.back
                );
              }}
            />
            <ButtonInCamera
              icon={"flash"}
              onPress={() => {
                setFlashMode(
                  flashMode === Camera.Constants.FlashMode.off
                    ? Camera.Constants.FlashMode.on
                    : Camera.Constants.FlashMode.off
                );
              }}
            />
          </View>
        </Camera>
      ) : (
        <Video
          ref={flippedVideo}
          style={styles.flippedVideo}
          source={{
            uri: selectedVideo,
          }}
          useNativeControls
          resizeMode="contain"
          // isLooping
          // onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />
      )}
      {draftvideo ? (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 50,
          }}
        >
          <ButtonInCamera
            title={"Re-take"}
            icon="retweet"
            onPress={() => setDraftVideo(null)}
          />
          <ButtonInCamera
            title={"SaveVideo"}
            // icon="check"
            onPress={saveVideo}
          />

          <ButtonInCamera
            title={"PickVideo"}
            // icon="check"
            onPress={pickVideo}
          />

          <ButtonInCamera
            title={"UploadVideo"}
            icon="check"
            onPress={handleUpload}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Congratulation")}
          >
            <Text style={styles.buttonText}>Done</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.buttonContainer}>
          <ButtonInCamera
            title={isRecording ? "Stop Recording" : "Start Recording"}
            onPress={isRecording ? stopVideo : takeVideo}
            icon="camera"
          />
        </View>
      )}
    </View>
  );
};

export default TriggerCamera;
