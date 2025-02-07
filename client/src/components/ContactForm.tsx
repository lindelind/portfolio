
import { useState } from "react";
import styled from "styled-components";
import { PrimaryButton } from "../styledComponents/Button";



const Title = styled.h2`
  margin-bottom: 1rem;
  color: #6e8efb;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 2px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  transition: 0.3s;

  &:focus {
    border-color: #6e8efb;
    outline: none;
    box-shadow: 0 0 8px rgba(110, 142, 251, 0.6);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 2px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  transition: 0.3s;

  &:focus {
    border-color: #6e8efb;
    outline: none;
    box-shadow: 0 0 8px rgba(110, 142, 251, 0.6);
  }
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert("Message sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
        <Title>Contact me here</Title>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextArea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <PrimaryButton style={{width: "100%"}}>Send Message</PrimaryButton>
        </form>
        </>
    
  );
};

export default ContactForm;
