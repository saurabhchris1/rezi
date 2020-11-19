import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {Typography} from "@material-ui/core";
import CustomClasses from './Dashboard.module.css';
import Resume from '../../assets/images/resume.png';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));




const Dashboard = (props) =>{
    const spacing = 2
    const classes = useStyles();

    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <Grid container spacing={spacing}>
                    <Grid key={1} item>

                        <Button  variant="contained" color="primary" className={props.appColor}>Resumes</Button>

                    </Grid>
                    <Grid key={2} item>
                        <Button  variant="outlined" >Cover Letters</Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={spacing}>

                    <Grid key={1} item>
                        <Paper className={CustomClasses.PaperDivDashedBorder} >
                            <Typography variant="caption" display="block" gutterBottom> Create New Resume</Typography>
                        </Paper>
                    </Grid>
                    <Grid key={2} item>

                        <Paper className={CustomClasses.Content} >
                            <img src={Resume} alt="Logo" className={CustomClasses.PaperDivImage}/>
                        </Paper>
                    </Grid>
                    <Grid key={3} item>
                        <Paper className={CustomClasses.Content} >
                            <img src={Resume} alt="Logo" className={CustomClasses.PaperDivImage}/>
                        </Paper>
                    </Grid>

                </Grid>
            </Grid>

        </Grid>
    );
}

export default Dashboard;