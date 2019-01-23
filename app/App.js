import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import createHistory from 'history/createHashHistory';
import './styles/global.scss';
import createStore from './store';
import models from './models';
import routes from './routes';

const history = createHistory();
const store = createStore(models);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    {routes}
                </ConnectedRouter>
            </Provider>
        );
    }
}

export default App;
