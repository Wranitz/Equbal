import React , { Component , Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Login from './Login'
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import ContentSpace from './ContentSpace'

const styles = () => ({
  paper: {
    height: 480
  }
})

class Space extends Component {
  render() {
    const { classes } = this.props;
    return(
      <Fragment>
        <Grid container direction = 'row' spacing = {40} alignItems = 'center' justify = 'space-around' >
          <Grid item lg = {3}>
            <Login/>
          </Grid>
          <Grid item lg = {9}>
              <ContentSpace/>
          </Grid>
        </Grid>
      </Fragment>

    )
  }
}

export default withStyles(styles)(Space);
