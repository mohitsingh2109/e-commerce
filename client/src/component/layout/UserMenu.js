import React from "react";
import { NavLink } from "react-router-dom";
import "./Adminmenu.css"
import {FaShoppingCart, FaPlusCircle } from "react-icons/fa"; // For icons

const AdminMenu = () => {
    return (
        <>
            <div className="admin-menu-container">
                <div className="list-group dashboard-menu">
                    <h4 className="admin-panel-title">User Panel</h4>

                    <NavLink to="/dashboard/user/profile" className="list-group-item list-group-item-section">
                        <FaPlusCircle className="menu-icon" /> Profile
                        </NavLink>
                   
                    <NavLink to="/dashboard/user/orders" className="list-group-item list-group-item-section">
                        <FaShoppingCart className="menu-icon" /> Orders
                    </NavLink>
                </div>
            </div>
        </>
    );
};

export default AdminMenu;