import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import AddBtn from "../components/AddBtn";
import { Ionicons } from "@expo/vector-icons";

const ProductItem = (props) => {
  const {
    discount = null,
    image,
    time,
    title,
    quantity,
    actualPrice,
    productDetails,
    openProductModal,
  } = props;
  const discountedPrice =
    discount === null ? actualPrice : ((100 - discount) * actualPrice) / 100;
  return (
    <Pressable
      style={styles.container}
      onPress={() =>
        openProductModal({
          image: image,
          time: time,
          title: title,
          quantity: quantity,
          actualPrice: actualPrice,
          productDetails: productDetails,
        })
      }
    >
      {/* discount */}
      {discount && (
        <View style={styles.discountContainer}>
          <Text style={styles.discount}>{discount}%</Text>
          <Text style={styles.discount}>off</Text>
        </View>
      )}

      {/* like */}
      <Pressable style={styles.likeBtn}>
        <Ionicons name="heart-outline" size={20} color="#787878" />
      </Pressable>

      {/* image */}
      <View style={styles.imageContainer}>
        <Image src={image} style={styles.image} />
      </View>
      {/* duration */}
      <View style={styles.duration}>
        <Image
          source={require("../assets/images/time.png")}
          style={styles.timeImage}
        />
        <Text style={styles.time}>{time} mins</Text>
      </View>

      {/* name */}
      <Text style={styles.title}>{title}</Text>
      {/* quantity */}
      <Text style={styles.quantity}>{quantity} kg</Text>

      {/* price */}
      <View style={styles.priceContainer}>
        <View style={styles.price}>
          <Text style={styles.discountedPrice}>₹{discountedPrice}</Text>
          {discount && <Text style={styles.actualPrice}>₹{actualPrice}</Text>}
        </View>
        <AddBtn />
      </View>
    </Pressable>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    width: 120,
    borderRadius: 10,
    backgroundColor: "#fff",
    marginRight: 10,
  },
  discountContainer: {
    backgroundColor: "rgb(50,121,234)",
    position: "absolute",
    padding: 3,
    left: 12,
    alignItems: "center",
  },
  discount: {
    color: "#fff",
    fontSize: 8,
    fontWeight: "500",
    textTransform: "uppercase",
  },
  likeBtn: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: 10,
    top: 10,
  },
  imageContainer: {
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 120,
  },
  image: {
    width: "60%",
    height: "60%",
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: 10,
  },
  duration: {
    flexDirection: "row",
    backgroundColor: "rgb(236,238,243)",
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    padding: 3,
    marginTop: 5,
  },
  timeImage: {
    width: 10,
    height: 10,
  },
  time: {
    fontSize: 7,
    textTransform: "uppercase",
    fontWeight: "500",
    marginLeft: 3,
  },
  title: {
    fontSize: 12,
    fontWeight: "500",
    textTransform: "capitalize",
    marginTop: 7,
  },
  quantity: {
    fontSize: 9,
    color: "#585858",
    fontWeight: "400",
    marginTop: 5,
  },
  priceContainer: {
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  price: {},
  discountedPrice: {
    fontSize: 12,
    fontWeight: "500",
  },
  actualPrice: {
    fontSize: 11,
    color: "gray",
    textDecorationLine: "line-through",
    textDecorationColor: "gray",
    marginTop: 2,
  },
});
