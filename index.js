const listOfProducts = [
  {
    productName: "TV",
    quantity: 10,
    description: "television",
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner",
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television",
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner",
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan",
  },
];

const getUniqueProductCount = (products) => {
  let countObj = {};
  for (let product of products) {
    countObj[product.productName] = countObj[product.productName] + 1 || 1;
  }
  return countObj;
};
const getUniquePrducts = (products) => {
  let obj = {};
  let uniqueArr = [];
  products.forEach((product) => {
    if (!obj[product.productName]) {
      obj[product.productName] = true;
      uniqueArr.push(product);
    } else {
      objIndex = uniqueArr.findIndex((obj) => obj.productName === product.productName);
      uniqueArr[objIndex].quantity = uniqueArr[objIndex].quantity + product.quantity;
    }
  });

  return uniqueArr;
};
console.log(getUniqueProductCount(listOfProducts));
console.log(getUniquePrducts(listOfProducts));
