import React, { Component } from "react";
import Layout from "../Register-Login";
import { Link } from "react-router-dom";

class index extends Component {
    render() {
        return (
            <Layout heading="LOGIN" isSignup={true} >
                <div class="input-field col s12 m10 offset-m1 ">
                    <input id="email" type="text" class="validate" />
                    <label for="email">Email</label>
                </div>
                <div class="input-field col s12 m10 offset-m1">
                    <input id="password" type="password" class="validate" />
                    <label for="password">Password</label>
                </div>
                <div class="row">
                    <div class="col m3  offset-m1">
                        <Link class="waves-effect waves-light btn">LOGIN</Link>
                    </div>
                    <div class="col offset-m1 m6" style={{ "margin-top": "10px" }}>
                        Want to signup as user? <Link to='/' >Signup</Link>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default index;
