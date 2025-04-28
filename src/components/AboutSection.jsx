import React, { Component } from "react";
import "../assets/css/componentStyles/aboutSection.css";
import vetImg from '../assets/img/veterinary.jpg';
import pawImg from '../assets/img/paw.png';

class About extends Component {
  render() {
    return (
      <>
        <section className="aboutSection">
          <div className="content">
              <div className="doctorImage">
                <img src={vetImg} alt="Veterinary photo" />
              </div>
              <div className="textContentAbout">
                <h3>Более 15 лет практики и тысячи довольных питомцев</h3>
                <p>Меня зовут Анна Сорокина, и я ветеринар с 2009 года. Уже более 15 лет я помогаю питомцам чувствовать себя здоровыми и счастливыми. 
                <span className="hilights">Моя главная цель — не просто лечить, а заботиться о каждом пациенте, находить наилучшие решения и объяснять владельцам всё простым языком. </span></p>
                <p>Особенно меня интересуют кожные заболевания и ультразвуковая диагностика — это помогает выявлять проблемы на ранних стадиях и предотвращать серьёзные заболевания.</p>
                <p>Я говорю на финском, русском и английском, а также понимаю латышский, поэтому мы легко найдём общий язык!</p>
                <p className="semiBold">Буду рада помочь вашему любимцу!</p>
                <img src={pawImg} alt="paw (decoration) image" id="pawImg"/>
              </div>
            </div>
            
        </section>
      </>
    );
  }
}

export default About;
