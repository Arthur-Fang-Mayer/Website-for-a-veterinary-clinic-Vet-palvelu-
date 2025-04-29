import React, { Component } from 'react';
import Form from './Form';
import "../assets/css/componentStyles/formSection.css";
import { LangContext } from "../context/langProvider";

class FormSection extends Component {
    static contextType = LangContext;
    render() {
        const { translations } = this.context;
        return (
            <>
                <section className='formSection'>
                    <div className="imgBackground">
                    </div>
                    <div className="formContent">
                        <div className="formTitle">
                            <h3>{translations.formSection.title}</h3>
                            {translations.formSection.promoText}
                        </div>
                        <div className="formWrapper">
                            <Form />
                            <button className='formBtn'>{translations.formSection.btnText}</button>
                        </div>
                    </div>
                </section>
                
            </>
        );
    }
    
}

export default FormSection;