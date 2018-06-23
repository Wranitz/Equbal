 import React, {Component , Fragment} from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

const styles = () => ({
  formSignup : {
    backgroundColor : 'ffdd4b',
  }
});


class Signup extends Component {

  constructor(props){
    super(props);
    this.state={
      open:false
    }
  }

  componentWillReceiveProps(newProps){
    console.log("Component Recieved  nEw Set opf props ")
    this.setState({open:newProps.openstate})
  }

  handleClose = () => {
    this.props.callbackSignup(false);
    console.log('handel call')
  }

  render(){
    const { classes } = this.props;
    return (
      <Fragment>
        <Dialog
          className = { classes.formSignup }
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          >
          <DialogTitle id="form-dialog-title">Please Sign up here!</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please provide needed details.
            </DialogContentText>
              <TextField
                required
                margin="dense"
                id="firstName"
                label="First Name"
                type="Text"
                /><br/>
              <TextField
                required
                margin="dense"
                id="lastName"
                label="Last Name"
                type="email"
                />
            </DialogContent>

          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Sign Up
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    )
  }
}

export default withStyles(styles)(Signup)
