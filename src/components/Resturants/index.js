import React, { Component } from 'react';
import Navbar from '../Navabar'
import Footer from '../Footer'
import Discover from '../common/DiscoverPlaces'
import Resturants from './AllResturants'

class index extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Discover />
                <Resturants />
                <Footer />
            </div>
        );
    }
}

export default index;