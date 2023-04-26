import React, { Component } from 'react'
import './Counter.css'

class Counter extends Component {
   

     constructor(props){
        super(props);
        this.state = { 
            count: 0
         } 
        this.addOne = this.addOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.reset = this.reset.bind(this);
     }

     addOne(){
        this.setState({count: this.state.count+1 })
     }

     minusOne(){
        this.setState({count: this.state.count-1 })
     }

     reset(){
        this.setState({count: 0 })
     }
    render() { 
        return (
            <div>
                <div className='header'>
                    <h1>Welcome to Counter App</h1>
                    <p>Click any of the buttons to see results</p>

                    <h1>{this.state.count}</h1>
                </div>
                <div className='counters'>
                    <div>
                        <button className='buttons' onClick={this.addOne}>Add ONe</button>
                    </div>
                    <div>
                        <button className='buttons' onClick={this.minusOne}>Minus ONe</button>
                    </div>
                    <div>
                        <button className='buttons' onClick={this.reset}>Reset</button>
                    </div>
                </div>
                
                
            </div>
        );
    }
}
 
export default Counter;