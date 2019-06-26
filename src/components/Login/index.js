import React, { Component } from "react";
import Layout from "../Register-Login";
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Input from '../common/UnderlinedInput'
import Hidden from '@material-ui/core/Hidden';
import Button from '../common/Button'
import { Typography } from "@material-ui/core";

class index extends Component {
    render() {
        return (
            <Layout heading="LOGIN" isSignup={true} >
                <Grid container style={{ paddingBottom: '20px' }}>
                    <Grid item xs={1} md={1} lg={1} ></Grid>
                    <Grid item xs={10} md={10} lg={10}>
                        <Input label='Email' type='text' />
                    </Grid>
                    <Grid item xs={1} md={1} lg={1} ></Grid>
                    <Grid item xs={1} md={1} lg={1} ></Grid>
                    <Grid item xs={10} md={10} lg={10} >
                        <Input label='Password' type='password' />
                    </Grid>
                    <Grid container item style={{ marginTop: '12px' }} >
                        <Grid item xs={1} md={1} lg={1} ></Grid>
                        <Grid item md={3} lg={3} >
                            <Button label='Login' />
                        </Grid>
                        <Grid item md={6} lg={6} style={{ "margin-top": "20px" }}>
                            <Typography variant='subtitle2' > Want to signup as user? <Link to='/' >Signup</Link></Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Layout>
        );
    }
}

export default index;
