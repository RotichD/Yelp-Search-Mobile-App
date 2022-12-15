import React, { useState } from "react";
import { Text, StyleSheet, ScrollView } from "react-native";
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
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList cardTitle={"Cheap"} results={filterResultsByPrice("$")} />
        <ResultsList
          cardTitle={"Average Price"}
          results={filterResultsByPrice("$$")}
        />
        <ResultsList
          cardTitle={"Expensive"}
          results={filterResultsByPrice("$$$")}
        />
        <ResultsList
          cardTitle={"Very Expensive"}
          results={filterResultsByPrice("$$$$")}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
