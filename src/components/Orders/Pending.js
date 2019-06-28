import React, { Component } from 'react';
import { Grid, Typography } from '@material-ui/core';
import Card from '../common/RequestCard'
import {transferToProgress} from '../../config/firebase'
import swal from 'sweetalert'

class Pending extends Component {

    toProgress = (key) => {
        try{
            const res = transferToProgress(key)
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
                <Grid container>
                    <Grid item xs={12} sm={12} md={12} lg={12} style={{padding:20}} >
                        <Typography variant='h4'>Pending Orders</Typography>
                    </Grid>
                    <Grid container item xs={12} sm={12} md={12} lg={12} style={{ padding: '20px 0px' }} >
                        { this.props.data.length!==0 ?
                            this.props.data.map(items => {
                                return (
                                    <Grid item xs={10} sm={5} md={3} lg={3} style={{ padding: '20px 0px 0px 20px' }} >
                                        <Card data={items} type={this.props.type} onClick={this.toProgress} status='pending' />
                                    </Grid>
                                )
                            }) : <Typography style={{ padding: 20 }} align='center' variant='body1'>No Pending Orders</Typography>
                        }
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Pending;