const {
    createProduct,
    getProduct,
    getAllProducts,
    updateProduct,
    deleteProduct,
} = require("../controllers/productController");
const express = require("express");
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createProduct);
router.put("/:id", authMiddleware, isAdmin, updateProduct);
router.delete("/:id", authMiddleware, isAdmin, deleteProduct);
router.get("/:id", getProduct);
router.get("/", getAllProducts);

module.exports = router;
