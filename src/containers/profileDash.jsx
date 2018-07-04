import React , { Component , Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import  { connect } from 'react-redux';

class ProfileDash extends Component {


  render(){

    return(
      <Fragment>
        <h4> Hello {this.props.Username} </h4>
      </Fragment>
    )
  }
}

function mapStateToProps(state) {
  return{
    Username : state.user.name
  };
}

export default connect(mapStateToProps)(ProfileDash);
