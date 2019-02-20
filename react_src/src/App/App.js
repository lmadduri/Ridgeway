import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import { HomePage } from '../HomePage';

const HomePage = () => <h2>Homepage</h2>;
const About = () => <h2>About</h2>;

class App extends Component {
    render() {
        return (
            <Router>
                <React.Fragment>
                    <Route path='/' component={HomePage}/>
                    <Route path='/about' component={About}/>
                </React.Fragment>
            </Router>
        );
    }
}

export { App };
