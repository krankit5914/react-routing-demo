import React from "react";
import Navbar from "./Navbar";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <h1>Contact</h1>
      <p>Phone: 123-456-7890</p>
      <p>
        Email: <a href="mailto:example@example.com">example@example.com</a>
      </p>
    </div>
  );
};

export default Contact;
