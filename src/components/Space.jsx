import React , { Component , Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Login from './Login'
import { withStyles } from '@material-ui/core/styles';
import ContentSpace from './ContentSpace';
import Paper from '@material-ui/core/Paper';

const styles = () => ({
  paper: {
    height: 350
  }
})

class Space extends Component {

  constructor(props){
    super(props);
    this.state = {
      login : 'false'
    }
  }

  postCategory() {
    return this.props.posts
    }

  render() {
    const { classes } = this.props;
    return(
      <Fragment>
        <Grid container direction = 'row' spacing = {40} alignItems = 'center' justify = 'space-around' >
          <Grid item lg = {3}>
            <Login/>
          </Grid>
          <Grid item lg = {6}>
              <ContentSpace post = {this.postCategory()}/>
          </Grid>
          <Grid item lg = {3}>
            <Paper>
              <h3>Hello</h3>
            </Paper>
          </Grid>
        </Grid>
      </Fragment>

    )
  }
}

export default withStyles(styles)(Space);
