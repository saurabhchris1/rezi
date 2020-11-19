import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import React from "react";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import ReziDrawer from "../ReziDrawer/ReziDrawer";

const drawerWidth = 310;

const useStyles = makeStyles((theme) => ({
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    drawerPaper: {
        width: drawerWidth,
        padding: '2.25rem'
    },

}));

const ReziNavigation= (props) => {

    const classes = useStyles();
    const theme = useTheme();

    return(
        <nav className={classes.drawer} aria-label="mailbox folders">
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Hidden smUp implementation="css">
                <Drawer
                    container={props.windowContainer}
                    variant="temporary"
                    anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                    open={props.openHandler}
                    onClose={props.drawerHandler}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                >
                    <ReziDrawer/>
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
                    <ReziDrawer appColor={props.appColor} appName={props.appName}/>
                </Drawer>
            </Hidden>
        </nav>
    );
}

export default ReziNavigation;