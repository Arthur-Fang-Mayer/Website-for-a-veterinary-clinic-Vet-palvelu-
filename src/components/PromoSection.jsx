import React, { Component } from "react";
import "../assets/css/componentStyles/promoSection.css";

class Promo extends Component {
  render() {
    return (
      <>
        <section className="promoSection">
          <div className="content">
            <div className="wrapper">
              <h2>Vet-palvelu OY</h2>
              <h1>Ваш доверенный ветеринар в Финляндии</h1>
              Квалифицированная помощь, точная диагностика и бережное лечение
              ваших любимцев
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Promo;
