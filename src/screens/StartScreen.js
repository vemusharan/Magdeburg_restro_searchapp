import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const StartScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();
  //console.log(results.name);

  const filterResultsByPrice = (price) => {
    //price === 'Ôé¼' || 'Ôé¼Ôé¼' || 'Ôé¼Ôé¼Ôé¼'

    const returns = results.filter((result) => {
      return result.price === price;
    });

    return returns;
  };
  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {{ errorMessage } ? <Text> {errorMessage} </Text> : null}

      <ScrollView>
        <ResultsList
          results={filterResultsByPrice("€")}
          heading="Cost Effective !"
        />
        <ResultsList
          results={filterResultsByPrice("€€")}
          heading="Bit Pricer !"
        />
        <ResultsList
          results={filterResultsByPrice("€€€")}
          heading="Big Spender!"
        />
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  textheading: {
    fontSize: 50,
  },
});

export default StartScreen;
