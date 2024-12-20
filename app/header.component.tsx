'use client'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';

export function Header() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: '#1976d2', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <Toolbar>
                {/* Logo */}
                <Typography
                    variant="h6"
                    component="div"
                    sx={{
                        flexGrow: 1,
                        fontWeight: 'bold',
                        color: '#ffffff',
                        letterSpacing: '2px',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <FontAwesomeIcon icon={faUser} style={{ marginRight: '10px' }} />
                    MyApp
                </Typography>

                {/* Menu principal */}
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <Button color="inherit" sx={{ mx: 1, fontWeight: 'bold', textTransform: 'none' }}>
                        Home
                    </Button>
                    <Button color="inherit" sx={{ mx: 1, fontWeight: 'bold', textTransform: 'none' }}>
                        Features
                    </Button>
                    <Button color="inherit" sx={{ mx: 1, fontWeight: 'bold', textTransform: 'none' }}>
                        About
                    </Button>
                </Box>

                {/* Bouton pour le menu déroulant sur mobile */}
                <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={handleMenuOpen}
                    >
                        <FontAwesomeIcon icon={faBars} />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                    >
                        <MenuItem onClick={handleMenuClose}>Home</MenuItem>
                        <MenuItem onClick={handleMenuClose}>Features</MenuItem>
                        <MenuItem onClick={handleMenuClose}>About</MenuItem>
                    </Menu>
                </Box>

                {/* Bouton d'action (Connexion ou Autre) */}
                <Button variant="contained" color="secondary" sx={{ textTransform: 'none', fontWeight: 'bold' }}>
                    Login
                </Button>
            </Toolbar>
        </AppBar>
    );
}
