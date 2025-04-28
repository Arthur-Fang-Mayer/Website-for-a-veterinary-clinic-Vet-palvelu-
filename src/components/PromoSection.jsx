import React, { Component } from "react";
import Button from "./Button";
import "../assets/css/componentStyles/promoSection.css";
import decorationLines from '../assets/icons/line.png';

class Promo extends Component {
  render() {
    return (
      <>
        <section className="promoSection">
          <div className="content">
            <div className="wrapper">
              <div className="titleBlock">
              <h2>Vet-palvelu OY</h2> 
              <img className="decorImg" src={decorationLines} alt="decoration line" />
              </div>
            
              
              <h1>Ваш доверенный ветеринар в Финляндии</h1>
              <p className="promoText">Квалифицированная помощь, точная диагностика и бережное лечение
              ваших любимцев</p>
              <Button btnText="Запись на приём" />
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Promo;
