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
  CssBaseline,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import TechLanding from './TechLanding';
import WebDevLanding from './webDevLanding';

type PageKey = 'default' | 'tech' | 'web' | 'home';

const pages: {
  key: PageKey;
  label: string;
  component: React.ReactNode;
}[] = [
    {
      key: 'tech',
      label: 'Notebook & Celular',
      component: <TechLanding />,
    },
    {
      key: 'web',
      label: 'Desenvolvimento Web',
      component: <WebDevLanding />,
    },
    {
      key: 'home',
      label: 'Serviços Residenciais',
      component: (
        <Box p={4}>
          <Typography variant="h4" align="center" mt={4}>
            Página Serviços Residenciais (em construção)
          </Typography>
        </Box>
      ),
    },
    {
      key: 'default',
      label: 'Página Padrão',
      component: (
        <Box p={4}>
          <Typography variant="h4" align="center" mt={4}>
            Página padrão (em construção)
          </Typography>
        </Box>
      ),
    },
  ];

const LandingSelector: React.FC = () => {
  const [selectedPage, setSelectedPage] = useState<PageKey>('default');
  const [openDialog, setOpenDialog] = useState(false);

  const currentPage = pages.find((page) => page.key === selectedPage);

  return (
    <>
      {/* Conteúdo principal */}
      <Box sx={{ minHeight: '100vh' }}>{currentPage?.component}</Box>

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
          {pages.map(({ key, label }) => (
            <ListItemButton
              key={key}
              selected={selectedPage === key}
              onClick={() => {
                setSelectedPage(key);
                setOpenDialog(false);
              }}
            >
              <CssBaseline />
              <ListItemText primary={label} />
            </ListItemButton>
          ))}
        </List>
      </Dialog>
    </>
  );
};

export default LandingSelector;
