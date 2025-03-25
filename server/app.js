import express from "express";

import dotenv from "dotenv";

import authrouter from "./router/Authrouter.js";

import connectDB from "./db/config.js";
import categoryRouter from "./router/categoryRouter.js";
import Productrouter from "./router/Productrouter.js";


const app = express();
dotenv.config({path:'./config.env'});

app.use(express.json());
// app.use(morgan("dev"));

app.use("/api/v1/auth",authrouter);
app.use("/api/v1/category",categoryRouter);
app.use("/api/v1/product",Productrouter);



dotenv.config();

connectDB();


app.get('/', (req, res) => {
    res.send('Hello World');
  });

//PORT
const PORT = process.env.PORT || 8080;

//run listen

app.listen(PORT, () => {
    console.log(
        `Server Running on mode on port ${PORT}`.bgCyan.white
    );
});


