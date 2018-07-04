import React, {Component , Fragment} from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { login_action } from '../actions/index';
import  { connect } from 'react-redux';

const styles = () => ({
  Lpapers: {
    backgroundColor: "#4c98",
    marginLeft: 20,
    padding: 25,
    paddingTop: 50,
    paddingBottom: 50,
    borderRadius: 14,
    
    height:555
  },

  inputField : {
    textAlign : 'center'
  },

  buttons: {
    textAlign : 'center'

  },

  loginButton:{
    paddingLeft:15,
    paddingRight : 15,
    width : 180
  },

  title : {
    textAlign : 'center'
  }

});



class Login extends Component {

  constructor(props){
    super(props);
    this.state={
      email : '',
      password : ''
    }
  }
  
  handelLogin = (e) => {
    console.log(this.state)
    this.props.login_action(this.state)
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render(){
    const { classes } = this.props;

    return(
      <Fragment>
        <Paper elevation = {2} className = {classes.Lpapers}>
          <form >
            <Grid container direction = "column"  spacing = {16} justify = 'center' alignItems = 'center' >
              <Grid item lg = {12} >
                  <Typography variant = "headline" className = {classes.title}>
                    Login Here
                  </Typography>
              </Grid>
              <Grid item lg = {12} className = {classes.inputField}>
                    <TextField
                    id="email"
                    label="Email"
                    className={classes.fieldemail}
                    margin="normal"
                    onChange={this.handleChange('email')}
                    />
                  <br/>
                    <TextField
                    id="password-input"
                    label="Password"
                    className={classes.fieldpassword}
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                    onChange={this.handleChange('password')}
                    />
              </Grid>
              <br/>
              <Grid item lg = {12} className = {classes.buttons}>
                    <Link to= '/user'>
                      <Button variant="raised" onClick = {this.handelLogin} color="primary" className={classes.loginButton}>
                          Login
                      </Button>
                    </Link>
                  <br/>
                  <Button
                    onClick = {this.resetPassword}
                    className={classes.buttonReset}>
                    <Typography color = 'primary' className = {classes.resetText} variant = "caption" align = "right" >
                      Reset Password
                    </Typography>
                  </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Fragment>
    )
  }
}

export default withStyles(styles)(connect(null, { login_action })(Login));

