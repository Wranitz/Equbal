import React, { Component } from 'react';
import './App.css';
import 'typeface-roboto';
import Main from './tests/Main';

class App extends Component {
  constructor() {
    super();
      this.state = {value: '',
                    name:''
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
    this.setState({name: event.target.value})
    }

    handleSubmit = (event) => {
      this.setState({value: this.state.name})
    }

  render() {
    return (
      <div className="App">
          <input onChange={this.handleChange} placeholder = "Name"></input> <br/>
          <button onClick ={this.handleSubmit} >Submit</button> <br/>
          <Main name = {this.state.value}/>
      </div>
    );
  }
}

export default App;
