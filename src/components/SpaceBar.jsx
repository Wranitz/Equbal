import React from 'react';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const styles = {
  contentBar: {

  },



}


function SpaceBar(props) {
  const { classes } = props;
  return(
    <div className = {classes.contentBar} style = {{
        minWidth: '100%'
      }}>
      <AppBar position="static" color="default" >
         <Toolbar>
           <Grid container direction = 'row' spacing = {40} justify = 'space-between' alignItems = 'center'>
              <Grid item lg = {1}>
                <IconButton aria-label="refresh">
                  <i className = {classes.contentRefresh} class="material-icons">
                    refresh
                  </i>
                </IconButton>
              </Grid>
              <Grid item lg = {10}>
                <div className={classes.searchBar}
                  style = {{alignContent: 'center',
                    paddingLeft:'20%',
                    paddingRight:'20%',
                    width: '100%'
                  }}
                  >
                  <TextField
                       id="search"
                       label="Search"
                       type="search"
                       className = {classes.searchField}
                       style = {{
                         width: '86%'
                       }}
                       />
                  <IconButton
                      className={classes.button}
                      aria-label="Search"
                      >
                    <i className="material-icons">search</i>
                  </IconButton>
                </div>
              </Grid>
              <Grid item lg = {1}>
                <IconButton
                    className = {classes.newPost}
                    aria-label="Add post"
                    style = {{float: 'right'}}
                    >
                  <i class="material-icons">
                    add_box
                  </i>
                </IconButton>
              </Grid>
            </Grid>
          </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(SpaceBar);
