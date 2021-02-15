import axios from "axios";
import {  GET_SUGGESTIONS, RESULTS_FETCHED, RESULTS_NULL, GET_DETAILS, SET_TAB, SPINNER  } from "./types";

// SET TAB 
export const set_tab = (tab) => dispatch => {
	console.log(tab)
	dispatch({
			type: SET_TAB,
			payload: tab
		});
}

// GET AUTO COMPLETE SUGGESTIONS
export const getsuggestions = () => dispatch => {

	axios                                                              
	.get('https://meetmech-api.herokuapp.com/api/v1/autocomplete/')   // API endpoint 
	.then(res => {
		// console.log(res.data.suggestions)
		dispatch({
			type: GET_SUGGESTIONS,
			payload: res.data.suggestions
		});
	})
	.catch(err => {
		if(err){
			console.log(err)
		}else {
			console.log("An internal error occured!")
		}
	});
}

// GET SEARCH ENGINE RESULTS
export const getresults = (service, Location) => dispatch => {
	// Spinner Loading...
    dispatch({ type: SPINNER });

	console.log("getting results...")
     // Headers
	  const config = {
	    headers: {
	      "Content-Type": "application/json",
	    },
	  };

    // Request Body
	  const body = JSON.stringify({
	    service,
	    Location
	  });
  	 // console.log(body)

	axios                                                              
	.post('https://meetmech-api.herokuapp.com/api/v1/user_request/', body, config)  // API endpoint  
	.then(res => {
		if(res.data.length === 0){
			dispatch({ 
				type: RESULTS_NULL
			});
		}
		dispatch({
			type: RESULTS_FETCHED,
			payload: res.data
		});
	})
	.catch(err => {
		if(err){
			console.log(err)
		}else {
			console.log("An internal error occured!")
		}
	});
}

// GET SINGLE PROVIDER DETAILS
export const getdetails = (id) => dispatch => {
	axios
	.get(`https://meetmech-api.herokuapp.com/api/v1/profiles_get/${id}/`) // API endpoint
	.then(res => {
		dispatch({
			type: GET_DETAILS,
			payload: res.data
		});
	})
	.catch(err => {
		if(err){
			console.log(err)
		}else {
			console.log("An internal error occured!")
		}
	});
}

