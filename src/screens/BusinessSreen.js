import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const BusinessScreen = ({ navigation }) => {
  const [business, setBusiness] = useState(null);
  const id = navigation.getParam("id");

  const getBusiness = async () => {
    const response = await yelp.get(`/${id}`);
    setBusiness(response.data);
  };

  useEffect(() => {
    getBusiness();
  }, []);

  if (!business) {
    return null;
  }

  return (
    <View>
      <Text style={styles.title}>{business.name}</Text>
      <FlatList
        data={business.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "center",
    marginVertical: 20
  },
  image: {
    height: 200,
    width: 400,
    alignSelf: "center",
    marginBottom: 10
  },
});

export default BusinessScreen;
