import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import NavbarBottom from "../components/Navbar-bottom";
import resultData from "../../assets/ScoreResult/testvideoQUT_plank.json";

const score = Math.ceil(resultData.result.information.count_ratio);
const tips = resultData.result.suggestion;
const userName = "Dylan";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E4EBEE",
    justifyContent: "flex-start", // Change to flex-start to reduce space between items
  },

  contentContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    flexDirection: "column",
    flexShrink: 0,
    paddingHorizontal: 30,
    paddingTop: 20,
    height: "100",
  },

  header_Container: {
    flexDirection: "row", // Arrange items horizontally
    justifyContent: "space-between", // Space items evenly
    width: "100%", // Occupy full width of the box
    alignItems: "center",
    paddingTop: 10,
  },

  iconColumn: {
    width: 80,
  },

  textColumn: {
    alignItems: "center",
    justifyContent: "center",
  },

  header_Container: {
    flexDirection: "row", // Arrange items horizontally
    justifyContent: "space-between", // Space items evenly
    width: "100%", // Occupy full width of the box
    alignItems: "center",
    paddingBottom: 20,
  },

  text: {
    color: "#472938",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "400",
    paddingTop: 5,
  },

  tab_Container: {
    flexDirection: "row", // Arrange items horizontally
    justifyContent: "space-between", // Space items evenly
    width: "100%", // Occupy full width of the box
    alignItems: "center",
    paddingTop: 15,
    paddingBottom: 15,
  },

  selected_Tab: {
    width: 160,
    height: 32,
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#1554F6",
    paddingHorizontal: 10,
    marginLeft: 10, // Add marginLeft to create space
  },

  selected_Tab_Text: {
    color: "#fff",
    paddingVertical: 8,
  },

  unselected_tab: {
    width: 160,
    height: 32,
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#DDDADA",
  },

  unselected_Tab_Text: {
    color: "black",
    paddingVertical: 8,
  },

  title_text: {
    color: "#472938",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "400",
    paddingTop: 5,
    paddingBottom: 20,
  },

  result_Diagram: {
    width: 320,
    height: 260, // Adjust the height as needed
    paddingBottom: 20,
    // paddingTop: 10,
  },

  improvement_Tips: {
    color: "#1554F6",
  },

  improvement_Img: {
    width: "100%",
  },
});

export default function ScoreResult({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.contentContainer}>
          <View style={styles.header_Container}>
            <Image
              style={styles.iconColumn}
              source={require("../../assets/imgs/number3.png")}
              resizeMode="contain" // or "cover" or "stretch" depending on your requirement
            />
            <View style={styles.textColumn}>
              <Text style={styles.text}>{userName}</Text>
              <Text style={styles.text}>Your Weekly Score is {score} pts </Text>
            </View>
          </View>
          <View style={styles.tab_Container}>
            <TouchableOpacity style={styles.unselected_tab}>
              <Text style={styles.unselected_Tab_Text}>Push_Ups</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.selected_Tab}>
              <Text style={styles.selected_Tab_Text}>Plank</Text>
            </TouchableOpacity>
          </View>
          <Image
            style={styles.result_Diagram}
            source={require("../../assets/ScoreResult/testvideoQUT_plank_plank.png")}
            resizeMode="contain"
          />
          <Text style={styles.title_text}>Improvement Tips</Text>
          <Text style={styles.improvement_Tips}>{tips}</Text>
          <Image
            style={styles.result_Diagram}
            source={require("../../assets/ScoreResult/testvideoQUT_plank_plank_error.png")}
            resizeMode="contain"
          />
        </View>
      </ScrollView>
      <NavbarBottom />
    </View>
  );
}
