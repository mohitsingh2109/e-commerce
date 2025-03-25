import OrderSchema from "../model/OrderSchema.js";
import Userschema from "../model/Userschema.js";
import UserSchema from "../model/Userschema.js";
import { comparePassword, hashPassword } from "./../helper/authHelper.js";

import JWT from "jsonwebtoken";
export const registerController=async(req,res)=>{
    const {name, email, password, phone, address, answer }=req.body;
    if(!name || !email || !phone || !address || !password || !answer )
    {
        return res.status(422).json({error:"plz fill all filled"});
        }
     try {
      const useExist=await UserSchema.findOne({email:email})
      if (useExist){
         return res.status(422).json({error:"email already Exist"});
      }

      const hashedPassword = await hashPassword(password);
      
        const user=new UserSchema({name, email, password:hashedPassword, phone, address, answer});
        const userregister=await user.save();
        if(userregister)
            {
                res.status(201).json({message: "user registered successfuly"});

        }
     } catch(err){
        console.log(err);
     }
    
    };
//POST LOGIN
export const loginController = async (req, res) => {
   try{
      const { email, password } = req.body;
      //validation
      if(!email || !password){
         return res.status(404).send({
            success: false,
            message: "Invalid email or password",
         });
      }
      //check user
      const user = await UserSchema.findOne({email});
      if(!user){
         return res.status(404).send({
            success: false,
            message: "email is not registerd",
         });
      }
      const match = await comparePassword(password, user.password);
      if (!match){
         return res.status(200).send({
            success: false,
            message: "Invalid password",
         })
      }

      const token = await JWT.sign({_id: user._id},
         process.env.JWT_SECRET,{
            expiresIn: "7d",
         });
         console.log(token);
         res.status(200).send({
         success: true,
         message: "login successfully",
         user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            address: user.address,
            role: user.role,
         },
         token,
      });
   } catch (error){
      console.log(error);
      res.status(500).send({
         success: false,
         message: "Error in login",
         error,
      });
   }
}; 

//test controller
export const testController = (req, res) => {
   try{
      res.send("Protected Routes");
   }catch (error) {
      console.log (error);
      res.send({error});
   }
};

//forgetpasswordcontroller

export const ForgotpassController = async (req, res) => {
   try{
      const {email, answer, newpassword} = req.body;
      if (!email) {
         res.status(400).send({message: "email is required"});
      }
      if (!answer) {
         res.status(400).send({message: "answer is required"});
      }
      if (!newpassword) {
         res.status(400).send({message: "new password is required"});
      }

      //check
      const user = await UserSchema.findOne({email, answer});

      //validation
       if (!user){
         return res.status(404).send({
            success: false,
            message: "wrong email or answer",
         });
       }
       const hashed = await hashPassword(newpassword);
       await UserSchema.findByIdAndUpdate(user._id, {password: hashed});
       res.status(200).send({
         success: true,
         message: "password reset successfully",
       })
   } catch (error) {
      console.log (error);
      res.status(500).send({
         success: false,
         message: "something went wrong",
         error,
      });
   }
};

//update profile
export const updateProfileController = async (req,res) => {
   try{
      const {name, email, password, address, phone } = req.body;
      const user = await Userschema.findById(req.user._id);

      //password
      if (password && password.length < 3){
       return res.json ({error:"Password is required and 3 character long"});

      }
      const hashedPassword = password? await hashPassword(password):undefined;
      const updateUser = await Userschema.findByIdAndUpdate(
       req.user._id,
       {
           name:name||user.name,
           email:email||user.email,
           password:hashedPassword||user.password,
           phone:phone||user.phone,
           address:address||user.address,

       },
          { new:true }
      );
      res.status(200).send({
       success:true,
       message:"profile update successfully",
       updateUser,
      })
   }catch (error){
       console.log (error);
       res.status(400).send({
           success:false,
           message:"Error while update profile",
           error,
       })
   }
}

//Order 
export const getOrdersController = async (req, res) => {
   try {
      const orders = await OrderSchema
      .find({ buyer: req.user._id })
      .populate("products", "-photo")
      .populate("buyer", "name");
      res.json(orders);
   } catch (error) {
      console.log(error);
      res.status(500).send({
         success: false,
         message: "Error While Geting Orders",
         error,
      });
   }
};//Orders
export const getAllOrdersController = async (req, res) => {
   try {
      const orders = await OrderSchema
      .find({})
      .populate("products", "-photo")
      .populate("buyer", "name")
      .sort({ createdAt: "-1" });
      res.json(orders);

   } catch (error) {
      console.log(error);
      res.status(500).send({
         success: false,
         message: "Error While Geting Orders",
         error,
      });
   }
};

//Order status


export const orderStatusController = async (req, res) => {
   try{
      const {orderId} = req.params;
      const {status} = req.body;
      const orders = await OrderSchema.findOneAndUpdate(
         orderId,
         { status },
         { new: true }
      );
      res.json(orders);
   } catch (error) {
      console.log(error);
      res.status(500).send({
         success: false,
         message: "Error While Updating Order",
         error,
      });
   }
};