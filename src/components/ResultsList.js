import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ResultsList = ({ cardTitle, results }) => {
  return (
    <View>
      <Text style={styles.cardTitle}>{cardTitle}</Text>
      <Text>Results: {results.length}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ResultsList;
