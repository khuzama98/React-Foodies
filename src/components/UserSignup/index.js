import React, { Component } from "react";
import Layout from "../Register-Login";
import { Link } from "react-router-dom";

class index extends Component {
  render() {
    return (
      <Layout heading="USER SIGNUP" isLogin={true} >
        <div class="input-field col s12 m5 offset-m1">
          <input id="name" type="text" class="validate" />
          <label for="name">Full Name</label>
        </div>
        <div class="input-field col s12 m5 ">
          <input id="email" type="text" class="validate" />
          <label for="email">Email</label>
        </div>
        <div class="input-field col s12 m5 offset-m1">
          <input id="password" type="password" class="validate" />
          <label for="password">Password</label>
        </div>
        <div class="input-field col s12 m5 ">
          <input id="cpassword" type="password" class="validate" />
          <label for="cpassword">Confirm Password</label>
        </div>
        <div class="input-field col s12 m5 offset-m1">
          <select id="type">
            <option value="" disabled selected>
              Gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div class="input-field col s12 m5 ">
          <input id="age" type="text" class="validate" />
          <label for="age">Age</label>
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
          <div class="col offset-m1 m6" style={{"margin-top":"10px"}}>
            Want to signup as resturant? <Link to='/resturant-signup' >Signup</Link>
          </div>
        </div>
      </Layout>
    );
  }
}

export default index;
