import React, { useState }  from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import Layout from "../component/layout/Layout";


const Forgotpass = () => {
     const [email,setEmail] = useState("");
     const [newpassword,setNewPassword] = useState("");
     const [answer,setAnswer] = useState("");
     const navigate = useNavigate();
//form function
const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const res = await axios.post("/api/v1/auth/Forgotpass", {
        email,
        newpassword,
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
           <div style={{
                maxWidth: "400px",
                margin: "50px auto",
                padding: "20px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
            }}>
                <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>Login</h2>
                <form onSubmit={handleSubmit}>
                    {/* Email Field */}
                    <div style={{ marginBottom: "15px" }}>
                        <label htmlFor="email" style={{ display: "block", marginBottom: "5px", color: "#555" }}>Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            style={{
                                width: "100%",
                                padding: "10px",
                                border: "1px solid #ccc",
                                borderRadius: "4px",
                                fontSize: "16px",
                                boxSizing: "border-box"
                            }}
                        />
                    </div>

                    {/* Security Answer Field */}
                    <div style={{ marginBottom: "15px" }}>
                        <label htmlFor="answer" style={{ display: "block", marginBottom: "5px", color: "#555" }}>Security Answer</label>
                        <input
                            type="text"
                            id="answer"
                            name="answer"
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                            placeholder="Enter your answer"
                            style={{
                                width: "100%",
                                padding: "10px",
                                border: "1px solid #ccc",
                                borderRadius: "4px",
                                fontSize: "16px",
                                boxSizing: "border-box"
                            }}
                        />
                    </div>

                    {/* New Password Field */}
                    <div style={{ marginBottom: "15px" }}>
                        <label htmlFor="new-password" style={{ display: "block", marginBottom: "5px", color: "#555" }}>New Password</label>
                        <input
                            type="password"
                            id="new-password"
                            name="new-password"
                            value={newpassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            placeholder="Enter your new password"
                            style={{
                                width: "100%",
                                padding: "10px",
                                border: "1px solid #ccc",
                                borderRadius: "4px",
                                fontSize: "16px",
                                boxSizing: "border-box"
                            }}
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        style={{
                            width: "100%",
                            padding: "10px",
                            backgroundColor: "#007BFF",
                            color: "#fff",
                            border: "none",
                            borderRadius: "4px",
                            fontSize: "16px",
                            cursor: "pointer",
                            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)"
                        }}
                    >
                        Reset Password
                    </button>
                </form>
            </div>
        </Layout>
    );
}

export default Forgotpass;