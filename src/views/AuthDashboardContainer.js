import React, { useState }   from "react";
import { Redirect, Link }    from "react-router-dom";
import { connect }           from "react-redux";

import AppBar      from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider     from "@material-ui/core/Divider";
import Drawer      from "@material-ui/core/Drawer";
import Hidden      from "@material-ui/core/Hidden";
import EventIcon   from "@material-ui/icons/Event";
import IconButton  from "@material-ui/core/IconButton";
import List              from "@material-ui/core/List";
import ListItem          from "@material-ui/core/ListItem";
import ListItemIcon      from "@material-ui/core/ListItemIcon";
import ListItemText      from "@material-ui/core/ListItemText";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CreateIcon        from '@material-ui/icons/Create';
import MenuIcon          from "@material-ui/icons/Menu";
import Toolbar           from "@material-ui/core/Toolbar";
import Typography        from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AuthorizedUserNavbar from "../components/AuthorizedUserNavbar";
import ListIcon                 from '@material-ui/icons/List';

import { get_profiles } from "../actions/auth.js";
import Avatar                   from '@material-ui/core/Avatar';
import FindInPageIcon           from '@material-ui/icons/FindInPage';

import DashboardProfilePicSection from "../components/DashboardProfilePicSection";
import DashboardListProfile from "../components/DashboardListProfile";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginTop: "64px",
    backgroundColor: "#fafafa",
    color: "black",
    boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.03), 0px 1px 1px 0px rgba(0,0,0,0.03), 0px 1px 3px 0px rgba(0,0,0,0.03)",
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    marginTop: "64px",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  petIcon:{
    width: '1em',
    height: '1em',
  },
  sidebarHeadSection:{
    backgroundColor: '#fafafa',
  },
  sidebarHeader:{
    "& span":{
      fontSize: '1.5em',
      fontWeight: '600',
    }
  },
  list:{
    paddingTop: '0',
  },
  sidebarLabel:{
    fontSize: '13px',
    color: 'rgba(0, 0, 0, 0.7)',
    fontWeight: '600',
    "& span":{
      fontSize: '13px',
      color: 'rgba(0, 0, 0, 0.7)',
      fontWeight: '600',
    },
  },
}));

function AuthDashboardContainer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [go_to_dash, setGo_to_dash] = useState(true);
  const [go_to_create, setGo_to_create] = useState(false);

  
  const dashboard = (e) => {
    setGo_to_dash(true);
    setGo_to_create(false);
  };

  const create = (e) => {
    setGo_to_dash(false);
    setGo_to_create(true);
  };
  const drawer = (
    <div>
      <Divider />
      <List className={classes.list}>
        <ListItem   disabled button className={classes.sidebarHeadSection}>
          <ListItemText primary="Dashboard" className={classes.sidebarHeader}/>
        </ListItem>
        <ListItem onClick={dashboard} selected={go_to_dash} button>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Profiles"  className={classes.sidebarLabel}/>
        </ListItem>
         <Divider />
        <ListItem onClick={create} selected={go_to_create} button>
          <ListItemIcon>
            <CreateIcon />
          </ListItemIcon>
          <ListItemText primary="Create Profile" className={classes.sidebarLabel}/>
        </ListItem>
         <Divider />
        <ListItem button>
          <ListItemIcon>
            <EventIcon />
          </ListItemIcon>
          <ListItemText primary="car parts" className={classes.sidebarLabel}/>
        </ListItem>
        <Divider />
        
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;


  React.useEffect(() => {
    props.get_profiles()
  }, []);

  // if (!props.auth.isAuthenticated) {
  //   return <Redirect to="/login" />;
  // }

  return (
    <div>
    {props.auth.user ? 
          (<AuthorizedUserNavbar />) : 
          ("")
     }
    
      <div className={classes.root}>
        <CssBaseline />
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            {go_to_dash ? (
              <Typography className={classes.sidebarLabel} noWrap>
                Your Service provider profiles
              </Typography>
            ) : (
              ""
            )}
            {go_to_create ? (
              <Typography className={classes.sidebarLabel} noWrap>
                New profile
              </Typography>
            ) : (
              ""
            )}
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer} aria-label="Dashboard">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        {/*props.results.results && props.results.results.map((result, idx) => result.fullname === null? '' : (
              <AlignItemsList searchInput={searchInput} services={result.services} full_name={result.fullname} description={result.bio} location={result.city} image={result.image} rate={result.price} rating={result.rating} key={result.id} id={result.id}/>
            ))*/}
        
        <main className={classes.content}>
          <div className={classes.toolbar} /><br />
          {go_to_create ? <DashboardProfilePicSection /> : "" }
          {go_to_dash ? 
            ( 
              props.profiles && props.profiles.map((profile, idx) => 
              <DashboardListProfile key={profile.id} id={profile.id}  description={profile.other} service={profile.service} location={profile.location} name={profile.name} contact={profile.contact} photo={profile.photo} />
            )
            ) 
          : "" }
        </main>
      </div>
    </div>
  );
}


const mapStateToProps = (state) => ({
  auth: state.auth,
  profiles :state.auth.profiles,
});

export default connect(mapStateToProps, { get_profiles })(AuthDashboardContainer);
