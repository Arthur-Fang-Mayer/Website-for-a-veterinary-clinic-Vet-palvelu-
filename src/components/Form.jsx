import React, { Component } from "react";
import "../assets/css/componentStyles/form.css";

class Form extends Component {
  render() {
    return (
      <>
        <input type="text" placeholder="Введите имя" />
        <input type="tel" name="phone" placeholder="Введите номер телефона" />
        <input type="email" name="email" placeholder="Введите эл почту" />

        <label htmlFor="comment">Кратко опишите проблему или желаемую услугу:</label>
        <textarea name="comment" id="comment"></textarea>
      </>
    );
  }
}

export default Form;
