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
            discount={item.discount}
          />
        ))}
      </View>
    </View>
  );
};

export default ProductCategory;

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  heading: {
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  seeAll: {
    fontSize: 12,
    fontWeight: "700",
    color: "rgb(0,82,0)",
  },
  productList: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
});
