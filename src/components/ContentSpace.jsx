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
          direction = 'row'
          justify = 'center'
          alignItems = 'stretch'
          spacing = {8}
          style={{
            height: '580px',
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
                    {contentItem}
              </Grid>
        </Grid>
      </Fragment>
    )
  }
}

export default ContentSpace;
