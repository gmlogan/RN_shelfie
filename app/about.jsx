import { StyleSheet, Text, View, useColorScheme } from "react-native";
import React from "react";
import { Link } from "expo-router";
import ThemedText from "../components/ThemedText";
import ThemedView from "../components/ThemedView";

const about = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.text}>About</ThemedText>
      {/* This is the about page */}
      <ThemedText style={styles.text}>about page</ThemedText>
    </ThemedView>
  );
};

export default about;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
  link: {
    marginTop: 20,
    color: "blue",
    textDecorationLine: "underline",
  },
});
