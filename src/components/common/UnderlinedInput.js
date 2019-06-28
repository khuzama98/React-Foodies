import React, { Component } from 'react';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#f98b00'
        },
    },
});

const styles = {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    }
}

class UnderlinedInput extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.container}>
                <MuiThemeProvider theme={theme}>
                    <TextField
                        type={this.props.type}
                        id="standard-full-width"
                        name={this.props.name}
                        label={this.props.label}
                        style={{ margin: 8 }}
                        value={this.props.value}
                        placeholder={this.props.placeholder}
                        onChange={(e)=>this.props.onChange(e)}
                        fullWidth
                        margin="normal"
                    />
                </MuiThemeProvider>
            </div>
        );
    }
}


export default withStyles(styles)(UnderlinedInput);