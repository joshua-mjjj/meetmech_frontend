import axios from "axios";
import {
  LOADING,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  CREATE_PROFILE,
  GET_PROFILES,
  UPLOADED
} from "./types";

// LOAD USER
export const loadUser = () => (dispatch, getState) => {
  // Data Loading...
  dispatch({ type: LOADING });

  axios
    .get("https://meetmech-api.herokuapp.com/api/v1/auth/user", tokenConfig(getState))
    .then((res) => {
      // console.log(res.data)
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      // dispatch(returnError(err.response, null)); Error handling will be done later
      dispatch({
        type: AUTH_ERROR,
      });
    });
};

// LOGIN SERVICE PROVIDER 
export const login = (username, password) => (dispatch, getState) => {
  // Loading
  dispatch({ type: LOADING });

  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Request Body
  const body = JSON.stringify({
    username,
    password
  });
  // console.log(body)

  axios
    .post("https://meetmech-api.herokuapp.com/api/v1/auth/login", body, config)
    .then((res) => {
      console.log("logged in...");
      // console.log(res.data)
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });

      const get_id = localStorage.getItem("status_id")
      if(get_id){
       // console.log(get_id)
        console.log('patching status...')
        const status = "online"
        const body_ = JSON.stringify({
          status,
        });
       // console.log(body_)

        axios
          .patch(`https://meetmech-api.herokuapp.com/api/v1/user_status/${get_id}/`, body_, tokenConfig(getState))
          .then((res) => {
            // console.log(res.data)
          })
          .catch((err) => {
            if(err){
              console.log(err)
            }
          });
        }else {
          console.log('no id')
        }

      // // UPDATING STATUS 
      // if(res.data){
      //   const status = "online"
      //   const owner_username = res.data.user.username
      //   const user = res.data.user.id

      //   const body_ = JSON.stringify({
      //     status,
      //     owner_username,
      //     user
      //   });
      //   console.log(body_)

      //   axios
      //     .post("https://meetmech-api.herokuapp.com/api/v1/user_status/", body_, tokenConfig(getState))
      //     .then((res) => {
      //       console.log(res.data)
      //     })
      //     .catch((err) => {
      //       if(err){
      //         console.log(err)
      //       }
      //     });
      // }

    })
    .catch((err) => {
    	if(err){
    	 // dispatch(returnError(err.response.data, err.response.status));
		    dispatch({
		        type: AUTH_ERROR,
		    });
    	}
    });
};

// CREATE PROFILE 
export const create_profile = (service, owner_username, location, name, contact, email, other, owner) => (dispatch, getState) => {
  // Loading
  dispatch({ type: LOADING });

  // Request Body
  const body = JSON.stringify({
    service,
    owner_username,
	location,
	name,
	contact,
	email,
	other,
	owner,
  });
  // console.log(body)

  axios
    .post("https://meetmech-api.herokuapp.com/api/v1/profiles/", body, tokenConfig(getState))
    .then((res) => {
      console.log("creating profile...");
      // console.log(res.data)
      dispatch({
        type: CREATE_PROFILE,
        payload: res.data,
      });
    })
    .catch((err) => {
    	if(err){
    		console.log(err)
    	 // dispatch(returnError(err.response.data, err.response.status));
		    // dispatch({
		    //     type: AUTH_ERROR,
		    // });
    	}
    });
};

// GET PROFILES
export const get_profiles = () => (dispatch, getState) => {
  // Data Loading...
  // dispatch({ type: FORM_LOADING });

  axios
    .get("https://meetmech-api.herokuapp.com/api/v1/profiles/", tokenConfig(getState))
    .then((res) => {
      // console.log(res.data)
      dispatch({
        type: GET_PROFILES,
        payload: res.data,
      });
      // dispatch({ type: FORM_LOADED });
    })
    .catch((err) => {
    	if(err){
    		console.log(err)
    	 // dispatch(returnError(err.response.data, err.response.status));
		    // dispatch({
		    //     type: AUTH_ERROR,
		    // });
    	}
    });
};



// PROFILE PICTURE
export const sendUserPhoto = (data, id) => async (dispatch, getState) => {
  // dispatch({ type: FORM_LOADING });

  await axios
    .patch(
      `https://meetmech-api.herokuapp.com/api/v1/profiles/${id}/`,
       data,
       tokenConfig(getState)
    )
    .then((res) => {
    	// console.log(res)
    	console.log("Sending profile photo...")
       dispatch({ type: UPLOADED });
    })
    .catch((e) => {
    	if(e){
    		console.log(e);
    	}else {
    		console.log("An error occured");
    	}
      // dispatch({ type: FORM_LOADED });
    });
};



// REGISTER SERVICE PROVIDER 
export const register = (username, email, password) => (dispatch, getState) => {
  // Loading
  dispatch({ type: LOADING });

  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Request Body
  const body = JSON.stringify({
    username,
    email,
    password
  });
   // console.log(body)

  axios
    .post("https://meetmech-api.herokuapp.com/api/v1/auth/register", body, config)
    .then((res) => {
      console.log("Registered...");
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });

      //  CREATING STATUS INSTANCE
      if(res.data){
        const status = "online"
        const owner_username = res.data.user.username
        const user = res.data.user.id

        const body_ = JSON.stringify({
          status,
          owner_username,
          user
        });
        // console.log(body_)

        axios
          .post("https://meetmech-api.herokuapp.com/api/v1/user_status/", body_, tokenConfig(getState))
          .then((res) => {
            const ID = res.data.id;
            localStorage.setItem("status_id", ID);
            console.log('status instance created...')
          })
          .catch((err) => {
            if(err){
              console.log(err)
            }
          });
        }
      
    })
    .catch((err) => {
    	if(err){
    	 // dispatch(returnError(err.response.data, err.response.status));
		    dispatch({
		        type: AUTH_ERROR,
		    });
    	}
    });
};



//  LOGOUT USERS
export const logout = () => (dispatch, getState) => {

      const get_id = localStorage.getItem("status_id")
      if(get_id){
       // console.log(get_id)
        const status = "offline"
        const body_ = JSON.stringify({
          status,
        });
        // console.log(body_)

        axios
          .patch(`https://meetmech-api.herokuapp.com/api/v1/user_status/${get_id}/`, body_, tokenConfig(getState))
          .then((res) => {
            // console.log(res.data)
            console.log('patching status to offline...')
          })
          .catch((err) => {
            if(err){
              console.log(err)
            }
          });
        }else {
          console.log('no id')
        }

  axios
    .post('https://meetmech-api.herokuapp.com/api/v1/auth/logout', null, tokenConfig(getState))
    .then(res => {
	  	dispatch({
	  		type: LOGOUT_SUCCESS,
	  	});
    })
  .catch(err => {
  	    if(err){
  	    	console.log("An error occured!");
  	    }
  	   // dispatch(returnError(err.response.data, err.response.status));
  });
};


// helper function
export const tokenConfig = (getState) => {
  // Get token from state
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  // if token, add to headers in config
  if(token){
    config.headers["Authorization"] = `Token ${token}`;
  }
  return config;
};