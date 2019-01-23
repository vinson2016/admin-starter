import React, {Component} from 'react';
import PropTypes from 'prop-types';
import avatar from '../../../public/avatar.jpeg';
import {Button} from '@alifd/next';

class Home extends Component {
    static propTypes = {};

    render() {
        return (
            <div>
                <img src={avatar} width={100}/>
                <p>
                    <Button type='primary'>Hello React!</Button>
                </p>
            </div>
        );
    }
}

export default Home;
