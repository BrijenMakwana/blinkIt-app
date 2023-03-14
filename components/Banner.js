import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Banner = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/Images/banner1.jpg")}
        style={styles.image}
      />
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  container: {
    width: "94%",
    alignSelf: "center",
    height: 200,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
