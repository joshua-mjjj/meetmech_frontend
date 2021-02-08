import React from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types"

import { getdetails } from '../actions/results';

import ProviderInfo from '../components/ProviderInfo';
import Container from '@material-ui/core/Container';
import BodyGrid from '../components/BodyGrid';
import { Box } from '@material-ui/core';
import GuestNavBar from "../components/GuestNavBar"
import AuthorizedUserHomepageNavbar from "../components/AuthorizedUserHomepageNavbar";

class SinglePetServiceProvider extends React.Component{

    static propTypes = {
        details: PropTypes.object.isRequired,
        getdetails: PropTypes.func.isRequired,
    };

    componentDidMount(){
        this.props.getdetails(this.props.match.params.provider_id) 
    }
    render(){
        return(
            <Box className="provider-root"> 
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
                <Container maxWidth="md">
                    <ProviderInfo 
                        name={this.props.details.name} 
                        image={this.props.details.photo} 
                        // rating={this.props.petproviderdetails.rating}
                        location={this.props.details.location}
                        description={this.props.details.other}
                        contact={this.props.details.contact}
                        email={this.props.details.email}
                        />

                    <BodyGrid 
                        service={this.props.details.service}
                        />
                </Container> 
            </Box>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    details: state.results.details
});

export default connect(mapStateToProps, { getdetails })(SinglePetServiceProvider);
