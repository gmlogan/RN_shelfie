import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Slot, Stack } from "expo-router";

const RootLayout = () => {
  return (
    <>
      {/* <Slot/> adds a simple outlet for page content into layout.
      No <View> needed as each page has a view and will be injected to the 'stack'  */}
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#ddd" },
          headerTintColor: "#333",
          headerTitleStyle: { fontWeight: "bold" },
        }}>
        <Stack.Screen
          name="index"
          options={{ title: "Home", headerShown: false }}
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
