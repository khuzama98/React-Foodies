import React, { Component } from "react";
import Layout from "../Register-Login";
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Input from '../common/UnderlinedInput'
import Hidden from '@material-ui/core/Hidden';
import Button from '../common/Button'
import { Typography } from "@material-ui/core";
import { connect } from 'react-redux';
import { login } from '../../config/store/action'
import swal from 'sweetalert'

class index extends Component {

    constructor(){
        super()
        this.state={
            email:'',
            password:''
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }

    redirectToHome = () => {
        this.setState({email:'',password:''})
        this.props.history.push('/home')
    }

    onClick = () => {
        let obj = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.login_user(obj,this.redirectToHome)
    }

    render() {
        return (
            <Layout heading="LOGIN" isSignup={true} >
                <Grid container style={{ paddingBottom: '20px' }}>
                    <Grid item xs={1} md={1} lg={1} ></Grid>
                    <Grid item xs={10} md={10} lg={10}>
                        <Input label='Email' name='email' value={this.state.email} onChange={this.handleChange} type='text' />
                    </Grid>
                    <Grid item xs={1} md={1} lg={1} ></Grid>
                    <Grid item xs={1} md={1} lg={1} ></Grid>
                    <Grid item xs={10} md={10} lg={10} >
                        <Input label='Password' name='password' value={this.state.password} onChange={this.handleChange} type='password' />
                    </Grid>
                    <Grid container item style={{ marginTop: '12px' }} >
                        <Grid item xs={1} md={1} lg={1} ></Grid>
                        <Grid item md={3} lg={3} >
                            <Button label='Login' onClick={() => this.onClick() } />
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

const mapDispatchToProps = dispatch =>{
    return{
        login_user: (data,redirect) => dispatch(login(data,redirect))
    }
}

export default connect(null,mapDispatchToProps)(index);
