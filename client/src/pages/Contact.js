import React from "react";
import { useForm } from "react-hook-form"; // Import useForm from react-hook-form
import Layout from "../component/layout/Layout"; // Import Layout
import "./ContactUs.css"; // Add styles for the form

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Message sent successfully!");
    // Add logic here to send data to your backend or API
  };

  return (
    <Layout title={"Contact Us"}>
      <div className="contact-us-container">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              {...register("name", { required: "Name is required" })}
              placeholder="Enter your name"
            />
            {errors.name && <p className="error">{errors.name.message}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email format",
                },
              })}
              placeholder="Enter your email"
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              {...register("message", { required: "Message is required" })}
              placeholder="Enter your message"
            ></textarea>
            {errors.message && <p className="error">{errors.message.message}</p>}
          </div>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </Layout>
  );
};

export default Contact;
