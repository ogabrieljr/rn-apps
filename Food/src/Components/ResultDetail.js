import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function ResultDetail({ item }) {
  return (
    <View style={styles.countainer}>
      <Image style={styles.image} source={{ uri: item.image_url }} />
      <Text style={styles.name}>{item.name}</Text>
      <Text>
        {item.rating} Stars, {item.review_count} Reviews
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  countainer: {
    marginLeft: 15,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 4,
  },
  name: {
    fontWeight: "bold",
  },
});
