import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

// Inspired by the former Facebook spinners.
const useStylesFacebook = makeStyles((theme) => ({
  root: {
    position: 'relative',
    paddingTop: '6px',
  },
  bottom: {
    color: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  top: {
    color: 'white',
    animationDuration: '550ms',
    left: 0,
  },
  circle: {
    strokeLinecap: 'round',
  },
}));

function FacebookCircularProgress(props) {
  const classes = useStylesFacebook();

  return (
    <div className={classes.root}>
      
      <CircularProgress
        variant="indeterminate"
        disableShrink
        className={classes.top}
        classes={{
          circle: classes.circle,
        }}
        size={20}
        thickness={5}
        {...props}
      />
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function Spinner() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FacebookCircularProgress />
    </div>
  );
}
