import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { productsCategories, vegItems } from "../assets/data/data";
import SidebarProduct from "../components/SidebarProduct";
import ProductItem from "../components/ProductItem";

const ProductsScreen = () => {
  const [activeCategory, setActiveCategory] = useState("Fresh Vegetables");

  const changeProductCategory = (category) => {
    setActiveCategory(category);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* left side */}
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

      {/* right side */}
      <View style={styles.productList}>
        <View style={styles.productList}>
          <FlatList
            data={vegItems}
            renderItem={({ item }) => (
              <ProductItem
                {...item}
                openProductModal={undefined}
                imageBorder={false}
              />
            )}
            numColumns={2}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    flexDirection: "row",
  },
  sideBar: {
    maxWidth: 80,
    // backgroundColor: "red",
  },
  productList: {
    backgroundColor: "rgb(244,246,251)",
    flex: 1,
  },
});
