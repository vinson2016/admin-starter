import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './styles/global.scss';
import HomePage from './pages/home';
import LoginPage from './pages/login';
import AboutPage from './pages/about';

class App extends Component {
    render() {
        return (
            <Router>
                <React.Fragment>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/login'>Login</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                    </ul>

                    <Route exact path='/' component={HomePage} />
                    <Route path='/about' component={AboutPage} />
                    <Route path='/login' component={LoginPage} />
                </React.Fragment>
            </Router>
        );
    }
}

export default App;
