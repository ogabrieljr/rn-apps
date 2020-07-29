import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ResultDetail from "./ResultDetail";
import { useNavigation } from "@react-navigation/native";

export default function ResultList({ title, results }) {
  const navigation = useNavigation();

  if (!results.length) {
    return null;
  }

  return (
    <View style={styles.countainer}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={result => result.id}
        data={results}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Details", { id: item.id })}>
            <ResultDetail item={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5,
  },
  countainer: {
    marginBottom: 15,
  },
});
