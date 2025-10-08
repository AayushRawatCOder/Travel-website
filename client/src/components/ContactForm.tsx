import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/contact", formData);
      if (res.data.success) setStatus("✅ Message sent successfully!");
    } catch (err) {
      setStatus("❌ Failed to send message");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "2rem" }}>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
      /><br/><br/>
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
      /><br/><br/>
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
      /><br/><br/>
      <button type="submit">Send Message</button>
      <p>{status}</p>
    </form>
  );
};

export default ContactForm;
