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
        <PostLabel name={post.userName} post={post.post} />
      );
    });


    console.log(this.props.post)
    return(
      <Fragment>
        <Grid container
          direction = 'column'
          alignItems = 'stretch'
          spacing = {0}
          style={{
            minHeight : '580px',
            borderWidth: '9px',
            borderRadius: '7px',
            borderStyle :'solid',
            borderColor : '#9a9a9a',
            backgroundColor: 'rgba(58, 130, 212, 0.13)',

          }}>


              <Grid item
                lg = {12}
                style = {{
                  padding: '1%',
                  borderBottomStyle:'hidden',
                  borderBottomWidth:'4px'
                }}
                >
                  <SpaceBar/>
              </Grid>
              <Grid item lg ={12}
                style = {{
                  lineHeight: '28px',
                  paddingLeft: '18%',
                  paddingRight: '18%',
                  height: '500px',
                  overflowY: 'scroll',
                  paddingBottom : '2%',
                  borderBottomStyle:'hidden',
                  borderBottomWidth:'4px'
                }}>
                {contentItem}
              </Grid>
        </Grid>
      </Fragment>
    )
  }
}

export default ContentSpace;
