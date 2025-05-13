import React, { Component } from 'react';
import Form from './Form';

import "../assets/css/componentStyles/formSection.css";
import RequestSucsessModal from './RequestSucsessModal';
import { LangContext } from "../context/langProvider";

class FormSection extends Component {
    static contextType = LangContext;

    constructor(props) {
        super(props);
        // начальное состояние
        this.state = {
          isModalOpened: false
        };
      }
    
      modalOpen = () => {
          this.setState(() => ({
            isModalOpened: true
        }));
      }
    
      modalClose = () => {
        this.setState(() => ({
          isModalOpened: false
      }));
    }

    render() {
        const { translations } = this.context;
        return (
            <>
                <section className='formSection' id='formSection'>
                    <div className="imgBackground">
                    </div>
                    <div className="formContent">
                        <div className="formTitle">
                            <h3>{translations.formSection.title}</h3>
                            {translations.formSection.promoText}
                        </div>
                        <div className="formWrapper">
                            <Form />
                            <button className='formBtn' onClick={this.modalOpen}>{translations.formSection.btnText}</button>
                        </div>
                    </div>
                    {this.state.isModalOpened && <RequestSucsessModal modalClose={this.modalClose} />}
                </section>
                
            </>
        );
    }
    
}

export default FormSection;