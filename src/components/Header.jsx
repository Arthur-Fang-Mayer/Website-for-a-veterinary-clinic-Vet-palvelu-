import React, { Component } from "react";
import LanguageSwitch from "./LanguageSwitch";
import "../assets/css/componentStyles/header.css";
import { LangContext } from "../context/langProvider";

class Header extends Component {
  static contextType = LangContext;
  render() {
    const { translations } = this.context;
    return (
      <>
        <header>
          <div className="content">
            <ul className="navMenu">
              <li className="navMenuItem">
                <a href="#">{translations.header.aboutText}</a>
              </li>
              <li className="navMenuItem">
                <a href="#">{translations.header.priceText}</a>
              </li>
              <li className="navMenuItem">
                <a href="#">{translations.header.reviewText}</a>
              </li>
              <li className="navMenuItem">
                <a href="#">{translations.header.contactsText}</a>
              </li>
            </ul>
            <LanguageSwitch />
          </div>
        </header>
      </>
    );
  }
}

export default Header;
