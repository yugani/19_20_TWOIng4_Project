import { Container } from "react-bootstrap"
import './App.css';
import React, { PureComponent } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Widget1 from './Widget1';
import Widget2 from './Widget2';
import Widget3 from './Widget3';
import Widget4 from './Widget4';
import Widget6 from './Widget6';
import { Row, Col } from 'reactstrap';
import Widget5 from "./Widget5";
//import Routes from './routes';
//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
//import styled from "styled-components";
//import Form from './formulaire';

class dash extends PureComponent
{
    render() 
    {
      return(

        <Container>
        
            <Row>

                <Col xs="12" sm="6" md="5" xl="4" className="widget1"><Widget1 /></Col>                    

                <Col xs="12" sm="6" md="5" xl="4" className="widget2"><Widget2 /></Col>                    
           
                <Col xs="12" sm="6" md="5" xl="3" className="widget3"><Widget3 /></Col>                    
                
            </Row>
    
            <Row>
    
                <Col xs="12" sm="6" md="5" xl="4" className="widget4"><Widget4 /></Col>
                <Col xs="12" sm="6" md="5" xl="4" className="widget5"><Widget5 /></Col>
                <Col xs="12" sm="6" md="5" xl="3" className="widget6"><Widget6 /></Col>
    
            </Row>

        </Container>);
    }
}
export default dash;
