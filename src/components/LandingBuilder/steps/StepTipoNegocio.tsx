import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardActionArea } from '@mui/material';
import { useLandingBuilder } from '../LandingBuilderContext';
import { TIPOS_NEGOCIO } from '../types';

const StepTipoNegocio: React.FC = () => {
  const { config, setTipoNegocio, darkMode } = useLandingBuilder();

  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ color: darkMode ? 'white' : 'inherit' }}>
        Qual é o tipo do seu negócio?
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 4, color: darkMode ? 'grey.400' : 'text.secondary' }}>
        Escolha a categoria que melhor descreve sua atividade
      </Typography>
      <Box sx={{ maxWidth: 900, mx: 'auto' }}>
        <Grid container spacing={3} justifyContent="center">
          {TIPOS_NEGOCIO.map((tipo) => (
            <Grid key={tipo.key} size={{ xs: 12, sm: 6 }}>
              <Card
                sx={{
                  height: '100%',
                  transition: 'all 0.3s ease',
                  border: config.tipoNegocio === tipo.key ? '3px solid' : '1px solid',
                  borderColor: config.tipoNegocio === tipo.key ? 'primary.main' : 'divider',
                  borderRadius: 3,
                  bgcolor: darkMode ? '#16213e' : 'background.paper',
                  '&:hover': { transform: 'translateY(-4px)', boxShadow: 6 },
                }}
              >
                <CardActionArea
                  onClick={() => setTipoNegocio(tipo.key)}
                  sx={{ height: '100%' }}
                >
                  <CardContent sx={{ textAlign: 'center', py: 4 }}>
                    <Typography variant="h3" sx={{ mb: 2 }}>
                      {tipo.icon}
                    </Typography>
                    <Typography variant="h6" gutterBottom sx={{ color: darkMode ? 'white' : 'inherit' }}>
                      {tipo.label}
                    </Typography>
                    <Typography variant="body2" sx={{ color: darkMode ? 'grey.400' : 'text.secondary' }}>
                      {tipo.descricao}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default StepTipoNegocio;
