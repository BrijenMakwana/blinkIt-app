import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const AddBtn = () => {
  return (
    <Pressable style={btnStyles.container}>
      <Text style={btnStyles.btnText}>add</Text>
    </Pressable>
  );
};

const ProductItem = (props) => {
  const { discount = null, image, time, title, quantity, actualPrice } = props;
  const discountedPrice =
    discount === null ? actualPrice : ((100 - discount) * actualPrice) / 100;
  return (
    <View style={styles.container}>
      {/* discount */}
      {discount && (
        <View style={styles.discountContainer}>
          <Text style={styles.discount}>{discount}%</Text>
          <Text style={styles.discount}>off</Text>
        </View>
      )}

      {/* image */}
      <Image src={image} style={styles.image} />
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
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    width: 170,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      height: 5,
      width: 5,
    },
    shadowOpacity: 0.5,
    elevation: 5,
    backgroundColor: "#fff",
    padding: 12,
    marginTop: 10,
    marginHorizontal: 5,
  },
  discountContainer: {
    backgroundColor: "rgb(50,121,234)",
    position: "absolute",
    padding: 5,
    left: 12,
  },
  discount: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "500",
  },
  image: {
    width: 130,
    height: 130,
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
    borderRadius: 2,
    padding: 3,
    marginTop: 5,
  },
  timeImage: {
    width: 10,
    height: 10,
  },
  time: {
    fontSize: 8,
    textTransform: "uppercase",
    fontWeight: "500",
    marginLeft: 3,
  },
  title: {
    fontSize: 13,
    fontWeight: "500",
    textTransform: "capitalize",
    marginTop: 7,
  },
  quantity: {
    fontSize: 10,
    color: "#585858",
    fontWeight: "400",
    marginTop: 5,
  },
  priceContainer: {
    marginTop: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  price: {},
  discountedPrice: {
    fontSize: 12,
  },
  actualPrice: {
    fontSize: 11,
    color: "gray",
    textDecorationLine: "line-through",
    textDecorationColor: "gray",
    marginTop: 2,
  },
});

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
