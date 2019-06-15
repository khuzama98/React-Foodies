import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/stylesheetSign.css";

const Layout = ({ heading, children, isLogin, isSignup }) => {
  return (
    <div class="container-fluid">
      <div class="row" style={{ "margin-bottom": "0px" }}>
        <div class="col s12 mobImg hide-on-med-and-up">
          <div class="container">
            <div class="row">
              <div
                class="col s7 offset-s5 right-align"
                style={{ "margin-top": "8px" }}
              >
                {isLogin && (
                  <Link to="/login" class="myLinks">
                    LOGIN
                  </Link>
                )}
                {isSignup && (
                  <Link to="/" class="myLinks">
                    SIGNUP
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
        <div class="col m6">
          <h3 class="center-align" style={{ color: "#080042" }}>
            {heading}
          </h3>
          <div class="col s12">{children}</div>
        </div>
        <div class="col m6 hide-on-small-only" style={{ padding: "0px" }}>
          <div class="signupContain">
            <div class="overlay">
              <div
                class="col m4 offset-m8"
                style={{ padding: "10px", textAlign: "right" }}
              >
                {isLogin && (
                  <Link to="/login" class="myLinks">
                    LOGIN
                  </Link>
                )}
                {isSignup && (
                  <Link to="/" class="myLinks">
                    SIGNUP
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Layout.defaultProps = {
  isLogin: false,
  isSignup: false
};

export default Layout;
