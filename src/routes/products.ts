import { Router } from "express";
import * as products from "../controllers/product";

const router = Router();

router.get("/products", products.getAllProducts);
router.get("/products/:id", products.getOneProduct);
router.post("/products", products.createProduct);
router.put("/products/:id", products.updateProduct);
router.delete("/products/:id", products.deleteProduct);

export default router;
