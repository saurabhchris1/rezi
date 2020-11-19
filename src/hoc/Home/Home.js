import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Dashboard from "../../Components/Dashboard/Dashboard";
import ReziAppBar from "../../Components/ReziAppBar/ReziAppBar";
import ReziNavigation from "../../Components/ReziNavigation/ReziNavigation";
import CustomClass from './Home.module.css';

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
    const [backgroundColor, setBackgroundColor] = React.useState(CustomClass.backgroundColorBlue);
    const [appName, setAppName] = React.useState("Your Name")

    let value = 0;

    const changeColorHandler = (value)=> {
        switch (value) {
            case 0:
                setBackgroundColor(CustomClass.backgroundColorRed);

                break;
            case 1:
                setBackgroundColor(CustomClass.backgroundColorYellow);

                break;
            case 2:
                setBackgroundColor(CustomClass.backgroundColorGreen);

                break;
            case 3:
                setBackgroundColor(CustomClass.backgroundColorBlue);

                break;
            default:
                setBackgroundColor(CustomClass.backgroundColorBlue);

        }
    };


    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div className={classes.root}>

            <CssBaseline />
            <ReziAppBar drawerHandler={handleDrawerToggle} navColor={backgroundColor}/>
            <ReziNavigation drawerHandler={handleDrawerToggle} openHandler={mobileOpen} windowContainer={container} appColor={backgroundColor} appName={appName}/>
            <main className={classes.content}>
                <div className={classes.toolbar} />

                <Dashboard appColor={backgroundColor}/>


            </main>
        </div>
    );

}

export default Home;