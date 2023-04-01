import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { productsCategories } from "../assets/data/data";
import SidebarProduct from "../components/SidebarProduct";

const ProductsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.sideBar} showsVerticalScrollIndicator={false}>
        {productsCategories.map((product) => (
          <SidebarProduct key={product.id} {...product} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  sideBar: {
    width: 80,
  },
});
