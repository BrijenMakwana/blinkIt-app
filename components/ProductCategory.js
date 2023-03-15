import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProductItem from "./ProductItem";

const ProductCategory = ({ heading, data }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>{heading}</Text>
        <Text style={styles.seeAll}>see all</Text>
      </View>

      <View style={styles.productList}>
        {data.map((item) => (
          <ProductItem
            image={item.image}
            time={item.duration}
            title={item.title}
            quantity={item.quantity}
            actualPrice={item.actualPrice}
            key={item.id}
          />
        ))}
      </View>
    </View>
  );
};

export default ProductCategory;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  heading: {
    fontSize: 16,
    fontWeight: "bold",
  },
  seeAll: {
    fontSize: 14,
    fontWeight: "bold",
    color: "rgb(0,82,0)",
  },
  productList: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
});
