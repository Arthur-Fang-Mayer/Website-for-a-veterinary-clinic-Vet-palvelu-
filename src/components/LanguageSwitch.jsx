import React, { Component, useState } from "react";
import "../assets/css/componentStyles/langSwitcher.css";

export const LanguageSwitch = () => {
  const langs = ["FI", "EN", "RU"];
  const [selectedLang, setSelectedLang] = useState("FI");

  const handleLangChange = (e) => {
    const newLang = e.target.value;
    setSelectedLang(newLang);
    localStorage.setItem("langCode", newLang);
  };

  return (
    <select
      id="langs"
      name="langsList"
      form="langsForm"
      onChange={handleLangChange}
    >
      {langs.map((lang, index) => {
        return (
          <option key={index} value={lang}>
            {lang}
          </option>
        );
      })}
    </select>
  );
};
