import React from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";

export function LeaderBoard() {
  const leaderboardProps = [
    {
      name: "Jesse",
      score: 97,
      position: 1,
      image: require("./imgs/number1.png"),
    },
    {
      name: "Zoe",
      score: 85,
      position: 2,
      image: require("./imgs/number2.png"),
    },
    {
      name: "Dylan",
      score: 80,
      position: 3,
      image: require("./imgs/number3.png"),
    },
    {
      name: "Bob",
      score: 78,
      position: 4,
      image: require("./imgs/number4.png"),
    },
    {
      name: "Sasha",
      score: 77,
      position: 5,
      image: require("./imgs/number5.png"),
    },
    {
      name: "Leo",
      score: 72,
      position: 6,
      image: require("./imgs/number6.png"),
    },
    {
      name: "Jason",
      score: 69,
      position: 7,
      image: require("./imgs/number7.png"),
    },
    {
      name: "Loretta",
      score: 65,
      position: 8,
      image: require("./imgs/number8.png"),
    },
    {
      name: "Chris",
      score: 64,
      position: 9,
      image: require("./imgs/number9.png"),
    },
    {
      name: "Tiffany",
      score: 62,
      position: 10,
      image: require("./imgs/number10.png"),
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
    <View style={[styles.item, index % 2 === 1 ? styles.itemAlternate : null]}>
      <Text style={styles.position}>{item.position}</Text>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.score}>{item.score}</Text>
    </View>
  );

  return (
    <View>
      <Text style={styles.text}>Leaderboard</Text>
      <View style={styles.topLeadersContainer}>
        {number2.map((leader) => (
          <View
            key={leader.name}
            style={[styles.topLeader, styles.silverBackground]}
          >
            <Image source={leader.image} style={styles.imageLeader} />
            <Text style={styles.position}>{leader.position}</Text>
            <Text style={styles.leaderName}>{leader.name}</Text>
            <Text style={styles.leaderScore}>{leader.score}</Text>
          </View>
        ))}
        {number1.map((leader) => (
          <View
            key={leader.name}
            style={[styles.topLeader, styles.goldBackground]}
          >
            <Image source={leader.image} style={styles.imageLeader} />
            <Text style={styles.position}>{leader.position}</Text>
            <Text style={styles.leaderName}>{leader.name}</Text>
            <Text style={styles.leaderScore}>{leader.score}</Text>
          </View>
        ))}
        {number3.map((leader) => (
          <View
            key={leader.name}
            style={[styles.topLeader, styles.bronzeBackground]}
          >
            <Image source={leader.image} style={styles.imageLeader} />
            <Text style={styles.position}>{leader.position}</Text>
            <Text style={styles.leaderName}>{leader.name}</Text>
            <Text style={styles.leaderScore}>{leader.score}</Text>
          </View>
        ))}
      </View>
      <FlatList
        data={remainingLeaders}
        renderItem={renderLeader}
        keyExtractor={(item) => item.name}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
    fontWeight: "bold",
    fontSize: 18,
  },
  score: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 10,
    backgroundColor: "#DBFFA1",
  },
  leaderScore: {
    fontSize: 18,
    fontWeight: "bold",
    margin: "auto",
  },
  position: {
    fontSize: 16,
    fontWeight: "bold",
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginLeft: 20,
  },
  imageLeader: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  topLeadersContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
    alignItems: "center",
    backgroundColor: "DBFFA1",
  },
  topLeader: {
    alignItems: "center",
    width: "20%",
    marginHorizontal: "5%",
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
  },
  itemAlternate: {
    backgroundColor: "#F5F4F1",
  },
  goldBackground: {
    backgroundColor: "#FFD700",
  },
  silverBackground: {
    backgroundColor: "#C0C0C0",
  },
  bronzeBackground: {
    backgroundColor: "#CD7F32",
  },
});

export default LeaderBoard;
