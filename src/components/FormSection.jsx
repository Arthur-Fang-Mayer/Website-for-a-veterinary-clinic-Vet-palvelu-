import React, { Component } from 'react';
import Form from './Form';
import "../assets/css/componentStyles/formSection.css";

class FormSection extends Component {
    render() {
        return (
            <>
                <section className='formSection'>
                    <div className="imgBackground">
                    </div>
                    <div className="formContent">
                        <div className="formTitle">
                            <h3>Записаться на прием просто!</h3>
                            Не откладывайте здоровье любимца. Оставьте заявку, и  с вами свяжутся в ближайшее время.
                        </div>
                        <div className="formWrapper">
                            <Form />
                            <button className='formBtn'>Запись на приём</button>
                        </div>
                    </div>
                </section>
                
            </>
        );
    }
    
}

export default FormSection;