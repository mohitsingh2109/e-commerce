import React from "react";
import Layout from "../component/layout/Layout";
import "./About.css"; // Import a CSS file for styling (you can create and customize this)
import image from "../pages/images/image1.jpg"

function About() {
  return (
    <Layout title="About Us">
      <div className="about-container">
        {/* Header Section */}
        <section className="about-header">
          <h1>Welcome to Our About Page</h1>
          <p>Learn more about who we are, our mission, and what we stand for.</p>
        </section>

        {/* Our Mission Section */}
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            At [Your Company Name], our mission is to deliver exceptional products and services that make a difference in our customers' lives. We strive to innovate, inspire, and lead by example in everything we do.
          </p>
        </section>

        {/* Our Team Section */}
        <section className="about-section team-section">
          <h2>Meet Our Team</h2>
          <div className="team-members">
            <div className="team-member">
              <img
                src={image}
                alt="Team Member"
                className="team-photo"
              />
              <h3>John Doe</h3>
              <p>CEO & Founder</p>
            </div>
            <div className="team-member">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="team-photo"
              />
              <h3>Jane Smith</h3>
              <p>Head of Marketing</p>
            </div>
            <div className="team-member">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="team-photo"
              />
              <h3>Mike Johnson</h3>
              <p>Lead Developer</p>
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="about-section contact-section">
          <h2>Contact Information</h2>
          <p>
            Have questions or want to get in touch? Reach out to us:
          </p>
          <ul>
            <li>Email: contact@yourcompany.com</li>
            <li>Phone: +1 (555) 123-4567</li>
            <li>Address: 1234 Elm Street, Suite 567, YourCity, YourCountry</li>
          </ul>
        </section>
      </div>
    </Layout>
  );
}

export default About;
