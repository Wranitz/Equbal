import React, { Component , Fragment }from 'react';
import HomePage from '../../components/HomePage';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

class Index extends Component {
  render(){
    return(
      <Fragment>
        <CssBaseline/>
          <Grid container alignItems = 'stretch' direction = 'column' spacing = {24} >
            <Grid item lg ={12} >
              <Header/>
            </Grid>

            <Grid item lg = {12}>
              <HomePage/>
            </Grid>

            <Grid item lg = {12}>
              <Footer/>
            </Grid>
          </Grid>
      </Fragment>
    )
  }
}

export default Index;
