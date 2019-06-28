import React, { Component } from "react";
import Layout from "../Register-Login";
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Input from '../common/UnderlinedInput'
import Select from '../common/underlineDropdown'
import Hidden from '@material-ui/core/Hidden';
import Button from '../common/Button'
import { Typography } from "@material-ui/core";
import { connect } from 'react-redux';
import {signupUser} from '../../config/store/action'
import swal from 'sweetalert'

const INITIAL_STATE={
  name: '',
  email: '',
  password: '',
  cpassword: '',
  gender: '',
  age: '',
  city: '',
  country: ''
}

class index extends Component {

  constructor(){
    super();
    this.state={
      name:'',
      email:'',
      password:'',
      cpassword:'',
      gender:'',
      age:'',
      city:'',
      country:''
    }
  }

  handleChange = (e) => {
    const { name,value } = e.target;
    this.setState({[name]:value})
  }

  routeToHome = () => {
    this.setState({...INITIAL_STATE})
    this.props.history.push('/home')
  }

  signUp = () => {
    const {name,email,password,cpassword,age,gender,city,country} = this.state
    const obj = {
      name,
      email,
      password,
      age,
      gender,
      city,
      country
    }
    console.log('CHeck for dispatch ===>',this.props)
    if(password===cpassword){
      this.props.store_user(obj,this.routeToHome)
    }
    else{
      swal({
        title: 'Oops',
        text:'Password and Confirm Password Mismatch!',
        icon:'warning'
      })
    }
  }

  render() {
    const options = ['Select Gender', 'Male', 'Female']
    return (
      <Layout heading="USER SIGNUP" isLogin={true} >
        <Grid container style={{ paddingBottom: '20px' }}>
          <Grid item xs={1} md={1} lg={1} ></Grid>
          <Grid item xs={10} md={5} lg={5}>
            <Input label='Full Name' name='name' value={this.state.name} onChange={this.handleChange} type='text' />
          </Grid>
          <Hidden only={['md', 'lg']}>
            <Grid item xs={1} md={1} lg={1} ></Grid>
          </Hidden>
          <Hidden only={['md', 'lg']}>
            <Grid item xs={1} md={1} lg={1} ></Grid>
          </Hidden>
          <Grid item xs={10} md={5} lg={5} >
            <Input label='Email' name='email' value={this.state.email} onChange={this.handleChange} type='text' />
          </Grid>
          <Grid item xs={1} md={1} lg={1} ></Grid>
          <Grid item xs={1} md={1} lg={1} ></Grid>
          <Grid item xs={10} md={5} lg={5} >
            <Input label='Password' name='password' value={this.state.password} onChange={this.handleChange} type='password' />
          </Grid>
          <Hidden only={['md', 'lg']}>
            <Grid item xs={1} md={1} lg={1} ></Grid>
          </Hidden>
          <Hidden only={['md', 'lg']}>
            <Grid item xs={1} md={1} lg={1} ></Grid>
          </Hidden>
          <Grid item xs={10} md={5} lg={5} >
            <Input label='Confirm Password' name='cpassword' value={this.state.cpassword} onChange={this.handleChange} type='password' />
          </Grid>
          <Grid item xs={1} md={1} lg={1} ></Grid>
          <Grid item xs={1} md={1} lg={1} ></Grid>
          <Grid item xs={10} md={5} lg={5} >
            <Select options={options} name='gender' value={this.state.gender} onChange={this.handleChange} label='Gender' />
          </Grid>
          <Hidden only={['md', 'lg']}>
            <Grid item xs={1} md={1} lg={1} ></Grid>
          </Hidden>
          <Hidden only={['md', 'lg']}>
            <Grid item xs={1} md={1} lg={1} ></Grid>
          </Hidden>
          <Grid item xs={10} md={5} lg={5} >
            <Input label='Age' name='age' value={this.state.age} onChange={this.handleChange} type='text' />
          </Grid>
          <Grid item xs={1} md={1} lg={1} ></Grid>
          <Grid item xs={1} md={1} lg={1} ></Grid>
          <Grid item xs={10} md={5} lg={5} >
            <Input label='City' name='city' value={this.state.city} onChange={this.handleChange} type='text' />
          </Grid>
          <Hidden only={['md', 'lg']}>
            <Grid item xs={1} md={1} lg={1} ></Grid>
          </Hidden>
          <Hidden only={['md', 'lg']}>
            <Grid item xs={1} md={1} lg={1} ></Grid>
          </Hidden>
          <Grid item xs={10} md={5} lg={5} >
            <Input label='Country' name='country' value={this.state.country} onChange={this.handleChange} type='text' />
          </Grid>
          <Grid container item style={{ marginTop: '12px' }} >
            <Grid item xs={1} md={1} lg={1} ></Grid>
            <Grid item md={3} lg={3} >
              <Button label='Signup' onClick={this.signUp} />
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

const mapStateToProps = state => {
  console.log(state)
  return {
  //   user: state.userReducer.user,
  //   todos: state.todosReducer.todos
    user : state.Reducer.user
  }
}
const mapDispatchToProps = dispatch => {
  return {
    store_user: (user,redirect) => dispatch(signupUser(user,redirect)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(index);
