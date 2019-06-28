import React, { Component } from 'react';
import Input from './OutlinedInputFullWidth'
import Grid from '@material-ui/core/Grid';
import Button from './SearchButton'
import searchicon from '../../assets/images/location.png'
class Search extends Component {
    render() {
        const position ={
            position: 'absolute',
            right:'2%',
            top: '31px',
            cursor: 'pointer'
        }
        return (
            <div>
                <Grid container justify='center'>
                    <Grid container item xs={10} sm={7} style={{ padding: '8px 20px 15px 20px', boxShadow: '0 2px 28px 0 rgba(0,0,0,0.12)' }} >
                        <Grid item xs={12} sm={10} style={{ position: 'relative'}} >
                            <Input label='Enter your block & area' />
                            <img src={searchicon} height='25px' style={position} />
                        </Grid>
                        <Grid item sm={2}>
                            <Button label='Search' size='large' onClick={this.props.onClick} />
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Search;