import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import logo from '../assets/logo_15.png';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'inline-flex',
    '& > *': {
      margin:'auto',
    },
    margin: '10px',
    verticalAlign: 'middle',
    alignItems: "center",
  },
  marginAutoItem: {
    margin: 'auto',
    alignItems: 'center',
  },
  titleItem: {
    margin: '2px auto 2px 4px',
    alignItems: 'center',
    fontSize: '3.5rem',
    fontWeight: '700',
    paddingBottom: '0',
    color: 'indigo',
  },
  AvatarItem: {
    margin: '2px 2rem 2px 0',
    alignItems: 'center',
    width: '28px',
    height: '30px',
  }
}));

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box display="inline-flex">
        <Link href="/"><img alt="meetmech" src={logo} className={classes.AvatarItem}/></Link>
      </Box>
    </div>
  );
}
