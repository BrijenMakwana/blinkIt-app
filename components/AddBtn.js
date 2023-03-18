import { Pressable, Text, StyleSheet } from "react-native";
import React from "react";

const AddBtn = () => {
  return (
    <Pressable style={btnStyles.container}>
      <Text style={btnStyles.btnText}>add</Text>
    </Pressable>
  );
};

export default AddBtn;

const btnStyles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(246,255,249)",
    borderColor: "rgb(0,82,0)",
    borderWidth: 1,
    paddingVertical: 4,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  btnText: {
    textTransform: "uppercase",
    color: "rgb(0,82,0)",
    fontSize: 12,
    fontWeight: "500",
  },
});
