import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PageHome from './pages/home';
import PageLogin from './pages/login';
import PageCounter from './pages/counter';
import Page404 from './pages/404';

const routes = [
    {
        path: '/',
        exact: true,
        component: PageHome
    },
    {
        path: '/counter',
        exact: false,
        component: PageCounter
    },
    {
        path: '/login',
        exact: false,
        component: PageLogin
    },
];

export default (
    <Switch>
        {routes.map((item , i) => (
            <Route
                key={i}
                exact={item.exact}
                path={item.path}
                component={item.component}
            />
        ))}

        <Route component={Page404} />
    </Switch>
)
