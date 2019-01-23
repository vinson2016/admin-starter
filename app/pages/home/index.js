import React, { Component } from 'react';
import PropTypes from 'prop-types'; // eslint-disable-line
import {
    Grid,
    Card
} from '@alifd/next';

const { Row, Col } = Grid;

const commonProps = {
    style: { width: '100%' },
    subTitle: 'SubTitle',
    extra: 'Link'
};

class Home extends Component {
    static propTypes = {};

    render() {
        return (
            <div>
                <Row gutter={15} style={{ marginBottom: 15 }}>
                    <Col span='8'>
                        <Card {...commonProps} title='Simple Card'>
                            <div className='card-placeholder' />
                        </Card>
                    </Col>
                    <Col span='8'>
                        <Card {...commonProps} title='Simple Card'>
                            <div className='card-placeholder' />
                        </Card>
                    </Col>
                    <Col span='8'>
                        <Card {...commonProps} title='Simple Card'>
                            <div className='card-placeholder' />
                        </Card>
                    </Col>
                </Row>
                <Row gutter={15} style={{ marginBottom: 15 }}>
                    <Col span='8'>
                        <Card {...commonProps} title='Simple Card'>
                            <div className='card-placeholder' />
                        </Card>
                    </Col>
                    <Col span='8'>
                        <Card {...commonProps} title='Simple Card'>
                            <div className='card-placeholder' />
                        </Card>
                    </Col>
                    <Col span='8'>
                        <Card {...commonProps} title='Simple Card'>
                            <div className='card-placeholder' />
                        </Card>
                    </Col>
                </Row>
                <Row gutter={15} style={{ marginBottom: 15 }}>
                    <Col span='8'>
                        <Card {...commonProps} title='Simple Card'>
                            <div className='card-placeholder' />
                        </Card>
                    </Col>
                    <Col span='8'>
                        <Card {...commonProps} title='Simple Card'>
                            <div className='card-placeholder' />
                        </Card>
                    </Col>
                    <Col span='8'>
                        <Card {...commonProps} title='Simple Card'>
                            <div className='card-placeholder' />
                        </Card>
                    </Col>
                </Row>
                <Row gutter={15} style={{ marginBottom: 15 }}>
                    <Col span='8'>
                        <Card {...commonProps} title='Simple Card'>
                            <div className='card-placeholder' />
                        </Card>
                    </Col>
                    <Col span='8'>
                        <Card {...commonProps} title='Simple Card'>
                            <div className='card-placeholder' />
                        </Card>
                    </Col>
                    <Col span='8'>
                        <Card {...commonProps} title='Simple Card'>
                            <div className='card-placeholder' />
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Home;
