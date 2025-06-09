import React from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Container,
  Grid,
  Typography,
  TextField,
  Card,
  CardContent,
  CardMedia,
  Link,
  CssBaseline,
} from '@mui/material';

const services = [
  {
    title: 'Landing Pages que convertem',
    description: 'Páginas focadas em performance, funil e CTA eficaz.',
    image: '/services/landingpage.jpg',
  },
  {
    title: 'Sites institucionais',
    description: 'Sites leves, responsivos e elegantes.',
    image: '/services/site.jpg',
  },
  {
    title: 'Lojas virtuais',
    description: 'Com sistema de pagamentos, estoque e WhatsApp.',
    image: '/services/ecommerce.jpg',
  },
  {
    title: 'Blogs SEO',
    description: 'Conteúdo otimizado para visibilidade orgânica.',
    image: '/services/blog.jpg',
  },
  {
    title: 'Painéis administrativos',
    description: 'Dashboards para gestão de dados e usuários.',
    image: '/services/dashboard.jpg',
  },
];

const projects = [
  { title: 'Loja de Roupas', image: '/projects/loja.jpg', link: '#' },
  { title: 'Site Institucional', image: '/projects/site.jpg', link: '#' },
  { title: 'Painel Admin', image: '/projects/admin.jpg', link: '#' },
];

const technologies = ['React', 'TypeScript', 'Next.js', 'TailwindCSS', 'Node.js', 'Django', 'MongoDB'];

const WebDevLanding: React.FC = () => (
  <Box
    sx={{
      bgcolor: '#0f172a',
      color: '#fff',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <CssBaseline />

    {/* Header */}
    <AppBar position="static" sx={{ bgcolor: '#1e293b' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6">Desenvolvedor Web</Typography>
        <Button variant="contained" color="primary">
          Solicitar orçamento
        </Button>
      </Toolbar>
    </AppBar>

    {/* Conteúdo */}
    <Box sx={{ flex: 1, py: 4 }}>
      <Container maxWidth="lg">
        {/* Hero */}
        <Box textAlign="center" mb={8}>
          <img
            src="/banner/web-dev-hero.jpg"
            alt="Desenvolvimento Web"
            style={{ width: '100%', maxHeight: 400, objectFit: 'cover', borderRadius: 8 }}
          />
          <Typography variant="h3" component="h1" mt={4} gutterBottom>
            Criação de Sites e Landing Pages Profissionais
          </Typography>
          <Typography variant="h6" color="gray" mb={3}>
            Transforme sua presença online com design moderno, performance e resultados reais.
          </Typography>
          <Button variant="contained" color="primary">
            Solicitar orçamento
          </Button>
        </Box>

        {/* Serviços */}
        <Box mb={10}>
          <Typography variant="h4" gutterBottom>
            Serviços Oferecidos
          </Typography>
          <Grid container spacing={4}>
            {services.map((s, idx) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={idx}>
                <Card sx={{ bgcolor: '#1e293b' }}>
                  <CardMedia component="img" height="140" image={s.image} alt={s.title} />
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {s.title}
                    </Typography>
                    <Typography variant="body2" color="gray">
                      {s.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Projetos */}
        <Box mb={10}>
          <Typography variant="h4" gutterBottom>
            Projetos Recentes
          </Typography>
          <Grid container spacing={4}>
            {projects.map((p, idx) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={idx}>
                <Card
                  sx={{ bgcolor: '#1e293b', cursor: 'pointer' }}
                  onClick={() => window.open(p.link, '_blank')}
                >
                  <CardMedia component="img" height="160" image={p.image} alt={p.title} />
                  <CardContent>
                    <Typography variant="h6">{p.title}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Tecnologias */}
        <Box mb={10}>
          <Typography variant="h4" gutterBottom>
            Tecnologias utilizadas
          </Typography>
          <Grid container spacing={3}>
            {technologies.map((tech, i) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
                <Box
                  sx={{
                    bgcolor: '#0f172a',
                    p: 2,
                    borderRadius: 1,
                    textAlign: 'center',
                    border: '1px solid #334155',
                  }}
                >
                  <Typography>{tech}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Contato */}
        <Box mb={10}>
          <Typography variant="h4" gutterBottom>
            Fale comigo
          </Typography>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField fullWidth label="Seu nome" variant="outlined" />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField fullWidth label="Seu e-mail" variant="outlined" />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <TextField fullWidth label="Sua mensagem" multiline rows={4} variant="outlined" />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Button variant="contained" color="primary">
                Enviar mensagem
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>

    {/* Footer */}
    <Box sx={{ bgcolor: '#1e293b', py: 3 }}>
      <Container maxWidth="lg">
        <Grid container justifyContent="space-between" alignItems="center">
          <Typography variant="body2" color="gray">
            © {new Date().getFullYear()} Desenvolvedor Web — Todos os direitos reservados.
          </Typography>
          <Box>
            <Link href="#" color="gray" underline="hover" sx={{ mx: 1 }}>
              Termos
            </Link>
            <Link href="#" color="gray" underline="hover" sx={{ mx: 1 }}>
              Privacidade
            </Link>
            <Link href="#" color="gray" underline="hover" sx={{ mx: 1 }}>
              Contato
            </Link>
          </Box>
        </Grid>
      </Container>
    </Box>
  </Box>
);

export default WebDevLanding;
