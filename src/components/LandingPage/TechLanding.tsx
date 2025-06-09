import React from 'react';
import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  CssBaseline,
  Grid,
  Toolbar,
  Typography,
} from '@mui/material';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const TechLanding: React.FC = () => {
  return (
    <>
      <CssBaseline />

      {/* Navbar */}
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Minha Assistência Técnica
          </Typography>
          <Button color="inherit">Serviços</Button>
          <Button color="inherit">Sobre</Button>
          <Button color="inherit">Contato</Button>
        </Toolbar>
      </AppBar>

      {/* HERO */}
      <Box
        sx={{
          backgroundImage: 'linear-gradient(to right, #1976d2, #1565c0)',
          color: '#fff',
          py: 10,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" component="h1" gutterBottom>
            Assistência técnica confiável e acessível
          </Typography>
          <Typography variant="h6" color="inherit" paragraph>
            Seu notebook, celular ou casa com conserto rápido, garantia e preço justo.
          </Typography>
          <Button variant="contained" color="secondary" size="large">
            Solicitar Orçamento
          </Button>
        </Container>
      </Box>

      {/* SERVIÇOS */}
      <Box sx={{ py: 8, backgroundColor: '#fafafa' }}>
        <Container>
          <Typography variant="h4" align="center" gutterBottom>
            Nossos serviços
          </Typography>
          <Grid container spacing={4} mt={2}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Card elevation={3}>
                <CardContent sx={{ textAlign: 'center' }}>
                  <LaptopMacIcon fontSize="large" color="primary" />
                  <Typography variant="h6" gutterBottom>
                    Conserto de notebook e PC
                  </Typography>
                  <Typography color="text.secondary">
                    Formatação, upgrades, troca de peças, limpeza e manutenção geral.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Card elevation={3}>
                <CardContent sx={{ textAlign: 'center' }}>
                  <PhoneIphoneIcon fontSize="large" color="primary" />
                  <Typography variant="h6" gutterBottom>
                    Celulares e tablets
                  </Typography>
                  <Typography color="text.secondary">
                    Troca de tela, bateria, conectores, botões e diagnóstico rápido.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Card elevation={3}>
                <CardContent sx={{ textAlign: 'center' }}>
                  <HomeRepairServiceIcon fontSize="large" color="primary" />
                  <Typography variant="h6" gutterBottom>
                    Serviços residenciais
                  </Typography>
                  <Typography color="text.secondary">
                    Manutenções corretivas e preventivas em residências, redes e equipamentos.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* VANTAGENS */}
      <Box sx={{ py: 8 }}>
        <Container>
          <Typography variant="h4" align="center" gutterBottom>
            Por que escolher a gente?
          </Typography>
          <Grid container spacing={4} mt={2}>
            {[
              'Preço justo e transparente',
              'Atendimento rápido',
              'Garantia em todos os serviços',
            ].map((item, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index}>
                <Card elevation={2}>
                  <CardContent>
                    <Typography variant="h6">{item}</Typography>
                    <Typography color="text.secondary" mt={1}>
                      {index === 0 &&
                        'Você sabe o que está pagando. Orçamento claro antes do serviço.'}
                      {index === 1 &&
                        'Consertos rápidos, sem enrolação. Seu tempo vale muito.'}
                      {index === 2 &&
                        'Confiança garantida com cobertura de 3 a 12 meses.'}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA FINAL */}
      <Box
        sx={{
          py: 6,
          textAlign: 'center',
          backgroundColor: '#1976d2',
          color: '#fff',
        }}
      >
        <Typography variant="h4" gutterBottom>
          Pronto para resolver seu problema?
        </Typography>
        <Button
          variant="contained"
          size="large"
          color="secondary"
          startIcon={<WhatsAppIcon />}
          href="https://wa.me/SEU_NUMERO"
          target="_blank"
        >
          Fale pelo WhatsApp
        </Button>
      </Box>

      {/* RODAPÉ */}
      <Box sx={{ py: 4, textAlign: 'center', backgroundColor: '#eeeeee' }}>
        <Typography variant="body2" color="text.secondary">
          © 2025 Minha Assistência Técnica. Todos os direitos reservados.
        </Typography>
      </Box>
    </>
  );
};

export default TechLanding;
