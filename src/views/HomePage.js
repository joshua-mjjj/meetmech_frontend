import React, {  Fragment } from 'react';
import PropTypes from "prop-types"
import { connect } from 'react-redux';

import { getsuggestions } from '../actions/results';

import CustomizedInputBase from "../components/SearchBar"
import ImageAvatars from "../components/Logo"
import GuestNavBar from "../components/GuestNavBar"
import Grid from '@material-ui/core/Grid';
import AuthorizedUserHomepageNavbar from "../components/AuthorizedUserHomepageNavbar";

class HomePage extends React.Component {

  static propTypes = {
	autocompletes: PropTypes.any.isRequired,
	getsuggestions: PropTypes.func.isRequired,
	};

	componentDidMount(){
		this.props.getsuggestions();
	}

  render () {
  	
    return (
    <Grid container spacing={0}>
        <Grid item xs={12} sm={12} md={12}>
	          <Fragment>
	          <div>
	          	{
	           	this.props.auth.isAuthenticated ? 
	           	( <AuthorizedUserHomepageNavbar />) 
	           	 :
	           	('')
	           }
	          </div>
	           <div>
	          	{
	           	!(this.props.auth.token) ? 
	           	(  <GuestNavBar />) 
	           	 :
	           	('')
	           }
	          </div>
				<ImageAvatars />
				<CustomizedInputBase auto_complete={this.props.autocompletes} />
			</Fragment>
         </Grid>
    </Grid>
		
    	);
    }
}

const mapStateToProps = state => ({
	auth: state.auth,
	autocompletes: state.results.autocompletes,
	// errors: state.errors
});

export default connect(mapStateToProps, { getsuggestions })(HomePage);

