import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import blue from '@material-ui/core/colors/blue';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffa733'
    },
  },
});


class OutlinedTextFields extends React.Component {

  render() {
    const { classes } = this.props;
    console.log(this.props)
    // console.log(this.props.updateComment)
    return (
      <MuiThemeProvider theme={theme}>
        <TextField
          id="outlined-full-width"
          // style={{ margin: 0 }}
          placeholder={this.props.placeholder}
          label={this.props.label}
          fullWidth
          value={this.props.value}
          margin="normal"
          variant="outlined"
          onChange={(e) => this.props.onChange(e)}
        />
      </MuiThemeProvider>
    )

  }
}

// OutlinedTextFields.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default OutlinedTextFields;