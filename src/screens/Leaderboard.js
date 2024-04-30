import React from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";

export function LeaderBoard({ leaderboardProps }) {
  const sortedLeaders = leaderboardProps
    .slice()
    .sort((a, b) => a.position - b.position);

  const topLeaders = sortedLeaders.slice(0, 3);
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
        {topLeaders.map((leader) => (
          <View key={leader.name} style={styles.topLeader}>
            <Text style={styles.position}>{leader.position}</Text>
            <Text style={styles.name}>{leader.name}</Text>
            <Text style={styles.score}>{leader.score}</Text>
            <Image source={leader.image} style={styles.image} />
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
  },
  score: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 10,
    backgroundColor: "#DBFFA1",
  },
  position: {
    fontSize: 16,
    fontWeight: "bold",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 20,
  },
  topLeadersContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  topLeader: {
    alignItems: "center",
    width: "20%",
    marginHorizontal: "5%",
    marginRight: 10, // Corrected margin value
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
  },
  itemAlternate: {
    backgroundColor: "#F5F4F1",
  },
});

export default LeaderBoard;
