import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Button} from '@alifd/next';

@connect(
    state => ({
        loadings: state.loading.effects.Counter,
        count: state.Counter.count
    }),
    dispatch => ({
        increase: dispatch.Counter.increase,
        decrease: dispatch.Counter.decrease
    })
)
class Counter extends Component {
    static propTypes = {};

    render() {
        const {count, increase, decrease} = this.props;
        return (
            <div>
                <h4>The count is: {count}</h4>
                <p>
                    <Button style={{marginRight: 5}} onClick={() => decrease(1)}>减一</Button>
                    <Button type='primary' onClick={() => increase(1)}>加一</Button>
                </p>
            </div>
        );
    }
}

export default Counter;