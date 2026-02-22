import React, { useState } from 'react';
import { Box, Stepper, Step, StepLabel, Button, Paper, Fab, AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HomeIcon from '@mui/icons-material/Home';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { LandingBuilderProvider, useLandingBuilder } from './LandingBuilderContext';
import LandingDemo from './LandingDemo';
import StepTipoNegocio from './steps/StepTipoNegocio';
import StepEstiloVisual from './steps/StepEstiloVisual';
import StepLayout from './steps/StepLayout';
import StepImagens from './steps/StepImagens';
import LandingPreview from './LandingPreview';

const steps = [
  { label: 'Tipo de Negócio', component: <StepTipoNegocio /> },
  { label: 'Estilo Visual', component: <StepEstiloVisual /> },
  { label: 'Layout', component: <StepLayout /> },
  { label: 'Imagens e Conteúdo', component: <StepImagens /> },
  { label: 'Preview', component: <LandingPreview /> },
];

const canProceed = (step: number, config: any): boolean => {
  switch (step) {
    case 0: return !!config.tipoNegocio;
    case 1: return !!config.estiloVisual;
    case 2: return !!config.layout;
    case 3: return true;
    case 4: return true;
    default: return false;
  }
};

interface BuilderHeaderProps {
  onToggleDarkMode: () => void;
  onBackToDemo: () => void;
}

const BuilderHeader: React.FC<BuilderHeaderProps> = ({ onToggleDarkMode, onBackToDemo }) => {
  const { darkMode } = useLandingBuilder();
  
  return (
    <AppBar 
      position="static" 
      elevation={0}
      sx={{ 
        bgcolor: darkMode ? '#16213e' : 'white',
        color: darkMode ? 'white' : 'inherit',
        borderBottom: darkMode ? '1px solid #333' : '1px solid #eee',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography 
          variant="h6" 
          fontWeight="bold" 
          sx={{ cursor: 'pointer' }}
          onClick={onBackToDemo}
        >
          LandingPage<span style={{ color: '#1976d2' }}>Builder</span>
        </Typography>
        <IconButton
          onClick={onToggleDarkMode}
          sx={{ 
            bgcolor: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
            color: darkMode ? 'white' : 'inherit',
            '&:hover': { bgcolor: darkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)' },
          }}
        >
          {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

const BuilderContent: React.FC<{ onBackToDemo: () => void }> = ({ onBackToDemo }) => {
  const { config, step, nextStep, prevStep, reset, darkMode, setDarkMode } = useLandingBuilder();

  const handleNext = () => {
    if (step < steps.length - 1) {
      nextStep();
    }
  };

  const handleBack = () => {
    if (step > 0) {
      prevStep();
    }
  };

  const handleReset = () => {
    if (window.confirm('Deseja começar do zero?')) {
      reset();
    }
  };

  const isPreview = step === steps.length - 1;

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: isPreview ? 'white' : (darkMode ? '#1a1a2e' : 'grey.50'), color: darkMode ? 'white' : 'inherit' }}>
      {!isPreview && (
        <>
          <BuilderHeader onToggleDarkMode={() => setDarkMode(!darkMode)} onBackToDemo={onBackToDemo} />
          <Paper sx={{ p: 2, bgcolor: darkMode ? '#16213e' : 'white' }}>
            <Stepper activeStep={step} alternativeLabel>
              {steps.slice(0, -1).map((s, idx) => (
                <Step key={idx} completed={step > idx}>
                  <StepLabel
                    sx={{
                      '& .MuiStepLabel-label': {
                        color: darkMode ? 'grey.400' : 'text.secondary',
                      },
                      '& .MuiStepLabel-label.Mui-active': {
                        color: darkMode ? 'white' : 'text.primary',
                        fontWeight: 'bold',
                      },
                      '& .MuiStepLabel-label.Mui-completed': {
                        color: darkMode ? '#1976d2' : 'primary.main',
                      },
                      '& .MuiStepIcon-root': {
                        color: darkMode ? '#444' : 'grey.400',
                      },
                      '& .MuiStepIcon-root.Mui-active': {
                        color: darkMode ? '#1976d2' : 'primary.main',
                      },
                      '& .MuiStepIcon-root.Mui-completed': {
                        color: darkMode ? '#1976d2' : 'primary.main',
                      },
                    }}
                  >
                    {s.label}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </Paper>
        </>
      )}

      {isPreview && (
        <BuilderHeader onToggleDarkMode={() => setDarkMode(!darkMode)} onBackToDemo={onBackToDemo} />
      )}

      <Box sx={{ p: isPreview ? 0 : 3, flex: 1 }}>
        {steps[step].component}
      </Box>

      {!isPreview && (
        <Box sx={{ p: 3, display: 'flex', justifyContent: 'space-between' }}>
          <Button
            variant="outlined"
            startIcon={<ArrowBackIcon />}
            onClick={handleBack}
            disabled={step === 0}
            sx={{ color: darkMode ? 'white' : 'inherit', borderColor: darkMode ? 'grey.500' : 'inherit' }}
          >
            Voltar
          </Button>
          <Button
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            onClick={handleNext}
            disabled={!canProceed(step, config)}
            sx={{ bgcolor: '#1976d2' }}
          >
            {step === steps.length - 2 ? 'Ver Preview' : 'Próximo'}
          </Button>
        </Box>
      )}

      {isPreview && (
        <Fab
          color="secondary"
          onClick={handleReset}
          sx={{
            position: 'fixed',
            bottom: 16,
            right: 16,
          }}
        >
          <HomeIcon />
        </Fab>
      )}
    </Box>
  );
};

const LandingBuilder: React.FC = () => {
  const [showDemo, setShowDemo] = useState(true);

  return (
    <LandingBuilderProvider>
      {showDemo ? (
        <LandingDemo onStart={() => setShowDemo(false)} />
      ) : (
        <BuilderContent onBackToDemo={() => setShowDemo(true)} />
      )}
    </LandingBuilderProvider>
  );
};

export default LandingBuilder;
