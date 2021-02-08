import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import List from '@material-ui/core/List';
import Chip from '@material-ui/core/Chip';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '100vw',
    backgroundColor: theme.palette.background.paper,
    '& span':{
        padding: '4px 0',
        margin: '4px 0',
    },
  },
  secondaryText: {
    display: 'inline-block',
    padding: '4px 0 2px',
  },
  rate: {
    textAlign: 'right',
    maxWidth: '5rem',
  },
  large: {
    width: theme.spacing(13),
    height: theme.spacing(13),
    margin: '0 2rem 0.5rem 0',
  },
  listBox:{
    backgroundColor: 'white',
    cursor: 'pointer',
    paddingTop: '0',
    paddingBottom: '0',
  },
  rating:{
    textAlign: 'right',
    maxWidth: '10rem',
  },
  services:{
    lineHeight: '3', 
    margin: theme.spacing(0, 1, 0, 1),
    marginTop: '2px'
  },
  service:{
    marginBottom: "2px",
    padding: theme.spacing(1, 0, 0)

  },
  location:{

  },
  listItem:{
    paddingTop: '0',
    paddingBottom: '0',
  },
}));

export default function AlignItemsList(props) {
  const classes = useStyles();

  const openProvider = (e) => {
   window.location.href = `/provider_view/${props.id}`;
  }
  return (
      <List component="nav" 
        m={1} p={3} 
        className={classes.listBox}
        onClick={openProvider}
        >
        <ListItem alignItems="flex-start" key={props.id} className={classes.listItem}>
            <ListItemAvatar>
            <Avatar alt={props.full_name} src={`https://meetmech-api.herokuapp.com${props.photo}`} className={classes.large}/>
            </ListItemAvatar>
            <ListItemText
            primary={
                <React.Fragment>
                    <Typography
                        variant="h6"
                        component="span"
                        color="primary"
                        className={classes.secondaryText}
                        m={0.5}
                    >
                        {props.name}
                    </Typography>                   
                </React.Fragment>
            }
            secondary={
                <React.Fragment>
                <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                >
                  {props.description}
                </Typography>

                <Typography variant="body2" className={classes.service}>
                  <b>Service:</b>
                   <Chip label={props.service} variant="outlined" disabled size="small" color="textPrimary" className={classes.services}/>
                </Typography>
                <Typography variant="caption">
                  <span><LocationOnIcon style={{ fontSize: 12 }}/></span>
                  <span> {props.location}</span>
                </Typography>

                </React.Fragment>
            }
            />
         
        </ListItem>
      </List>
  );
}
