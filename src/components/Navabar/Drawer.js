import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(theme=>({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    menuButton: {
        marginRight: theme.spacing(2)
    }
}));

const routesUser = [
    {
        name: 'Home',
        route: '/home'
    },
    {
        name: 'Resturants',
        route: '/resturants'
    },
    {
        name: 'My Requests',
        route: '/requests'
    },
    {
        name: 'Logout',
        route: '/'
    }
]

const routesResturant = [
    {
        name: 'Home',
        route: '/home'
    },
    {
        name: 'Resturants',
        route: '/resturants'
    },
    {
        name: 'Orders',
        route: '/orders'
    },
    {
        name: 'Logout',
        route: '/'
    }
]

export default function TemporaryDrawer(props) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        left: false,
    });
    const routes = props.type==='user' ? routesUser : routesResturant

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [side]: open });
    };

    const sideList = side => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <List>
                {routes.map((route, index) => (
                    <ListItem component={Link} to={route.route} button key={index}>
                        <ListItemText style={{color:'black'}} primary={route.name} />
                    </ListItem>
                ))}
            </List>
        </div>
    );


    return (
        <div>
            <IconButton
                edge="start"
                className={[classes.menuButton,'focusColor']}
                color="inherit"
                aria-label="Menu"
                onClick={toggleDrawer('left', true)}
            >
                <MenuIcon />
            </IconButton>
            <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
                {sideList('left')}
            </Drawer>
        </div>
    );
}
