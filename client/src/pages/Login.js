import React , { useState }  from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import{Link} from "react-router-dom";
import Layout from "../component/layout/Layout";
import { useAuth } from "../context/auth";

const Login = () =>{
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [auth,setAuth] = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
          const res = await axios.post("/api/v1/auth/login", {
           
            email,
            password,
          });
          if (res && res.data.success) {
            toast.success(res.data && res.data.message);
            setAuth({
                ...auth,
                user: res.data.user,
                token: res.data.token,
            });
            localStorage.setItem("auth", JSON.stringify(res.data));
            navigate(location.state || "/");
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
                    
                    {/* Password Field */}
                    <div style={{ marginBottom: "15px" }}>
                        <label htmlFor="password" style={{ display: "block", marginBottom: "5px", color: "#555" }}>Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
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
                    
                    {/* Forgot Password Link */}
                    <div style={{ marginBottom: "20px", textAlign: "right" }}>
                        <Link to="/forgetpass" style={{ color: "#007BFF", textDecoration: "none", fontSize: "14px" }}>
                            Forgot Password?
                        </Link>
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
                        Login
                    </button>
                </form>
            </div>
        </Layout>
    );
}

export default Login;