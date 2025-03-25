import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import Layout from "../component/layout/Layout";

const Register = () =>{
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [phone,setMobile] = useState("");
  const [address,setAddress] = useState("");
  const [answer,setAnswer] = useState("");
  const navigate = useNavigate();

//form function
const handleSubmit = async (e) => {
  e.preventDefault();
  try{
    const res = await axios.post("/api/v1/auth/register", {
      name,
      email,
      password,
      phone,
      address,
      answer,
    });
    if (res && res.data.success) {
      toast.success(res.data && res.data.message);
      navigate("/login");
    } else {
      toast.success(res.data.message);
    }
  } catch (error) {
    console.log(error);
    toast.error("something went wrong");
  }
};
  return (
    <Layout>
      <div className="container mt-5 d-flex justify-content-center">
        <div
          className="form-container shadow-sm p-4 rounded bg-white"
          style={{ maxWidth: "500px", width: "100%" }}
        >
          <h2 className="text-center mb-4">Registration Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="mobile" className="form-label">
                Mobile Number
              </label>
              <input
                type="text"
                className="form-control"
                id="phone"
                name="phone"
                value={phone}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="Enter your mobile number"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <textarea
                className="form-control"
                id="address"
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter your address"
                rows="3"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="answer" className="form-label">
                Answer
              </label>
              <input
                type="text"
                className="form-control"
                id="answer"
                name="answer"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Enter your answer"
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Register
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Register;