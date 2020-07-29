import React, { useState, useEffect } from "react";
import { StyleSheet, Text, Image, FlatList, ScrollView } from "react-native";
import yelp from "../api/yelp";

export default function ResultScreen({ route }) {
  const [result, setResult] = useState([]);

  const id = route.params.id;
  const getResult = id => {
    yelp.get(`/${id}`).then(res => setResult(res.data));
  };

  useEffect(() => {
    getResult(id);
  }, []);

  return (
    <>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <ScrollView>
            <Image style={styles.image} source={{ uri: item }} />
          </ScrollView>
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
    margin: 10,
  },
});
