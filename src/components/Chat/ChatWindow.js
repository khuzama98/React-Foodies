import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { withStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import Input from '../common/UnderlinedInput'

class ChatWindow extends Component {
    render() {
        let inputStyle = { 
            width: 'calc(100% - 50px)', 
            display: 'inline-block', 
            backgroundColor: 'white', 
            paddingTop: '13px' 
        }

        let buttonStyle = { 
            width: '50px', 
            padding: '12px 0px', 
            border: 'none', 
            position: 'relative', 
            top: '-5px', 
            left: '-4px', 
            backgroundColor: '#f98b00', 
            color: 'white' 
        }

        return (
            <>
                <Scrollbars
                    universal
                    autoHide
                    autoHideTimeout={1000}
                    autoHideDuration={200}
                    style={{ height: '80vh', width: '100%', marginBottom: '1vh' }}
                >
                    
                </Scrollbars>
                <div style={inputStyle}>
                    <Input  placeholder='type Something...' />
                </div>
                <button type='submit' style={buttonStyle} ><FontAwesomeIcon icon={faPaperPlane} /></button>
            </>
        );
    }
}

export default ChatWindow;