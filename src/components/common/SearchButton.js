import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const styles = theme => ({
    button: {
        margin: '17px 0px 0px 5px',
        padding:'14px 24px'
    }
})

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#ffa733',
            contrastText: 'white'
        },
    },
});

class CustomSearchButton extends Component {
    render() {
        const { classes } = this.props
        return (
            <div>
                <MuiThemeProvider theme={theme}>
                    <Button variant="contained" size={this.props.size} onClick={()=>this.props.onClick()} color='primary' className={classes.button}>
                        {this.props.label}
                    </Button>
                </MuiThemeProvider>
            </div>
        );
    }
}

CustomSearchButton.defaultProps = {
    size:"medium"
}

export default withStyles(styles)(CustomSearchButton);
