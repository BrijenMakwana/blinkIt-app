import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ProductDetails = (props) => {
  const { title, description } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.property}>{title}</Text>
      {description?.map((item, index) => (
        <Text key={index} style={styles.value}>
          {item}
        </Text>
      ))}
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  property: {
    fontSize: 15,
    marginBottom: 10,
  },
  value: {
    fontSize: 12,
    color: "gray",
    fontWeight: "400",
  },
});
