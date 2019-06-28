import React, { Component } from 'react';
import { Grid, Typography } from '@material-ui/core';
import Card from '../common/RequestCard'

class Delivered extends Component {
    render() {
        return (
            <div>
                <Grid container>
                    <Grid item xs={12} sm={12} md={12} lg={12} style={{ padding: 20 }} >
                        <Typography variant='h4'>Delivered Orders</Typography>
                    </Grid>
                    <Grid container item xs={12} sm={12} md={12} lg={12} style={{ padding: '20px 0px' }} >
                        {this.props.data.length !== 0 ?
                            this.props.data.map(items => {
                                return (
                                    <Grid item xs={10} sm={5} md={3} lg={3} style={{ padding: '20px 0px 0px 20px' }} >
                                        <Card data={items}  />
                                    </Grid>
                                )
                            }) : <Typography align='center' style={{ padding: 20 }} variant='body1'>No Delivered Orders</Typography>
                        }
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Delivered;