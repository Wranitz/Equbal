import React , {Fragment} from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


export function PostLabel(props) {
  return(
    <Fragment>
      <Paper style = {{
          paddingTop : '3%',
          paddingRight: '5%',
          paddingLeft: '5%',
          paddingBottom : '3%',
          backgroundColor:'#e7ff8c',
        }}>
        <Grid container direction = 'column' justify = 'center' alignItems = 'stretch' >
          <Grid item>
            <Typography variant="subheading" color="inherit">
              {props.post}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant = 'caption' color = "textSecondary">
              {props.name}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <br/>
    </Fragment>
  );
}
