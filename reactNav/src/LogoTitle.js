import React from "react";
import { StyleSheet, Image, View } from "react-native";

export default function LogoTitle() {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/favicon.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  image: { width: 40, height: 40 },
});
