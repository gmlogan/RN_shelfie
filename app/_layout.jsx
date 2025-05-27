import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Slot, Stack } from "expo-router";

const RootLayout = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* <Slot/> adds a simple outlet for page content into layout */}
      <Stack />
      <Text style={{ marginBottom: 20, textAlign: "center" }}> Footer</Text>
    </View>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
