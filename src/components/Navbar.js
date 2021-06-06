import React from 'react'
import {AppBar, Toolbar, Typography, IconButton, Snackbar, Button} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

export const Navbar = () => (
    <AppBar position="static" className="desktop">
        <Toolbar>
        {/* <IconButton edge="start"  color="inherit" aria-label="menu">
            <MenuIcon />
        </IconButton> */}
        
        <Typography variant="h6" >
        Divulgação de Estágios
        </Typography>

        <Typography variant="caption" style={{flexGrow: 1, marginLeft: 6, color: '#999999'}} >
         by G5
        </Typography>

        {/* <Button color="inherit">Sair</Button> */}

        </Toolbar>
    </AppBar>
)