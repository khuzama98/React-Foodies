import React, { Component } from 'react';
import { Typography } from '@material-ui/core';

class Resturants extends Component {
    render() {
        return (
            <div style={{margin:'30xp 0px'}}>
                <Typography variant='h4' align='center' >Top Restaurant</Typography>
                <div className="logo-container">
                    <div className="logo-inside-container">
                        <div className=" extra-pad" >
                            <div className="logos second">
                            </div>
                        </div>
                        <div className=" extra-pad">
                            <div className="logos third">
                            </div>
                        </div>
                        <div className=" extra-pad" >
                            <div className="logos fourth">
                            </div>
                        </div>
                        <div className=" extra-pad" >
                            <div className="logos first">
                            </div>
                        </div>
                        <div className=" extra-pad" >
                            <div className="logos fifth">
                            </div>
                        </div>
                        <div className=" extra-pad smaller">
                            <div style={{height:"30px"}} className="space">

                            </div>
                            <div className="logos sixth">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Resturants;