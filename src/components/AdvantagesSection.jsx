import React, { Component } from 'react';
import AdvantagesBlock from './AdvantagesBlock';
import Title from './Title';
import PawsPng from "../assets/img/paws.png"
import "../assets/css/componentStyles/advantagesSection.css";

class Advantages extends Component {
    render() {
        return (
            <>
                <section className='advantagesSection'>
                    <div className="content">
                        <Title subtitle="Почему мне доверяют" title="С заботой о ваших любимцах на каждом этапе" />
                        <AdvantagesBlock advantageTitle="Здоровый питомец без стресса" advantageDescription="Мы подходим к лечению мягко и заботливо, чтобы ваш любимец чувствовал себя спокойно" />
                        <AdvantagesBlock advantageTitle="Быстрое обслуживание, без долгого ожидания" advantageDescription="Ваш питомец получит помощь вовремя, когда это на самом деле нужно" />
                        <AdvantagesBlock advantageTitle="Точный диагноз – эффективное лечение" advantageDescription="Современная диагностика, выявляет  проблему на ранней стадии и минуя осложнения" />
                        <AdvantagesBlock advantageTitle="Понятные рекомендации по уходу за питомцем" advantageDescription="Вы точно будете знать, что делать дальше и как правильно ухаживать за питомцем" />
                        <AdvantagesBlock advantageTitle="Оптимальные цены без скрытых платежей" advantageDescription="Качественная ветеринарная помощь должна быть доступной" />
                        <AdvantagesBlock advantageTitle="Дополнительные удобства —отель для кошек" advantageDescription="Если вам нужно оставить питомца на время, у нас есть безопасное и комфортное место" />
                        <img src={PawsPng} alt="Paws Decoration Image" />
                         
                    </div>
                </section>
            </>
        );
    }
    
}

export default Advantages;