import React, { Component } from "react";
import Layout from "../Register-Login";
import { Link } from "react-router-dom";

class index extends Component {
  render() {
    return (
      <Layout heading="RESTURANT SIGNUP" isLogin={true} >
        <div class="input-field col s12 m5 offset-m1">
          <input id="name" type="text" class="validate" />
          <label for="name">Owner Full Name</label>
        </div>
        <div class="input-field col s12 m5 ">
          <input id="rname" type="text" class="validate" />
          <label for="rname">Resturant Name</label>
        </div>
        <div class="input-field col s12 m5 offset-m1">
          <input id="email" type="text" class="validate" />
          <label for="email">Email</label>
        </div>
        <div class="input-field col s12 m5 ">
          <input id="password" type="password" class="validate" />
          <label for="password">Password</label>
        </div>
        <div class="input-field col s12 m5 offset-m1">
          <input id="cpassword" type="password" class="validate" />
          <label for="cpassword">Confirm Password</label>
        </div>
        <div class="input-field col s12 m5 ">
          <input id="certificate" type="text" class="validate" />
          <label for="certificate">Certificate</label>
        </div>
        <div class="input-field col s12 m5 offset-m1">
          <input id="city" type="text" class="validate" />
          <label for="city">City</label>
        </div>
        <div class="input-field col s12 m5 ">
          <input id="country" type="text" class="validate" />
          <label for="country">Country</label>
        </div>
        <div class="row">
          <div class="col m3  offset-m1">
            <Link class="waves-effect waves-light btn">SIGNUP</Link>
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
