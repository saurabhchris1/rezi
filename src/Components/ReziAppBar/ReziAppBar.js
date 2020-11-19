import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CustomClasses from "./reziappbar.module.css"
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const drawerWidth = 310;

const useStyles = makeStyles((theme) => ({
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },

}));

const ReziAppBar = (props) =>{

    const classes = useStyles();



    return(
        <AppBar position="fixed" className={classes.appBar}>
          <div className={props.navColor}>
              <Toolbar className={CustomClasses.AppBarContent}>
                  <IconButton
                      color="inherit"
                      aria-label="open drawer"
                      edge="start"
                      onClick={props.drawerHandler}
                      className={classes.menuButton}
                  >
                      <MenuIcon />
                  </IconButton>

                  <div className={CustomClasses.AppBarContent}><span>Save 40% off on Rezi Resume Writing with <b>writing_40</b></span></div>
              </Toolbar>
          </div>
        </AppBar>
    );

};

export default ReziAppBar;