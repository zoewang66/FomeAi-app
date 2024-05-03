import React from "react";
import { useState, useEffect, useRef } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import { Camera, CameraType, requestCameraPermissionsAsync } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import ButtonInCamera from "../components/ButtonInCamera";
import { Video } from 'expo-av';

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
    width: '100%',
    marginBottom: 0,
  },
  buttonContainer: {
    flexDirection: "row",
    columnGap: 20,
    justifyContent: "center",
    position: 'absolute',
    bottom: 20, 
    left: 0,
    right: 0,
    alignItems: 'center',
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
});

const TriggerCamera = ({ navigation }) => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [hasAudioPermission, setHasAudioPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const video = React.useRef(null);
  const [record, setRecord] = useState(null);
  const [status, setStatus] = React.useState({});
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flashMode, setFlashMode] = useState(Camera.Constants.FlashMode.off);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");

      const audioStatus = await Camera.requestMicrophonePermissionsAsync();
      setHasAudioPermission(audioStatus.status === 'granted');

    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef) {
      try {
        const data = await cameraRef.current.takePictureAsync();
        console.log(data);
        setImage(data.uri);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const takeVideo = async () => {
    if(camera){
        const data = await camera.recordAsync({
          maxDuration:10
        })
        setRecord(data.uri);
        console.log(data.uri);
    }
  }

  const stopVideo = async () => {
    camera.stopRecording();
  }

  if (hasCameraPermission === null || hasAudioPermission === null ) {
    return <View />;
  }
  if (hasCameraPermission === false || hasAudioPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const saveImage = async () => {
    if (image) {
      try {
        await MediaLibrary.createAssetAsync(image);
        alert("Picture Saved! 🎉");
        setImage(null);
      } catch (e) {
        console.log(e);
      }
    }
  };

  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      {!image ? (
        <Camera
          style={styles.camera}
          type={type}
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
        <Image source={{ uri: image }} style={styles.camera} />
      )}
      {image ? (
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
            onPress={() => setImage(null)}
          />
          <ButtonInCamera title={"Save"} icon="check" onPress={saveImage} />
  
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Exercise")}
          >
            <Text style={styles.buttonText}>Done</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.buttonContainer}>
          <ButtonInCamera
            title={"Picture"}
            onPress={takePicture}
            icon="camera"
          />
          <ButtonInCamera title="Video" onPress={() => takeVideo()} icon='video'/>
        </View>
      )}
    </View>
  );
};

export default TriggerCamera;
