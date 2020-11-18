import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Dashboard from "../../Components/Dashboard/Dashboard";
import ReziAppBar from "../../Components/ReziAppBar/ReziAppBar";
import ReziNavigation from "../../Components/ReziNavigation/ReziNavigation";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },

    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));



const Home = (props) =>{

    const { window } = props;
    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div className={classes.root}>

            <CssBaseline />
            <ReziAppBar drawerHandler={handleDrawerToggle}/>
            <ReziNavigation drawerHandler={handleDrawerToggle} openHandler={mobileOpen} windowContainer={container}/>
            <main className={classes.content}>
                <div className={classes.toolbar} />

                <Dashboard/>

            </main>
        </div>
    );

}

export default Home;