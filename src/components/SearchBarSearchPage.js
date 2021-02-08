import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Divider from '@material-ui/core/Divider';
import TuneIcon from '@material-ui/icons/Tune';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Autocomplete from './Autocomplete.js';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 5px',
    display: 'inline-flex',
    alignItems: 'center',
    margin: '2rem auto 0',
    width: '40rem',
    borderRadius: "50px",
    border: "1px solid #dfe1e5",

  },
  input: {
    padding: '0',
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
  list: {
    paddingRight: '200px'
  }
}));

export default function CustomizedInputBase(props) {
  const classes = useStyles();
  const [Search_Input, setSearch_Input] = useState(props.search);
  const [location, setLocation] = useState(props.location);
  const [showlist, setShowlist] = useState(false);
  const [redi, setRedi] = useState('');
  
  const user_input = (UserInput) => {
    setSearch_Input(UserInput)
  }
  const refreshSearch = (e) => { 
    setRedi(true)
  }

  React.useEffect(() => {
    if (redi === true) {
      window.location.reload();
    return <Redirect to={{ pathname: `/search`, search: `?q=${Search_Input}`, state: { service: `${Search_Input}`, location: `${location}` } }}/>
    }
  }, [redi]);


  // React.useEffect(() => {
  //   if(location){
  //     setShowlist(!showlist)
  //  }  
  // }, [location]);

  const toggleList = () => {
    setShowlist(!showlist)
  }

  return (
   <div >
    <Paper component="form" className={classes.root} width="auto" elevation={0}>
      <Autocomplete 
          //suggestions={['red', 'yellow', 'green']}
          suggestions={props.auto_complete}
          user_input={user_input}
          userInput ={props.search}
          className={classes.listitem}
       />
      <Link to={{ pathname: `/search`, search: `?q=${Search_Input}`, state: { service: `${Search_Input}`, location: `${location}` } }}>
        <IconButton type="submit" className={classes.iconButton} aria-label="search">
          <SearchIcon onClick={refreshSearch}/>
        </IconButton>
      </Link>
      <Divider orientation="vertical" flexItem />
        <IconButton onClick={toggleList} className={classes.iconButton} aria-label="search">
          <TuneIcon />
        </IconButton>
          {
            location ? 
            (
               <Typography variant="body2">
                <Chip label={location} variant="outlined" disabled size="medium" color="textPrimary" className={classes.services}/>
             </Typography>
            ) : ("")
          }
      </Paper>
        <div className={classes.list}>
         {
            showlist === true ? 
            (
            <div class="suggestions3"> 
                <List component="nav" className={classes.root_} aria-label="contacts">
                  <ListItem button >
                    <ListItemText  name='kampala'  primary="Kampala" onClick={event => setLocation(event.currentTarget.getAttribute('name'))} />
                  </ListItem>
                   <ListItem button >
                    <ListItemText name='kayinga'  primary="Kayinga" onClick={event => setLocation(event.currentTarget.getAttribute('name'))}  />
                  </ListItem>
                   <ListItem button >
                    <ListItemText  name='katwe' primary="Katwe" onClick={event => setLocation(event.currentTarget.getAttribute('name'))}  />
                  </ListItem>
                  <ListItem button >
                    <ListItemText  name='kakiri' primary="Kakiri" onClick={event => setLocation(event.currentTarget.getAttribute('name'))}  />
                  </ListItem>
                </List>
             </div>
            ) : ("")
          }
      </div>
      </div>
  );
}