import React, { Component } from 'react';
import Navbar from '../Navabar'
import Banner from './Banner'
import TopResturants from './Resturants'
import Discover from '../common/DiscoverPlaces'
import { Typography, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import Footer from '../Footer'

const styles = theme => ({
    container:{
        justifyContent: 'center'
    }
})

class index extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div>
                <Navbar />
                <Banner />
                <Discover />
                <TopResturants />
                <Footer />
            </div>
        );
    }
}


export default withStyles(styles)(index);