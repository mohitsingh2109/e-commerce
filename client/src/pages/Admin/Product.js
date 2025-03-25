import React, { useEffect, useState } from "react";
import Layout from "../../component/layout/Layout";
import AdminMenu from "../../component/layout/AdminMenu";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";




const ProductList = () => {
    const [products, setProduct] = useState([]);

    //get all product
const getAllProduct = async () => {
    try {
        const { data } = await axios.get("/api/v1/product/get-product");
            if ( data?.success ) {
                setProduct(data?.product);
            }
    } catch (error) {
        console.log(error);
        toast.error("something went wrong in getting products");
    }
  };

  useEffect(() => {
    getAllProduct();
  },[]);


    return (
        <Layout title={"All Products"}>
            <div className="container-fluid mt-4">
                <h2 className="text-center mb-4">All Products</h2>
                <div className="row">
                <div className="col-md-3">
                        <AdminMenu />
                    </div>
                    {products?.map((p) => (
                        <Link 
                        key={p._id} 
                        to={`/dashboard/admin/product/${p.slug}`}
                        className="col-md-4 mb-4 product-link">
                            <div className="card h-100">
                                <img
                                    src={`/api/v1/product/product-photo/${p._id}`}
                                    alt={p.name}
                                    className="card-img-top"
                                    style={{ height: "200px", objectFit: "cover" }}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{p.name}</h5>
                                    <p className="card-text">{p.description.substring(0, 60)}...</p>
                                    <p className="card-text"><strong>Price:</strong> ${p.price}</p>
                                    <Link to={`/product/${p._id}`} className="btn btn-primary">
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </Link>
                    ))} 
                </div>
            </div>
        </Layout>
    );
};

export default ProductList;


