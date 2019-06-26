import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const styles = theme => ({
    button: {
        margin: theme.spacing(1),
    }
})

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#f98b00',
            contrastText: 'white'
        },
    },
});

class CustomButton extends Component {
    render() {
        const { classes } = this.props
        return (
            <div>
                <MuiThemeProvider theme={theme}>
                    <Button variant="contained" size={this.props.size} color='primary' className={classes.button}>
                        {this.props.label}
                    </Button>
                </MuiThemeProvider>
            </div>
        );
    }
}

CustomButton.defaultProps = {
    size: "medium"
}

export default withStyles(styles)(CustomButton);
