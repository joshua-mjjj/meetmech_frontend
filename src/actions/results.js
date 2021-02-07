import axios from "axios";
import {  GET_SUGGESTIONS  } from "./types";

// GET AUTO COMPLETE SUGGESTIONS
export const getsuggestions = () => dispatch => {

	axios                                                              // API endpoint 
	.get('https://meetmech-api.herokuapp.com/api/v1/autocomplete/')   // use either of the 2 to fetch data
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