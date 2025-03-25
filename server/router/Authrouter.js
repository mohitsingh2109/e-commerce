import express from "express";
import{
    registerController,
    loginController,
    testController,
    ForgotpassController,
    updateProfileController,
    getOrdersController,
    getAllOrdersController,
    orderStatusController,
    
} from"../controller/authcontroller.js";
import {isAdmin, requireSignIn} from "../middlewares/authMiddleware.js"

const router = express.Router();
router.get("/test", requireSignIn, isAdmin, testController);
router.post("/login",loginController);
router.post("/register", registerController);
router.post("/Forgotpass",ForgotpassController);
router.put("/profile",requireSignIn, updateProfileController);
//Orders
router.get("/orders", requireSignIn,getOrdersController);


//protected user route auth
router.get("/user-auth", requireSignIn, (req, res) => {
    res.status(200).send({ok: true});
});

//protected Admin route auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) =>{
    res.status(200).send({ ok: true});
});



//All Orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

// Order Status Update
router.put(
    "/orders-status/:orderId",
    requireSignIn,
    isAdmin,
    orderStatusController,
);


export default router;