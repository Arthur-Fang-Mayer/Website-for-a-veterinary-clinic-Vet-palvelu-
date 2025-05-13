import React, { Component } from "react";
import "../assets/css/componentStyles/form.css";
import { LangContext } from "../context/langProvider";

class Form extends Component {
  static contextType = LangContext;
  render() {
    const { translations } = this.context;
    return (
      <>
        <input type="text" placeholder={translations.formSection.namePlaceholderText} />
        <input type="tel" name="phone" placeholder={translations.formSection.phonePlaceholderText} />
        <input type="email" name="email" placeholder={translations.formSection.mailPlaceholderText} />

        <label htmlFor="comment">{translations.formSection.labelText}</label>
        <textarea name="comment" id="comment"></textarea>
        <div className="privacyPolicyCheck">
          <input type="checkbox" name="checkbox" id="checkbox"/> <label htmlFor="checkbox">{translations.formSection.checkboxLabelText}<a href="#">{translations.formSection.checkboxLinkText}</a></label>
        </div>
        
      </>
    );
  }
}

export default Form;
