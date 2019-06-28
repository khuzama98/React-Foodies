import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    progress: {
        margin: theme.spacing(2),
    },
}));

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#f98b00',
            contrastText: 'white'
        },
    },
});

export default function CircularIndeterminate() {
    const classes = useStyles();

    return (
        <div>
            <MuiThemeProvider theme={theme}>
                <CircularProgress className={classes.progress} />
            </MuiThemeProvider>
        </div>
    );
}
