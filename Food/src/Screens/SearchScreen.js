import React, { useState } from "react";
import { StyleSheet, Text, ScrollView } from "react-native";
import SearchBar from "../Components/SearchBar";
import UseResults from "../hooks/useResults";
import ResultList from "../Components/ResultList";

export default function SearchScreen() {
  const [search, setSearch] = useState("");
  const [results, errorMsg, ApiRequest] = UseResults();

  const filterByPrice = price => {
    return results.filter(item => item.price === price);
  };

  return (
    <>
      <SearchBar submit={() => ApiRequest(search)} setSearch={setSearch} />
      {errorMsg ? <Text>{errorMsg}</Text> : null}
      <ScrollView>
        <ResultList results={filterByPrice("$")} title="$" />
        <ResultList results={filterByPrice("$$")} title="$$" />
        <ResultList results={filterByPrice("$$$")} title="$$$" />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({});
