const essentialsData = [
  {
    id: "1",
    image: require("../images/categories/1.jpg"),
    title: "Skincare",
  },
  {
    id: "2",
    image: require("../images/categories/2.jpg"),
    title: "Bathing Essentials",
  },
  {
    id: "3",
    image: require("../images/categories/3.jpg"),
    title: "Home Care Essentials",
  },
  {
    id: "4",
    image: require("../images/categories/4.jpg"),
    title: "Summer Favourites",
  },
  {
    id: "5",
    image: require("../images/categories/5.jpg"),
    title: "Soft Drinks & Juices",
  },
  {
    id: "6",
    image: require("../images/categories/6.jpg"),
    title: "Ice Cream",
  },
];

const dairyItems = [
  {
    id: "1",
    image:
      "https://cdn.pixabay.com/photo/2013/07/13/11/30/box-158299_960_720.png",
    title: "Amul Taaza Toned Fresh Milk",
    duration: 8,
    quantity: 500,
    actualPrice: 27,
  },
  {
    id: "2",
    image:
      "https://cdn.pixabay.com/photo/2014/04/03/11/51/milk-312369_960_720.png",
    title: "Amul Gold Full Cream Fresh Milk",
    duration: 10,
    quantity: 200,
    actualPrice: 33,
  },
  {
    id: "3",
    image:
      "https://cdn.pixabay.com/photo/2014/12/21/23/34/swiss-cheese-575542_960_720.png",
    title: "Amul Fresh Malai Paneer",
    duration: 12,
    quantity: 200,
    actualPrice: 80,
  },
  {
    id: "4",
    image:
      "https://cdn.pixabay.com/photo/2012/04/24/21/18/milk-40900_960_720.png",
    title: "Mother Dairy Classic Curd",
    duration: 5,
    quantity: 300,
    actualPrice: 34,
  },
];

const vegItems = [
  {
    id: "1",
    image:
      "https://cdn.pixabay.com/photo/2019/07/01/14/28/paprika-4310065_960_720.png",
    title: "capsicum",
    duration: 8,
    quantity: 500,
    actualPrice: 27,
    discount: 10,
  },
  {
    id: "2",
    image:
      "https://cdn.pixabay.com/photo/2013/07/12/18/19/tomato-153272_960_720.png",
    title: "tomato",
    duration: 10,
    quantity: 200,
    actualPrice: 33,
    discount: 12,
  },
  {
    id: "3",
    image:
      "https://cdn.pixabay.com/photo/2013/07/13/12/14/potato-159443_960_720.png",
    title: "potato",
    duration: 12,
    quantity: 200,
    actualPrice: 80,
    discount: 8,
  },
  {
    id: "4",
    image:
      "https://cdn.pixabay.com/photo/2013/07/12/13/23/avocado-146953_960_720.png",
    title: "avocado",
    duration: 5,
    quantity: 300,
    actualPrice: 34,
    discount: 15,
  },
];

const chocolatesItems = [
  {
    id: "1",
    image:
      "https://cdn.pixabay.com/photo/2016/04/01/10/16/bar-1299829_960_720.png",
    title: "bar chocolates",
    duration: 8,
    quantity: 150,
    actualPrice: 100,
  },
  {
    id: "2",
    image:
      "https://cdn.pixabay.com/photo/2016/10/27/13/24/muffin-1775046_960_720.png",
    title: "cup cake",
    duration: 11,
    quantity: 200,
    actualPrice: 50,
  },
  {
    id: "3",
    image:
      "https://cdn.pixabay.com/photo/2014/12/21/23/50/donut-576139_960_720.png",
    title: "donut",
    duration: 12,
    quantity: 70,
    actualPrice: 30,
    discount: 2,
  },
  {
    id: "4",
    image:
      "https://cdn.pixabay.com/photo/2013/07/12/19/13/cookie-154366_960_720.png",
    title: "cookies",
    duration: 9,
    quantity: 250,
    actualPrice: 210,
  },
];

export { essentialsData, dairyItems, vegItems, chocolatesItems };
