import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Modal,
  Image,
  Pressable,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import Banner from "../components/Banner";
import Essential from "../components/Essential";
import {
  essentialsData,
  dairyItems,
  vegItems,
  chocolatesItems,
} from "../assets/data/data";
import ProductCategory from "../components/ProductCategory";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import AddBtn from "../components/AddBtn";
import ProductDetails from "../components/ProductDetails";

const index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [productModalData, setProductModalData] = useState({});

  const openProductModal = (product) => {
    setIsVisible(true);
    setProductModalData(product);
  };
  return (
    <ScrollView
      style={[
        styles.container,
        {
          backgroundColor: isVisible ? "rgba(0,0,0,0.2)" : "#fff",
        },
      ]}
      showsVerticalScrollIndicator={false}
    >
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

      {/* product category */}
      <ProductCategory
        heading="Dairy and Bread"
        data={dairyItems}
        openProductModal={openProductModal}
      />
      <ProductCategory
        heading="Vegetables & Fruits"
        data={vegItems}
        openProductModal={openProductModal}
      />
      <ProductCategory
        heading="Chocolates"
        data={chocolatesItems}
        openProductModal={openProductModal}
      />

      {/* product modal */}
      <Modal visible={isVisible} transparent={true}>
        <Pressable style={styles.closeBtn} onPress={() => setIsVisible(false)}>
          <Entypo name="cross" size={24} color="#fff" />
        </Pressable>
        <ScrollView style={styles.modalContainer}>
          <ScrollView
            contentContainerStyle={styles.images}
            horizontal
            snapToAlignment="start"
            decelerationRate="fast"
            snapToInterval={Dimensions.get("window").width}
          >
            <View style={styles.imageContainer}>
              <Image src={productModalData.image} style={styles.productImage} />
            </View>
            <View style={styles.imageContainer}>
              <Image src={productModalData.image} style={styles.productImage} />
            </View>
            <View style={styles.imageContainer}>
              <Image src={productModalData.image} style={styles.productImage} />
            </View>
          </ScrollView>

          {/* title */}
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{productModalData.title}</Text>
            <View style={styles.shareIconContainer}>
              <MaterialCommunityIcons
                name="share-outline"
                size={24}
                color="black"
              />
            </View>
          </View>
          {/* duration */}
          <View style={styles.duration}>
            <Image
              source={require("../assets/images/time.png")}
              style={styles.timeImage}
            />
            <Text style={styles.time}>{productModalData.time} mins</Text>
          </View>

          {/* devider */}
          <View
            style={{
              height: 1,
              width: "93%",
              alignSelf: "center",
              backgroundColor: "#E0E0E0",
              marginVertical: 15,
            }}
          />

          {/* price */}
          <View style={styles.priceContainer}>
            <Text style={styles.quantity}>{productModalData.quantity} ml</Text>
            <Text style={styles.price}>₹{productModalData.actualPrice}</Text>
          </View>

          {/* product details */}
          <View style={styles.productDetails}>
            <Text style={styles.productDetailsHeading}>Product details</Text>
            {productModalData?.productDetails?.map((item) => (
              <ProductDetails
                title={item.title}
                description={item.description}
                key={item.id}
              />
            ))}
          </View>
        </ScrollView>
      </Modal>
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
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
  modalContainer: {
    backgroundColor: "#fff",
    marginTop: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  closeBtn: {
    backgroundColor: "rgb(28,28,28)",
    width: 40,
    height: 40,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  images: {
    flexDirection: "row",
    alignItems: "center",

    marginVertical: 15,
  },
  imageContainer: {
    height: 230,
    width: Dimensions.get("window").width,
    alignItems: "center",
    justifyContent: "center",
  },
  productImage: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  duration: {
    flexDirection: "row",
    backgroundColor: "rgb(236,238,243)",
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 2,
    padding: 3,
    marginLeft: 10,
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
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 7,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  shareIconContainer: {
    borderWidth: 1,
    borderColor: "lightgrey",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    borderRadius: 50,
  },
  priceContainer: {
    paddingLeft: 10,
  },
  quantity: {
    fontSize: 13,
  },
  price: {
    fontSize: 14,
    fontWeight: "500",
    marginTop: 5,
  },
  productDetails: {
    marginTop: 10,
    padding: 10,
  },
  productDetailsHeading: {
    fontWeight: 18,
    fontWeight: "bold",
  },
});
