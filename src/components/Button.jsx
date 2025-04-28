import React, { Component } from 'react';
import "../assets/css/componentStyles/button.css";

class Button extends Component {
    render() {
        return (
            <>
                <button className='customButton'>
                    {this.props.btnText}
                </button>
            </>
        );
    }
    
}

export default Button;