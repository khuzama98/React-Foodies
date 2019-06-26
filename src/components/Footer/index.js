import React, { Component } from 'react';
import { Typography, Grid } from '@material-ui/core'

class Footer extends Component {
    render() {
        return (
            <Grid container alignItems='center' style={{ height: 100, backgroundColor: '#f98b00' }}>
                <Grid item xs={12} sm={12} md={12} lg={12} >
                    <Typography align='center' style={{ color: 'white' }} variant='subtitle1' >All Rights Reserved By Foodies</Typography>
                </Grid>
            </Grid>
        );
    }
}

export default Footer;