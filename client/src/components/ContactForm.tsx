import { useState } from "react";
import styled from "styled-components";
import { PrimaryButton } from "../styledComponents/Button";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { message, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const Input = styled.input`
  font-family: "Poppins";
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
  font-family: "Poppins";

  &:focus {
    border-color: #6e8efb;
    outline: none;
    box-shadow: 0 0 8px rgba(110, 142, 251, 0.6);
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
      await axios.post(`${API_URL}/send-email`,
         formData,{
        headers: {
          "Content-Type": "application/json",
        },
      });
      message.success(t("contact.message_sent"));
      setFormData({ name: "", email: "", message: "" });
    } catch (error: any) {
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
    <>
      <h1>{t("contact.title")}</h1>
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
        <PrimaryButton style={{ width: "80%" }} disabled={isLoading}>
          {isLoading ? <Spin indicator={antIcon} /> : t("contact.sendMessage")}
        </PrimaryButton>
      </form>
    </>
  );
};

