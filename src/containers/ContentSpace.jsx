import React , { Component , Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import SpaceBar from '../components/SpaceBar';
import {PostLabel} from '../components/PostLabel';
import  { connect } from 'react-redux';

class ContentSpace extends Component {

  contentItem() {
    return this.props.posts.map((post) => {
      return (
        <Grid key = {post.postId} item xs={12}>
          <PostLabel name={post.userName} post={post.post} />
        </Grid>
      );
    });
  }

  render(){

    return(
      <Fragment>
        <Grid container
          direction = 'row'
          justify = 'center'
          alignItems = 'stretch'
          spacing = {8}
          style={{
            borderWidth: '9px',
            borderRadius: '7px',
            borderStyle :'solid',
            borderColor : '#fafafa',
            borderTopStyle:'hidden',
            borderBottomStyle:'hidden',
          }}>
          


              <Grid item
                sm = {12}
                style = {{
                  padding: '1%',
                  paddingLeft: '5%',
                  paddingRight: '5%'
                }}
                >
                  <SpaceBar/>
              </Grid>
              <Grid item sm ={12} style={{
                paddingTop:'2%',
                paddingLeft:'16%',
                paddingRight:'16%',
                height:'85%',
                overflowY:'auto'
              }}>
                <Grid container spacing ={24} alignItems = "stretch" style = {{height:'700px'}}>
                    {this.contentItem()}
                </Grid>
              </Grid>
        </Grid>
      </Fragment>
    )
  }
}

function mapStateToProps(state) {
  return{
    posts: state.posts
  };
}

export default connect(mapStateToProps)(ContentSpace);
