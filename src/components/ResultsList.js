import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { withNavigation } from "react-navigation";
import RestaurantCard from "./RestaurantCard";

const ResultsList = ({ cardTitle, results, navigation }) => {
  if (!results.length) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.cardTitle}>{cardTitle}</Text>
      <FlatList
        data={results}
        keyExtractor={(result) => result.id}
        horizontal
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Business", { id: item.id })}
            >
              <RestaurantCard result={item} />
            </TouchableOpacity>
          );
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

export default withNavigation(ResultsList);
