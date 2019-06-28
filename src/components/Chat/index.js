import React, { Component } from 'react';
import Navbar from '../Navabar'
import ChatWindow from './ChatWindow'

class index extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <ChatWindow />
            </div>
        );
    }
}

export default index;