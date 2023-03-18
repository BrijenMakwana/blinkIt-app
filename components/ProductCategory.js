import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProductItem from "./ProductItem";
import { FlatList } from "react-native-gesture-handler";

const ProductCategory = ({ heading, data, openProductModal }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>{heading}</Text>
        <Text style={styles.seeAll}>see all</Text>
      </View>

      <View style={styles.productList}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <ProductItem {...item} openProductModal={openProductModal} />
          )}
          keyExtractor={(item) => item.id}
          horizontal
        />
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
    alignItems: "center",
    marginTop: 15,
  },
});
