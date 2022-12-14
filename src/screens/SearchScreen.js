import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useBusinesses from "../hooks/useBusinesses";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useBusinesses();

  const filterResultsByPrice = (cost) => {
    return results.filter((result) => {
      return result.price === cost;
    });
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
      <ResultsList results={filterResultsByPrice("$")} cardTitle={"Cheap"} />
      <ResultsList
        results={filterResultsByPrice("$$")}
        cardTitle={"Average Price"}
      />
      <ResultsList
        results={filterResultsByPrice("$$$")}
        cardTitle={"Expensive"}
      />
      {filterResultsByPrice("$$$$").length > 1 ? (
        <ResultsList
          results={filterResultsByPrice("$$$")}
          cardTitle={"Expensive"}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
