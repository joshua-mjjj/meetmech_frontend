import React, { useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Input from '@material-ui/core/Input';
import Container from '@material-ui/core/Container';
import Skeleton from '@material-ui/lab/Skeleton';
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Spinner from "./Spinner";

import { create_profile, sendUserPhoto } from "../actions/auth.js";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: "white",
    flexGrow: 1,
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),

    "& > *": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.text.secondary,
  },
  imageSelector: {
    fontSize: "8rem",
  },
  tagline: {
    float: "left",
    backgroundColor: "#fafafa",
    borderRadius: "10px",
    width: "90%",
    paddingLeft: theme.spacing(1),
    "& > label": {
      paddingLeft: theme.spacing(1),
      color: "#5A5A5A",
    },
  },
  bio: {
    float: "left",
    backgroundColor: "#fafafa",
    marginTop: theme.spacing(1),
    width: "90%",
    borderRadius: "10px",
    height: "auto!important",
    paddingLeft: theme.spacing(1),
    "& > label": {
      paddingLeft: theme.spacing(1),
      color: "#5A5A5A",
    },
  },
  underline: {
    "&::before": {
      borderBottom: "none",
    },
    "&::after": {
      borderBottom: "none",
    },
  },
  headers: {
    color: "black",
  },
  root_: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(4, 0),
    },
  },
  large: {
    width: theme.spacing(16),
    height: theme.spacing(16),
    paddingLeft: theme.spacing(0),
  },
  small: {
    margin:  theme.spacing(3, 'auto', 0),
    display: "block",

  },
  input:{
    fontSize: '13px',
    color: '#1b1f23',
    border: '1px solid #cfd7de',
    borderRadius: '5px',
    padding: theme.spacing(1),
    "&::after": {
        borderBottom: '1px solid #949494',
    },
  },
  inputSmall:{
      fontSize: '13px',
      color: '#1b1f23',
      border: '1px solid #cfd7de',
      borderRadius: '5px',
      padding: theme.spacing(1),
      marginTop: theme.spacing(1),
      "&::after": {
          borderBottom: '1px solid #949494',
      },
  },
  inputSelect:{
      fontSize: '13px',
      color: '#1b1f23',
      border: '1px solid #cfd7de',
      borderRadius: '5px',
      padding: theme.spacing(1),
      width: '100%',
      marginTop: theme.spacing(1),
      "&::after": {
          borderBottom: '1px solid #949494',
      },
  },
  inputBio:{
      fontSize: '13px',
      color: '#1b1f23',
      border: '1px solid #cfd7de',
      borderRadius: '5px',
      padding: theme.spacing(1, 2, 1, 1),
      marginTop: theme.spacing(1),
      "&::after": {
          borderBottom: '1px solid #949494',
      },
  },
  wizardContainer:{
      margin: theme.spacing(1, 'auto'),
  },
  form: {
      margin: 'auto',
      '& > *': {
          margin: theme.spacing(1),
      },
  },
  formHeader:{
      margin: theme.spacing(2, 'auto', 4),
      textAlign: 'center',
  },
  formLabel:{
      fontSize: '13px',
      color: 'rgba(0, 0, 0, 0.5)',
      fontWeight: '600',
      marginBottom: theme.spacing(1),
  },
  formGroupLabel:{
      fontSize: '14px',
      color: 'rgba(0, 0, 0, 0.7)',
      fontWeight: '600',
      marginBottom: theme.spacing(2),
  },
  formGroup:{
      marginBottom: theme.spacing(3),
  },
  formGroupProfileSection:{
      marginTop: theme.spacing(2),
  },
  imageSelector: {
      fontSize: "8rem",
      paddingLeft: theme.spacing(0),
  },
  selector:{
      paddingLeft: theme.spacing(0),
  },
  instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
  },
  button: {
      marginRight: theme.spacing(1),
      backgroundColor: '#663399!important',
  },
  buttonBack: {
      marginRight: theme.spacing(1),
      marginLeft: 'auto',
  },
  buttonNext: {
      marginLeft: theme.spacing(1),
      backgroundColor: '#663399!important',
      marginRight: 'auto',
  },
  buttonSection:{
      margin: 'auto',
      float: 'right',
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
  }
}));

function BioSection(props) {
  const classes = useStyles();

  const [ photo, setPhoto ] = useState(null);
  const [ service, setService ] = useState(null);
  const [ owner_username, setOwner_username ] = useState(props.user.username);
  const [ location, setLocation ] = useState(null);
  const [ name, setName ] = useState(null);
  const [ contact, setContact ] = useState(null);
  const [ email, setEmail ] = useState(null);
  const [ other, setOther ] = useState(null);
  const [ owner, setOwner ] = useState(props.user.id);
  
  const [ updating, setUpdating ] = useState(false);


  const upload = (e) =>  {
    document.getElementById("selectImage").click()
  }
  const upload_new = (e) =>  {
    setUpdating(true)
    document.getElementById("selectImage").click()
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(photo && service && owner_username && location && name && contact && other && owner) {
      props.create_profile(service, owner_username, location, name, contact, email, other, owner)
    }
}

  React.useEffect(() => {
    if(props.auth.current !== null && photo !== null){
      // console.log(props.auth.current.id)

      const uploadData = new FormData();
      uploadData.append('photo', photo, photo.name);

      const timer = sendReq(uploadData, props.auth.current.id);
      return () => clearTimeout(timer);

      function sendReq(object, id) {
          const timer = setTimeout(() => {
          props.sendUserPhoto(object, id);   
        }, 500);
        return timer;
    }
   }  
  }, [photo, props.auth.current]);


  return (
    <Paper className={classes.root} elevation={0}>
      <Container maxWidth="md" className={classes.wizardContainer}>
        <div>
          <FormGroup className={classes.formGroupProfileSection}>
            <FormLabel component="label" className={classes.formGroupLabel}>Profile Picture</FormLabel>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={3} className={classes.selector}>
                  <FormLabel component="label" className={classes.formLabel}>Select a picture</FormLabel>

                  <div className={classes.root_}>
                    {
                      props.user.photo ? (
                        updating === false ? (
                          <div>
                            <Avatar className={classes.large} alt="profile picture" src={props.user.photo}/>
                            <Button onClick={upload_new} className={classes.small} color="primary">
                              change
                            </Button>
                          </div>
                          ):(
                          <div>
                            { photo ? 
                              (<div>
                                <Avatar className={classes.large} alt="profile picture" src={URL.createObjectURL(photo)}/>
                                <Button onClick={upload_new} className={classes.small} color="primary">
                                  change
                                </Button>
                              </div>
                              )
                               :
                              (<div> 
                                <Skeleton variant="circle" className={classes.large}/>
                                <Button disabled onClick={upload_new} className={classes.small} color="primary">
                                  change
                                </Button>
                              </div>
                              )
                            }
                            
                          </div>)
                      ):(
                        <div>
                        {
                          photo ? 
                          (  
                            <Avatar className={classes.large} alt="profile picture" src={URL.createObjectURL(photo)}/>
                          ) : 
                          (
                            <Avatar className={classes.large} onClick={upload}>
                              <FolderIcon /> <AddIcon/>
                            </Avatar> 
                          )
                        }
                        </div>
                      )
                    }
                      
                  </div>

                  <input 
                    type="file"
                    id='selectImage' 
                    hidden
                    onChange={(evt) => setPhoto(evt.target.files[0])}
                  />
              </Grid>
                
              <Grid item xs={12} sm={9}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                      <FormLabel component="label" className={classes.formLabel}>Service</FormLabel>
                      <Select
                          onChange={(e) => setService(e.target.value)}
                          disableUnderline
                          placeholder="Service"
                          displayEmpty
                          fullWidth
                          className={classes.inputSelect}
                          inputProps={{
                              "aria-label": "Select Service",
                          }}
                          >
                          <MenuItem value="wiring">Car wiring</MenuItem>
                          <MenuItem value="tyres">Wheel Alignment</MenuItem>
                          <MenuItem value="electric">Electric Cars</MenuItem>
                          <MenuItem value="engine">Engine Checking</MenuItem>
                      </Select> 
                    </Grid>
                     <Grid item xs={12} sm={6}>
                      <FormLabel component="label" className={classes.formLabel}>Location</FormLabel>
                      <Select
                          onChange={(e) => setLocation(e.target.value)}
                          disableUnderline
                          placeholder="Location"
                          displayEmpty
                          required
                          fullWidth
                          className={classes.inputSelect}
                          inputProps={{
                              "aria-label": "Select Location",
                          }}
                          >
                          <MenuItem value="kampala">Kampala</MenuItem>
                          <MenuItem value="kayinga">Kayinga</MenuItem>
                          <MenuItem value="katwe">Katwe</MenuItem>
                          <MenuItem value="kakiri">Kakiri</MenuItem>
                      </Select>  
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Input 
                      fullWidth
                      disableUnderline
                      id="name"
                      onChange={(e) => setName(e.target.value)}
                      required
                      label=""
                      placeholder="Business / Service provider's name"
                      className={classes.input}
                      />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                      <Input 
                      fullWidth
                      disableUnderline
                      id="contact"
                      required
                      onChange={(e) => setContact(e.target.value)}
                      label=""
                      placeholder="Contact"
                      className={classes.input}
                      />
                  </Grid>
                  <Grid item xs={12}>
                      <Input 
                      fullWidth
                      disableUnderline
                      id="email"
                      onChange={(e) => setEmail(e.target.value)}
                      label="Email"
                      placeholder="Bussiness's email address (Optional)"
                      // defaultValue={props.tagline}
                      className={classes.input}
                      />
                  </Grid>
                  <Grid item xs={12}>
                      <Input 
                      disableUnderline
                      fullWidth
                      onChange={(e) => setOther(e.target.value)}
                      required
                      multiline
                      rows={8}
                      id="other"
                      label="Other"
                      placeholder="Give more revelent Information clients should know about you and the services you offer"
                      defaultValue={props.bio}
                      className={classes.input}
                      />
                  </Grid>
                  <Grid container>
                    <Grid item xs={12}>
                       <Grid item xs={12}>
                          <Button
                            variant="contained"
                            color="primary"
                            style={{maxWidth: '80px', maxHeight: '35px', minWidth: '80px', minHeight: '35px'}}
                            onClick={handleSubmit}
                            className={classes.button}
                          >
                             {props.auth.isLoading ? <Spinner /> : "Create"}
                          </Button>
                       </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </FormGroup>
        </div>
      </Container>
    </Paper>
  );
}

const mapStateToProps = (state) => ({
  // error: state.errors,
  auth: state.auth,
  user: state.auth.user.user,
  // results: state.services.results,
});
export default connect(mapStateToProps, {
  create_profile,
  sendUserPhoto
})(BioSection);