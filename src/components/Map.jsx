import React, { Component } from 'react';

class Map extends Component {
    render() {
        return (
            <>
                <div style={{ width: '100%', height: '400px' }}>
                <iframe 
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1975.3771163888462!2d25.061187777392767!3d60.32335673106049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469207120f1b3117%3A0x2133e05154e31a91!2sKyt%C3%B6tie%2029%2C%2001360%20Vantaa!5e0!3m2!1sru!2sfi!4v1745869934503!5m2!1sru!2sfi' 
                    width="100%" 
                    height="450" 
                    style={{border:0, borderRadius:'5px'}} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
                </div>
            </>
        );
    }
    
}

export default Map;