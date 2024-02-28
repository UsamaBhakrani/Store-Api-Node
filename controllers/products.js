const Product = require("../models/product");
// const productsList = require("../products.json");

const getAllProductsStatic = async (req, res) => {
  try {
    const products = await Product.find({ featured: false });
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

const getAllProducts = async (req, res) => {
  const { featured } = req.query;
  const queryObject = {};
  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }
  try {
    const products = await Product.find(queryObject);
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

const getSingleProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(400).json({ msg: "Item Not Found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

const createProduct = async (req, res) => {
  try {
    // const newProduct = await Product.create(productsList);
    // const newProduct = await Product.create({
    //   rating: 4,
    //   name: "Turkish Carpet",
    //   price: 30,
    //   company: "Canik",
    // });
    // res.status(200).json(newProduct);
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(400).json({ msg: "Item Not Found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

const updateProduct = () => {};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
  createProduct,
  deleteProduct,
  updateProduct,
  getSingleProduct,
};
