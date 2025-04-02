import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import PropTypes from "prop-types";

export default function DarkButton({ buttonText, navigation, goTo, onPress }) {
  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={
          onPress
            ? onPress
            : () => {
                if (goTo) navigation.navigate(goTo);
              }
        }
      >
        <Text style={styles.text}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
}
DarkButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  navigation: PropTypes.object.isRequired,
  goTo: PropTypes.string,
  onPress: PropTypes.func,
};

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  text: {
    fontSize: windowHeight > 667 ? 26 : 20,
    lineHeight: 35,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    justifyContent: "center",
    textAlign: "center",
    paddingHorizontal: 30,
    paddingVertical: 10,
  },

  button: {
    width: windowHeight > 667 ? "70%" : "55%",
    height: undefined,
    borderRadius: 15,
    backgroundColor: "#4A7AD1",
    borderWidth: 1,
    borderColor: "#4A7AD1",
    marginBottom: windowHeight > 667 ? 20 : 40,
  },
});
