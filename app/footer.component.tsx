import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: '#1976d2',
                color: '#ffffff',
                py: 4,
                mt: 4,
                boxShadow: '0 -2px 8px rgba(0,0,0,0.1)',
            }}
        >
            {/* Contenu Principal */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    flexWrap: 'wrap',
                    gap: 2,
                    px: 3,
                }}
            >
                {/* Section 1 - Logo et Description */}
                <Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', letterSpacing: '1px' }}>
                        MyApp
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1, maxWidth: 250 }}>
                        Une application moderne et intuitive pour simplifier vos besoins quotidiens. 
                    </Typography>
                </Box>

                {/* Section 2 - Liens Rapides */}
                <Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                        Liens Rapides
                    </Typography>
                    <Link href="#" color="inherit" underline="none" sx={{ display: 'block', mb: 0.5 }}>
                        Accueil
                    </Link>
                    <Link href="#" color="inherit" underline="none" sx={{ display: 'block', mb: 0.5 }}>
                        Fonctionnalités
                    </Link>
                    <Link href="#" color="inherit" underline="none" sx={{ display: 'block', mb: 0.5 }}>
                        À propos
                    </Link>
                    <Link href="#" color="inherit" underline="none" sx={{ display: 'block' }}>
                        Contact
                    </Link>
                </Box>

                {/* Section 3 - Réseaux Sociaux */}
                <Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                        Suivez-nous
                    </Typography>
                    <Box>
                        <IconButton color="inherit" href="https://facebook.com" target="_blank">
                            <FontAwesomeIcon icon={faFacebook} size="lg" />
                        </IconButton>
                        <IconButton color="inherit" href="https://twitter.com" target="_blank">
                            <FontAwesomeIcon icon={faTwitter} size="lg" />
                        </IconButton>
                        <IconButton color="inherit" href="https://instagram.com" target="_blank">
                            <FontAwesomeIcon icon={faInstagram} size="lg" />
                        </IconButton>
                        <IconButton color="inherit" href="https://linkedin.com" target="_blank">
                            <FontAwesomeIcon icon={faLinkedin} size="lg" />
                        </IconButton>
                    </Box>
                </Box>
            </Box>

            {/* Ligne de Séparation */}
            <Divider sx={{ my: 2, borderColor: '#ffffff' }} />

            {/* Footer Bas */}
            <Box sx={{ textAlign: 'center' }}>
                <Typography variant="body2" color="inherit">
                    &copy; {new Date().getFullYear()} MyApp. Tous droits réservés.
                </Typography>
            </Box>
        </Box>
    );
}
