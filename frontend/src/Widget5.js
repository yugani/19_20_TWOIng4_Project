import { ResponsiveContainer }  from 'recharts';
import React, { PureComponent } from 'react';
import './App.css';
import img from './objcon.jpg';

class Widget5 extends PureComponent
{
    render(){
        return(
            <div style={{ width: 350, height: 200 }}>
        <h3>
        Title
        </h3>
            <ResponsiveContainer>
                <img src={img} className="a" alt="user" />
            </ResponsiveContainer>
            </div>
        );
    }
 
}
export default Widget5

/*
<label for="example">Choix :</label>
    <select id="example" class="autocomplete">
        <option value="1">Option one</option>
        <option value="2">Option two</option>
        <option value="3">Option three</option>
    </select>
*/
