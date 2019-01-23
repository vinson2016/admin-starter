import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    Button
} from '@alifd/next';
import avatar from '../public/avatar.jpeg';
import './styles/global.scss';

class App extends Component {
    render() {
        return (
            <div>
                <img src={avatar} width={100} />
                <p>
                    <Button type='primary'>Hello React!</Button>
                </p>
            </div>
        );
    }
}

export default App;
