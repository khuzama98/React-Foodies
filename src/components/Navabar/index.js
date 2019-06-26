import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import {Link} from 'react-router-dom'
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Drawer from './Drawer'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    title: {
        flexGrow: 1
    }
}))

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#ffa733",
            contrastText: 'white'
        }
    }
});

const HomeLink = React.forwardRef((props, ref) => (
    <Link innerRef={ref} to="/home" {...props} />
));

const ResturantLink = React.forwardRef((props, ref) => (
    <Link innerRef={ref} to="/resturants" {...props} />
));

const RequestLink = React.forwardRef((props, ref) => (
    <Link innerRef={ref} to="/request" {...props} />
));

const LogoutLink = React.forwardRef((props, ref) => (
    <Link innerRef={ref} to="/" {...props} />
));



class ButtonAppBar extends React.Component {

    constructor() {
        super()
        this.state = {
            width: document.documentElement.clientWidth,
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this._resize_mixin_callback);
    }

    _resize_mixin_callback = () => {
        this.setState({
            width: document.documentElement.clientWidth,
        });
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this._resize_mixin_callback);
    }

    render() {
        const {classes} = this.props
        console.log(this.props)
        const { width } = this.state
        return (
            <ThemeProvider theme={theme}>
                <div className={classes.root}>
                    <AppBar position="static">
                        <Toolbar>
                            {width < 600 ? <Drawer /> : false}
                            <Typography variant="h6" style={{ flexGrow: 1 }}>
                                FOODIES
                            </Typography>
                            {width > 599 ? (
                                <>
                                    <Button className='focusColor' component={HomeLink} color="inherit">Home</Button>
                                    <Button className='focusColor' component={ResturantLink} color="inherit">Resturants</Button>
                                    <Button className='focusColor' component={RequestLink} color="inherit">My Requests</Button>
                                    <Button className='focusColor' component={LogoutLink} color="inherit">Logout</Button>

                                </>
                            )
                                : false}
                        </Toolbar>
                    </AppBar>
                </div>
            </ThemeProvider>
        );
    }

}

export default withStyles(useStyles)(ButtonAppBar)
