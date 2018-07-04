import React, { Component }from 'react';
import routes from './routes';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './components/theme';
import { BrowserRouter } from 'react-router-dom';
import 'typeface-roboto';



class App extends Component {
  render(){
    return(
      <MuiThemeProvider theme = {theme}>
        <BrowserRouter>
            {routes}
        </BrowserRouter>
      </MuiThemeProvider>
    )
  }
}

export default App;
