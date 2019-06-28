import React, { Component } from 'react';
import Navbar from '../Navabar'
import Footer from '../Footer'
import { Grid, Typography } from '@material-ui/core';
import Card from '../common/MenuCard'
import Map from '../common/Googlemap'
import Dialog from '../common/Dialog'
import Button from '../common/Button'
import { connect } from 'react-redux';
import { addFoodItem, resturantInfo, requestItem} from '../../config/firebase'
import {resturantMenu} from '../../config/store/action'
import swal from 'sweetalert'

const INITIAL_STATE={
    foodName: '',
    foodType: '',
    foodPrice: '',
    pic: []
}

class index extends Component {

    constructor() {
        super();
        this.state = {
            open: false,
            foodName:'',
            foodType:'',
            foodPrice:'',
            pic:[],
            resturantInfo:[],
            menu:[]
        }
    }

    componentDidMount() {
        this.getResturantInfo()
        this.props.resturantMenu(this.props.match.params.uid)
    }

    static getDerivedStateFromProps(props,state){
        // console.log('state',state)
        console.log('props',props)
        if(props.menu.length!==state.menu.length){
            return{
                menu: props.menu
            }
        }
    }

    DialogOpen = () => {
        this.setState({ open: true })
    }

    DialogClose = () => {
        this.setState({ open: false })
    }

    handleChange = e => {
        const {name,value,files} = e.target
        name==='pic' ? this.setState({[name]:files[0]}) : this.setState({[name]:value})
    }

    submitItem = async () => {
        const {foodName,foodType,foodPrice,pic} = this.state
        const obj = {
            foodName,
            foodType,
            foodPrice,
            pic
        }
        try{
            const res = await addFoodItem(this.props.match.params.uid,obj)
            .then(()=>{
                swal({
                    icon:'success',
                    title:'Success',
                    text:'Item successfully added!'
                })
            })
        }
        catch(e){
            console.log(e)
            swal({
                icon:'warning',
                title:'Oops',
                text:e.message
            })
        }
        finally{
            this.DialogClose()
            this.setState({...INITIAL_STATE})
        }
    }

    getResturantInfo = async () => {
        try{
            const res = await resturantInfo(this.props.match.params.uid)
            .then((result)=>{
                console.log(result)
                this.setState({resturantInfo:result})
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

    RequestItem = async (item) => {
        try{
            const res = await requestItem(this.props.user.uid, this.props.match.params.uid,item)
            .then(()=>{
                swal({
                    icon:'success',
                    title:'Success',
                    text:'Item Successfully Requested!'
                })
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
        const { data,menu } = this.state;
        return (
            <div>
                <Navbar type={this.props.user.type} />
                    <Dialog 
                    DialogClose={this.DialogClose} 
                    open={this.state.open} 
                    foodName={this.state.foodName}
                    foodType={this.state.foodType}
                    foodPrice={this.state.foodPrice}
                    foodPic={this.state.pic}
                    onChange={this.handleChange}
                    onClick={this.submitItem}
                    />
                <Grid container >
                    <Grid container item xs={12} sm={8} md={8} lg={8} style={{ padding: '20px' }} >
                        <Grid item xs={12} sm={12} md={12} lg={12} >
                            <Typography gutterBottom variant='h4'>{this.state.resturantInfo.resturantName}</Typography>
                            {
                                this.props.user.type === 'resturant' && this.props.user.uid === this.props.match.params.uid  
                                ?
                                <Button label='Add In Menu' onClick={this.DialogOpen} /> 
                                : 
                                null
                            }
                        </Grid>
                        {
                            menu.map(items => {
                                return (
                                    <Grid item xs={10} sm={5} md={3} lg={3} style={{ padding: '20px 0px 0px 20px' }} >
                                        <Card type={this.props.user.type} onClick={this.RequestItem} data={items} />
                                    </Grid>
                                )
                            })
                        }

                    </Grid>
                    <Grid container item xs={12} sm={4} md={4} lg={4} style={{ padding: '20px' }} >
                        <Grid item xs={12} sm={12} md={12} lg={12} >
                            <Typography gutterBottom variant='h4'>Location</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} >
                            <Map isMarkerShown
                                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                                loadingElement={<div style={{ height: `100%`, width: '100%' }} />}
                                containerElement={<div style={{ height: `400px`, width: '100%' }} />}
                                mapElement={<div style={{ height: `100%`, width: '100%' }} />}
                            />
                        </Grid>

                    </Grid>
                </Grid>
                <Footer />
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        user: state.Reducer.user,
        menu: state.ResturantReducer.menu
    }
}

const mapDispatchToProps = dispatch => {
    return{
        resturantMenu: (uid) => dispatch(resturantMenu(uid))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(index);