import React from "react";
import { connect } from "react-redux";

import { logout } from "./../actions/auth.js";

import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import Popper from "@material-ui/core/Popper";
import Fade from "@material-ui/core/Fade";
//import NotificationsDropdownMenu from "../components/NotificationsDropdown";
//import HelpDropdownMenu from "../components/HelpDropdown";
import ImageAvatars from "./LogoSearchPage";
import ImageAvatar_2 from "./Logodashboard";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.common.white,
    boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.03), 0px 1px 1px 0px rgba(0,0,0,0.03), 0px 1px 3px 0px rgba(0,0,0,0.03)"
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {

    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.05),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.black, 0.1),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
    marginBottom: "0!important",
    height: "100%",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  profileChip: {
    marginLeft: theme.spacing(2),
    marginTop: "auto",
    marginBottom: "auto",
  },
  popper: {
    maxWidth: 500,
    zIndex: 1100,
  },
  helpDropDown:{
    //color: '#4B0082',
  },
  small: {
    marginTop:  theme.spacing(1),
    width: theme.spacing(4),
    height: theme.spacing(4),
  }
}));

function PrimarySearchAppBar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [popperAnchorEl, setPopperAnchorEl] = React.useState(null);
  const [helpPopperAnchorEl, setHelpPopperAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [openPopper, setOpenPopper] = React.useState(false);
  const [placement, setPlacement] = React.useState();
  const [helpPlacement, setHelpPlacement] = React.useState();

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileClose = () => {
    setAnchorEl(null);
  };
  const account = () => {
    window.location.href = "/dashboard";
  };

  const handlePopperClick = (newPlacement) => (event) => {
    setPopperAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  const handleHelpPopperClick = (newPopperPlacement) => (event) => {
    setHelpPopperAnchorEl(event.currentTarget);
    setOpenPopper((prev) => helpPlacement !== newPopperPlacement || !prev);
    setHelpPlacement(newPopperPlacement);
  };

  const handleHelpPopperClickAway = () => {
    setOpenPopper(false);
  };

  let letter;
  if (props.auth.user !== undefined && props.auth.user !== null) {
    if (
      props.auth.user.user.username !== undefined &&
      props.auth.user.user.username !== null &&
      props.auth.user.user.username !== ""
    ) {
      var str = props.auth.user.user.username;
      letter = str.substr(0, 1);
    } else if (
      props.auth.user.user.username !== undefined &&
      props.auth.user.user.username !== null &&
      props.auth.user.user.username !== ""
    ) {
      var str = props.auth.user.user.username;
      letter = str.substr(0, 1);
    } else {
      letter = "D";
    }
  }

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Chip
          avatar={<Avatar>{letter}</Avatar>}
          label={ props.auth.user.user.username ? props.auth.user.user.username : props.auth.user.user.username }
          onClick={handleProfileClick}
          variant="outlined"
          aria-controls="profile-menu"
        />
        <Menu
          id="profile-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleProfileClose}
        >
          <MenuItem onClick={account}>Dashboard</MenuItem>
          <MenuItem onClick={account}>Home</MenuItem>
          <MenuItem 
           onClick={props.logout}
          >Logout</MenuItem>
        </Menu>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" color="transparent" className={classes.appBar} elevation={1}>
        <Toolbar>
          <ImageAvatars />
          <ImageAvatar_2 />
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Chip
              avatar={<Avatar>{letter}</Avatar>}
              label={ props.auth.user.user.username ? props.auth.user.user.username : props.auth.user.user.username }
              onClick={handleProfileClick}
              variant="outlined"
              aria-controls="profile-menu-2"
              className={classes.profileChip}
            ></Chip>
            <Menu
              id="profile-menu-2"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleProfileClose}
            >
              <MenuItem onClick={handleProfileClose}>Dashboard</MenuItem>
              <MenuItem onClick={account}>Home</MenuItem>
              <MenuItem 
                onClick={props.logout}
              >Logout</MenuItem>
            </Menu>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(PrimarySearchAppBar);
