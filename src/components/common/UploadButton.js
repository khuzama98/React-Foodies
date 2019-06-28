import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const styles = theme => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
})

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#f98b00',
            contrastText: 'white'
        },
    },
});

class uploadButton extends Component {
    render() {
        const { classes } = this.props
        console.log(this.props)
        return (
            <div>
                <input
                    accept="image/*"
                    className={classes.input}
                    id="contained-button-file"
                    multiple
                    type="file"
                    name={this.props.name}
                    onChange={(e)=>this.props.onChange(e)}
                />
                <MuiThemeProvider theme={theme}>
                    <label htmlFor="contained-button-file">
                        <Button variant="contained" color='primary' component="span" className={classes.button}>
                            {this.props.label}
                        </Button>
                    </label>
                </MuiThemeProvider>
            </div>
        )
    }
}

export default withStyles(styles)(uploadButton)
