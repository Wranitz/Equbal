import React , { Component , Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Login from './Login'
import { withStyles } from '@material-ui/core/styles';
import ContentSpace from './ContentSpace';
import Paper from '@material-ui/core/Paper';

const styles = () => ({
  paper: {

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
        <Grid
          container direction = 'row'
          spacing = {32}
          alignItems = 'center'
          justify = 'space-around'
          alignItems='center'

           >
          <Grid item xs = {12} sm={2} lg = {3}>
            <Login/>
          </Grid>
          <Grid item xs={12} sm ={10} lg = {7} >
              <ContentSpace
                post = {this.postCategory()}/>
          </Grid>
          <Grid item xs ={12} sm={2} lg = {2}>
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
