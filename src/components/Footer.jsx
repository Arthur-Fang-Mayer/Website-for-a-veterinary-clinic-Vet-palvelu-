import React, { Component } from 'react';
import "../assets/css/componentStyles/footer.css";
import { LangContext } from "../context/langProvider";

class Footer extends Component {
    static contextType = LangContext;
    render() {
        const { translations } = this.context;
        return (
            <>
                <footer>
                    <div className="content">
                        <ul className="navFooter">
                            <li className="navFooterItem">
                                <a href="#">{translations.footer.aboutText}</a>
                            </li>
                            <li className="navFooterItem">
                                <a href="#">{translations.footer.priceText}</a>
                            </li>
                            <li className="navFooterItem">
                                <a href="#">{translations.footer.reviewText}</a>
                            </li>
                            <li className="navFooterItem">
                                <a href="#">{translations.footer.contactsText}</a>
                            </li>
                        </ul>
                        <a className='creatorMark' href="#">Website designed & developed by Fang-Mayer Digital</a>
                        <a href="#">Privacy Policy</a>
                        <a className='disactiveLink' href="#">© All rights reserved</a>
                    </div>
                </footer>
            </>
        );
    }
    
}

export default Footer;