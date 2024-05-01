import { useState, useEffect, useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
// import { RNCamera } from "react-native-camera";
import { useNavigation } from "@react-navigation/native";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import ButtonInCamera from "../components/ButtonInCamera";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#000",
  },
  camera: {
    flex: 1,
    borderRadius: 20,
  },
});

const TriggerCamera = ({ navigation }) => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [flashMode, setFlashMode] = useState(Camera.Constants.FlashMode.off);
  const cameraRef = useRef(null);

  const handleCameraReady = () => {
    setIsCameraReady(true);
  };

  useEffect(() => {
    async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");
    };
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

  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      {!image ? (
        <Camera
          style={styles.camera}
          type={cameraType}
          flashMode={flashMode}
          ref={cameraRef}
        ></Camera>
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
          <ButtonInCamera title={"Save"} icon="check" />
        </View>
      ) : (
        <View>
          <ButtonInCamera
            title={"Take a picture"}
            onPress={takePicture}
            icon="camera"
          />
        </View>
      )}
    </View>
  );
};

export default TriggerCamera;
