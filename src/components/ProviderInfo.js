import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import Rating from '@material-ui/lab/Rating';
import { Box, Paper } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email'; 
import WbCloudyIcon from '@material-ui/icons/WbCloudy';
import CloudOffIcon from '@material-ui/icons/CloudOff';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '80vw',
    backgroundColor: 'white',
    '& span':{
        padding: '4px 0',
        margin: '4px 0',
    },
  },
  secondaryText: {
    display: 'inline-block',
    padding: '8px 0 4px',
    color: '#505050',
  },
  rate: {
    textAlign: 'right',
  },
  large: {
    width: theme.spacing(24),
    height: theme.spacing(24),
    margin: '0 2rem 0.5rem 0',
  },
  listBox:{
    backgroundColor: 'white',
    padding: '1rem',
    marginBottom: '1rem',
    marginTop: theme.spacing(10),
  },
  rating:{
    padding: '0',
    margin: '0',
  },
  inline:{
    width: '100%'
  },
  cloud: {
    fontSize: '23px',
    marginLeft: '10px',
    marginTop: '4px',
    color: 'green',
  },
}));

export default function PetProviderBio(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [status, setStatus] = React.useState("");

   React.useEffect(() => {
    if(props.status){
      setStatus(props.status[0].status)
      console.log(status)
    }        
   }, [props.status]);

  return (
      <Paper m={2} p={3} className={classes.listBox} elevation={1}>
        <List component="nav" key={props.id}>
          <ListItem>
            <ListItemAvatar>
            <Avatar src={props.image} className={classes.large} alt={props.image}/>
            </ListItemAvatar>
            
            <List component="nav" className={classes.inline}>
                <ListItemText>
                  {
                      <React.Fragment>
                          <Typography
                              variant="h5"
                              component="span"
                              color="textPrimary"
                              className={classes.secondaryText}
                              m={0.5}
                          >
                              {props.name}
                              {
                                status === "online" ? 
                                ( <span ><WbCloudyIcon className={classes.cloud}/></span> ) : 
                                ("")
                              } 
                              {
                                status === "offline" ? 
                                ( <span ><CloudOffIcon className={classes.cloud}/></span>  ) : 
                                ("")
                              } 
                          </Typography>                   
                      </React.Fragment>
                  }
              </ListItemText>
              
              <Box component="fieldset" p={0} mb={2} borderColor="transparent">
                <Typography component="legend"></Typography>
                <Rating name="rating" className={classes.rating} defaultValue={3} size="large" readOnly />
              </Box>
              <ListItemText
                secondary={
                    <React.Fragment>
                    <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                    >
                        {props.description}
                    </Typography>
                    <br/>
                     <span><LocationOnIcon style={{ fontSize: 15 }}/></span>{"  "}
                    <span style={{ fontSize: 15 }} className="location">{props.location}</span><br />
                    <span><EmailIcon style={{ fontSize: 15 }}/></span>{"  "}
                    <span style={{ fontSize: 15 }} className="location">{props.email}</span>
                    </React.Fragment>
                }
                />
                <Button variant="contained" color="primary">
                   Contact: {props.contact}
              </Button>
              </List>
              
          </ListItem>
        </List>
      </Paper>
  );
}
