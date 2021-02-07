import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import logo from "../assets/logo_15.png";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import GuestNavBar from "../components/GuestNavBar"
import FormHelperText from "@material-ui/core/FormHelperText";
import Spinner from "../components/Spinner";

import {
  register,
} from "../actions/auth.js";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        meetmech
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(8, 16),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "16rem",
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(8, "auto"),
    },
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(4, "auto"),
    },
    [theme.breakpoints.up("lg")]: {
      margin: theme.spacing(0, "auto"),
      maxWidth: "20rem",
    },
  },
  avatar: {
    margin: theme.spacing(4, 1, 0),
    backgroundColor: "white",
    cursor: "pointer",
  },
  input: {
    marginTop: theme.spacing(2),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  page: {
    marginTop: '50px'
  }
}));

function SignUpPage(props) {
  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  // Registration
  const [username,   setUsername] = useState("");
  const [password,   setPassword] = useState("");
  const [password2,  setPassword2] = useState("");
  const [email,      setEmail] = useState("");

  const [error_email,            setError_email] = useState(false);
  const [error_password,         setError_password] = useState(false);
  const [error_passwordNotMatch, setError_passwordNotMatch] = useState(false);

  const [capital_error,          setCapital_error] = useState(false);
  const [small_error,            setSmall_error] = useState(false);
  const [number_error,           setNumber_error] = useState(false);
  const [character_error,        setCharacter_error] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    // eslint-disable-next-line
    var mailFormat = /^([a-zA-Z0-9_\.\-!#$%&'*+/=?^`{|}~"(),:;<>[\]])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|([0-9]{10})+$/;

    if (!mailFormat.test(email)) {
        setError_email(true);
        return false;
    } else setError_email(false);

    if (password.length <= 5) {
        setError_password(true);
        return false;
    } else setError_password(false);

    if (password.search(/[A-Z]/) === -1) {
        setCapital_error(true);
        return false;
    } else setCapital_error(false);

    if (password.search(/[a-z]/) === -1) {
        setSmall_error(true);
        return false;
    } else setSmall_error(false);

    if (password.search(/\d/) === -1) {
        setNumber_error(true);
        return false;
    } else setNumber_error(false);

    // eslint-disable-next-line
    if (password.search(/^(?=.*[!@#$%^&*()/_+'=?`\{|}~",:;</>])/) === -1) {
        setCharacter_error(true);
        return false;
    } else setCharacter_error(false);

    if (password !== password2) {
        setError_passwordNotMatch(true);
        return false;
    } else setError_passwordNotMatch(false);


    console.log(username);
    console.log(password);
    console.log(password2);
    console.log(email);
    props.register(username,email,password);

  }

  if (props.auth.user !== undefined && props.auth.user !== null) {
      return <Redirect to="/dashboard" />;
  }

  return (
    <div>
      <GuestNavBar />
      <Container className={classes.page} component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
                <img
                  src={logo}
                  onClick={(e) => (window.location.href = "/")}
                  width="40"
                  alt="website logo"
                />
              </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} noValidate>
           <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="User name"
              onChange={(e) => setUsername(e.target.value)}
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              error={error_email}
              required
              fullWidth
              id="email"
              label="Email Address"
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              autoComplete="email"
              autoFocus
            />
            {error_email ? (
                <FormHelperText error>
                  Email address is not valid.{" "}
                </FormHelperText>
              ) : (
                ""
              )}
            <TextField
                  variant="outlined"
                  className={classes.input}
                  error={error_password}
                  size="small"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="Toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                {error_password ||
                  capital_error ||
                  small_error ||
                  number_error ||
                  character_error ? (
                    <FormHelperText error>
                      Must contain capital and small letters, a special
                      character and numbers{" "}
                    </FormHelperText>
                  ) : (
                    ""
                  )}

            <TextField
                  variant="outlined"
                  className={classes.input}
                  error={error_passwordNotMatch}
                  size="small"
                  required
                  fullWidth
                  name="confirm password"
                  label="confirm password"
                  type={showPassword ? "text" : "password"}
                  id="confirm password"
                  autoComplete="current-password"
                  onChange={(e) => setPassword2(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="Toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                 {error_passwordNotMatch ? (
                    <FormHelperText error>
                      Passwords do not match!
                    </FormHelperText>
                  ) : (
                    ""
                  )}
                  
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleRegister}
              className={classes.submit}
            >
             {props.auth.isLoading ? <Spinner /> : "Sign Up"}
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/login" variant="body2">
                  {"Already have an account? Sign in"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </div>
    
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { register })(SignUpPage);
