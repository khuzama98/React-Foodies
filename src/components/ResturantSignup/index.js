import React, { Component } from "react";
import Layout from "../Register-Login";
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Input from '../common/UnderlinedInput'
import Hidden from '@material-ui/core/Hidden';
import Button from '../common/Button'
import UploadButton from '../common/UploadButton'
import { Typography } from "@material-ui/core";
import { connect } from 'react-redux';
import { resturantSignup } from '../../config/store/action'
import swal from 'sweetalert'

const INITIAL_STATE = {
  name: '',
  resturantName: '',
  email: '',
  password: '',
  cpassword: '',
  certificate: '',
  city: '',
  country: ''
}

class index extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
      resturantName:'',
      email: '',
      password: '',
      cpassword: '',
      certificate:'',
      city: '',
      country: ''
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  signUp = () => {
    const { name, email, resturantName, password, cpassword, city, country } = this.state
    const obj = {
      name,
      email,
      password,
      city,
      country,
      resturantName
    }
    console.log('CHeck for dispatch ===>', this.props)
    if (password === cpassword) {
      this.props.resturantsignup(obj, this.routeToHome)
    }
    else {
      swal({
        title: 'Oops',
        text: 'Password and Confirm Password Mismatch!',
        icon: 'warning'
      })
    }
  }

  routeToHome = () => {
    this.setState({ ...INITIAL_STATE })
    this.props.history.push('/home')
  }


  render() {
    return (
      <Layout heading="RESTURANT SIGNUP" isLogin={true} >
        <Grid container style={{ paddingBottom: '20px' }}>
          <Grid item xs={1} md={1} lg={1} ></Grid>
          <Grid item xs={10} md={5} lg={5}>
            <Input label='Owner Full Name' name='name' value={this.state.name} onChange={this.handleChange} type='text' />
          </Grid>
          <Hidden only={['md', 'lg']}>
            <Grid item xs={1} md={1} lg={1} ></Grid>
          </Hidden>
          <Hidden only={['md', 'lg']}>
            <Grid item xs={1} md={1} lg={1} ></Grid>
          </Hidden>
          <Grid item xs={10} md={5} lg={5} >
            <Input label='Resturant Name' name='resturantName' value={this.state.resturantName} onChange={this.handleChange} type='text' />
          </Grid>
          <Grid item xs={1} md={1} lg={1} ></Grid>
          <Grid item xs={1} md={1} lg={1} ></Grid>
          <Grid item xs={10} md={5} lg={5} >
            <Input label='Email' name='email' value={this.state.email} onChange={this.handleChange} type='text' />
          </Grid>
          <Hidden only={['md', 'lg']}>
            <Grid item xs={1} md={1} lg={1} ></Grid>
          </Hidden>
          <Hidden only={['md', 'lg']}>
            <Grid item xs={1} md={1} lg={1} ></Grid>
          </Hidden>
          <Grid item xs={10} md={5} lg={5} >
            <Input label='Password' name='password' value={this.state.password} onChange={this.handleChange} type='password' />
          </Grid>
          <Grid item xs={1} md={1} lg={1} ></Grid>
          <Grid item xs={1} md={1} lg={1} ></Grid>
          <Grid item xs={10} md={5} lg={5} >
            <Input label='Confirm Password' name='cpassword' value={this.state.cpassword} onChange={this.handleChange} type='password' />
          </Grid>
          <Hidden only={['md', 'lg']}>
            <Grid item xs={1} md={1} lg={1} ></Grid>
          </Hidden>
          <Hidden only={['md', 'lg']}>
            <Grid item xs={1} md={1} lg={1} ></Grid>
          </Hidden>
          <Grid item xs={10} md={5} lg={5} >
            <Input label='City' name='city' value={this.state.city} onChange={this.handleChange} type='text' />
          </Grid>
          <Grid item xs={1} md={1} lg={1} ></Grid>
          <Grid item xs={1} md={1} lg={1} ></Grid>
          <Grid item xs={10} md={10} lg={10} >
            <Input label='Country' name='country' value={this.state.country} onChange={this.handleChange} type='text' />
          </Grid>
          <Hidden only={['md', 'lg']}>
            <Grid item xs={1} md={1} lg={1} ></Grid>
          </Hidden>
          <Hidden only={['md', 'lg']}>
            <Grid item xs={1} md={1} lg={1} ></Grid>
          </Hidden>
          <Grid md={12} lg={12} ></Grid>
          <Grid md={1} lg={1} ></Grid>
          <Grid item xs={10} md={5} lg={5} >
            <UploadButton label='Upload Certificate' name='certificate' />
          </Grid>
          <Grid container item style={{ marginTop: '12px' }} >
            <Grid item xs={1} md={1} lg={1} ></Grid>
            <Grid item md={3} lg={3} >
              <Button label='Signup' onClick={this.signUp} />
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

const mapDispatchToProps = dispatch => {
  return{
    resturantsignup: (data,redirect) => dispatch(resturantSignup(data,redirect))
  }
}

export default connect(null,mapDispatchToProps)(index);
