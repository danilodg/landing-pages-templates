import React, { useState } from 'react';
import { Box, Typography, Button, Container, Grid, Card, CardContent, CardMedia, TextField, Dialog, IconButton } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarIcon from '@mui/icons-material/Star';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CloseIcon from '@mui/icons-material/Close';
import { useLandingBuilder } from './LandingBuilderContext';
import { CORES_PRIMARIAS } from './types';

const defaultProdutos = [
  { id: 1, nome: 'Produto Premium', descricao: 'Produto de alta qualidade com acabamento perfeito. Ideal para quem busca excelência.', preco: 'R$ 299,90' },
  { id: 2, nome: 'Serviço Especial', descricao: 'Atendimento personalizado com suporte dedicado 24/7 para sua tranquilidade.', preco: 'R$ 199,90' },
  { id: 3, nome: 'Kit Completo', descricao: 'Tudo o que você precisa em um único pacote. Economia e praticidade.', preco: 'R$ 399,90' },
  { id: 4, nome: 'Assinatura Mensal', descricao: 'Tenha acesso contínuo a todos os benefícios e atualizações exclusivas.', preco: 'R$ 49,90/mês' },
  { id: 5, nome: 'Consultoria Personalizada', descricao: 'Sessão individual com nossos especialistas para atender suas necessidades específicas.', preco: 'R$ 299,90' },
  { id: 6, nome: 'Curso Expert', descricao: 'Aprenda com os melhores profissionais do mercado. Material completo e certificado.', preco: 'R$ 199,90' },
];

const LandingPreview: React.FC = () => {
  const { config, darkMode } = useLandingBuilder();
  const primaryColor = CORES_PRIMARIAS[config.corPrimaria] || '#1976d2';
  
  const [selectedProduto, setSelectedProduto] = useState<{nome: string; descricao: string; preco: string; imagem?: string} | null>(null);

  const heroImage = config.imagens.find((i) => i.tipo === 'hero')?.preview;
  const logoImage = config.imagens.find((i) => i.tipo === 'logo')?.preview;
  const galeriaImages = config.imagens.filter((i) => i.tipo === 'galeria');
  const produtoImages = config.imagens.filter((i) => i.tipo === 'produto');

  const bgSecondary = darkMode ? '#121220' : 'grey.50';
  const textPrimary = darkMode ? 'white' : 'inherit';
  const textSecondary = darkMode ? 'grey.400' : 'text.secondary';
  const cardBg = darkMode ? '#252542' : 'background.paper';

  const getDefaultContent = () => {
    switch (config.tipoNegocio) {
      case 'ecommerce':
        return {
          titulo: 'Sua Loja Online',
          subtitulo: 'Os melhores produtos com entrega para todo o Brasil',
          descricao: 'Oferecemos produtos de qualidade com preço justo. Compre online e receba no conforto da sua casa.',
          ctaTexto: 'Comprar Agora',
          heroImageFinal: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
          logoImageFinal: null,
        };
      case 'servico':
        return {
          titulo: 'Soluções Profissionais',
          subtitulo: 'Serviços especializados para sua empresa',
          descricao: 'Equipe qualificada pronta para atender suas necessidades. Entre em contato e peça um orçamento.',
          ctaTexto: 'Solicitar Orçamento',
          heroImageFinal: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop',
          logoImageFinal: null,
        };
      case 'portfolio':
        return {
          titulo: 'Meu Portfólio',
          subtitulo: 'Projetos e Trabalhos',
          descricao: 'Conheça meus trabalhos e projetos. Estou disponível para novas parcerias e oportunidades.',
          ctaTexto: 'Ver Projetos',
          heroImageFinal: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=800&fit=crop',
          logoImageFinal: null,
        };
      case 'startup':
        return {
          titulo: 'Inovação que Transforma',
          subtitulo: 'Tecnologia de ponta para o seu negócio',
          descricao: 'Estamos revolucionando o mercado com soluções inovadoras. Junte-se a nós nessa jornada.',
          ctaTexto: 'Saiba Mais',
          heroImageFinal: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&h=800&fit=crop',
          logoImageFinal: null,
        };
      case 'restaurante':
        return {
          titulo: 'Sabores Inesquecíveis',
          subtitulo: 'A melhor gastronomia da região',
          descricao: 'Ambiente acolhedor, pratos executivos e um cardápio variadas. Reserve sua mesa agora!',
          ctaTexto: 'Fazer Reserva',
          heroImageFinal: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=800&fit=crop',
          logoImageFinal: null,
        };
      case 'profissional':
        return {
          titulo: 'Serviços Profissionais',
          subtitulo: 'Experiência e qualidade ao seu dispor',
          descricao: 'Atendimento personalizado e especializado. Marque sua consulta e conheça nossos serviços.',
          ctaTexto: 'Agendar Consulta',
          heroImageFinal: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&h=800&fit=crop',
          logoImageFinal: null,
        };
      default:
        return {
          titulo: config.titulo || 'Transforme sua Presença Online',
          subtitulo: config.subtitulo || 'Crie landing pages profissionais em minutos',
          descricao: config.descricao || 'Nossa plataforma oferece as melhores ferramentas para você criar presença digital rapidamente.',
          ctaTexto: config.ctaTexto || 'Começar Agora',
          heroImageFinal: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
          logoImageFinal: null,
        };
    }
  };

  const defaults = getDefaultContent();
  const titulo = config.titulo || defaults.titulo;
  const subtitulo = config.subtitulo || defaults.subtitulo;
  const descricao = config.descricao || defaults.descricao;
  const ctaTexto = config.ctaTexto || defaults.ctaTexto;
  const heroImageFinalDefault = defaults.heroImageFinal;
  const logoImageDefault = defaults.logoImageFinal;

  const heroImageFinal = heroImage || heroImageFinalDefault;
  const logoImageFinal = logoImage || logoImageDefault;

  const getPlaceholderBg = () => {
    const lightness = config.estiloVisual === 'minimalista' ? 90 : 
                     config.estiloVisual === 'classico' ? 85 :
                     config.estiloVisual === 'vibrante' ? 80 : 85;
    return `hsl(${config.corPrimaria ? 
      ({ blue: 210, green: 120, red: 0, purple: 280, orange: 25, teal: 170, pink: 330, indigo: 240 }[config.corPrimaria] || 210) 
      : 210}, 60%, ${lightness}%)`;
  };

  const renderPlaceholder = (height: number, label?: string) => (
    <Box
      sx={{
        height,
        bgcolor: getPlaceholderBg(),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 1,
      }}
    >
      {label && (
        <Typography variant="body2" color="text.secondary">
          {label}
        </Typography>
      )}
    </Box>
  );

  const getFontFamily = () => {
    switch (config.estiloVisual) {
      case 'moderno': return 'Roboto, sans-serif';
      case 'classico': return 'Georgia, serif';
      case 'minimalista': return 'Arial, sans-serif';
      case 'vibrante': return 'Verdana, sans-serif';
      case 'corporativo': return 'Helvetica, Arial, sans-serif';
      case 'criativo': return 'Courier New, monospace';
      default: return 'Roboto, sans-serif';
    }
  };

  const renderHeroCentered = () => (
    <Box
      sx={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        bgcolor: heroImageFinal ? 'transparent' : primaryColor,
        backgroundImage: heroImageFinal ? `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${heroImageFinal})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        py: 10,
        px: 3,
      }}
    >
      {logoImageFinal && (
        <Box component="img" src={logoImageFinal} alt="Logo" sx={{ height: 80, mb: 3 }} />
      )}
      <Typography variant="h2" fontWeight="bold" sx={{ fontFamily: getFontFamily(), mb: 2, maxWidth: 800 }}>
        {titulo}
      </Typography>
      <Typography variant="h5" sx={{ mb: 4, maxWidth: 600, opacity: 0.9 }}>
        {subtitulo}
      </Typography>
      <Button
        variant="contained"
        size="large"
        endIcon={<ArrowForwardIcon />}
        sx={{
          bgcolor: 'white',
          color: primaryColor,
          fontWeight: 'bold',
          px: 5,
          py: 1.5,
          fontSize: '1.1rem',
          '&:hover': { bgcolor: 'grey.100' },
        }}
      >
        {ctaTexto}
      </Button>
    </Box>
  );

  const renderHeroSplit = () => (
    <Box sx={{ minHeight: '80vh', display: 'flex' }}>
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          px: 8,
          bgcolor: primaryColor,
          color: 'white',
        }}
      >
        {logoImageFinal && (
          <Box component="img" src={logoImageFinal} alt="Logo" sx={{ height: 60, mb: 3 }} />
        )}
        <Typography variant="h2" fontWeight="bold" sx={{ fontFamily: getFontFamily(), mb: 2 }}>
          {titulo}
        </Typography>
        <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
          {subtitulo}
        </Typography>
        <Button
          variant="contained"
          size="large"
          endIcon={<ArrowForwardIcon />}
          sx={{
            bgcolor: 'white',
            color: primaryColor,
            fontWeight: 'bold',
            px: 5,
            py: 1.5,
            alignSelf: 'flex-start',
          }}
        >
          {ctaTexto}
        </Button>
      </Box>
      <Box
        sx={{
          flex: 1,
          backgroundImage: heroImageFinal ? `url(${heroImageFinal})` : `linear-gradient(135deg, ${primaryColor} 0%, ${primaryColor}dd 100%)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
    </Box>
  );

  const renderHeroFull = () => (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: heroImageFinal ? `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${heroImageFinal})` : `linear-gradient(135deg, ${primaryColor} 0%, ${primaryColor}dd 100%)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        {logoImageFinal && (
          <Box component="img" src={logoImageFinal} alt="Logo" sx={{ height: 100, mb: 4 }} />
        )}
        <Typography variant="h1" fontWeight="bold" sx={{ fontFamily: getFontFamily(), mb: 3 }}>
          {titulo}
        </Typography>
        <Typography variant="h4" sx={{ mb: 5, opacity: 0.9 }}>
          {subtitulo}
        </Typography>
        <Button
          variant="contained"
          size="large"
          endIcon={<ArrowForwardIcon />}
          sx={{
            bgcolor: 'white',
            color: primaryColor,
            fontWeight: 'bold',
            px: 6,
            py: 2,
            fontSize: '1.2rem',
          }}
        >
          {ctaTexto}
        </Button>
      </Container>
    </Box>
  );

  const renderGrid = () => (
    <Box>
      {renderHeroSplit()}
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" fontWeight="bold" align="center" gutterBottom sx={{ fontFamily: getFontFamily() }}>
          Nossos Produtos
        </Typography>
        <Grid container spacing={3} sx={{ mt: 2 }}>
          {produtoImages.length > 0 ? produtoImages.slice(0, 6).map((img, idx) => (
            <Grid key={img.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card sx={{ height: '100%' }}>
                <CardMedia component="img" height="200" image={img.preview} />
                <CardContent>
                  <Typography variant="h6">Produto {idx + 1}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Descrição do produto
                  </Typography>
                  <Button size="small" sx={{ mt: 1, color: primaryColor }}>
                    Ver detalhes
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          )) : (
            [...Array(6)].map((_, idx) => (
              <Grid key={idx} size={{ xs: 12, sm: 6, md: 4 }}>
                <Card sx={{ height: '100%' }}>
                  {renderPlaceholder(200, 'Produto')}
                  <CardContent>
                    <Typography variant="h6">Produto {idx + 1}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Descrição do produto
                    </Typography>
                    <Button size="small" sx={{ mt: 1, color: primaryColor }}>
                      Ver detalhes
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))
          )}
        </Grid>
      </Container>
    </Box>
  );

  const renderSidebar = () => (
    <Box sx={{ minHeight: '100vh', display: 'flex' }}>
      <Box
        sx={{
          width: 280,
          bgcolor: primaryColor,
          color: 'white',
          p: 3,
          position: 'fixed',
          height: '100vh',
          left: 0,
          top: 0,
        }}
      >
        {logoImageFinal ? (
          <Box component="img" src={logoImageFinal} alt="Logo" sx={{ height: 60, mb: 4 }} />
        ) : (
          <Typography variant="h5" fontWeight="bold" sx={{ mb: 4 }}>Logo</Typography>
        )}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {['Início', 'Sobre', 'Serviços', 'Contato'].map((item) => (
            <Typography key={item} variant="body1" sx={{ cursor: 'pointer', '&:hover': { opacity: 0.8 } }}>
              {item}
            </Typography>
          ))}
        </Box>
      </Box>
      <Box sx={{ ml: '280px', flex: 1 }}>
        <Box
          sx={{
            minHeight: '60vh',
            backgroundImage: heroImageFinal ? `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${heroImageFinal})` : `linear-gradient(135deg, ${primaryColor} 0%, ${primaryColor}dd 100%)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            px: 3,
          }}
        >
          <Container maxWidth="md" sx={{ textAlign: 'center', py: 10 }}>
            <Typography variant="h2" fontWeight="bold" sx={{ fontFamily: getFontFamily(), mb: 2 }}>
              {titulo}
            </Typography>
            <Typography variant="h5" sx={{ mb: 4 }}>
              {subtitulo}
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{ bgcolor: primaryColor, px: 5 }}
            >
              {ctaTexto}
            </Button>
          </Container>
        </Box>
        <Container sx={{ py: 8 }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ fontFamily: getFontFamily() }}>
            Sobre Nós
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {descricao}
          </Typography>
        </Container>
      </Box>
    </Box>
  );

  const getServicos = () => {
    switch (config.tipoNegocio) {
      case 'ecommerce':
        return [
          { titulo: 'Entrega Rápida', descricao: 'Entregamos em todo o Brasil' },
          { titulo: 'Pagamento Seguro', descricao: 'Diversas formas de pagamento' },
          { titulo: 'Qualidade Garantida', descricao: 'Produtos selecionados' },
          { titulo: 'Suporte Online', descricao: 'Atendimento 24/7' },
        ];
      case 'servico':
        return [
          { titulo: 'Atendimento Personalizado', descricao: 'Soluções sob medida' },
          { titulo: 'Profissionais Qualificados', descricao: 'Equipe especializada' },
          { titulo: 'Pontualidade', descricao: 'Respeito ao prazo' },
          { titulo: 'Garantia de Serviço', descricao: 'Satisfação garantida' },
        ];
      case 'portfolio':
        return [
          { titulo: 'Projetos Únicos', descricao: 'Criatividade exclusiva' },
          { titulo: 'Qualidade Profissional', descricao: 'Alto padrão de qualidade' },
          { titulo: 'Prazo Entregue', descricao: 'Cronograma respeitado' },
          { titulo: 'Follow-up', descricao: 'Acompanhamento completo' },
        ];
      case 'startup':
        return [
          { titulo: 'Tecnologia Inovadora', descricao: 'Soluções de ponta' },
          { titulo: 'Escalabilidade', descricao: 'Cresça sem limites' },
          { titulo: 'Segurança', descricao: 'Dados protegidos' },
          { titulo: 'Suporte 24/7', descricao: ' sempre disponível' },
        ];
      case 'restaurante':
        return [
          { titulo: 'Ingredients Frescos', descricao: 'Qualidade garantida' },
          { titulo: 'Ambiente Acolhedor', descricao: 'Conforto para toda família' },
          { titulo: 'Reservas Online', descricao: 'Agende pelo site' },
          { titulo: 'Eventos', descricao: 'Aniversários e confraternizações' },
        ];
      case 'profissional':
        return [
          { titulo: 'Atendimento Especializado', descricao: 'Expertise no setor' },
          { titulo: 'Consulta Online', descricao: 'Atendimento remoto' },
          { titulo: 'Horário Flexível', descricao: 'Agende seu horário' },
          { titulo: 'Confidencialidade', descricao: 'Privacidade garantida' },
        ];
      default:
        return [
          { titulo: 'Qualidade', descricao: 'Melhor atendimento' },
          { titulo: 'Precisão', descricao: 'Resultados assertivos' },
          { titulo: 'Compromisso', descricao: 'Satisfação do cliente' },
          { titulo: 'Inovação', descricao: 'Sempre atualizado' },
        ];
    }
  };

  const getDepoimentos = () => [
    { nome: 'Cliente Satisfeito', texto: 'Excelente trabalho! Recomendo para todos.', nota: 5 },
    { nome: 'Maria Silva', texto: 'Profissional muito competente e dedicado.', nota: 5 },
    { nome: 'João Santos', texto: 'Superou todas as expectativas. Muito obrigado!', nota: 5 },
  ];

  const servicos = getServicos();
  const depoimentos = getDepoimentos();

  const isLayoutGrid = config.layout === 'grid';

  const renderContent = () => (
    <>
      {config.layout === 'hero-centered' && renderHeroCentered()}
      {config.layout === 'hero-split' && renderHeroSplit()}
      {config.layout === 'hero-full' && renderHeroFull()}
      {config.layout === 'grid' && renderGrid()}
      {config.layout === 'sidebar' && renderSidebar()}

      <Box sx={{ py: 10, bgcolor: bgSecondary, position: 'relative', overflow: 'hidden' }}>
        <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', bgcolor: primaryColor }} />
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ color: textPrimary, fontFamily: getFontFamily() }}>
                Sobre Nós
              </Typography>
              <Typography variant="h6" fontWeight="medium" sx={{ color: primaryColor, mb: 2 }}>
                {titulo}
              </Typography>
              <Typography variant="body1" sx={{ color: textSecondary, mb: 3, lineHeight: 1.8 }}>
                {descricao}
              </Typography>
              <Typography variant="body1" sx={{ color: textSecondary, mb: 4, lineHeight: 1.8 }}>
                Nossa empresa foi fundada com o propósito de oferecer as melhores soluções para nossos clientes. 
                Ao longo dos anos, construímos uma reputação sólida baseada em qualidade, inovação e compromisso 
                com resultados. Nossa equipe é formada por profissionais dedicados e especializados.
              </Typography>
              <Grid container spacing={3}>
                <Grid size={{ xs: 4 }}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h3" fontWeight="bold" sx={{ color: primaryColor }}>5+</Typography>
                    <Typography variant="body2" sx={{ color: textSecondary }}>Anos de experiência</Typography>
                  </Box>
                </Grid>
                <Grid size={{ xs: 4 }}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h3" fontWeight="bold" sx={{ color: primaryColor }}>500+</Typography>
                    <Typography variant="body2" sx={{ color: textSecondary }}>Clientes satisfeitos</Typography>
                  </Box>
                </Grid>
                <Grid size={{ xs: 4 }}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h3" fontWeight="bold" sx={{ color: primaryColor }}>100%</Typography>
                    <Typography variant="body2" sx={{ color: textSecondary }}>Qualidade garantida</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card sx={{ p: 4, borderRadius: 4, boxShadow: 4, bgcolor: cardBg }}>
                <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ color: textPrimary }}>
                  Nossa Missão
                </Typography>
                <Typography variant="body1" sx={{ color: textSecondary, mb: 3, fontStyle: 'italic' }}>
                  "Proporcionar a melhor experiência aos nossos clientes, superando expectativas 
                  e construindo relationships duradouras baseadas em confiança e resultados."
                </Typography>
                <Box sx={{ borderLeft: `4px solid ${primaryColor}`, pl: 2, py: 2 }}>
                  <Typography variant="body2" sx={{ color: textSecondary }}>
                    <strong style={{ color: textPrimary }}>Valores:</strong> Compromisso com a excelência, 
                    inovação constante, transparência em todas as relações e foco no sucesso do cliente.
                  </Typography>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ bgcolor: bgSecondary, py: 8 }}>
        <Container>
          <Typography variant="h4" fontWeight="bold" align="center" gutterBottom sx={{ fontFamily: getFontFamily(), color: textPrimary }}>
            Nossos Serviços
          </Typography>
          <Typography variant="body1" align="center" sx={{ color: textSecondary, mb: 4, maxWidth: 600, mx: 'auto' }}>
            O que oferecemos para você
          </Typography>
          <Grid container spacing={3}>
            {servicos.map((servico, idx) => (
              <Grid key={idx} size={{ xs: 12, sm: 6, md: 3 }}>
                <Card sx={{ height: '100%', p: 2, textAlign: 'center', borderRadius: 2, boxShadow: 1, bgcolor: cardBg, '&:hover': { boxShadow: 4, transform: 'translateY(-4px)' }, transition: 'all 0.3s' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                    <CheckCircleIcon sx={{ fontSize: 40, color: primaryColor }} />
                  </Box>
                  <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ color: textPrimary }}>
                    {servico.titulo}
                  </Typography>
                  <Typography variant="body2" sx={{ color: textSecondary }}>
                    {servico.descricao}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {!isLayoutGrid && (
        <Box sx={{ py: 10, bgcolor: bgSecondary, position: 'relative' }}>
          <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', bgcolor: primaryColor }} />
          <Container maxWidth="lg">
            <Typography variant="h3" fontWeight="bold" align="center" gutterBottom sx={{ color: textPrimary, mb: 1 }}>
              Nossos Produtos
            </Typography>
            <Typography variant="body1" align="center" sx={{ color: textSecondary, mb: 4 }}>
              conheça nossos principais produtos e serviços
            </Typography>
            <Grid container spacing={3}>
              {defaultProdutos.map((produto, idx) => (
                <Grid key={produto.id} size={{ xs: 12, sm: 6, md: 4 }}>
                  <Card 
                    onClick={() => setSelectedProduto({ ...produto, imagem: produtoImages[idx]?.preview || getDefaultContent().heroImageFinal })}
                    sx={{ 
                      height: '100%', 
                      borderRadius: 3, 
                      boxShadow: 2, 
                      bgcolor: cardBg,
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      overflow: 'hidden',
                      '&:hover': { 
                        boxShadow: 6, 
                        transform: 'translateY(-8px)'
                      }
                    }}
                  >
                    <Box sx={{ position: 'relative', height: 200 }}>
                      {produtoImages[idx]?.preview ? (
                        <CardMedia component="img" height="200" image={produtoImages[idx].preview} />
                      ) : (
                        <Box sx={{ 
                          height: '100%', 
                          bgcolor: getPlaceholderBg(), 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center',
                          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop)`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }}>
                        </Box>
                      )}
                      <Box sx={{ 
                        position: 'absolute', 
                        bottom: 0, 
                        left: 0, 
                        right: 0, 
                        bgcolor: 'rgba(0,0,0,0.7)', 
                        py: 1,
                        px: 2
                      }}>
                        <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>
                          {produto.nome}
                        </Typography>
                      </Box>
                    </Box>
                    <CardContent>
                      <Typography variant="h5" fontWeight="bold" sx={{ color: primaryColor, mb: 1 }}>
                        {produto.preco}
                      </Typography>
                      <Typography variant="body2" sx={{ color: textSecondary, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {produto.descricao}
                      </Typography>
                      <Button 
                        size="small" 
                        sx={{ mt: 2, color: primaryColor, fontWeight: 'bold' }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProduto({ ...produto, imagem: produtoImages[idx]?.preview || getDefaultContent().heroImageFinal });
                        }}
                      >
                        Ver detalhes
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      )}

      <Dialog 
        open={!!selectedProduto} 
        onClose={() => setSelectedProduto(null)}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: { borderRadius: 3, bgcolor: cardBg }
        }}
      >
        {selectedProduto && (
          <Grid container>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ 
                height: { xs: 250, md: '100%' },
                minHeight: 400,
                backgroundImage: `url(${selectedProduto.imagem || getDefaultContent().heroImageFinal})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }} />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }} sx={{ p: 4 }}>
              <IconButton
                onClick={() => setSelectedProduto(null)}
                sx={{ position: 'absolute', top: 8, right: 8 }}
              >
                <CloseIcon />
              </IconButton>
              <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ color: textPrimary }}>
                {selectedProduto.nome}
              </Typography>
              <Typography variant="h4" fontWeight="bold" sx={{ color: primaryColor, mb: 3 }}>
                {selectedProduto.preco}
              </Typography>
              <Typography variant="body1" sx={{ color: textSecondary, mb: 4, lineHeight: 1.8 }}>
                {selectedProduto.descricao}
              </Typography>
              <Typography variant="body2" sx={{ color: textSecondary, mb: 4 }}>
                Este produto foi desenvolvido com os mais altos padrões de qualidade. 
                Garantimos satisfação total ou seu dinheiro de volta. Entre em contato 
                para saber mais sobre condições e formas de pagamento.
              </Typography>
              <Button 
                variant="contained" 
                fullWidth 
                size="large"
                sx={{ 
                  bgcolor: primaryColor, 
                  py: 1.5,
                  fontWeight: 'bold',
                  '&:hover': { bgcolor: primaryColor, opacity: 0.9 }
                }}
              >
                Comprar Agora
              </Button>
            </Grid>
          </Grid>
        )}
      </Dialog>

      <Box sx={{ py: 10, bgcolor: bgSecondary, position: 'relative' }}>
        <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', bgcolor: primaryColor }} />
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ color: textPrimary, fontFamily: getFontFamily() }}>
              O que nossos clientes dizem
            </Typography>
            <Typography variant="body1" sx={{ color: textSecondary, maxWidth: 600, mx: 'auto' }}>
              Descubra o que nossos clientes falam sobre nós
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <Card sx={{ p: 4, borderRadius: 4, boxShadow: 3, bgcolor: cardBg, width: { xs: '100%', md: '50%' }, alignSelf: 'flex-start', transition: 'all 0.3s ease', '&:hover': { boxShadow: 6, transform: 'translateY(-5px)' } }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                <Box sx={{ width: 50, height: 50, borderRadius: '50%', bgcolor: primaryColor, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '1.2rem' }}>
                  {depoimentos[0].nome.charAt(0)}
                </Box>
                <Box>
                  <Typography variant="h6" fontWeight="bold" sx={{ color: textPrimary }}>{depoimentos[0].nome}</Typography>
                  <Box sx={{ display: 'flex' }}>
                    {[...Array(depoimentos[0].nota)].map((_, i) => <StarIcon key={i} sx={{ color: '#ffc107', fontSize: 18 }} />)}
                  </Box>
                </Box>
              </Box>
              <Typography variant="body1" sx={{ color: textSecondary, fontStyle: 'italic', lineHeight: 1.8 }}>"{depoimentos[0].texto}"</Typography>
            </Card>
            <Card sx={{ p: 4, borderRadius: 4, boxShadow: 3, bgcolor: cardBg, width: { xs: '100%', md: '50%' }, alignSelf: 'flex-end', transition: 'all 0.3s ease', '&:hover': { boxShadow: 6, transform: 'translateY(-5px)' } }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                <Box sx={{ width: 50, height: 50, borderRadius: '50%', bgcolor: primaryColor, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '1.2rem' }}>
                  {depoimentos[1].nome.charAt(0)}
                </Box>
                <Box>
                  <Typography variant="h6" fontWeight="bold" sx={{ color: textPrimary }}>{depoimentos[1].nome}</Typography>
                  <Box sx={{ display: 'flex' }}>
                    {[...Array(depoimentos[1].nota)].map((_, i) => <StarIcon key={i} sx={{ color: '#ffc107', fontSize: 18 }} />)}
                  </Box>
                </Box>
              </Box>
              <Typography variant="body1" sx={{ color: textSecondary, fontStyle: 'italic', lineHeight: 1.8 }}>"{depoimentos[1].texto}"</Typography>
            </Card>
            <Card sx={{ p: 4, borderRadius: 4, boxShadow: 3, bgcolor: cardBg, width: { xs: '100%', md: '50%' }, alignSelf: 'flex-start', transition: 'all 0.3s ease', '&:hover': { boxShadow: 6, transform: 'translateY(-5px)' } }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                <Box sx={{ width: 50, height: 50, borderRadius: '50%', bgcolor: primaryColor, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '1.2rem' }}>
                  {depoimentos[2].nome.charAt(0)}
                </Box>
                <Box>
                  <Typography variant="h6" fontWeight="bold" sx={{ color: textPrimary }}>{depoimentos[2].nome}</Typography>
                  <Box sx={{ display: 'flex' }}>
                    {[...Array(depoimentos[2].nota)].map((_, i) => <StarIcon key={i} sx={{ color: '#ffc107', fontSize: 18 }} />)}
                  </Box>
                </Box>
              </Box>
              <Typography variant="body1" sx={{ color: textSecondary, fontStyle: 'italic', lineHeight: 1.8 }}>"{depoimentos[2].texto}"</Typography>
            </Card>
          </Box>
        </Container>
      </Box>

      {galeriaImages.length > 0 && (
        <Box sx={{ bgcolor: 'grey.50', py: 8 }}>
          <Container>
            <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
              Galeria
            </Typography>
            <Grid container spacing={2} sx={{ mt: 2 }}>
              {galeriaImages.map((img) => (
                <Grid key={img.id} size={{ xs: 12, sm: 6, md: 4 }}>
                  <CardMedia
                    component="img"
                    height="250"
                    image={img.preview}
                    sx={{ borderRadius: 2 }}
                  />
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      )}

      <Box sx={{ bgcolor: primaryColor, color: 'white', py: 10, position: 'relative', overflow: 'hidden' }}>
        <Box sx={{ position: 'absolute', top: -50, right: -50, width: 200, height: 200, borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.1)' }} />
        <Box sx={{ position: 'absolute', bottom: -30, left: -30, width: 150, height: 150, borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.05)' }} />
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography variant="h3" fontWeight="bold" gutterBottom>
                Entre em Contato
              </Typography>
              <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
                Estamos prontos para atender você. Preencha o formulário ou entre em contato diretamente.
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box sx={{ bgcolor: 'rgba(255,255,255,0.2)', p: 1.5, borderRadius: 2 }}>
                    <EmailIcon />
                  </Box>
                  <Box>
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>Email</Typography>
                    <Typography fontWeight="medium">contato@empresa.com.br</Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box sx={{ bgcolor: 'rgba(255,255,255,0.2)', p: 1.5, borderRadius: 2 }}>
                    <PhoneIcon />
                  </Box>
                  <Box>
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>Telefone</Typography>
                    <Typography fontWeight="medium">(11) 99999-9999</Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box sx={{ bgcolor: 'rgba(255,255,255,0.2)', p: 1.5, borderRadius: 2 }}>
                    <LocationOnIcon />
                  </Box>
                  <Box>
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>Endereço</Typography>
                    <Typography fontWeight="medium">São Paulo, SP</Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Card sx={{ p: 4, borderRadius: 4, boxShadow: 4, bgcolor: cardBg }}>
                <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ color: textPrimary }}>
                  Envie uma mensagem
                </Typography>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      label="Seu Nome"
                      placeholder="Digite seu nome"
                      sx={{
                        '& .MuiOutlinedInput-root': { 
                          bgcolor: darkMode ? '#1a1a2e' : 'white',
                          color: textPrimary,
                          '& fieldset': { borderColor: darkMode ? 'rgba(255,255,255,0.2)' : 'grey.300' },
                          '&:hover fieldset': { borderColor: primaryColor },
                          '&.Mui-focused fieldset': { borderColor: primaryColor },
                        },
                        '& .MuiInputLabel-root': { color: textSecondary },
                        '& .MuiInputLabel-root.Mui-focused': { color: primaryColor },
                      }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      label="Seu Email"
                      placeholder="seu@email.com"
                      sx={{
                        '& .MuiOutlinedInput-root': { 
                          bgcolor: darkMode ? '#1a1a2e' : 'white',
                          color: textPrimary,
                          '& fieldset': { borderColor: darkMode ? 'rgba(255,255,255,0.2)' : 'grey.300' },
                          '&:hover fieldset': { borderColor: primaryColor },
                          '&.Mui-focused fieldset': { borderColor: primaryColor },
                        },
                        '& .MuiInputLabel-root': { color: textSecondary },
                        '& .MuiInputLabel-root.Mui-focused': { color: primaryColor },
                      }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      label="Telefone"
                      placeholder="(11) 99999-9999"
                      sx={{
                        '& .MuiOutlinedInput-root': { 
                          bgcolor: darkMode ? '#1a1a2e' : 'white',
                          color: textPrimary,
                          '& fieldset': { borderColor: darkMode ? 'rgba(255,255,255,0.2)' : 'grey.300' },
                          '&:hover fieldset': { borderColor: primaryColor },
                          '&.Mui-focused fieldset': { borderColor: primaryColor },
                        },
                        '& .MuiInputLabel-root': { color: textSecondary },
                        '& .MuiInputLabel-root.Mui-focused': { color: primaryColor },
                      }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      label="Assunto"
                      placeholder="Sobre o que você quer falar?"
                      sx={{
                        '& .MuiOutlinedInput-root': { 
                          bgcolor: darkMode ? '#1a1a2e' : 'white',
                          color: textPrimary,
                          '& fieldset': { borderColor: darkMode ? 'rgba(255,255,255,0.2)' : 'grey.300' },
                          '&:hover fieldset': { borderColor: primaryColor },
                          '&.Mui-focused fieldset': { borderColor: primaryColor },
                        },
                        '& .MuiInputLabel-root': { color: textSecondary },
                        '& .MuiInputLabel-root.Mui-focused': { color: primaryColor },
                      }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      label="Mensagem"
                      placeholder="Digite sua mensagem..."
                      multiline
                      rows={4}
                      sx={{
                        '& .MuiOutlinedInput-root': { 
                          bgcolor: darkMode ? '#1a1a2e' : 'white',
                          color: textPrimary,
                          '& fieldset': { borderColor: darkMode ? 'rgba(255,255,255,0.2)' : 'grey.300' },
                          '&:hover fieldset': { borderColor: primaryColor },
                          '&.Mui-focused fieldset': { borderColor: primaryColor },
                        },
                        '& .MuiInputLabel-root': { color: textSecondary },
                        '& .MuiInputLabel-root.Mui-focused': { color: primaryColor },
                      }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <Button
                      variant="contained"
                      size="large"
                      fullWidth
                      sx={{
                        bgcolor: primaryColor,
                        color: 'white',
                        fontWeight: 'bold',
                        py: 1.5,
                        '&:hover': { bgcolor: primaryColor, opacity: 0.9 },
                      }}
                    >
                      Enviar Mensagem
                    </Button>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ bgcolor: '#1a1a1a', color: 'white', py: 4 }}>
        <Container sx={{ textAlign: 'center' }}>
          <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
            {titulo}
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            © {new Date().getFullYear()} {titulo}. Todos os direitos reservados.
          </Typography>
        </Container>
      </Box>
    </>
  );

  return (
    <Box sx={{ 
      fontFamily: getFontFamily(),
      '& .MuiTypography-root': { fontFamily: 'inherit' }
    }}>
      {renderContent()}
    </Box>
  );
};

export default LandingPreview;
