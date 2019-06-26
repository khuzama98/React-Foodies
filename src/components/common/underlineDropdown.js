import React, { Component } from 'react';
import { MenuItem } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

const styles = theme=>( {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        width:'100%'
    },
})

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#f98b00'
        },
    },
});

class underlineDropdown extends Component {
    render() {
        const { classes } = this.props;
        return (
            <MuiThemeProvider theme={theme}>
                <div className={classes.root}>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="age-simple">{this.props.label}</InputLabel>
                        <Select
                            value={this.props.value}
                            onChange={(e) => this.props.onChange(e)}
                            inputProps={{
                                name: this.props.name,
                                id: 'age-simple',
                            }}
                        >
                            {this.props.options.map((item, index) => {
                                return (
                                    index === 0 ? <MenuItem disabled>{item}</MenuItem> : <MenuItem value={item} >{item}</MenuItem>
                                )
                            })}
                        </Select>
                    </FormControl>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default withStyles(styles)(underlineDropdown);