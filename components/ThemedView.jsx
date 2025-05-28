import { View, useColorScheme } from "react-native";
import React from "react";
import { Colors } from "../constants/Colors.js"; // Adjust the path as necessary
const ThemedView = ({ style, children, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light; // Fallback to light theme if colorScheme is undefined
  return (
    <View
      style={[{ backgroundColor: theme.background }, style]}
      {...props}>
      {children}
      {/* set background based on theme, apply any specific style props passed, then apply any other general props*/}
    </View>
  );
};

export default ThemedView;
