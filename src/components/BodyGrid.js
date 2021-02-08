import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minHeight: '40vh',
    display: 'flex',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  noreviews:{
    flexGrow: 1,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    minHeight: '20rem',
  },
  services:{
    width: '120px',
    marginTop: theme.spacing(1),
  },
}));

export default function FullWidthGrid(props) {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>
          Service offered:
           <Typography variant="body2">
                    <Chip label={props.service} variant="outlined" disabled size="large" color="textPrimary" className={classes.services}/>
            </Typography>
          </Paper>
        </Grid> 
      </Grid>
    </div>
  );
}
