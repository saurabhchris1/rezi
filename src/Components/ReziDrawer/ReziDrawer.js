import Typography from "@material-ui/core/Typography";
import CustomClasses from "../../hoc/Home/Home.module.css";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import DescriptionIcon from "@material-ui/icons/Description";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import CreateIcon from "@material-ui/icons/Create";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,

}));

const ReziDrawer = () =>{

    const classes = useStyles();


    return(
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

}

export default ReziDrawer;