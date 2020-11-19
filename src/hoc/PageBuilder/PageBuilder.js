import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    formControl: {
        minWidth: 150,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function DenseAppBar() {
    const classes = useStyles();
    const [age, setAge] = React.useState(0);
    const [name, setName] = React.useState("Your Name");

    const handleThemeChange = (event) => {
        setAge(event.target.value);
        {console.log(event.target.value)}
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
        {console.log(event.target.value)}
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
        {console.log(name, age)}

    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit">
                        Photos
                    </Typography>
                </Toolbar>
            </AppBar>

            <main className={classes.content}>
                <div className={classes.toolbar} />

                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <form className={classes.root} noValidate autoComplete="off" onSubmit={formSubmitHandler}>

                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Required"
                                    defaultValue="Your Name"
                                    variant="outlined"
                                    onChange={handleNameChange}
                                />

                                <FormControl variant="outlined" className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-outlined-label">Theme Color</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        value={age}
                                        onChange={handleThemeChange}
                                        label="Theme Color"
                                    >
                                        <MenuItem value={0}>Red</MenuItem>
                                        <MenuItem value={1}>Yellow</MenuItem>
                                        <MenuItem value={2}>Green</MenuItem>
                                        <MenuItem value={3}>Blue</MenuItem>
                                    </Select>
                                </FormControl>

                                <Button variant="contained" color="primary" type="submit">
                                    Submit
                                </Button>
                        </form>
                        </Paper>
                    </Grid>


                </Grid>

            </main>
        </div>
    );
}