// Import express
const express = require("express");
const router = express.Router();

// Import product controller
const productController = require("../controllers/product.controller");

// Product CRUD routes
router.post("/products", productController.addProduct);
router.get("/products", productController.getProducts);
router.put("/products/:id", productController.updateProduct);
router.delete("/products/:id", productController.deleteProduct);

// Report route
router.get("/report", productController.getReport);

// Export router
module.exports = router;
