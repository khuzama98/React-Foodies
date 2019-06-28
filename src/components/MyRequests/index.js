import React, { Component } from 'react';
import Navbar from '../Navabar'
import Footer from '../Footer'
import { connect } from 'react-redux';
import RequestSection from './Requests'
import {getUserRequests} from '../../config/firebase'
import swal from 'sweetalert'

class index extends Component {

    constructor(){
        super()
        this.state={
            data:[]
        }
    }

    componentDidMount(){
        this.requestData()
    }

    requestData = () => {
        try{
            const res = getUserRequests(this.props.user.uid)
            .then((data)=>{
                this.setState({data})
            })
        }
        catch(e){
            console.log(e)
            swal({
                icon: 'warning',
                title: 'Oops',
                text: e.message
            })
        }
    }

    render() {
        return (
            <div>
                <Navbar type={this.props.user.type} />
                <RequestSection data={this.state.data} />
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