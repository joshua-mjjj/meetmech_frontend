import React from 'react';

import { connect } from 'react-redux';

import Container from '@material-ui/core/Container'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import green from '@material-ui/core/colors/green';
import Zoom from 'react-reveal/Zoom';

import About_ from "../components/About_"
import GuestNavBar from "../components/GuestNavBar"
import AuthorizedUserHomepageNavbar from "../components/AuthorizedUserHomepageNavbar";

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: green,
  },
  status: {
    danger: 'orange',
  },
});



function About (props)  {

  return (
    <div className="App">
        <div>
          {
          props.auth.isAuthenticated ? 
          ( <AuthorizedUserHomepageNavbar />) 
           :
          ('')
         }
        </div>
         <div>
          {
          !(props.auth.token) ? 
          (  <GuestNavBar />) 
           :
          ('')
         }
        </div>
      <MuiThemeProvider theme={theme}>
        <Zoom>
          <Container> 
              <br />
              <br />
              <br />
              <br />
              <br />
              <About_ />
          </Container>
        </Zoom>
      </MuiThemeProvider>
    </div>

  );
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, null)(About);

