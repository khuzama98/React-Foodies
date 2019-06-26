import React from "react";
import { Redirect } from "react-router-dom";
import UserSignup from "./components/UserSignup";
import ResturantSignup from "./components/ResturantSignup";
import Login from "./components/Login";
import Home from './components/Home'
import Resturants from './components/Resturants'

export default [
  {
    path: "/",
    exact: true,
    component: UserSignup
  },
  {
    path: "/resturant-signup",
    exact: true,
    component: ResturantSignup
  },
  {
    path: "/login",
    exact: true,
    component: Login
  },
  {
    path: "/home",
    exact: true,
    component: Home
  },
  {
    path: "/resturants",
    exact: true,
    component: Resturants
  }
];
