import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import CustomClasses from './ChangeTheme.module.css'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },

    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    formControl: {
        minWidth: 150,
    },
}));

const ChangeTheme = (props) =>{

    const classes = useStyles();

    return(
        <div className={CustomClasses.ChangeTheme}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <form className={classes.root} noValidate autoComplete="off" onSubmit={props.formSubmitHandler}>
                            <Grid container spacing={3}>
                                <Grid item xs={3}>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Required"
                                        defaultValue="Your Name"
                                        variant="outlined"
                                        onChange={props.handleNameChange}
                                    />
                                </Grid>
                                <Grid item xs={3}>
                                    <FormControl variant="outlined" className={classes.formControl}>
                                        <InputLabel id="demo-simple-select-outlined-label">Theme Color</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            value={props.color}
                                            onChange={props.handelThemechange}
                                            label="Theme Color"
                                        >
                                            <MenuItem value={0}>Red</MenuItem>
                                            <MenuItem value={1}>Yellow</MenuItem>
                                            <MenuItem value={2}>Green</MenuItem>
                                            <MenuItem value={3}>Blue</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={3}>

                                    <Button variant="contained" color="primary" type="submit" className={CustomClasses.SubmitButton}>
                                        Submit
                                    </Button>
                                </Grid>
                            </Grid>




                        </form>
                    </Paper>
                </Grid>


            </Grid>
        </div>

    );
}

export default ChangeTheme;