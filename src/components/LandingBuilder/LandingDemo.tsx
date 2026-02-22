import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Dialog,
  IconButton,
  AppBar,
  Toolbar,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CloseIcon from '@mui/icons-material/Close';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useLandingBuilder } from './LandingBuilderContext';

interface TemplatePreview {
  id: string;
  titulo: string;
  descricao: string;
  imagem: string;
  tipo: string;
}

const templates: TemplatePreview[] = [
  {
    id: '1',
    titulo: 'E-commerce Moderno',
    descricao: 'Loja virtual com grid de produtos',
    tipo: 'ecommerce',
    imagem: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
  },
  {
    id: '2',
    titulo: 'Serviços Profissionais',
    descricao: 'Para prestadores de serviço',
    tipo: 'servico',
    imagem: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
  },
  {
    id: '3',
    titulo: 'Portfólio Criativo',
    descricao: 'Galeria de trabalhos e projetos',
    tipo: 'portfolio',
    imagem: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
  },
  {
    id: '4',
    titulo: 'Startup Tech',
    descricao: 'Inovação e tecnologia',
    tipo: 'startup',
    imagem: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=300&fit=crop',
  },
  {
    id: '5',
    titulo: 'Restaurante',
    descricao: 'Cardápio e reservas',
    tipo: 'restaurante',
    imagem: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop',
  },
  {
    id: '6',
    titulo: 'Profissional Liberal',
    descricao: 'Advogados, médicos, consultores',
    tipo: 'profissional',
    imagem: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=300&fit=crop',
  },
];

interface LandingDemoProps {
  onStart: () => void;
}

const LandingDemo: React.FC<LandingDemoProps> = ({ onStart }) => {
  const { darkMode, setDarkMode } = useLandingBuilder();
  const [selectedTemplate, setSelectedTemplate] = useState<TemplatePreview | null>(null);
  const isDark = darkMode;

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: isDark ? '#1a1a2e' : '#f5f5f5',
        color: isDark ? 'white' : 'inherit',
        transition: 'all 0.3s ease',
      }}
    >
      <AppBar 
        position="static" 
        elevation={0}
        sx={{ 
          bgcolor: isDark ? '#16213e' : 'white',
          color: isDark ? 'white' : 'inherit',
          borderBottom: isDark ? '1px solid #333' : '1px solid #eee',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Typography variant="h5" fontWeight="bold">
              LandingPage<span style={{ color: '#1976d2' }}>Builder</span>
            </Typography>
            <IconButton
              onClick={() => setDarkMode(!darkMode)}
              sx={{ 
                bgcolor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
                color: isDark ? 'white' : 'inherit',
                '&:hover': { bgcolor: isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)' },
              }}
            >
              {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Box
        sx={{
          background: isDark 
            ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'
            : 'linear-gradient(135deg, #1976d2 0%, #1565c0 50%, #0d47a1 100%)',
          py: 10,
          transition: 'all 0.3s ease',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 4, color: 'white' }}>
            <Typography
              variant="h2"
              fontWeight="bold"
              sx={{ mb: 2, fontSize: { xs: '2.5rem', md: '3.5rem' } }}
            >
              Crie Sua Landing Page
            </Typography>
            <Typography
              variant="h5"
              sx={{ mb: 4, opacity: 0.9, maxWidth: 600, mx: 'auto' }}
            >
              Escolha um template, personalize com suas imagens e conteúdo,
              e tenha uma landing page profissional em minutos
            </Typography>
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              onClick={onStart}
              sx={{
                bgcolor: 'white',
                color: '#1976d2',
                fontWeight: 'bold',
                fontSize: '1.2rem',
                px: 5,
                py: 1.5,
                borderRadius: 3,
                boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                '&:hover': {
                  bgcolor: 'grey.100',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              Iniciar Agora
            </Button>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ mb: 4, color: isDark ? 'white' : 'inherit', textAlign: 'center' }}
        >
          Templates Disponíveis
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {templates.map((template) => (
            <Grid key={template.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card
                sx={{
                  height: '100%',
                  borderRadius: 4,
                  transition: 'all 0.3s ease',
                  bgcolor: isDark ? '#16213e' : 'white',
                  color: isDark ? 'white' : 'inherit',
                  border: isDark ? '1px solid #333' : '1px solid #eee',
                  '&:hover': { 
                    transform: 'translateY(-8px)', 
                    boxShadow: isDark 
                      ? '0 20px 40px rgba(0,0,0,0.4)' 
                      : '0 20px 40px rgba(0,0,0,0.15)',
                  },
                }}
              >
                <CardActionArea onClick={() => setSelectedTemplate(template)}>
                  <Box sx={{ position: 'relative', borderRadius: '16px 16px 0 0', overflow: 'hidden' }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={template.imagem}
                      alt={template.titulo}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        bgcolor: 'rgba(0,0,0,0.5)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: 0,
                        transition: 'opacity 0.3s',
                        '&:hover': { opacity: 1 },
                      }}
                    >
                      <PlayArrowIcon sx={{ fontSize: 60, color: 'white' }} />
                    </Box>
                  </Box>
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h6" fontWeight="bold">
                      {template.titulo}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ color: isDark ? 'grey.400' : 'text.secondary' }}
                    >
                      {template.descricao}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 8, opacity: 0.7 }}>
          <Typography variant="body2" sx={{ color: isDark ? 'grey.400' : 'text.secondary' }}>
            Escolha um modelo acima e clique em "Iniciar Agora" para começar a personalizar
          </Typography>
        </Box>
      </Container>

      <Box
        component="footer"
        sx={{
          bgcolor: isDark ? '#0f0f1a' : '#1a1a2e',
          color: 'white',
          py: 6,
          mt: 'auto',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                LandingPage<span style={{ color: '#1976d2' }}>Builder</span>
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.7 }}>
                Crie landing pages profissionais em poucos minutos.
                Sem necessidade de conhecimento técnico.
              </Typography>
            </Grid>
            <Grid size={{ xs: 6, md: 4 }}>
              <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                Links Rápidos
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Typography variant="body2" sx={{ opacity: 0.7, cursor: 'pointer', '&:hover': { opacity: 1 } }}>
                  Templates
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.7, cursor: 'pointer', '&:hover': { opacity: 1 } }}>
                  Como Usar
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.7, cursor: 'pointer', '&:hover': { opacity: 1 } }}>
                  Exemplos
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 6, md: 4 }}>
              <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                Contato
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.7 }}>
                suporte@landingpagebuilder.com
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.7, mt: 1 }}>
                © {new Date().getFullYear()} LandingPageBuilder
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Dialog
        open={!!selectedTemplate}
        onClose={() => setSelectedTemplate(null)}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 4,
            bgcolor: isDark ? '#16213e' : 'white',
            color: isDark ? 'white' : 'inherit',
          }
        }}
      >
        {selectedTemplate && (
          <Box>
            <Box
              sx={{
                position: 'relative',
                height: 350,
                backgroundImage: `url(${selectedTemplate.imagem})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '16px 16px 0 0',
              }}
            >
              <IconButton
                onClick={() => setSelectedTemplate(null)}
                sx={{
                  position: 'absolute',
                  top: 8,
                  right: 8,
                  bgcolor: 'rgba(0,0,0,0.6)',
                  color: 'white',
                  '&:hover': { bgcolor: 'rgba(0,0,0,0.8)' },
                }}
              >
                <CloseIcon />
              </IconButton>
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  bgcolor: 'rgba(0,0,0,0.7)',
                  p: 3,
                }}
              >
                <Typography variant="h4" fontWeight="bold" color="white">
                  {selectedTemplate.titulo}
                </Typography>
                <Typography variant="body1" color="white" sx={{ opacity: 0.9 }}>
                  {selectedTemplate.descricao}
                </Typography>
              </Box>
            </Box>
            <Box sx={{ p: 4 }}>
              <Typography variant="body1" sx={{ mb: 3 }}>
                Este template é ideal para negócios do tipo <strong>{selectedTemplate.tipo}</strong>.
                Clique em "Personalizar" para começar a editar com suas próprias imagens e conteúdo.
              </Typography>
              <Button
                variant="contained"
                size="large"
                fullWidth
                onClick={() => {
                  setSelectedTemplate(null);
                  onStart();
                }}
                sx={{ 
                  py: 1.5,
                  borderRadius: 2,
                  bgcolor: '#1976d2',
                  '&:hover': { bgcolor: '#5a6fd6' },
                }}
              >
                Personalizar Este Template
              </Button>
            </Box>
          </Box>
        )}
      </Dialog>
    </Box>
  );
};

export default LandingDemo;
