import express from "express";
import formidable from "express-formidable";

import {isAdmin, requireSignIn} from "../middlewares/authMiddleware.js"

import {
    createProductController,
    ProductController,
    ProductPhotoController,
    deleteProductController,
    updateProductController,
    getSingleProductController,
    productListController,
    productCountController,
    productFilterController,
    brainTreePaymentController,
    braintreeTokenController,

} from "./../controller/productController.js";

const router = express.Router();

//create category

router.post("/createproduct",
            requireSignIn,
            isAdmin,
            formidable(),
            createProductController
        );

//Update routes
router.put("/update-product/:pid",
    requireSignIn,
    isAdmin,
    formidable(),
    updateProductController
);

//Get all category
router.get("/get-product", ProductController);


//single product 
router.get("/get-product/:slug", getSingleProductController )

//Photo
router.get("/product-photo/:pid", ProductPhotoController);

//delete
router.delete("/delete-product/:pid", deleteProductController);



//filter product
router.post("/product-filters",productFilterController);

//product count
router.get("/product-count",productCountController);

//product per page
router.get("/product-list/:page",productListController);



//payment router
//token
router.get("/braintree/token", braintreeTokenController);
//payments
router.post("/braintree/payment", requireSignIn, brainTreePaymentController);

export default router;
