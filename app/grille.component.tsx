import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faCircle } from '@fortawesome/free-solid-svg-icons';
import { winner } from './winner';

export function Grille() {
    const [board, setBoard] = useState<(boolean | undefined)[]>(Array(9).fill(undefined));
    const [bord2, setBord2] = useState<(string | undefined)[]>(Array(9).fill(undefined));
    const [isX, setIsX] = useState(true);
    const [winnerName, setWinnerName] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const result = winner(board); // Appel de la fonction winner
        if (result === true) {
            setWinnerName("❌"); // Si true, X gagne
            setIsModalOpen(true);
        } else if (result === false) {
            setWinnerName("⭕"); // Si false, O gagne
            setIsModalOpen(true);
        }
    }, [board]);

    const handleCellClick = (index: number) => {
        if (bord2[index] !== undefined) return; // Empêche de cliquer sur une cellule remplie

        setBord2((prevBoard) => {
            const newBoard = [...prevBoard];
            newBoard[index] = isX ? "X" : "O";
            return newBoard;
        });

        setBoard((prevBoard) => {
            const newBoard = [...prevBoard];
            newBoard[index] = isX ? true : false; // true pour X, false pour O
            return newBoard;
        });

        setIsX(!isX); // Alterne entre X et O
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        setBoard(Array(9).fill(undefined)); // Réinitialise le tableau
        setBord2(Array(9).fill(undefined));
        setIsX(true);
    };

    return (
        <div style={{ padding: '20px', margin: '30px' }}>
        <Typography
        variant="h4"
        sx={{
            textAlign: 'center',
            marginBottom: '20px',
            fontWeight: 'bold',
            color: '#333',
            textTransform: 'uppercase',
            letterSpacing: '2px',
        }}
    >
        🎮 Tic Tac Toe
    </Typography>

    {/* Grille de jeu responsive */}
    <Box
        sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)', // Colonnes flexibles
            gap: '10px',
            justifyContent: 'center',
            width: '90%', // S'adapte à l'écran
            maxWidth: '400px', // Largeur maximale pour la grille
            minWidth: '300px', // Largeur minimale pour la grille
            margin: '0 auto', // Centre la grille horizontalement
        }}
    >
        {bord2.map((cell, index) => (
            <Box
                key={index}
                onClick={() => handleCellClick(index)}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#f0f0f0',
                    border: '4px solid #444',
                    borderRadius: '10px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    cursor: 'pointer',
                    aspectRatio: '1 / 1', // Rend les cellules carrées
                    fontSize: 'clamp(24px, 5vw, 48px)', // Taille du texte dynamique
                    color: cell === 'X' ? '#ff5722' : '#2196f3',
                    transition: 'transform 0.2s, background-color 0.3s',
                    '&:hover': {
                        backgroundColor: '#ddd',
                        transform: 'scale(1.05)',
                    },
                }}
            >
                {cell === "X" && <FontAwesomeIcon icon={faXmark} />}
                {cell === "O" && <FontAwesomeIcon icon={faCircle} />}
            </Box>
        ))}
    </Box>
    
        {/* Modal pour afficher le gagnant */}
        <Modal
            open={isModalOpen}
            onClose={handleModalClose}
            aria-labelledby="winner-modal-title"
            aria-describedby="winner-modal-description"
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '250px',
                    maxWidth: '90%',
                    bgcolor: '#fff',
                    border: '4px solid #444',
                    boxShadow: 24,
                    borderRadius: '10px',
                    textAlign: 'center',
                    p: 4,
                }}
            >
                <Typography
                    id="winner-modal-title"
                    variant="h4"
                    component="h2"
                    sx={{ marginBottom: '20px', fontWeight: 'bold', color: '#444' }}
                >
                {winnerName} a gagné ! 
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleModalClose}
                    sx={{ fontSize: '16px', textTransform: 'uppercase', fontWeight: 'bold' }}
                >
                    Rejouer
                </Button>
            </Box>
        </Modal>
    </div>
    
    );
}
