import React, { Component } from "react";
import Layout from "../Register-Login";
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Input from '../common/UnderlinedInput'
import Select from '../common/underlineDropdown'
import Hidden from '@material-ui/core/Hidden';
import Button from '../common/Button'
import { Typography } from "@material-ui/core";

class index extends Component {
  render() {
    const options = ['Select Gender', 'Male', 'Female']
    return (
      <Layout heading="USER SIGNUP" isLogin={true} >
        <Grid container style={{paddingBottom:'20px'}}>
          {/* <Hidden only='xs' > */}
            <Grid item xs={1} md={1} lg={1} ></Grid>
          {/* </Hidden> */}
          <Grid item xs={10} md={5} lg={5}>
            <Input label='Full Name' type='text' />
          </Grid>
          <Hidden only={['md','lg']}>
            <Grid item xs={1} md={1} lg={1} ></Grid>
          </Hidden>
          <Hidden only={[ 'md', 'lg']}>
            <Grid item xs={1} md={1} lg={1} ></Grid>
          </Hidden>
          <Grid item xs={10} md={5} lg={5} >
            <Input label='Email' type='text' />
          </Grid>
          {/* <Hidden only='xs' > */}
            <Grid item xs={1} md={1} lg={1} ></Grid>
          {/* </Hidden> */}
          {/* <Hidden only='xs' > */}
            <Grid item xs={1} md={1} lg={1} ></Grid>
          {/* </Hidden> */}
          <Grid item xs={10} md={5} lg={5} >
            <Input label='Password' type='password' />
          </Grid>
          <Hidden only={[ 'md', 'lg']}>
            <Grid item xs={1} md={1} lg={1} ></Grid>
          </Hidden>
          <Hidden only={[ 'md', 'lg']}>
            <Grid item xs={1} md={1} lg={1} ></Grid>
          </Hidden>
          <Grid item xs={10} md={5} lg={5} >
            <Input label='Confirm Password' type='password' />
          </Grid>
          {/* <Hidden only='xs' > */}
            <Grid item xs={1} md={1} lg={1} ></Grid>
          {/* </Hidden> */}
          {/* <Hidden only='xs' > */}
            <Grid item xs={1} md={1} lg={1} ></Grid>
          {/* </Hidden> */}
          <Grid item xs={10} md={5} lg={5} >
            <Select options={options} label='Gender' />
          </Grid>
          <Hidden only={[ 'md', 'lg']}>
            <Grid item xs={1} md={1} lg={1} ></Grid>
          </Hidden>
          <Hidden only={[ 'md', 'lg']}>
            <Grid item xs={1} md={1} lg={1} ></Grid>
          </Hidden>
          <Grid item xs={10} md={5} lg={5} >
            <Input label='Age' type='text' />
          </Grid>
          {/* <Hidden only='xs' > */}
            <Grid item xs={1} md={1} lg={1} ></Grid>
          {/* </Hidden> */}
          {/* <Hidden only='xs' > */}
            <Grid item xs={1} md={1} lg={1} ></Grid>
          {/* </Hidden> */}
          <Grid item xs={10} md={5} lg={5} >
            <Input label='City' type='text' />
          </Grid>
          <Hidden only={[ 'md', 'lg']}>
            <Grid item xs={1} md={1} lg={1} ></Grid>
          </Hidden>
          <Hidden only={[ 'md', 'lg']}>
            <Grid item xs={1} md={1} lg={1} ></Grid>
          </Hidden>
          <Grid item xs={10} md={5} lg={5} >
            <Input label='Country' type='text' />
          </Grid>
          <Grid container item style={{marginTop:'12px'}} >
            {/* <Hidden only='xs' > */}
              <Grid item xs={1} md={1} lg={1} ></Grid>
            {/* </Hidden> */}
            <Grid item md={3} lg={3} >
              <Button label='Signup' />
            </Grid>
            <Grid item md={6} lg={6} style={{ "margin-top": "20px" }}>
              <Typography variant='subtitle2' > Want to signup as resturant? <Link to='/resturant-signup' >Signup</Link></Typography>
            </Grid>
          </Grid>
        </Grid>
      </Layout>
    );
  }
}

export default index;
