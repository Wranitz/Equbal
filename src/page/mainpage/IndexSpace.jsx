import React, { Component , Fragment }from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Space from '../../components/Space';


class IndexSpace extends Component {
  render(){
    return(
      <Fragment>
        <CssBaseline/>
          <Grid container alignItems = 'stretch' direction = 'column' spacing = {8}  >
            <Grid item lg ={12} >
              <Header/>
            </Grid>

            <Grid item lg = {12}>
              <Space/>
            </Grid>

            <Grid item lg = {12}>
              <Footer/>
            </Grid>
          </Grid>
      </Fragment>
    )
  }
}

export default IndexSpace;
