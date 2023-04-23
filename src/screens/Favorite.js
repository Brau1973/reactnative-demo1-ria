import React from "react";
import { SafeAreaView, Text, StyleSheet, View } from "react-native";

export default function Favorite() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textBox}>
        <Text style={styles.text}>Favorite</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "black",
  },
  textBox: {
    height: 50,
    width: 200,
    backgroundColor: "red",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
