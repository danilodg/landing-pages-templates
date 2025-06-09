import React, { useState } from 'react';
import {
  Box,
  Dialog,
  DialogTitle,
  List,
  ListItemButton,
  ListItemText,
  Fab,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import TechLanding from './TechLanding';

const LandingSelector: React.FC = () => {
  const [selectedPage, setSelectedPage] = useState<'default' | 'tech' | 'home'>('default');
  const [openDialog, setOpenDialog] = useState(false);

  const renderPage = () => {
    switch (selectedPage) {
      case 'tech':
        return <TechLanding />;
      case 'home':
        return (
          <Box p={4}>
            <Typography variant="h4" align="center" mt={4}>
              Página Serviços Residenciais (em construção)
            </Typography>
          </Box>
        );
      default:
        return (
          <Box p={4}>
            <Typography variant="h4" align="center" mt={4}>
              Página padrão (em construção)
            </Typography>
          </Box>
        );
    }
  };

  const handleSelectPage = (page: 'default' | 'tech' | 'home') => {
    setSelectedPage(page);
    setOpenDialog(false);
  };

  return (
    <>
      {/* Conteúdo principal */}
      <Box sx={{ minHeight: '100vh' }}>{renderPage()}</Box>

      {/* Botão flutuante para abrir o menu */}
      <Fab
        color="primary"
        aria-label="menu"
        onClick={() => setOpenDialog(true)}
        sx={{
          position: 'fixed',
          bottom: 16,
          left: 16,
          zIndex: (theme) => theme.zIndex.tooltip + 1,
        }}
      >
        <MenuIcon />
      </Fab>

      {/* Dialog modal para seleção de página */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Escolha a página</DialogTitle>
        <List>
          <ListItemButton selected={selectedPage === 'default'} onClick={() => handleSelectPage('default')}>
            <ListItemText primary="Padrão" />
          </ListItemButton>
          <ListItemButton selected={selectedPage === 'tech'} onClick={() => handleSelectPage('tech')}>
            <ListItemText primary="Notebook & Celular" />
          </ListItemButton>
          <ListItemButton selected={selectedPage === 'home'} onClick={() => handleSelectPage('home')}>
            <ListItemText primary="Serviços Residenciais" />
          </ListItemButton>
        </List>
      </Dialog>
    </>
  );
};

export default LandingSelector;
