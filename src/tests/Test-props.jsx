import React, { Component } from 'react';

class Main extends Component {
  render() {

    const funname = (name) => {
      return name
    }

    return(
      <React.Fragment><h1>Hello {funname(this.props.name)}</h1> </React.Fragment>
    )
  }
}

export default Main;
