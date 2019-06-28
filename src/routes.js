import React from "react";
import { Redirect } from "react-router-dom";
import UserSignup from "./components/UserSignup";
import ResturantSignup from "./components/ResturantSignup";
import Login from "./components/Login";
import Home from './components/Home'
import Resturants from './components/Resturants'
import ResturantDetails from './components/ResturantDetail'
import Chat from './components/Chat'
import Requests from './components/MyRequests'
import Orders from './components/Orders'

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
  },
  {
    path: "/resturants-details/:uid",
    exact: true,
    component: ResturantDetails
  },
  {
    path: "/chat",
    exact: true,
    component: Chat
  },
  {
    path: "/request",
    exact: true,
    component: Requests
  },
  {
    path: "/orders",
    exact: true,
    component: Orders
  }
];
