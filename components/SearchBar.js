import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Feather name="search" size={24} color="black" />
      <TextInput
        placeholder="Search for atta, dal, coke and more"
        style={styles.input}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderColor: "rgb(227, 231, 236)",
    borderWidth: 2,
    padding: 7,
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    alignSelf: "center",
    borderRadius: 10,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 15,
  },
});
