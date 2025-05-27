import { StyleSheet, Text, useColorScheme, View } from "react-native";
import React from "react";
import { Slot, Stack } from "expo-router";
import { Colors } from "../constants/colors"; // Adjust the path as necessary
import { StatusBar } from "expo-status-bar";

const RootLayout = () => {
  const colorScheme = useColorScheme();
  console.log("colorScheme", colorScheme); // 'light' or 'dark'
  const theme = Colors[colorScheme] ?? Colors.light; // Fallback to light theme if colorScheme is undefined

  return (
    <>
      {/* <Slot/> adds a simple outlet for page content into layout.
      No <View> needed as each page has a view and will be injected to the 'stack'  */}
      <StatusBar value="auto" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: theme.navBackground },
          headerTintColor: theme.title,
          headerTitleStyle: { fontWeight: "bold" },
        }}>
        <Stack.Screen
          name="index"
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="about"
          options={{ title: "About" }}
        />
        <Stack.Screen
          name="contact"
          options={{ title: "Contact Us" }}
        />
      </Stack>
    </>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
