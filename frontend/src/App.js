import './App.css';
import React, { PureComponent } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from "styled-components";
import Form from './formulaire';
import Home from './Dashboard';
//import { NavLink } from 'react-router-dom'
//import { Navbar, Nav, NavItem } from 'react-bootstrap'
//import { Row, Col } from 'reactstrap';
//import Routes from './routes';
export const Container = styled.div``;

class Example extends PureComponent
{
  render() {
    return (

<Container>
  
    <Router>
        <div>
            <h2>IOT Dashboard</h2>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <ul className="navbar-nav mr-auto">
                        <li><Link to={'/Dashboard'} className="nav-link"> Home </Link></li>
                        <li><Link to={'/formulaire'} className="nav-link">Contact</Link></li>
                    </ul>
                </nav>
                
                <hr/>
                    <Switch>
                        <Route exact path='/Dashboard' component={Home} />
                        <Route path='/formulaire' component={Form} />
                    </Switch>
        </div>
    </Router>

</Container>);
  }
}
export default Example;