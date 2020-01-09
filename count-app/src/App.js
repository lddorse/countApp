import React from 'react';
import './App.css';
import randomcolor from "randomcolor"

class App extends React.Component {
    constructor(){
      super()
      this.state = {
        count: 3 ,
        color: ""
      }
      this.increment = this.increment.bind(this)
      this.decrement = this.decrement.bind(this)
    }
  
    increment(){
      this.setState(prevState => {
        return {
          count: prevState.count + 1
        }
      })
    }
    decrement(){
      this.setState(prevState => {
        return {
          count: prevState.count - 1
        }
      })
    }
    componentDidUpdate(prevProps, prevState){
      if(prevState.count !== this.state.count){
      const newColor = randomcolor()
      this.setState({color: newColor})
      }
    }
    render(){
      return (
        <div>
          <h1 style={{color: this.state.color}}>{this.state.count}</h1>
          <button onClick={this.increment}> ADD!</button>
        
          <button onClick={this.decrement}> SUB!</button>
        </div>
      )
    }

  }
export default App;
