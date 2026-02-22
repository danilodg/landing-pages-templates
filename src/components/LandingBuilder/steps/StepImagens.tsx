import React, { useCallback } from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent, IconButton, TextField, Paper } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteIcon from '@mui/icons-material/Delete';
import { useLandingBuilder } from '../LandingBuilderContext';
import type { ImagemUpload } from '../types';

const tiposImagem = [
  { key: 'hero', label: 'Imagem Hero (Banner principal)', descricao: 'Grande, impacto visual' },
  { key: 'logo', label: 'Logo', descricao: 'Logotipo da empresa' },
  { key: 'galeria', label: 'Galeria', descricao: 'Imagens para portfólio' },
  { key: 'produto', label: 'Produtos', descricao: 'Fotos de produtos' },
  { key: 'depoimento', label: 'Depoimentos', descricao: 'Fotos de clientes' },
  { key: 'banner', label: 'Banner secundário', descricao: 'Banners adicionais' },
];

const StepImagens: React.FC = () => {
  const { config, addImagem, removeImagem, setTitulo, setSubtitulo, setDescricao, setCtaTexto, darkMode } = useLandingBuilder();

  const handleUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>, tipo: ImagemUpload['tipo']) => {
    const files = event.target.files;
    if (!files) return;

    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        const imagem: ImagemUpload = {
          id: `${tipo}-${Date.now()}-${Math.random()}`,
          file,
          preview: reader.result as string,
          tipo,
        };
        addImagem(imagem);
      };
      reader.readAsDataURL(file);
    });
  }, [addImagem]);

  const imagensPorTipo = (tipo: ImagemUpload['tipo']) =>
    config.imagens.filter((img) => img.tipo === tipo);

  const inputSx = {
    '& .MuiOutlinedInput-root': {
      color: darkMode ? 'white' : 'inherit',
      '& fieldset': {
        borderColor: darkMode ? 'grey.600' : 'grey.300',
      },
      '&:hover fieldset': {
        borderColor: darkMode ? 'grey.500' : 'grey.400',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#1976d2',
      },
    },
    '& .MuiInputLabel-root': {
      color: darkMode ? 'grey.400' : 'text.secondary',
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: '#1976d2',
    },
  };

  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ color: darkMode ? 'white' : 'inherit' }}>
        Adicione suas imagens e informações
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 4, color: darkMode ? 'grey.400' : 'text.secondary' }}>
        Faça upload das imagens e personalize o conteúdo
      </Typography>

      <Box sx={{ maxWidth: 800, mx: 'auto' }}>
        <Paper sx={{ p: 3, mb: 4, bgcolor: darkMode ? '#16213e' : 'background.paper' }}>
          <Typography variant="h6" gutterBottom sx={{ color: darkMode ? 'white' : 'inherit' }}>
            Informações da Landing Page
          </Typography>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Título principal"
                value={config.titulo}
                onChange={(e) => setTitulo(e.target.value)}
                placeholder="Ex: Transforme sua ideia em realidade"
                sx={inputSx}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Subtítulo"
                value={config.subtitulo}
                onChange={(e) => setSubtitulo(e.target.value)}
                placeholder="Ex: Soluções digitais para seu negócio"
                sx={inputSx}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                label="Descrição"
                value={config.descricao}
                onChange={(e) => setDescricao(e.target.value)}
                placeholder="Descreva brevemente sua empresa ou serviço..."
                multiline
                rows={3}
                sx={inputSx}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Texto do botão (CTA)"
                value={config.ctaTexto}
                onChange={(e) => setCtaTexto(e.target.value)}
                placeholder="Ex: Quero saber mais"
                sx={inputSx}
              />
            </Grid>
          </Grid>
        </Paper>

        <Grid container spacing={3}>
          {tiposImagem.map((tipo) => {
            const imagens = imagensPorTipo(tipo.key as ImagemUpload['tipo']);
            return (
              <Grid key={tipo.key} size={{ xs: 12, md: 6 }}>
                <Card sx={{ bgcolor: darkMode ? '#16213e' : 'background.paper' }}>
                  <CardContent>
                    <Typography variant="subtitle1" fontWeight="bold" gutterBottom sx={{ color: darkMode ? 'white' : 'inherit' }}>
                      {tipo.label}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2, color: darkMode ? 'grey.400' : 'text.secondary' }}>
                    {tipo.descricao}
                  </Typography>

                  <Box
                    sx={{
                      border: '2px dashed',
                      borderColor: darkMode ? 'grey.600' : 'grey.300',
                      borderRadius: 2,
                      p: 4,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      minHeight: 120,
                      bgcolor: darkMode ? '#0f0f1a' : 'transparent',
                      '&:hover': { borderColor: '#1976d2', bgcolor: darkMode ? 'rgba(25, 118, 210, 0.1)' : 'action.hover' },
                    }}
                    component="label"
                  >
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      hidden
                      onChange={(e) => handleUpload(e, tipo.key as ImagemUpload['tipo'])}
                    />
                    <CloudUploadIcon sx={{ fontSize: 48, color: darkMode ? '#1976d2' : 'primary.main', mb: 1 }} />
                    <Typography variant="body2" sx={{ color: darkMode ? 'grey.400' : 'text.secondary' }}>
                      Clique ou arraste imagens aqui
                    </Typography>
                  </Box>

                  {imagens.length > 0 && (
                    <Grid container spacing={1} sx={{ mt: 1 }}>
                      {imagens.map((img) => (
                        <Grid key={img.id} size={6}>
                          <Box sx={{ position: 'relative' }}>
                            <CardMedia
                              component="img"
                              height="100"
                              image={img.preview}
                              sx={{ borderRadius: 1 }}
                            />
                            <IconButton
                              size="small"
                              onClick={() => removeImagem(img.id)}
                              sx={{
                                position: 'absolute',
                                top: 4,
                                right: 4,
                                bgcolor: 'rgba(0,0,0,0.6)',
                                color: 'white',
                                '&:hover': { bgcolor: 'error.main' },
                              }}
                            >
                              <DeleteIcon fontSize="small" />
                            </IconButton>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  )}
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      </Box>
    </Box>
  );
};

export default StepImagens;
