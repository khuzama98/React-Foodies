import React, { Component } from 'react';
import Navbar from '../Navabar'
import Banner from './Banner'
import TopResturants from './Resturants'
import Discover from '../common/DiscoverPlaces'
import { Typography, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import Footer from '../Footer'
import { connect } from 'react-redux';

const styles = theme => ({
    container:{
        justifyContent: 'center'
    }
})

class index extends Component {


    componentDidMount(){
        console.log(this.props)
    }

    onClick = () => {
        this.props.history.push('/resturants')
    }

    render() {
        const {classes} = this.props;
        return (
            <div>
                <Navbar type={this.props.user.type} />
                <Banner />
                <Discover onClick={this.onClick} />
                <TopResturants />
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.Reducer.user
    }
}

export default connect(mapStateToProps, null)(withStyles(styles)(index));