import React, { Component } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import Button from './Button'

const useStyles = ({
    card: {
        maxWidth: 345,
        minHeight: 305
    },
    focusHighlight: {
        height: '100%'
    }
});

class ImgMediaCard extends React.Component {


    onClick = () => {
        this.props.onClick(this.props.data.orderKey)
    }

    render() {

        const classes = this.props
        console.log(this.props)

        return (
            <Card className={classes.card}>
                <CardActionArea className={classes.focusHighlight} >
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image={this.props.data.pic}
                        title=""
                    />
                    <CardContent style={{ position: 'relative', height: '100%' }} >
                        <Grid container >
                            <Grid item xs={9} sm={9} md={9} lg={9} >
                                <Typography gutterBottom variant="dispaly1" component='p' style={{ fontWeight: 600 }} >
                                    {this.props.data.foodName}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                            Type: {this.props.data.foodType}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Price: Rs.{this.props.data.foodPrice}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Status: {this.props.data.status}
                        </Typography>
                        {
                          this.props.type==='resturant' && this.props.status==='pending' ? <Button label='Start Progress' onClick={this.onClick} /> : null
                        }
                        {
                            this.props.type === 'resturant' && this.props.status === 'progress' ? <Button label='Delivered' onClick={this.onClick} /> : null
                        }
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    }
}



export default withStyles(useStyles)(ImgMediaCard)