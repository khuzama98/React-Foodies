import React, { Component } from 'react';
import { Grid, Typography } from '@material-ui/core';
import Card from '../common/ResturantCard'
import {getResturants} from '../../config/firebase'
import {withRouter} from 'react-router-dom'

class AllResturants extends Component {
    constructor(){
        super();
        this.state={
            result:[]
        }
    }

    componentDidMount(){
        this.onLoadResturants()
    }

    onLoadResturants = async () => {
        try{
            let res = await getResturants()
            .then((result)=>{
                console.log(result)
                this.setState({result})
            })
        }
        catch(e){
            console.log(e)
        }
    }

    redirectToResturant = (uid) => {
        console.log(uid)
        console.log(this.props)
        this.props.history.push(`/resturants-details/${uid}`)
    }

    render() {
        const {data,result} = this.state
        return (
            <div style={{padding:'30px'}} >
                <Typography variant='h4' >Resturants</Typography>
                <Grid container >
                    { result.map(item=>{
                        return(
                            <Grid item xs={10} sm={5} md={3} lg={3} onClick={() => this.redirectToResturant(item.uid)} style={{padding:'20px 0px 0px 20px'}} >
                                <Card data={item}  />
                            </Grid>
                        )
                    })
                    }
                </Grid>
            </div>
        );
    }
}

export default withRouter(AllResturants);