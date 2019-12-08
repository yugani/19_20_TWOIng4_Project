import React, { PureComponent } from 'react';
import { ResponsiveContainer }  from 'recharts';
import Clock from 'react-clock'
import './App.css';

class Widget6 extends PureComponent
{
    state = {
        date: new Date(),
      }

      componentDidMount() 
      {
        setInterval(
          () => this.setState({ date: new Date() }),
          1000
        );
      }
    
      render() {
        return (
          <div style={{ width: '100%', height: 250 }}>
        <h3>
        Title
        </h3>
          <ResponsiveContainer>
          <div>
            <Clock
              value={this.state.date}
            />
          </div>
          </ResponsiveContainer>
          </div>
        );
      }      
}
export default Widget6
