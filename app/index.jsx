import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Logo from "../assets/img/logo_light.png"; // Assuming you have a logo image in the assets folder

const Home = () => {
  return (
    <View style={styles.container}>
      <Image
        source={Logo}
        style={styles.img}
      />
      <Text style={styles.text}>The Number 1</Text>
      {/*styles object*/}
      <Text style={{ marginTop: 10, marginBottom: 30 }}>Reading List App</Text>
      {/*inline styles*/}
    </View>
  );
};

export default Home;

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

  img: {
    marginVertical: 20,
  },
});
