import { StyleSheet, Text, View, useColorScheme } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { Colors } from "../constants/colors";

const about = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.text, { color: theme.text }]}>About</Text>
      {/* This is the about page */}
      <Text style={[styles.text, { color: theme.text }]}>about page</Text>
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
