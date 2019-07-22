import React from 'react';
import Login from './components/Login';
import Home from './components/pages/Home';
import Technical from './components/pages/Technical'
import Profile from './components/elements/Profile'

const routes  = [
    {
        path:'/',
        exact: true,
        component: ()=><Login/>
    },
    {
        path:'/home',
        exact: true,
        component: ()=><Home/>
    },
    {
        path:'/technical',
        exact: true,
        component: ()=><Technical/>
    },
    {
        path:'/profile',
        exact: true,
        component: ()=><Profile/>
    },
];

export default routes