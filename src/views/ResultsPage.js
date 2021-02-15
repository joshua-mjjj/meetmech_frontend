import React, {  Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import PropTypes from "prop-types"
import { Redirect } from 'react-router-dom';
import { getsuggestions, getresults } from '../actions/results';
// import { getresults, getsuggestions, getresults_query, deinit_fetch, clear_state } from '../actions/results';

import AlignItemsList      from '../components/SearchItem'
import CustomizedInputBase from "../components/SearchBarSearchPage"
import CustomizedTabs      from "../components/SearchFilterTabHost"
import ImageAvatars        from "../components/LogoSearchPage.js"
import Share               from '../components/Share.js';
import GoogleMap           from "./Map.js";

import Container           from '@material-ui/core/Container'
import List      from '@material-ui/core/List';
import { Paper } from '@material-ui/core';
import GuestNavBar from "../components/GuestNavBar"
import AuthorizedUserHomepageNavbar from "../components/AuthorizedUserHomepageNavbar";
import Link  from '@material-ui/core/Link';
import { Alert, AlertTitle } from '@material-ui/lab';
import Popper from '@material-ui/core/Popper';
import Spinner from "../components/Spinner_results";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    color: '#5c5c5c',
    fontSize: '1.5rem',
    lineHeight: '2.5rem',
    textAlign: 'left',

  },
   paper: {
    padding: theme.spacing(2),
  }
}));



function ResultsPage(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const redirect_signup = (e) => { 
    window.location.href = '/signup'
  }

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;


  const [search, setSearch] = React.useState(props.location.state.service);
  const [location, setLocation] = React.useState(props.location.state.location);

   React.useEffect(() => {
    if (props.location.state.service === 'undefined' || !props.location.state.location) {
        window.location.href = "/";
    }
  }, []);


   React.useEffect(() => {
    if(location && search){
     console.log(location)
     console.log(search)
   }  
  }, [location, search]);

  React.useEffect(() => {
	props.getsuggestions()  		   
 }, []);

    React.useEffect(() => {
    	console.log(search)
    	console.log(location)
		if(props.location.state.service && props.location.state.location){
			props.getresults(props.location.state.service, props.location.state.location);
		}	   
  }, []);

 	const searchInput = props.location.state.service
		if(props.results_null === true){
			return (
		   <Fragment>
			<div>
	          	{
	           	props.auth.isAuthenticated ? 
	           	( <AuthorizedUserHomepageNavbar />) 
	           	 :
	           	('')
	           }
	          </div>
	           <div>
	          	{
	           	!(props.auth.token) ? 
	           	(  <GuestNavBar />) 
	           	 :
	           	('')
	           }
	          </div>
			<Container className="container"  disableGutters="true">
				<Paper className="search-section" elevation={0}>
					<ImageAvatars />
					<CustomizedInputBase 
						search={props.location.state.service} 
						auto_complete={props.autocompletes}
					/>
					<CustomizedTabs  />
				</Paper>
				 <div className={classes.root}>
				  {`Your search for `} <b>{props.location.state.service}</b>{` in `}<b>{props.location.state.location}</b>{` did not match any motor service providers we currently have on the meetmech.`}
		            <br />
		            <br />
					<Alert severity="info" icon={false}>
		              <AlertTitle > <span  style={{'fontSize': '15px'}}>{"Are you a motor service provider? "} </span>
		                <Link variant="h6" color="primary" onClick={redirect_signup}>Join us</Link> or 
		                <Link variant="h6" color="primary" onClick={handleClick} > Invite </Link> 
		                 <Popper id={id} open={open} anchorEl={anchorEl}>
		                 <Paper className={classes.paper}><Share /></Paper>
		                </Popper>
		                <span  style={{'fontSize': '15px'}}>people who work in motors and mechanics</span>
		              </AlertTitle>
		            </Alert> 
				 </div>
	      </Container>
		</Fragment>
	)
  }

          if(props.tab === "location"){
			return (
		   <Fragment>
			<div>
	          	{
	           	props.auth.isAuthenticated ? 
	           	( <AuthorizedUserHomepageNavbar />) 
	           	 :
	           	('')
	           }
	          </div>
	           <div>
	          	{
	           	!(props.auth.token) ? 
	           	(  <GuestNavBar />) 
	           	 :
	           	('')
	           }
	          </div>
			<Container className="container"  disableGutters="true">
				<Paper className="search-section" elevation={0}>
					<ImageAvatars />
					<CustomizedInputBase 
						search={props.location.state.service} 
						auto_complete={props.autocompletes}
					/>
					<CustomizedTabs  />
				</Paper>
				  <GoogleMap  
		            google={props.google}
		            center={{lat: "0.3435654", lng: "32.356533" }}
		            height='500px'
		            zoom={9}
		            />
	      </Container>
		</Fragment>
	)
  } 

    if(props.spinner === true){
			return (
		   <Fragment>
			<div>
	          	{
	           	props.auth.isAuthenticated ? 
	           	( <AuthorizedUserHomepageNavbar />) 
	           	 :
	           	('')
	           }
	          </div>
	           <div>
	          	{
	           	!(props.auth.token) ? 
	           	(  <GuestNavBar />) 
	           	 :
	           	('')
	           }
	          </div>
			<Container className="container"  disableGutters="true">
				<Paper className="search-section" elevation={0}>
					<ImageAvatars />
					<CustomizedInputBase 
						search={props.location.state.service} 
						auto_complete={props.autocompletes}
					/>
					<CustomizedTabs  />
				</Paper>
				 <Spinner  />
	      </Container>
		</Fragment>
	)
  } 

	  return (
		<Fragment>
			<div>
	          	{
	           	props.auth.isAuthenticated ? 
	           	( <AuthorizedUserHomepageNavbar />) 
	           	 :
	           	('')
	           }
	          </div>
	           <div>
	          	{
	           	!(props.auth.token) ? 
	           	(  <GuestNavBar />) 
	           	 :
	           	('')
	           }
	          </div>
			<Container className="container"  disableGutters="true">
				<Paper className="search-section" elevation={0}>
					<ImageAvatars />
			        <CustomizedInputBase 
						search={props.location.state.service}
						location={props.location.state.location} 
						auto_complete={props.autocompletes}
					/>
					<CustomizedTabs />
				</Paper>
				
					<List className="search-list">
						{props.results && props.results.map((result, idx) => 
							<AlignItemsList searchInput={searchInput} key={result.id} id={result.id} status={result.status[0].status} description={result.other} service={result.service} location={result.location} name={result.name} contact={result.contact} photo={result.photo}/>
						)}
					</List>
					
	      </Container>
		</Fragment>
    	)
}

const mapStateToProps = state => ({
	auth: state.auth,
	results: state.results.results,
	tab:  state.results.tab,
	results_null: state.results.results_null,
	// query: state.results.query,
	autocompletes: state.results.autocompletes,
	spinner: state.results.spinner
});

export default connect(mapStateToProps, { getsuggestions, getresults } )(ResultsPage);
// export default connect(mapStateToProps, { getresults, getsuggestions, getresults_query, deinit_fetch, clear_state })(ResultsPage);
