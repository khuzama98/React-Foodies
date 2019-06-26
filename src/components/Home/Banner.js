import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Grid } from '@material-ui/core';


const styles = theme=> ({
    heading1: {
        marginTop:0,
        position:'relative',
        color:'white',
        marginLeft:"4.5rem"
    }
})

class Banner extends Component {
    render() {
        const {classes} = this.props
        return (
            <Grid container alignItems='center' className='backImg' >
                <Typography variant='h3' className={classes.heading1} >Order Food From Your Home!</Typography>
            </Grid>
        );
    }
}

export default withStyles(styles)(Banner);