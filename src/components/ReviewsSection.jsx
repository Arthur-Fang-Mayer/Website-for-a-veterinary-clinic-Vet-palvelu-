import React, { Component } from 'react';
import Title from './Title';
import Button from './Button';
import allStars from '../assets/icons/all_stars.png'
import fourStars from '../assets/icons//four_stars.png'
import "../assets/css/componentStyles/reviewsSection.css";
import { LangContext } from "../context/langProvider";


class Reviews extends Component {
    static contextType = LangContext;
    render() {
        const { translations } = this.context;
        return (
            <>
            <section className='reviewsSection'>
                <div className="content">
                    <Title subtitle={translations.reviewsSection.subtitle} title={translations.reviewsSection.title} />
                    <div className="reviewsWrapper">
                        <div className="reviewBlock reviewInna">
                            <div className="sircle">
                                I
                            </div>
                            <div className="reviewerName">
                                Inna Kortsagina
                                <img src={allStars} alt="All stars review icon" />
                            </div>
                            <div className="reviewerText">
                                {translations.reviewsSection.firstReviewText}
                            </div>
                        </div>
                        <div className="reviewBlock reviewTero">
                            <div className="sircle">
                                T
                            </div>
                            <div className="reviewerName">
                                Tero Kaino
                                <img src={fourStars} alt="All stars review icon" />
                            </div>
                            <div className="reviewerText">
                                {translations.reviewsSection.secondReviewText}
                            </div>
                            </div>

                        <div className="reviewBlock reviewPekka">
                            <div className="sircle">
                                P
                            </div>
                            <div className="reviewerName">
                                Pekka Hasia
                                <img src={allStars} alt="All stars review icon" />
                            </div>
                            <div className="reviewerText">
                                {translations.reviewsSection.thirdReviewText}
                            </div>
                        </div>
                        <div className="reviewBlock reviewAisylu">
                            <div className="sircle">
                                A
                            </div>
                            <div className="reviewerName">
                                Aisylu Faizova
                                <img src={allStars} alt="All stars review icon" />
                            </div>
                            <div className="reviewerText">
                                {translations.reviewsSection.fourthReviewText}
                            </div>
                        </div>
                    </div>
                    <div className="btnReviews">
                        <Button btnText={translations.reviewsSection.btnText} />
                    </div>
                    
                </div>
            </section>
            </>
        );
    }
    
}

export default Reviews;