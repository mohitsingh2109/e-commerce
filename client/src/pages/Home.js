import React, { useEffect, useState } from "react";
import Layout from "../component/layout/Layout";
import { Prices } from "../component/Prices";
import axios from "axios";
import {useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {Checkbox, Radio } from "antd";
import { useCart } from "../context/cart";
import {AiOutLineReload} from "react-icons/ai";
import './Home.css';



const Home = () => {
    const navigate = useNavigate();
    const [cart, setCart] = useCart();
    const [products, setProduct] = useState([]);
    const [categories, setcategories] = useState([]);
    const [checked, setChecked] = useState([]);
    const [radio, setRadio] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    


    // Get  products
    const getAllProduct = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
           setLoading(false);
           setProduct(data.products);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };

//get all cat
const getAllCategory = async () => {
    try {
        const { data } = await axios.get("/api/v1/category/get-category");
            if ( data?.success ) {
                setcategories(data?.category);
            }
    } catch (error) {
        console.log(error);
       
    }
  };

  useEffect(() => {
    getAllCategory();
    getTotal();
  });

//get total count
const getTotal = async () => {
    try {
        const { data } = await axios.get("/api/v1/product/product-count");
        setTotal(data?.total);
    } catch (error) {
        console.log(error);
    }
};

useEffect(() => {
    if (page === 1) return;
    loadMore();
}, [page]);

//Load More
    
const loadMore = async () => {
    try {
        setLoading(true);
        const {data} = await axios.get(`/api/v1/product/product-list/${page}`);
        setLoading(false);
        setProduct([...products, ...data?.products]);
    }catch (error){
        console.log(error);
        setLoading(false);
    }
};



//Filter by category
const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
        all.push(id);
    } else {
        all = all.filter((c) => c !== id);
    }
    setChecked(all);
};

useEffect(() => {
    if (!checked.length || !radio.length) getAllProduct();
}, [checked.length, radio.length]);

useEffect(() => {
    if (checked.length || radio.length) filterProduct();
},[checked,radio]);

//get filterd product
const filterProduct = async () => {
    try {
        const {data} = await axios.post("/api/v1/product/product-filters", {
            checked,
            radio,
        });
        setProduct(data?.products);
    } catch (error) {
        console.log(error);
    }
};

    return (
        <Layout>
        <div className="container-fluid mt-5">
 <div className="row">
     {/* Sidebar Column */}
     <div className="col-md-2 filters">
         <h4 className="text-center">Filter By Category</h4>
         <div className="d-flex flex-column">
             {categories?.map((c) => (
                 <Checkbox
                     key={c._id}
                     onChange={(e) => handleFilter(e.target.checked, c._id)}
                 >
                     {c.name}
                 </Checkbox>
             ))}
         </div>
         {/* Price Filter */}
         <h4 className="text-center mt-4">Filter By Price</h4>
         <div className="d-flex flex-column">
             <Radio.Group onChange={(e) => setRadio(e.target.value)}>
                 {Prices?.map((p) => (
                     <div key={p._id}>
                         <Radio value={p.array}>{p.name}</Radio>
                     </div>
                 ))}
             </Radio.Group>
         </div> 
         <div className="d-flex flex-column">
             <button
                 className="btn btn-danger"
                 onClick={() => window.location.reload()}
             >
                 Reset Filters
             </button>
         </div>
     </div>

     {/* Main Content Column */}
     <div className="col-md-10">
         <h2 className="text-center mb-4">All Products</h2>
         <div className="d-flex flex-wrap">
             {products?.map((p) => (
                 <div key={p._id} className="card m-2" style={{ width: "270px" }}>
                     <img
                         src={`/api/v1/product/product-photo/${p._id}`}
                         alt={p.name}
                         className="card-img-top"
                     />
                     <div className="card-body">
                         <div className="card-name-price">
                             <h5 className="card-title">{p.name}</h5>
                             <h5 className="card-title card-price">
                                 {typeof p.price === "number" ? p.price.toLocaleString("en-US", {
                                     style: "currency",
                                     currency: "USD",
                                 }) : "Invalid Price"}
                             </h5>
                         </div>
                         <p className="card-text">{p.description.substring(0, 60)}...</p>
                         <div className="card-name-price">
                             <button
                                 className="btn btn-info ms-1"
                                 onClick={() => navigate(`/product/${p.slug}`)}
                             >
                                 More Details
                             </button>
                             <button
                                 className="btn btn-dark ms-1"
                                 onClick={() => {
                                     setCart([...cart, p]);
                                     localStorage.setItem("cart", JSON.stringify([...cart, p]));
                                     toast.success("Item added to cart");
                                 }}
                             >
                                 Add to Cart
                             </button>
                         </div>
                     </div>
                 </div>
             ))}
         </div>

         <div className="m-2 p-3">
             {products && products.length < total && (
                 <button
                     className="btn loadmore"
                     onClick={(e) => {
                         e.preventDefault();
                         setPage(page + 1);
                     }}
                 >
                     {loading ? "Loading..." : "Load More"}
                 </button>
             )}
         </div>
     </div>
 </div>
</div>

     </Layout>
    );
}

export default Home;