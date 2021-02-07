import { 
	LOADING, 
	USER_LOADED,
	AUTH_ERROR, 
	LOGIN_SUCCESS, 
	LOGIN_FAIL, 
	LOGOUT_SUCCESS,
	REGISTER_SUCCESS, 
	CREATE_PROFILE,
	GET_PROFILES,
	UPLOADED
 } from '../actions/types';


const initialState = {
	token: localStorage.getItem('token'),
	isAuthenticated: null,
	isLoading: false,
	user: null,
	current: null,
	profiles: null,
}

export default function(state=initialState, action) {
	switch(action.type){
		case LOADING:
			return {
				...state,
				isLoading: true
			}
		case GET_PROFILES:
			return {
				...state,
				isLoading: false,
				profiles: action.payload,
			}
		case CREATE_PROFILE:
			return {
				...state,
				current: action.payload,
			}
		case UPLOADED:
			return {
				...state,
				isLoading: false,
			}	
		case USER_LOADED:
			return {
				...state,
				isAuthenticated: true,
				isLoading: false,
				user: action.payload
			}
		case REGISTER_SUCCESS:
		localStorage.setItem('token', action.payload.token)
			return {
				...state,
				...action.payload,
				isAuthenticated: true,
				isLoading: false,
				user: action.payload,
			}
		case LOGIN_SUCCESS:
			localStorage.setItem('token', action.payload.token)
			return {
				...state,
				...action.payload,
				isAuthenticated: true,
				isLoading: false,
				user: action.payload,
			}
		case LOGIN_FAIL:
		case LOGOUT_SUCCESS:
		case AUTH_ERROR:
			localStorage.removeItem('token');
			return {
				...state,
				token: null,
				user: null,
				isAuthenticated: false,
				isLoading: false,
			}	
		default:
			return state;
	}
}
