import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const about = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About</Text>
      {/* This is the about page */}
      <Text>about page</Text>
      <Link
        href="/"
        style={styles.link}>
        Go to Home
      </Link>
    </View>
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
