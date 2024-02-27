const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getAllProductsStatic,
  createProduct,
  deleteProduct,
  updateProduct,
  getSingleProduct,
} = require("../controllers/products");

router.route("/").get(getAllProducts).post(createProduct);
router.route("/static").get(getAllProductsStatic);
router
  .route("/:id")
  .delete(deleteProduct)
  .put(updateProduct)
  .get(getSingleProduct);

module.exports = router;
