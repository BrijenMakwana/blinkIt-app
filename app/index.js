import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import SearchBar from "../components/SearchBar";

const index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar />
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
});
