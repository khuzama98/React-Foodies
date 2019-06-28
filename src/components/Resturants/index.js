import React, { Component } from 'react';
import Navbar from '../Navabar'
import Footer from '../Footer'
import Discover from '../common/DiscoverPlaces'
import Resturants from './AllResturants'
import { connect } from 'react-redux';

class index extends Component {
    render() {
        return (
            <div>
                <Navbar type={this.props.user.type} />
                <Discover />
                <Resturants />
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

export default connect(mapStateToProps, null)(index);