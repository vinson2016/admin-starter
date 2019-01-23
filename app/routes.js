import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import Page404 from './pages/404';

const Loading = () => (
    <span>Loading...</span>
);

const lazy = Name => Loadable({
    loader: () => import(`./pages/${Name}`),
    loading: Loading
});

const routes = [
    {
        path: '/',
        exact: true,
        component: 'home'
    },
    {
        path: '/counter',
        exact: false,
        component: 'counter'
    },
    {
        path: '/login',
        exact: false,
        component: 'login'
    }
];

export default (
    <Switch>
        {routes.map((item, i) => (
            <Route
                key={i}
                exact={item.exact}
                path={item.path}
                component={lazy(item.component)}
            />
        ))}

        <Route component={Page404} />
    </Switch>
);
