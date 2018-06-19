import React, { Component }from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Signup from "./Signup";
import Grid from '@material-ui/core/Grid';


  const styles = () => ({

    search: {
      flexGrow: 2,
      textAlign: 'center'
    },

    title: {
      textAlign: 'center',
    },

    header : {
      flexGrow : 1
    },

    headButtons: {
      textAlign: 'right'
    }


  });





class Header extends Component  {

  constructor(props){
    super(props);
    this.state = {
      Signup : false
    }
  }

  handelSignup = () =>{
    this.setState({Signup : true})
    console.log('header signup')
  }

  callBack = (state) => {
      this.setState({Signup: state})
      console.log("Close Call")
  }



  render(){
    const { classes } = this.props;

    return(
        <AppBar color = 'primary' className = { classes.header } position="static">
          <Toolbar>
            <Grid container direction = 'row'
              alignItems = 'center'
              justify = 'space-around'
              spacing = {24}
              >
              <Grid item lg = {2}>
                <Typography variant="display1" color="inherit" className = { classes.title }>
                  Equbal
                </Typography>
              </Grid>
              <Grid item className = {classes.search} lg = {8}>

              </Grid>
              <Grid item lg = {2}>
                <div className = {classes.headButtons}>
                  <Button onClick = {this.handelSignup} color = 'inherit'>
                    <Typography variant="subheading" color="inherit" align= 'center'>
                      Sign Up!
                    </Typography>
                  </Button>
                  <Signup callbackSignup = {this.callBack.bind(this)} openstate = {this.state.Signup}/>
                </div>
              </Grid>
      </Grid>
    </Toolbar>
      </AppBar>

    )
  }
}

export default withStyles(styles)(Header);
