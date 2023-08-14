// import Login from "../pages/Login";
// import About from "../pages/About";
import NotFound from "../pages/NotFound";
import HomeRecommand from "../pages/HomeRecommand";
import HomeRanking from "../pages/HomeRanking";
import Category from "../pages/Category";
import Order from "../pages/Order";
import HomeSongMenu from "../pages/HomeSongMenu";
import Detial from "../pages/Detial";
import User from "../pages/User";
import Home from "../pages/Home";
import { Navigate } from "react-router-dom";
import React from "react";
const About = React.lazy(() => import("../pages/About"))
const Login = React.lazy(() => import('../pages/Login'))
const routes = [
    {
        path: '/',
        element: <Navigate to="/home"></Navigate>,
    },
    {
        path: '/home',
        element: <Home />,
        children: [
            { path: '/home', element: <Navigate to="/home/recommand"></Navigate> },
            { path: '/home/recommand', element: <HomeRecommand></HomeRecommand> },
            { path: '/home/ranking', element: <HomeRanking></HomeRanking> },
            { path: '/home/songmenu', element: <HomeSongMenu></HomeSongMenu> },
        ]
    },
    {
        path: '/about',
        element: <About></About>
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/category',
        element: <Category></Category>
    },
    {
        path: '/order',
        element: <Order></Order>
    },
    {
        path: '/detail/:id',
        element: <Detial></Detial>
    },
    {
        path: '/user',
        element: <User></User>
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
]
export default routes