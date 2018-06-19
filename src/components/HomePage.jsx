import React, { Component , Fragment }from 'react';
import Grid from '@material-ui/core/Grid';
import Login from './Login'
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import Signup from "./Signup";

const styles = () => ({

  Introtext: {
    padding: 150,
    color: '#212121',

  },

  buttonSignup: {
    padding:40,
    align : 'center',
    backgroundColor : "#7ecb20"
  },


  semiIntro : {
    color : '#212121'
  },

  grid : {
    height : 580,
    backgroundColor : '#ffdd4b',
  },


})



class HomePage extends Component {

  constructor(){
    super();
    this.state = {
      signUp: false,
    }
  }


  callBack = (state) => {
      this.setState({signUp: state})
      console.log("Close Call ")
  }

  handelSignup = () =>{
    this.setState({signUp : true})
    console.log('signup clicked');
  }

  render(){
    const { classes } = this.props;
    return(
      <Fragment>
        <CssBaseline>
                <Grid container className = {classes.grid}
                  justify = 'space-around'
                  alignItems = 'center'
                  alignContent = 'center'
                  direction = 'column'
                  spacing={32}
                  >
                    <Grid item lg = {6} >
                        <Typography color = 'primary'
                          className = {classes.Introtext}
                          variant = "headline"
                          align = "center" >
                          Lorem ipsum dolo akashd kajh asd abada a,sa a, ,maj aks as aj a mad adadalksdj lakdj akalskd aksd as a
                        </Typography>
                    </Grid>

                    <Grid item lg = {4}>
                      <Login/>
                    </Grid>

                    <Grid item lg = {2}>
                      <Grid container
                        direction = 'column'
                        justify = 'space-between'
                        className = {classes.semiText}
                        >

                        <Grid item>
                          <Button color = 'primary'
                            onClick = {this.handelSignup}
                            variant="contained"
                            className={classes.buttonSignup}
                            >
                              Sign Up!
                          </Button>
                          <Signup callbackSignup = {this.callBack.bind(this)}
                            openstate = {this.state.signUp}
                            />
                        </Grid>
                      </Grid>
                    </Grid>
                </Grid>
      </CssBaseline>
    </Fragment>
  )
  }
}

export default withStyles(styles)(HomePage);
