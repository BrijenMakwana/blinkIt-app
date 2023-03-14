import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import React from "react";
import SearchBar from "../components/SearchBar";
import Banner from "../components/Banner";
import Essential from "../components/Essential";
import ProductItem from "../components/ProductItem";
import { essentialsData } from "../assets/data/data";

const index = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* banner list */}
      <SearchBar />
      <View style={styles.bannerContainer}>
        <Banner />
      </View>

      {/* essentials list */}
      <View style={styles.essentialsContainer}>
        <Text style={styles.essentialsHeading}>BiG SUMMER SALE</Text>
        <Text style={styles.essentialsSubtitle}>
          Stock up on your summer essentials
        </Text>
        <View style={styles.essentialsList}>
          {essentialsData.map((item) => (
            <Essential image={item.image} title={item.title} key={item.id} />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  bannerContainer: {
    paddingVertical: 15,
  },
  essentialsContainer: {},
  essentialsList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 10,
  },
  essentialsHeading: {
    fontSize: 30,
    fontWeight: "bold",
    color: "rgb(247,165,0)",
    textAlign: "center",
  },
  essentialsSubtitle: {
    fontSize: 17,
    fontWeight: "400",
    textAlign: "center",
  },
});
