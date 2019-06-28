import React, { Component } from 'react';
import {Grid,Typography} from '@material-ui/core'
import Search from './Search'

class DiscoverPlaces extends Component {
    render() {
        return (
            <div>
                <Grid container style={{ padding: '30px 0px 40px 0px' }}>
                    <Grid item xs={12} sm={12} md={12} lg={12} style={{ marginBottom: 20 }} >
                        <Typography align='center' variant='h4' >Discover Places Near You!</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} >
                        <Search onClick={this.props.onClick} />
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default DiscoverPlaces;