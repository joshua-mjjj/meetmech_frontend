import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
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
import Spinner from "../components/Spinner";

import {
  login,
  loadUser,
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

function SignIn(props) {
  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  // Authentication
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(username);
    console.log(password);
    if(username && password){
      props.login(username, password);
    }
  }

  React.useEffect(() => {
    if (props.auth.isAuthenticated) {
      props.loadUser();
      console.log("loading user info from the backend...")
    }
  }, []);

  if (props.auth.isAuthenticated) {
    if (props.auth.user !== null && props.auth.user !== undefined) {
          return <Redirect to="/dashboard" />;
      }
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
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Username "
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
                  variant="outlined"
                  className={classes.input}
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
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleLogin}
              className={classes.submit}
            >
             {props.auth.isLoading ? <Spinner /> : "Sign In"}
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
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

export default connect(mapStateToProps, { login, loadUser })(SignIn);
