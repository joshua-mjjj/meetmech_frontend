import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import ImageAvatars from './LogoSearchPage';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar:{
    boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.03), 0px 1px 1px 0px rgba(0,0,0,0.03), 0px 1px 3px 0px rgba(0,0,0,0.03)",
    backgroundColor: 'white',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logo:{
    maxWidth: '10rem'
  },
  signup:{
     margin: '1rem',
     width: '8rem',
     background: '#663499',
  },
  login:{
    margin: '1rem',
    color: '#4B0082',
    borderColor: '#4B0082',
    width: '8rem',
  },
  popper: {
    maxWidth: 500,
    zIndex: 1100,
  },
  helpDropDown:{
    //color: '#4B0082',
  },
}));

export default function GuestNavBar() {
  const classes = useStyles();


  const redirect_login = (e) => { 
    window.location.href = '/login'
  }

  const redirect_signup = (e) => { 
    window.location.href = '/signup'
  }


  return (
    <div className={classes.root}>
      <AppBar position="fixed" elevation={0} color="transparent" className={classes.appBar}>
        <Toolbar>
          <ImageAvatars />
          <Typography variant="h6" className={classes.title}></Typography>

            <Chip onClick={redirect_login} label="Sign in" variant="outlined" className={classes.login}/>
            <Chip onClick={redirect_signup} label="Sign Up" variant="outlined" className={classes.login}/>
          </Toolbar>
      </AppBar>
    </div>
  );
}
