import React, { Component } from 'react';
import { Grid, Typography } from '@material-ui/core';
import Card from '../common/RequestCard'
import {transferToDelivered} from '../../config/firebase'
import swal from 'sweetalert'

class Progress extends Component {

    toDelivered = (key) => {
        try {
            const res = transferToDelivered(key)
        }
        catch (e) {
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
                    <Grid item xs={12} sm={12} md={12} lg={12} style={{ padding: 20 }} >
                        <Typography variant='h4'>Inprogress Orders</Typography>
                    </Grid>
                    <Grid container item xs={12} sm={12} md={12} lg={12} style={{ padding: '20px 0px' }} >
                        {this.props.data.length !== 0 ?
                            this.props.data.map(items => {
                                return (
                                    <Grid item xs={10} sm={5} md={3} lg={3} style={{ padding: '20px 0px 0px 20px' }} >
                                        <Card data={items} type={this.props.type} onClick={this.toDelivered} status='progress' />
                                    </Grid>
                                )
                            }) : <Typography align='center' style={{padding:20}} variant='body1'>No InProgress Orders</Typography>
                        }
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Progress;