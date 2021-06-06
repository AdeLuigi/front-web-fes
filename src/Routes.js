import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Login from './screens/Login'
import JobList from './JobList'
import Cadastro from './screens/Cadastro'
export default () => {
    
    return (
        <Switch>
            <Route exact path="/">
                <Login/>
            </Route>
            <Route exact path="/vaga">
                <JobList/>
            </Route>
            <Route exact path="/cadastro">
                <Cadastro/>
            </Route>
        </Switch>
    );
}