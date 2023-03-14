import { SafeAreaView, StyleSheet, View } from "react-native";
import React from "react";
import SearchBar from "../components/SearchBar";
import Banner from "../components/Banner";

const index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar />
      <View style={styles.bannerContainer}>
        <Banner />
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
});
