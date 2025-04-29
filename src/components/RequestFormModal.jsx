import React, { Component } from 'react';

class RequestFormModal extends Component {
    render() {
        return (
            <>
                this is modal
                <button className='btnClose' onClick={this.props.modalClose}>X</button>
            </>
        );
    }
    
}

export default RequestFormModal;