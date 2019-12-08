import React, { PureComponent } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { Switch, Route } from 'react-router-dom';
import Form from './formulaire';
import Dash from './Dashboard';

export default class routes extends PureComponent 
{
    render() 
    {
        return (
            <Switch>
                <Route path="/Dash" exact component={Dash} />
                <Route path="/form" exact component={Form} />
            </Switch>);
    }
}