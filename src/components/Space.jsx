import React , { Component , Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import ProfileDash from '../containers/profileDash';
import { withStyles } from '@material-ui/core/styles';
import ContentSpace from '../containers/ContentSpace';
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


  render() {
    const { classes } = this.props;
    return(
      <Fragment>
        <Grid
          container direction = 'row'
          spacing = {32}
          justify = 'space-around'
          alignItems='stretch'
          >
          <Grid item xs = {12} sm={2} lg = {3}>
            <ProfileDash/>
          </Grid>
          <Grid item xs={12} sm ={10} lg = {7} >
              <ContentSpace />
          </Grid>
          <Grid item xs ={12} sm={2} lg = {2}>
            <Paper>
              <h4>Hello</h4>
            </Paper>
          </Grid>
        </Grid>
      </Fragment>

    )
  }
}

export default withStyles(styles)(Space);
