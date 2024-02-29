const Product = require("../models/product");
// const productsList = require("../products.json");

const getAllProductsStatic = async (req, res) => {
  const search = "";
  try {
    const products = await Product.find({
      name: { $regex: search, $options: "i" },
    });
    res.status(200).json({ numberOfResults: products.length, products });
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

const getAllProducts = async (req, res) => {
  const { featured, company, name, sort } = req.query;
  const queryObject = {};
  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }
  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }

  let result = Product.find(queryObject);

  if (sort) {
    const sortList = sort.split(",").join(" ");
    result = result.sort(sortList);
  }
  else {
    result = result.sort('createdAt')
  }

  try {
    const products = await result;
    res.status(200).json({ numberOfResults: products.length, products });
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
