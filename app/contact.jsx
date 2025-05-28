import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import ThemedText from "../components/ThemedText";
import ThemedView from "../components/ThemedView";
const Contact = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.text}>Contact</ThemedText>
      {/* This is the about page */}
      <ThemedText>contact page</ThemedText>
    </ThemedView>
  );
};

export default Contact;

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
