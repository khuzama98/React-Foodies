import React, { Component } from 'react';
import { Grid, Typography } from '@material-ui/core';
import img1 from '../../assets/images/mini-1.jpg'
import img2 from '../../assets/images/mini-2.jpg'
import img3 from '../../assets/images/mini-3.jpg'
import Card from '../common/Card'

class AllResturants extends Component {
    constructor(){
        super();
        this.state={
            data:[
                {
                    image: img1,
                    name: 'Burger Lab',
                    category: 'Fast Food',
                    location: 'North Nazimabad',
                    rating : 4
                },
                {
                    image : img2,
                    name: 'Ginsoy',
                    category: 'Chinese',
                    location: 'Gulshan-e-Iqbal',
                    rating: 4.6
                },
                {
                    image: img3,
                    name: 'BBQ Tonight',
                    category: 'Desi',
                    location: 'Clifton',
                    rating: 4.4
                },
                {
                    image: img1,
                    name: 'Burger Lab',
                    category: 'Fast Food',
                    location: 'North Nazimabad',
                    rating: 4
                },
                {
                    image: img2,
                    name: 'Ginsoy',
                    category: 'Chinese',
                    location: 'Gulshan-e-Iqbal',
                    rating: 4.6
                },
                {
                    image: img3,
                    name: 'BBQ Tonight',
                    category: 'Desi',
                    location: 'Clifton',
                    rating: 4.4
                }
            ]
        }
    }

    render() {
        const {data} = this.state
        return (
            <div style={{padding:'30px'}} >
                <Typography variant='h4' >Resturants</Typography>
                <Grid container >
                    { data.map(item=>{
                        return(
                            <Grid item xs={10} sm={5} md={3} lg={3} style={{padding:'20px 0px 0px 20px'}} >
                                <Card data={item} />
                            </Grid>
                        )
                    })
                    }
                </Grid>
            </div>
        );
    }
}

export default AllResturants;