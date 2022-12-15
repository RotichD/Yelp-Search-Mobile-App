import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import RestaurantCard from "./RestaurantCard";

const ResultsList = ({ cardTitle, results }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.cardTitle}>{cardTitle}</Text>
      <FlatList
        data={results}
        keyExtractor={(result) => result.id}
        horizontal
        renderItem={({ item }) => {
          return <RestaurantCard result={item} />;
        }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
    marginBottom: 5,
  },
  container: {
    marginBottom: 10,
  },
});

export default ResultsList;
