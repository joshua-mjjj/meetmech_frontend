import React, { useState }   from "react";
import { Redirect, Link }    from "react-router-dom";
import { connect }           from "react-redux";

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
import Paper from "@material-ui/core/Paper";
import FormGroup from '@material-ui/core/FormGroup';
import Container from '@material-ui/core/Container';
import { get_profiles } from "../actions/auth.js";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: "white",
    flexGrow: 1,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(1),

    "& > *": {
      margin: theme.spacing(1),
    },
  },
  wizardContainer:{
      margin: theme.spacing(1, 'auto'),
  },
  formGroupProfileSection:{
      marginTop: theme.spacing(1),
  },
  secondaryText: {
    display: 'inline-block',
    padding: '8px 0 4px',
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
    margin: theme.spacing(0, 1, 1, 0)
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

function AlignItemsList(props) {
  const classes = useStyles();

  const openProvider = (e) => {
    // window.location.href = `/providers/${props.id}`;
  }
  React.useEffect(() => {
    props.get_profiles()
  }, []);

  return (
      <Paper className={classes.root} elevation={0}>
      <Container maxWidth="md" className={classes.wizardContainer}>
        <div>
          <FormGroup className={classes.formGroupProfileSection}>  
            <List component="nav" 
              m={1} p={3} 
              className={classes.listBox}
              onClick={openProvider}>
              <ListItem alignItems="flex-start" key={props.id} className={classes.listItem}>
                  <ListItemAvatar>
                  <Avatar alt={props.name} src={props.photo} className={classes.large}/>
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
                        {props.contact}
                      </Typography>

                      <Typography variant="body2" className={classes.service}>
                        <b>Service:</b>
                      </Typography>
                     <Typography variant="body2">
                        <Chip label={props.service} variant="outlined" disabled size="small" color="textPrimary" className={classes.services}/>
                      </Typography>
                      <Typography variant="caption"> 
                        <span> {props.description}</span>
                      </Typography><br/>
                      <Typography variant="caption">
                        <span><LocationOnIcon style={{ fontSize: 12 }}/></span>
                        <span> {props.location}</span>
                      </Typography>

                      </React.Fragment>
                  }
                  />
              </ListItem>
            </List>
         </FormGroup>
        </div>
      </Container>
    </Paper>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  profiles :state.auth.profiles,
});

export default connect(mapStateToProps, { get_profiles })(AlignItemsList);
