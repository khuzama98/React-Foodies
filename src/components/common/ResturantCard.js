import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import star from '../../assets/images/star.png'

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
    },
});

export default function ImgMediaCard(props) {
    const classes = useStyles();
    console.log(props)
    let starPosition ={
        position: 'absolute',
        right:0,
        top:0
    }
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={props.data.pic}
                    title=""
                />
                <CardContent style={{ position: 'relative' }} >
                    <Grid container >
                        <Grid item xs={9} sm={9} md={9} lg={9} >
                            <Typography gutterBottom variant="h5" component="h2">
                                {props.data.resturantName}
                            </Typography>
                        </Grid>
                        <Grid item xs={3} sm={3} md={3} lg={3} style={{position:'relative'}} >
                            <Typography variant='body1'>{props.data.rating ? props.data.rating : 4}/5</Typography>
                            <img style={starPosition} src={star} height='20px' />
                        </Grid>
                    </Grid>
                    <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                        Type: {props.data.category ? props.data.category : "Desi"}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Location: {props.data.location ? props.data.location : "Karachi"}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
