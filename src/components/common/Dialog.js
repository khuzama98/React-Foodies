import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Input from '../common/UnderlinedInput'
import Upload from '../common/UploadButton'
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#f98b00',
            contrastText: 'white'
        },
    },
});

export default function ResponsiveDialog(props) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    console.log('Dialog ke andar')
    return (
        <div>
            <MuiThemeProvider theme={theme}>
            <Dialog
                fullScreen={fullScreen}
                open={props.open}
                onClose={()=>props.DialogClose()}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">{"Add In Menu"}</DialogTitle>
                <DialogContent>
                    <Input label='Name' value={props.foodName} name='foodName' onChange={props.onChange} />
                    <Input label='Type' value={props.foodType} name='foodType' onChange={props.onChange} />
                    <Input label='Price' value={props.foodPrice} name='foodPrice' onChange={props.onChange} />
                    <Upload label='Upload Image' value={props.foodPic} name='pic' onChange={props.onChange} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={()=>props.DialogClose()} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={()=>props.onClick()} color="primary" autoFocus>
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
            </MuiThemeProvider>
        </div>
    );
}
