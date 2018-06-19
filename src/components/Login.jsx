import React, {Component , Fragment} from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = () => ({
  Lpapers: {
    height: 548,
    backgroundColor: "#2521a945",
    marginRight: 10,
    marginLeft: 10,
    padding: 50,
    paddingTop: 100


  },

  inputField : {
    textAlign : 'center'
  },

  buttons: {
    textAlign : 'right'
  },

  title : {
    textAlign : 'center'
  }

})


class Login extends Component {

  render(){
    const { classes } = this.props;

    return(
      <Fragment>
        <Paper elevation = {2} className = {classes.Lpapers}>
          <form>
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
                    />
                  <br/>
                    <TextField
                    id="password-input"
                    label="Password"
                    className={classes.fieldpassword}
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                    />
              </Grid>
              <Grid item lg = {12} className = {classes.buttons}>
                  <Button variant="raised" color="primary" className={classes.loginButton}>
                    Login
                  </Button>
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

export default withStyles(styles)(Login);
