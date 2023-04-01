import { StyleSheet, Text, Pressable, Image } from "react-native";
import React from "react";
import {} from "react-native";

const SidebarProduct = (props) => {
  const { categoryTitle, image } = props;
  return (
    <Pressable style={styles.container}>
      <Image src={image} style={styles.image} alt={categoryTitle} />
      <Text style={styles.title}>{categoryTitle}</Text>
    </Pressable>
  );
};

export default SidebarProduct;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    paddingVertical: 5,
    marginVertical: 5,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    resizeMode: "contain",
  },
  title: {
    textTransform: "capitalize",
    fontSize: 11,
    marginTop: 5,
    color: "#505050",
    textAlign: "center",
    paddingHorizontal: 5,
  },
});
