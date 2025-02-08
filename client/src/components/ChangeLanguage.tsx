import i18n from "../i18n";
import { Button, message } from "antd";
import { useState } from "react";

export const ChangeLanguage = () => {
  const [currentLang, setCurrentLang] = useState(i18n.language);

  const onClickChangeLanguage = (language: string) => {
    i18n.changeLanguage(language);

    setCurrentLang(language);
    message.success("Language set to: " + language);
  };

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <Button
        onClick={() => onClickChangeLanguage("sv")}
        style={{
          padding: "0",
          border: "none",
        }}
      >
        <img
          src="/images/sv.png"
          alt="Swedish"
          style={{
            width: "34px",
            borderRadius: "6px",
            border: currentLang === "sv" ? "1px solid white" : "none",
          }}
        />
      </Button>

      <Button
        onClick={() => onClickChangeLanguage("en")}
        style={{
          padding: "0",
          border: "none",
        }}
      >
        <img
          src="/images/en.png"
          alt="English"
          style={{
            width: "34px",
            borderRadius: "6px",
            border: currentLang === "en" ? "1px solid white " : "none",
          }}
        />
      </Button>
    </div>
  );
};
