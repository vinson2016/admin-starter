import React, { Component } from 'react';
import PropTypes from 'prop-types'; // eslint-disable-line
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import createHistory from 'history/createHashHistory';
import { getPersistor } from '@rematch/persist';
import { PersistGate } from 'redux-persist/es/integration/react';
import './styles/global.scss';
import createStore from './store';
import models from './models';
import routes from './routes';

const history = createHistory();
const store = createStore(models);

const persistor = getPersistor();

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <PersistGate loading={null} persistor={persistor}>
                        {routes}
                    </PersistGate>
                </ConnectedRouter>
            </Provider>
        );
    }
}

export default App;
