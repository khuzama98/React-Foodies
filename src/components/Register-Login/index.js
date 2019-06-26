import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/stylesheetSign.css";
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';

const Layout = ({ heading, children, isLogin, isSignup }) => {
  return (
    <Grid container>
      <Hidden only={['sm', 'md', 'lg', 'xl']}>
      <Grid item xs={12} className='mobImg' >
        <Grid container justify="flex-end">
          <Grid
            item
            xs={7}
            class=""
            style={{ "margin-top": "8px",paddingRight:"10px" }}
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
          </Grid>
        </Grid>
      </Grid>
      </Hidden>
      <Grid item md={6} sm={6} xs={12} >
        <Typography variant='h4' style={{ color: "#080042",textAlign:'center',margin:"30px 0" }}>
          {heading}
        </Typography>
        <Grid container>
        <Grid item xs={12}>{children}</Grid>
        </Grid>
      </Grid>
      <Hidden only='xs' >
      <Grid item md={6} sm={6} >
        <div class="signupContain">
          <div class="overlay">
            <div
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
      </Grid>
      </Hidden>
    </Grid>
  );
};

Layout.defaultProps = {
  isLogin: false,
  isSignup: false
};

export default Layout;
