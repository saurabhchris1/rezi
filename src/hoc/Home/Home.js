import React from "react";
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import DescriptionIcon from '@material-ui/icons/Description';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import CreateIcon from '@material-ui/icons/Create';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CustomClasses from './Home.module.css';
import Button from '@material-ui/core/Button';

import Dashboard from "../../Components/Dashboard/Dashboard";

const drawerWidth = 310;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
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
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
        padding: '2.25rem'
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

const Home = (props) =>{

    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <div className={classes.toolbar} >
                <Typography className={CustomClasses.SidebarPadding} variant="h3"> Rezi </Typography>
            </div>
            <div  className={CustomClasses.SidebarPadding}>
                <Button variant="contained" color="primary">
                    Create New Resume
                </Button>
            </div>


            <List>
                {[['MY DASHBOARD', <InsertDriveFileIcon/>], ['SAMPLE LIBRARY', <DescriptionIcon/>], ['REVIEW MY RESUME', <CheckBoxIcon/>],
                    ['WRITE MY RESUME', <CreateIcon/>], ['BEST PRACTICES', <VideoCallIcon/>], ['MY PROFILE', <AccountBoxIcon/>]].map((name, index) => (
                    <ListItem button key={name[0]}>
                        <ListItemIcon>{name[1]}</ListItemIcon>
                        <ListItemText primary={<Typography variant="caption" display="block" gutterBottom>
                            {name[0]}
                        </Typography>} />
                    </ListItem>
                ))}
            </List>
            {/*<Divider />*/}

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar className={CustomClasses.AppBarContent}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>

                    <div className={CustomClasses.AppBarContent}><span>Save 40% off on Rezi Resume Writing with <b>writing_40</b></span></div>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
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
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Dashboard/>
            </main>
        </div>
    );

}

export default Home;