import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import React, { useState } from "react";
import { productsCategories } from "../assets/data/data";
import SidebarProduct from "../components/SidebarProduct";

const ProductsScreen = () => {
  const [activeCategory, setActiveCategory] = useState("Fresh Vegetables");

  const changeProductCategory = (category) => {
    setActiveCategory(category);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.sideBar} showsVerticalScrollIndicator={false}>
        {productsCategories.map((product) => (
          <SidebarProduct
            key={product.id}
            {...product}
            changeProductCategory={changeProductCategory}
            activeCategory={activeCategory}
          />
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
