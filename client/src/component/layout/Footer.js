import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import 'font-awesome/css/font-awesome.min.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    {/* About Section */}
                    <div className="col-md-4">
                        <h5>About Us</h5>
                        <p>
                            We are a leading e-commerce platform offering a wide range
                            of quality products at unbeatable prices. Experience exceptional customer service with us.
                        </p>
                    </div>

                    {/* Quick Links Section */}
                    <div className="col-md-4">
                        <h5>Quick Links</h5>
                        <ul>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/shop">Shop</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                            <li><NavLink to="/faq">FAQ</NavLink></li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div className="col-md-4">
                        <h5>Contact Us</h5>
                        <p><i className="fa fa-envelope"></i> support@ecommerce.com</p>
                        <p><i className="fa fa-phone"></i> +1 234 567 890</p>
                        <p><i className="fa fa-map-marker"></i> 123 E-commerce St., NY</p>

                        {/* Social Media Icons */}
                        <div className="social-icons mt-3">
                            <NavLink to="#"><i className="fa fa-facebook"></i></NavLink>
                            <NavLink to="#"><i className="fa fa-twitter"></i></NavLink>
                            <NavLink to="#"><i className="fa fa-instagram"></i></NavLink>
                            <NavLink to="#"><i className="fa fa-linkedin"></i></NavLink>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="copyright">
                    <p>&copy; {new Date().getFullYear()} E-commerce. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
