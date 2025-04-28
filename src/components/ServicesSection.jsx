import React, { Component } from "react";
import Title from "./Title";
import Services from "./ServicesBlock";
import Button from "./Button";
import "../assets/css/componentStyles/servicesSection.css";
import servicesImage from '../assets/img/dog.jpg'

class ServicesSection extends Component {
  render() {
    return (
      <>
        <section className="servicesSection">
            <div className="content">
                <Title subtitle="Чем я могу помочь" title="От диагностики до лечения – комплексный подход к здоровью питомца" />
                <div className="servicesWrapper">
                    <Services serviceType="Диагностика и документы" service1="Осмотр и консультации" service2="УЗИ (в том числе при беременности)" service3="Микрочипирование и оформление евро паспорта" />
                    <Services serviceType="Профилактика и лечение" service1="Лечение кожных заболеваний" service2="Вакцинация и прививки" service3="Борьба с паразитами" />
                    <Services serviceType="Хирургия и специальные процедуры" service1="Стерилизация и кастрация" service2="Удаление зубов" service3="Эвтаназия с заботой о питомце" />
                </div>
                <div className="servicesImg">
                    <img src={servicesImage} alt="Dog Image" />
                </div>
                <div className="btnServices">
                  <Button btnText="Посмотреть цены" />
                </div>
                

              
            </div>
        </section>
      </>
    );
  }
}

export default ServicesSection;