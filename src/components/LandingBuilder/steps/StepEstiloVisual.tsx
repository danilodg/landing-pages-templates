import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardActionArea } from '@mui/material';
import { useLandingBuilder } from '../LandingBuilderContext';
import { ESTILOS_VISUAIS } from '../types';

const StepEstiloVisual: React.FC = () => {
  const { config, setEstiloVisual, setCorPrimaria, darkMode } = useLandingBuilder();

  const cores = [
    { key: 'blue', cor: '#1976d2', nome: 'Azul' },
    { key: 'green', cor: '#2e7d32', nome: 'Verde' },
    { key: 'red', cor: '#d32f2f', nome: 'Vermelho' },
    { key: 'purple', cor: '#7b1fa2', nome: 'Roxo' },
    { key: 'orange', cor: '#e65100', nome: 'Laranja' },
    { key: 'teal', cor: '#00796b', nome: 'Teal' },
    { key: 'pink', cor: '#c2185b', nome: 'Rosa' },
    { key: 'indigo', cor: '#303f9f', nome: 'Indigo' },
  ];

  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ color: darkMode ? 'white' : 'inherit' }}>
        Escolha o estilo visual
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 4, color: darkMode ? 'grey.400' : 'text.secondary' }}>
        Defina a personalidade visual da sua landing page
      </Typography>

      <Typography variant="h6" gutterBottom sx={{ mt: 2, textAlign: 'center', color: darkMode ? 'white' : 'inherit' }}>
        Estilo
      </Typography>
      <Box sx={{ maxWidth: 900, mx: 'auto', mb: 4 }}>
        <Grid container spacing={3} justifyContent="center">
          {ESTILOS_VISUAIS.map((estilo) => (
            <Grid key={estilo.key} size={{ xs: 12, sm: 6 }}>
              <Card
                sx={{
                  height: '100%',
                  transition: 'all 0.3s ease',
                  border: config.estiloVisual === estilo.key ? '3px solid' : '1px solid',
                  borderColor: config.estiloVisual === estilo.key ? 'primary.main' : 'divider',
                  borderRadius: 3,
                  bgcolor: darkMode ? '#16213e' : 'background.paper',
                  '&:hover': { transform: 'translateY(-4px)', boxShadow: 6 },
                }}
              >
                <CardActionArea
                  onClick={() => setEstiloVisual(estilo.key)}
                  sx={{ height: '100%' }}
                >
                  <CardContent sx={{ textAlign: 'center', py: 3 }}>
                    <Typography variant="h4" sx={{ mb: 1 }}>
                      {estilo.icon}
                    </Typography>
                    <Typography variant="subtitle1" fontWeight="bold" sx={{ color: darkMode ? 'white' : 'inherit' }}>
                      {estilo.label}
                    </Typography>
                    <Typography variant="body2" sx={{ color: darkMode ? 'grey.400' : 'text.secondary' }}>
                      {estilo.descricao}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Typography variant="h6" gutterBottom sx={{ mt: 4, textAlign: 'center', color: darkMode ? 'white' : 'inherit' }}>
        Cor Primária
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
        {cores.map((c) => (
          <Box
            key={c.key}
            onClick={() => setCorPrimaria(c.key as any)}
            sx={{
              width: 60,
              height: 60,
              borderRadius: '50%',
              bgcolor: c.cor,
              cursor: 'pointer',
              transition: 'transform 0.2s',
              border: config.corPrimaria === c.key ? '3px solid #000' : '3px solid transparent',
              '&:hover': { transform: 'scale(1.1)' },
            }}
            title={c.nome}
          />
        ))}
      </Box>
    </Box>
  );
};

export default StepEstiloVisual;
