import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Register from './pages/Registration';
import Login from './pages/Login';
import PrivateRoute from './component/Routes/Private';
import Forgetpass from './pages/Forgetpass';
import AdminRoute from './component/Routes/AdminRoute';
import AdminDashboard from './pages/Admin/adminDashboard';
import CreateCategory from './pages/Admin/createCategory';
import CreateProduct from './pages/Admin/createProduct';
import Orders from './pages/User/Order';
import Profile from './pages/User/Profile';
import Dashboard from './pages/User/Dashboard';
import AdminOrders from './pages/Admin/adminOrder';
import UserDashboard from './pages/User/Dashboard';
import ProductList from './pages/Admin/Product';
import UpdateProduct from './pages/Admin/updateProduct';
import CartPage from './pages/Cartpage';
import ProductDetail from './pages/detail';
function App() {
  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/registration" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgetpass" element={<Forgetpass />} />
        <Route path="/user" element={<UserDashboard />} />
        <Route path="/cart" element={<CartPage />} />
      
        <Route path="/product/:id" element={<ProductDetail />} />

        
        {/* User Routes */}
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/orders" element={<Orders />} />
          <Route path="user/profile" element={<Profile />} />
         
        </Route>
        
        {/* Admin Routes */}
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/products" element={<ProductList />} />
          <Route path="admin/orders" element={<AdminOrders />} />
          
          
          {/* This route should be outside of 'admin/products' */}
          <Route path="admin/product/:slug" element={<UpdateProduct />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
