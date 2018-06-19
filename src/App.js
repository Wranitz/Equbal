import React, { Component }from 'react';
import './App.css';
import Index from './page/homepage/Index';
import IndexSpace from './page/mainpage/IndexSpace';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './components/theme';
import 'typeface-roboto';
import Space from './components/Space'


class App extends Component {
  render(){
    return(
      <MuiThemeProvider theme = {theme}>
        <CssBaseline/>
            <IndexSpace/>
      </MuiThemeProvider>
    )
  }
}

export default App;
