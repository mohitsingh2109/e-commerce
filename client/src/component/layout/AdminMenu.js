import React from "react";
import { NavLink } from "react-router-dom";
import "./Adminmenu.css"
import { FaTh, FaBox, FaShoppingCart, FaPlusCircle } from "react-icons/fa"; // For icons

const AdminMenu = () => {
    return (
        <>
            <div className="admin-menu-container">
                <div className="list-group dashboard-menu">
                    <h4 className="admin-panel-title">Admin Panel</h4>

                    <NavLink to="/dashboard/admin/create-category" className="list-group-item list-group-item-section">
                        <FaPlusCircle className="menu-icon" /> Create Category
                    </NavLink>
                    <NavLink to="/dashboard/admin/create-product" className="list-group-item list-group-item-section">
                        <FaTh className="menu-icon" /> Create Product
                    </NavLink>
                    <NavLink to="/dashboard/admin/products" className="list-group-item list-group-item-section">
                        <FaBox className="menu-icon" /> Products
                    </NavLink>
                    <NavLink to="/dashboard/admin/orders" className="list-group-item list-group-item-section">
                        <FaShoppingCart className="menu-icon" /> Orders
                    </NavLink>
                </div>
            </div>
        </>
    );
};

export default AdminMenu;