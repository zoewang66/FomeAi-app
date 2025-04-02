import React from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import NavbarBottom from "../components/Navbar-bottom";
import Hexagon from "../../assets/Icons/Hexagon";
import GoldenHexagon from "../../assets/Icons/GoldenHexagon";
import SilverHexagon from "../../assets/Icons/SilverHexagon";
import BronzeHexagon from "../../assets/Icons/BronzeHexagon";
import No1 from "../../assets/Icons/No1";
import No2 from "../../assets/Icons/No2";
import No3 from "../../assets/Icons/No3";

export function LeaderBoard() {
  const leaderboardProps = [
    {
      name: "Jesse",
      score: 97,
      position: 1,
      image: require("../../assets/imgs/number1.png"),
    },
    {
      name: "Zoe",
      score: 85,
      position: 2,
      image: require("../../assets/imgs/number2.png"),
    },
    {
      name: "Dylan",
      score: 80,
      position: 3,
      image: require("../../assets/imgs/number3.png"),
    },
    {
      name: "Bob",
      score: 78,
      position: 4,
      image: require("../../assets/imgs/number4.png"),
    },
    {
      name: "Sasha",
      score: 77,
      position: 5,
      image: require("../../assets/imgs/number5.png"),
    },
    {
      name: "Leo",
      score: 72,
      position: 6,
      image: require("../../assets/imgs/number6.png"),
    },
    {
      name: "Jason",
      score: 69,
      position: 7,
      image: require("../../assets/imgs/number7.png"),
    },
    {
      name: "Loretta",
      score: 65,
      position: 8,
      image: require("../../assets/imgs/number8.png"),
    },
    {
      name: "Chris",
      score: 64,
      position: 9,
      image: require("../../assets/imgs/number9.png"),
    },
    {
      name: "Tiffany",
      score: 62,
      position: 10,
      image: require("../../assets/imgs/number10.png"),
    },
  ];

  const sortedLeaders = leaderboardProps
    .slice()
    .sort((a, b) => a.position - b.position);

  const number1 = sortedLeaders.slice(0, 1);
  const number2 = sortedLeaders.slice(1, 2);
  const number3 = sortedLeaders.slice(2, 3);
  const remainingLeaders = sortedLeaders.slice(3);

  const renderLeader = ({ item, index }) => (
    <View
      style={[
        styles.item,
        index % 2 === 0 ? styles.itemAlternate : styles.itemUnchange,
      ]}
    >
      <Text style={styles.position}>{item.position}</Text>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Hexagon>
        <Text style={styles.score}>{item.score}</Text>
      </Hexagon>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.topLeadersContainer}>
        {number2.map((leader) => (
          <View key={leader.name} style={styles.topLeader2}>
            <Image source={leader.image} style={styles.imageLeader} />
            <No2>
              <Text style={styles.topLeader2Position}>{leader.position}</Text>
            </No2>
            <Text style={styles.leaderName}>{leader.name}</Text>
            <SilverHexagon>
              <Text style={styles.leaderScore}>{leader.score}</Text>
            </SilverHexagon>
          </View>
        ))}
        {number1.map((leader) => (
          <View key={leader.name} style={styles.topLeader1}>
            <Image source={leader.image} style={styles.imageLeader} />
            <No1>
              <Text style={styles.topLeader1Position}>{leader.position}</Text>
            </No1>
            <Text style={styles.leaderName}>{leader.name}</Text>
            <GoldenHexagon>
              <Text style={styles.leaderScore}>{leader.score}</Text>
            </GoldenHexagon>
          </View>
        ))}
        {number3.map((leader) => (
          <View key={leader.name} style={styles.topLeader3}>
            <Image source={leader.image} style={styles.imageLeader} />
            <No3>
              <Text style={styles.topLeader3Position}>{leader.position}</Text>
            </No3>

            <Text style={styles.leaderName}>{leader.name}</Text>
            <BronzeHexagon>
              <Text style={styles.leaderScore}>{leader.score}</Text>
            </BronzeHexagon>
          </View>
        ))}
      </View>
      <FlatList
        data={remainingLeaders}
        renderItem={renderLeader}
        keyExtractor={(item) => item.name}
        contentContainerStyle={[
          styles.listContainer,
          { backgroundColor: "#F5F4F1" },
        ]}
      />

      <View style={styles.navbarWrapper}>
        <NavbarBottom />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E4EBEE",
    paddingBottom: 100,
  },
  navbarWrapper: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#ddd",
  },
  text: {
    color: "#472938",
    fontSize: 20,
    fontWeight: "bold",
    margin: 30,
    marginLeft: 125,
  },
  listContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    width: "100%",
  },
  name: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
  },
  leaderName: {
    fontSize: 18,
  },
  score: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 10,
    backgroundColor: "#DBFFA1",
    borderStyle: "solid",
  },
  leaderScore: {
    fontSize: 18,
    fontWeight: "bold",
    margin: "auto",
  },
  position: {
    fontSize: 16,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginLeft: 10,
  },
  imageLeader: {
    position: "relative",
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  topLeadersContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
    alignItems: "center",
    backgroundColor: "#E4EBEE",
  },
  topLeader1: {
    alignItems: "center",
    width: "20%",
    marginHorizontal: "5%",
    marginRight: 10,
  },
  topLeader1Position: {
    fontSize: 16,
  },
  topLeader2: {
    alignItems: "center",
    width: "20%",
    marginHorizontal: "5%",
    marginRight: 10,
    marginTop: 23,
  },
  topLeader2Position: {
    fontSize: 16,
  },
  topLeader3: {
    alignItems: "center",
    width: "20%",
    marginHorizontal: "5%",
    marginRight: 10,
    marginTop: 45,
  },
  topLeader3Position: {
    fontSize: 16,
    position: "absolute",
  },
  itemUnchange: {
    backgroundColor: "#E4EBEE",
  },
  itemAlternate: {
    backgroundColor: "#F5F4F1",
  },
});

export default LeaderBoard;
