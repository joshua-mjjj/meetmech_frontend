import { 
  GET_SUGGESTIONS, 
  RESULTS_FETCHED,
  RESULTS_NULL,
  GET_DETAILS
 } from "../actions/types";

const initialState = {
	autocompletes: {},
	results: [],
	results_null: false,
	details: []
}

export default function(state=initialState, action) {
	switch(action.type) {
		case GET_SUGGESTIONS:
			return {
				...state,
				autocompletes: action.payload
			}
		case GET_DETAILS:
			return {
				...state,
				details: action.payload
			}
		case RESULTS_NULL:
			return {
				...state,
				results_null: true
			}
		case RESULTS_FETCHED:
			return {
				...state,
				results: action.payload
			}
		default: 
			return state;
	}
}