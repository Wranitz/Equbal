import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
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
           <Grid container direction = 'row' spacing = {16} justify = 'space-between' alignItems = 'center'>
              <Grid item xs = {1} lg = {1}>
                <IconButton aria-label="refresh">
                  <i className = {classes.contentRefresh} class="material-icons">
                    refresh
                  </i>
                </IconButton>
              </Grid>
              <Grid item xs = {10} lg = {10}>
                <div className={classes.searchBar}
                  style = {{alignContent: 'center',
                    paddingLeft:'10%',
                    paddingRight:'10%',
                    width: '100%',
                    paddingBottom: '2%'
                  }}
                  >
                  <Grid container spacing = {8} justify='space-between' direction = 'row' alignItems='center'>
                    <Grid item xs ={11}>
                      <TextField
                           id="search"
                           label="Search"
                           type="search"
                           className = {classes.searchField}
                           style = {{width:'100%'}}
                           />
                    </Grid>
                    <Grid item xs ={1}>
                      <IconButton
                          className={classes.button}
                          aria-label="Search"
                          style = {{
                            paddingTop: '5%',
                            float: 'right'
                          }}
                          >
                        <i className="material-icons">search</i>
                      </IconButton>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
              <Grid item xs = {1} lg = {1}>
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
