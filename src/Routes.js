import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Login from './screens/Login'
import JobList from './JobList'
export default () => {
    
    return (
        <Switch>
            <Route exact path="/">
                <Login/>
            </Route>
            <Route exact path="/vaga">
                <JobList/>
            </Route>
        </Switch>
    );
}