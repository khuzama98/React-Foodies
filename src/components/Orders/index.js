import React, { Component } from 'react';
import Navbar from '../Navabar'
import Footer from '../Footer'
import { connect } from 'react-redux';
import {resturantOrders} from '../../config/store/action'
import Pending from './Pending'
import Progress from './Progress'
import Delivered from './Delivered'

class index extends Component {

    constructor(){
        super();
        this.state={
            orders:[],
            pending:[],
            inprogress:[],
            delivered:[]
        }
    }

    static getDerivedStateFromProps(props, state) {
        // console.log('state',state)
        console.log('props', props)
        // if (props.orders.length !== state.orders.length) {
            const pending = props.orders.filter(item=> item.status==='pending')
            const inprogress = props.orders.filter(item=> item.status==='inprogress')
            const delivered = props.orders.filter(item => item.status ==='delivered')
            return {
                orders:props.orders,
                pending,
                inprogress,
                delivered
            }
        // }
    }

    componentDidMount(){
        this.props.resturantOrders(this.props.user.uid)
        console.log('orders ===>',this.props.orders)
    }

    render() {
        return (
            <div>
                <Navbar type={this.props.user.type} />
                <Pending type={this.props.user.type} data={this.state.pending} />
                <Progress type={this.props.user.type} data={this.state.inprogress} />
                <Delivered type={this.props.user.type} data={this.state.delivered} />
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.Reducer.user,
        orders: state.ResturantReducer.orders
    }
}

const mapDispatchToProps = dispatch => {
    return{
        resturantOrders : (uid) => dispatch(resturantOrders(uid))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(index);