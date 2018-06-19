import React, { Component , Fragment}from 'react';
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const styles = () => ({
    footer: {
      padding: 15,
    },

});



class Footer extends Component {
  render(){
    const {classes} = this.props;
    return(
      <Fragment>
        <AppBar color = 'primary' position="static" className = {classes.footer}>
          <Grid container alignItems = "center" direction = 'row'>
            <Grid item lg = {7}>
              <i className = "material-icons">
                copyright
              </i>
                   XYZ inc ltd, All Rights Reserved
            </Grid>

            <Grid item lg = {5}>
              I
            </Grid>
          </Grid>
        </AppBar>
      </Fragment>
    )
  }
}

export default withStyles(styles)(Footer);
