import { StyleSheet, Text, Pressable, Image } from "react-native";
import React from "react";
import {} from "react-native";

const SidebarProduct = (props) => {
  const { categoryTitle, image, changeProductCategory, activeCategory } = props;

  const imageSize = activeCategory === categoryTitle ? 53 : 50;
  const textWeight = activeCategory === categoryTitle ? "700" : "300";
  const textColor = activeCategory === categoryTitle ? "#000" : "#505050";

  return (
    <Pressable
      style={styles.container}
      onPress={() => changeProductCategory(categoryTitle)}
    >
      <Image
        src={image}
        style={[
          styles.image,
          {
            width: imageSize,
            height: imageSize,
          },
        ]}
        alt={categoryTitle}
      />
      <Text
        style={[
          styles.title,
          {
            fontWeight: textWeight,
            color: textColor,
          },
        ]}
      >
        {categoryTitle}
      </Text>
    </Pressable>
  );
};

export default SidebarProduct;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    paddingVertical: 5,
    marginVertical: 5,
  },
  image: {
    borderRadius: 50,
    resizeMode: "contain",
  },
  title: {
    textTransform: "capitalize",
    fontSize: 11,
    marginTop: 5,
    textAlign: "center",
    paddingHorizontal: 5,
  },
});
