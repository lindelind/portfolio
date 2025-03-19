import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { message, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";


const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const FormContainer = styled.div`
  max-width: 580px;
  margin: 40px;
  padding: 30px;
  border-radius: 40px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  animation: ${fadeIn} 0.5s ease-out;
  background: linear-gradient(135deg, rgb(54, 54, 53), transparent);
  backdrop-filter: blur(10px);
  box-shadow: 0px 0px 20px 0 rgba(140, 137, 137, 0.1);
`;

const Title = styled.h2`
  font-size: 27px;
  font-weight: 600;
  font-family: "Waiting for the sunrise";
  color: white;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 14px;
  margin: 12px 0;
  border: 2px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  background: #f9f9f9;
  transition: all 0.3s ease-in-out;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;

  &:focus {
    border-color: #6e8efb;
    background: white;
    box-shadow: 0 0 10px rgba(110, 142, 251, 0.4);
    outline: none;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 14px;
  margin: 12px 0;
  border: 2px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  background: #f9f9f9;
  transition: all 0.3s ease-in-out;
  min-height: 140px;
  resize: vertical;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;

  &:focus {
    border-color: #6e8efb;
    background: white;
    box-shadow: 0 0 10px rgba(110, 142, 251, 0.4);
    outline: none;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 14px;
  background:rgb(127, 61, 220);
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  margin-top: 10px;
  transition:
    background 0.3s ease-in-out,
    transform 0.2s;

  &:hover {
    background:rgb(193, 87, 220);
    transform: translateY(-2px);
  }

  &:disabled {
    background: #bbb;
    cursor: not-allowed;
    transform: none;
  }
`;

message.config({
  top: 100,
});

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation();

  const API_URL =
    import.meta.env.MODE === "production"
      ? "https://portfolio-obil.onrender.com/api"
      : "http://localhost:3000/api";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await axios.post(`${API_URL}/send-email`, formData, {
        headers: { "Content-Type": "application/json" },
      });
      message.success(t("contact.message_sent"));
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      message.error(t("contact.message_failed"));
    } finally {
      setIsLoading(false);
    }
  };

  const antIcon = (
    <LoadingOutlined style={{ fontSize: 24, color: "white" }} spin />
  );

  return (
    <FormContainer>
      <Title>{t("contact.title")}</Title>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder={t("contact.namePlaceholder")}
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder={t("contact.emailPlaceholder")}
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextArea
          name="message"
          placeholder={t("contact.messagePlaceholder")}
          value={formData.message}
          onChange={handleChange}
          required
        />
        <SubmitButton type="submit" disabled={isLoading}>
          {isLoading ? <Spin indicator={antIcon} /> : t("contact.sendMessage")}
        </SubmitButton>
      </form>
    </FormContainer>
  );
};
