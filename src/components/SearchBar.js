import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';
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
  root2: {
    padding: '2px 25px',
    display: 'flex',
    alignItems: 'center',
    margin: '1rem auto',
    width: '15rem',
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
  services:{
    lineHeight: '3', 
    margin: theme.spacing(0, 1, 1, 0)
  },
   root_: {
    width: '100%',
    maxWidth: '100vw',
    backgroundColor: theme.palette.background.paper,
    '& span':{
        padding: '2px 0',
        margin: '2px 0',
    },
    padding: '2px 0',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      
    }
  },
  single : {
    marginRight: '15px'
  }
}));

export default function CustomizedInputBase(props) {
  const classes = useStyles();
  const [Search_Input, setSearch_Input] = useState('');
  const [location, setLocation] = useState('');
  const [showlist, setShowlist] = useState(false);
  
   React.useEffect(() => {
    if(location){
      setShowlist(!showlist)
   }  
  }, [location]);

  // React.useEffect(() => {
  //   if(location && Search_Input){
  //    console.log(location)
  //    console.log(Search_Input)
  //  }  
  // }, [location, Search_Input]);

  const user_input = (UserInput) => {
    setSearch_Input(UserInput)
  }

  const toggleList = () => {
    setShowlist(!showlist)
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
            <Link to={{ pathname: `/search`, search: `?q=${Search_Input}`, state: { service: `${Search_Input}`, location: `${location}` } }}>
              <IconButton type="submit" className={classes.iconButton} aria-label="search">
                <SearchIcon />
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
          {
            showlist === true ? 
            (
            <div class="suggestions2"> 
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

                  <ListItem button >
                    <ListItemText  name='Nsambya' primary="Nsambya" onClick={event => setLocation(event.currentTarget.getAttribute('name'))}  />
                  </ListItem>
                   <ListItem button >
                    <ListItemText  name='Entebbe' primary="Entebbe" onClick={event => setLocation(event.currentTarget.getAttribute('name'))}  />
                  </ListItem>
                    <ListItem button >
                    <ListItemText  name='Munyonyo' primary="Munyonyo" onClick={event => setLocation(event.currentTarget.getAttribute('name'))}  />
                  </ListItem>
                    <ListItem button >
                    <ListItemText  name='Wandegeya' primary="Wandegeya" onClick={event => setLocation(event.currentTarget.getAttribute('name'))}  />
                  </ListItem>
                  </List> 
             </div>
            ) : ("")
          }
         </Grid>
    </Grid>
    
  );
}
