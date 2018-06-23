import React, { Component , Fragment }from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Space from '../../components/Space';
import {posts} from '../../database/store'


class IndexSpace extends Component {

  constructor(props){
    super(props);
    this.state = {
      posts
    }
  }

  render(){
    return(
      <Fragment>
        <CssBaseline/>
          <Grid
            container
            alignItems = 'center'
            justify = 'space-around'
            direction = 'row'
            spacing = {24}
            style={{
              backgroundColor: 'rgba(58, 130, 212, 0.13)'
            }}>
            <Grid item xs={12} lg ={12} >
              <Header/>
            </Grid>

            <Grid item xs={12} lg = {12}>
              <Space posts = {this.state.posts}/>
            </Grid>

            <Grid item xs={12} lg = {12}>
              <Footer/>
            </Grid>
          </Grid>
      </Fragment>
    )
  }
}

export default IndexSpace;
