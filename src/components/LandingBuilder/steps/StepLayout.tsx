import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardActionArea } from '@mui/material';
import { useLandingBuilder } from '../LandingBuilderContext';
import { LAYOUTS } from '../types';

const StepLayout: React.FC = () => {
  const { config, setLayout, darkMode } = useLandingBuilder();

  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ color: darkMode ? 'white' : 'inherit' }}>
        Escolha o layout
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 4, color: darkMode ? 'grey.400' : 'text.secondary' }}>
        Selecione o posicionamento dos elementos na página
      </Typography>
      <Box sx={{ maxWidth: 900, mx: 'auto' }}>
        <Grid container spacing={3} justifyContent="center">
          {LAYOUTS.map((layout) => (
            <Grid key={layout.key} size={{ xs: 12, sm: 6 }}>
              <Card
                sx={{
                  height: '100%',
                  transition: 'all 0.3s ease',
                  border: config.layout === layout.key ? '3px solid' : '1px solid',
                  borderColor: config.layout === layout.key ? 'primary.main' : 'divider',
                  borderRadius: 3,
                  bgcolor: darkMode ? '#16213e' : 'background.paper',
                  '&:hover': { transform: 'translateY(-4px)', boxShadow: 6 },
                }}
              >
                <CardActionArea
                  onClick={() => setLayout(layout.key)}
                  sx={{ height: '100%' }}
                >
                  <CardContent sx={{ textAlign: 'center', py: 3 }}>
                    <Box
                      sx={{
                        width: '100%',
                        height: 80,
                        bgcolor: darkMode ? '#0f0f1a' : 'grey.200',
                        borderRadius: 1,
                        mb: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        gap: 0.5,
                      }}
                    >
                      {layout.key === 'hero-centered' && (
                        <>
                          <Box sx={{ width: '60%', height: 8, bgcolor: darkMode ? '#666' : 'grey.400', borderRadius: 1 }} />
                          <Box sx={{ width: '40%', height: 20, bgcolor: darkMode ? '#666' : 'grey.400', borderRadius: 1 }} />
                        </>
                      )}
                      {layout.key === 'hero-split' && (
                        <Box sx={{ display: 'flex', width: '100%', height: '100%' }}>
                          <Box sx={{ flex: 1, borderRight: '1px dashed grey', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Box sx={{ width: '50%', height: 30, bgcolor: darkMode ? '#666' : 'grey.400', borderRadius: 1 }} />
                          </Box>
                          <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Box sx={{ width: '50%', height: 50, bgcolor: darkMode ? '#666' : 'grey.400', borderRadius: 1 }} />
                          </Box>
                        </Box>
                      )}
                      {layout.key === 'hero-full' && (
                        <Box sx={{ width: '100%', height: '100%', bgcolor: darkMode ? '#666' : 'grey.400', borderRadius: 1 }} />
                      )}
                      {layout.key === 'grid' && (
                        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0.5, width: '90%', height: '90%' }}>
                          <Box sx={{ bgcolor: darkMode ? '#666' : 'grey.400', borderRadius: 0.5 }} />
                          <Box sx={{ bgcolor: darkMode ? '#666' : 'grey.400', borderRadius: 0.5 }} />
                          <Box sx={{ bgcolor: darkMode ? '#666' : 'grey.400', borderRadius: 0.5 }} />
                          <Box sx={{ bgcolor: darkMode ? '#666' : 'grey.400', borderRadius: 0.5 }} />
                        </Box>
                      )}
                      {layout.key === 'sidebar' && (
                        <Box sx={{ display: 'flex', width: '100%', height: '100%' }}>
                          <Box sx={{ width: '30%', bgcolor: darkMode ? '#666' : 'grey.400', borderRadius: '4px 0 0 4px' }} />
                          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 0.5, p: 0.5 }}>
                            <Box sx={{ width: '80%', height: 10, bgcolor: darkMode ? '#666' : 'grey.400', borderRadius: 0.5 }} />
                            <Box sx={{ width: '60%', height: 20, bgcolor: darkMode ? '#666' : 'grey.400', borderRadius: 0.5 }} />
                          </Box>
                        </Box>
                      )}
                    </Box>
                    <Typography variant="subtitle1" fontWeight="bold" sx={{ color: darkMode ? 'white' : 'inherit' }}>
                      {layout.label}
                    </Typography>
                    <Typography variant="body2" sx={{ color: darkMode ? 'grey.400' : 'text.secondary' }}>
                      {layout.descricao}
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

export default StepLayout;
