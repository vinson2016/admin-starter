import React, { Component } from 'react';
import PropTypes from 'prop-types'; // eslint-disable-line
import { Menu, Dropdown } from '@alifd/next';
import logoUrl from 'public/images/logo.png';
import avatarUrl from 'public/images/avatar.jpeg';
import './index.scss';

class BasicHeader extends Component {
    render() {
        const menu = (
            <Menu>
                <Menu.Item>个人中心</Menu.Item>
                <Menu.Item>系统设置</Menu.Item>
                <Menu.Item>重置密码</Menu.Item>
                <Menu.Item>退出登录</Menu.Item>
            </Menu>
        );
        return (
            <div className='header'>
                <div className='header__logo'>
                    <img src={logoUrl} alt='Admin Starter' />
                    <a href='/' title='Admin Starter'>Admin Starter</a>
                </div>

                <Dropdown trigger={
                    <div className='header__user'>
                        <div className='header__user__avatar'>
                            <img src={avatarUrl} alt='rmlzy' />
                        </div>
                        <div className='header__user__name'>
                            rmlzy
                        </div>
                    </div>
                }>
                    {menu}
                </Dropdown>

                <div className='header__tool'>
                    <a className='header__tool__ctrl' href='javascript:;'>首页</a>
                    <a className='header__tool__ctrl' href='javascript:;'>模块A</a>
                    <a className='header__tool__ctrl' href='javascript:;'>模块B</a>
                    <a className='header__tool__ctrl' href='javascript:;'>模块C</a>
                </div>
            </div>
        );
    }
}

BasicHeader.propTypes = {};

export default BasicHeader;
