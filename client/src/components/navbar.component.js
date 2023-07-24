import React from 'react';
import {Link} from 'react-router-dom';
import {Box, Typography, Tab, Tabs, AppBar, Toolbar, useTheme} from '@mui/material'
import {tokens} from '../theme'

const Navbar = ()=>{
    const theme = useTheme()
    const colors = tokens()
    const [value, setValue] = React.useState(0)
    const handleChange = (event, newValue) => { setValue(newValue) };

    return(
        <Box>
            <AppBar position="fixed" style={{background: colors.accent[900], paddingTop: '8px', paddingBottom: '8px'}}>
                <Toolbar>
                    <Typography variant="h2">NeuroDetect</Typography>
                    <Box sx={{flexGrow: 1}}/>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor='secondary'
                    >
                        <Tab label={<Typography variant="h5">Home</Typography>} component={Link} to='/'/>
                        <Tab label={<Typography variant="h5">How it works</Typography>} component={Link} to='/hiw'/>
                        <Tab label={<Typography variant="h5">Create Account</Typography>} component={Link} to='/create'/>
                        <Tab label={<Typography variant="h5">Login</Typography>} component={Link} to='/login'/>
                    </Tabs>
                </Toolbar>
            </AppBar>

        </Box>
    )
}
export default Navbar
