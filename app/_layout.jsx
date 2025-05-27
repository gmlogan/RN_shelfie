import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Slot } from "expo-router";

const RootLayout = () => {
  return (
    <View style={{ flex: 1 }}>
      <Slot />
      <Text style={{ marginBottom: 20, textAlign: "center" }}> Footer</Text>
    </View>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
