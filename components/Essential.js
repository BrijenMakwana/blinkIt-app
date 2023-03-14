import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Essential = (props) => {
  const { image, title } = props;
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Essential;

const styles = StyleSheet.create({
  container: {
    width: 120,
    alignItems: "center",
    marginTop: 10,
  },
  image: {
    width: 110,
    height: 110,
    resizeMode: "contain",
  },
  title: {
    marginTop: 3,
    fontSize: 12,
    fontWeight: "500",
    textTransform: "capitalize",
    textAlign: "center",
    paddingHorizontal: 2,
  },
});
