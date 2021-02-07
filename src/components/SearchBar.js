import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import TuneIcon from '@material-ui/icons/Tune';

import Autocomplete from './Autocomplete.js';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 25px',
    display: 'flex',
    alignItems: 'center',
    margin: '1rem auto',
    width: '35rem',
    borderRadius: "50px",
    border: "1px solid #dfe1e5",
    [theme.breakpoints.down('sm')] : {
      width: 'auto',
      margin: '1rem 0.5rem',
    }
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    fontSize: 'medium',
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  listitem:{
    listStyle: 'none',
  },
}));

export default function CustomizedInputBase(props) {
  const classes = useStyles();
  const [Search_Input, setSearch_Input] = useState('');
  
  const user_input = (UserInput) => {
    setSearch_Input(UserInput)
  }
  return (
     <Grid container spacing={0}>
        <Grid item xs={12} sm={12} md={12}>
          <Paper component="form" className={classes.root} width="auto" elevation={0}>
            <Autocomplete 
                suggestions={props.auto_complete}
                user_input={user_input}
                className={classes.listitem}
             />
            <Link to={{ pathname: `/search`, search: `?q=${Search_Input}`, state: { detail: `${Search_Input}` } }}>
              <IconButton type="submit" className={classes.iconButton} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Link>
             <Divider orientation="vertical" flexItem />
              <IconButton type="submit" className={classes.iconButton} aria-label="search">
                <TuneIcon />
              </IconButton>
          </Paper>
         </Grid>
    </Grid>
    
  );
}
