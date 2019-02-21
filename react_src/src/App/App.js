import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Layout } from '../components';
// import { HomePage } from '../HomePage';

// Basic wireframe outline
// https://docs.google.com/document/d/1ANRud8zoJLTlxGbFBvSQs6VTvj1fr8rBhlJ4DXCK7nQ/edit
import { LandingPage } from '../LandingPage';
import { EntryPage } from '../EntryPage';
import {
  CompanySignUpPage,
  CompanyLogInPage,
  CompanyDashboardPage,
  StudentsPage,
  StudentProfilePage,
} from '../CompanyPages';
import {
  StudentSignUpPage,
  StudentLogInPage,
  StudentDashboardPage,
  CompaniesPage,
  CompanyProfilePage,
} from '../StudentPages';

const NotFoundPage = () => <h2>404 Page Not Found</h2>;

class App extends Component {
  render () {
    return (
      <Router>
        <React.Fragment>
          <Switch>
            <Route exact path='/' component={LandingPage}/>
            <Route path='/iama' component={EntryPage}/>

            <Route path='/student/signup' component={StudentSignUpPage}/>
            <Route path='/student/login' component={StudentLogInPage}/>
            <Route path='/student/:id/dashboard' component={StudentDashboardPage}/>
            <Route path='/companies' component={CompaniesPage}/>
            <Route path='/company/:id' component={CompanyProfilePage}/>

            <Route path='/company/signup' component={CompanySignUpPage}/>
            <Route path='/company/login' component={CompanyLogInPage}/>
            <Route path='/company/:id/dashboard' component={CompanyDashboardPage}/>
            <Route path='/students' component={StudentsPage}/>
            <Route path='/student/:id' component={StudentProfilePage}/>

            <Route component={NotFoundPage}/>
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export { App };
