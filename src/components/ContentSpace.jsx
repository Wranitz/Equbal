import React , { Component , Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import SpaceBar from './SpaceBar';
import {PostLabel} from './PostLabel';


class ContentSpace extends Component {

  constructor(props){
    super(props);
      this.state = {

      }
  }

  render(){

    const contentItem=this.props.post.map((post) => {
      return (
        <Grid item xs={12}>
          <PostLabel key = {post.postId} name={post.userName} post={post.post} />
        </Grid>
      );
    });


    console.log(this.props.post)
    return(
      <Fragment>
        <Grid container
          direction = 'row'
          justify = 'center'
          alignItems = 'stretch'
          spacing = {8}
          style={{
            height:'560px',
            maxHeight: '800px',
            borderWidth: '9px',
            borderRadius: '7px',
            borderStyle :'solid',
            borderColor : '#f5f5f5',
            borderTopStyle:'hidden',
            borderBottomStyle:'hidden',
          }}>


              <Grid item
                sm = {12}
                style = {{
                  padding: '1%',
                  paddingTop: '0'
                }}
                >
                  <SpaceBar/>
              </Grid>
              <Grid item sm ={12} style={{paddingTop:'2%',
                paddingLeft:'16%',
                paddingRight:'16%',
                overflowY:'auto',
                height:'85%'
              }}>
                <Grid container spacing ={24} alignItems = "stretch">
                    {contentItem}
                </Grid>
              </Grid>
        </Grid>
      </Fragment>
    )
  }
}

export default ContentSpace;
