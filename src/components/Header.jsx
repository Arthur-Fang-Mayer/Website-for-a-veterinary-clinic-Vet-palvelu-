import React, { Component } from "react";
import { LanguageSwitch } from "./LanguageSwitch";
import "../assets/css/componentStyles/header.css";

class Header extends Component {
  render() {
    return (
      <>
        <header>
          <div className="content">
            <ul className="navMenu">
              <li className="navMenuItem">
                <a href="#">Обо мне</a>
              </li>
              <li className="navMenuItem">
                <a href="#">Услуги и цены</a>
              </li>
              <li className="navMenuItem">
                <a href="#">Отзывы</a>
              </li>
              <li className="navMenuItem">
                <a href="#">Контакты</a>
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
