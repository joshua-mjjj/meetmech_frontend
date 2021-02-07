import {  GET_SUGGESTIONS } from "../actions/types";

const initialState = {
	autocompletes: {},
}

export default function(state=initialState, action) {
	switch(action.type) {
		case GET_SUGGESTIONS:
			return {
				...state,
				autocompletes: action.payload
			}
		default: 
			return state;
	}
}