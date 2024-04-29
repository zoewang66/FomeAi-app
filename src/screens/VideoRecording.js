export default function TriggerVideoRecording() {
  const device = useCameraDevice("back");

  if (device == null) return <NoCameraErrorView />;
  return (
    <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
  );
}
