import React, { Component } from "react";
import "../assets/css/componentStyles/langSwitcher.css";
import { LangContext } from "../context/langProvider";

class LanguageSwitch extends Component {
  static contextType = LangContext;

  render() {
    const langs = ["FI", "EN", "RU", "SV"];
    const { lang, switchLanguage } = this.context;
    return (
      <select
        id="langs"
        name="langsList"
        form="langsForm"
        onChange={(e)=>switchLanguage(e.target.value)}
        value={lang}
      >
        {langs.map((langCode, index) => (
          <option key={index} value={langCode}>
            {langCode}
          </option>
        ))}
      </select>
    );
  }
}

export default LanguageSwitch;

// import React, { Component, useState } from "react";
// import "../assets/css/componentStyles/langSwitcher.css";
// import { LangContext } from "../context/langProvider";

// export const LanguageSwitch = () => {
//   const langs = ["FI", "EN", "RU", "SV"];
//   const [selectedLang, setSelectedLang] = useState("FI");

//   const handleLangChange = (e) => {
//     const newLang = e.target.value;
//     setSelectedLang(newLang);
//     localStorage.setItem("langCode", newLang);
//   };

//   return (
//     <select
//       id="langs"
//       name="langsList"
//       form="langsForm"
//       onChange={handleLangChange}
//     >
//       {langs.map((lang, index) => {
//         return (
//           <option key={index} value={lang}>
//             {lang}
//           </option>
//         );
//       })}
//     </select>
//   );
// };
