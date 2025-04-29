import React, { Component } from "react";
import Button from "./Button";
import RequestFormModal from "./RequestFormModal";
import "../assets/css/componentStyles/promoSection.css";
import decorationLines from '../assets/icons/line.png';
import { LangContext } from "../context/langProvider";

class Promo extends Component {
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
        <section className="promoSection">
          <div className="content">
            <div className="wrapper">
              <div className="titleBlock">
              <h2>Vet-palvelu OY</h2>

              <img className="decorImg" src={decorationLines} alt="decoration line" />
              </div>
            
              
              <h1>{translations.promoSection.title}</h1>
              <p className="promoText">{translations.promoSection.promoText}</p>
              <Button btnText={translations.promoSection.btnText} callback={this.modalOpen}  />
            </div>
          </div>
        </section>
        {this.state.isModalOpened && <RequestFormModal modalClose={this.modalClose} />}
      </>
    );
  }
}

export default Promo;
