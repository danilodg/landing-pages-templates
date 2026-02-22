export type TipoNegocio = 'ecommerce' | 'servico' | 'portfolio' | 'startup' | 'restaurante' | 'profissional';

export type EstiloVisual = 'moderno' | 'classico' | 'minimalista' | 'vibrante' | 'corporativo' | 'criativo';

export type LayoutType = 'hero-centered' | 'hero-split' | 'hero-full' | 'grid' | 'sidebar';

export type CorPrimaria = 'blue' | 'green' | 'red' | 'purple' | 'orange' | 'teal' | 'pink' | 'indigo';

export interface ImagemUpload {
  id: string;
  file: File;
  preview: string;
  tipo: 'hero' | 'galeria' | 'depoimento' | 'produto' | 'logo' | 'banner';
}

export interface LandingConfig {
  tipoNegocio: TipoNegocio | null;
  estiloVisual: EstiloVisual | null;
  layout: LayoutType | null;
  corPrimaria: CorPrimaria;
  imagens: ImagemUpload[];
  titulo: string;
  subtitulo: string;
  descricao: string;
  ctaTexto: string;
}

export const CORES_PRIMARIAS: Record<CorPrimaria, string> = {
  blue: '#1976d2',
  green: '#2e7d32',
  red: '#d32f2f',
  purple: '#7b1fa2',
  orange: '#e65100',
  teal: '#00796b',
  pink: '#c2185b',
  indigo: '#303f9f',
};

export const TIPOS_NEGOCIO: { key: TipoNegocio; label: string; icon: string; descricao: string }[] = [
  { key: 'ecommerce', label: 'E-commerce', icon: '🛒', descricao: 'Loja virtual para vendas online' },
  { key: 'servico', label: 'Prestação de Serviços', icon: '🔧', descricao: 'Serviços profissionais e especializados' },
  { key: 'portfolio', label: 'Portfólio', icon: '🎨', descricao: '展示 trabalhos e projetos' },
  { key: 'startup', label: 'Startup', icon: '🚀', descricao: 'Tecnologia e inovação' },
  { key: 'restaurante', label: 'Restaurante', icon: '🍽️', descricao: 'Restaurantes e delivery' },
  { key: 'profissional', label: 'Profissional Liberal', icon: '👔', descricao: 'Advogados, médicos, consultores' },
];

export const ESTILOS_VISUAIS: { key: EstiloVisual; label: string; icon: string; descricao: string }[] = [
  { key: 'moderno', label: 'Moderno', icon: '✨', descricao: 'Design atual e limpo' },
  { key: 'classico', label: 'Clássico', icon: '🏛️', descricao: 'Elegância atemporal' },
  { key: 'minimalista', label: 'Minimalista', icon: '◻️', descricao: 'Menos é mais' },
  { key: 'vibrante', label: 'Vibrante', icon: '🌈', descricao: 'Cores vivas e dinâmicas' },
  { key: 'corporativo', label: 'Corporativo', icon: '🏢', descricao: 'Profissional e confiável' },
  { key: 'criativo', label: 'Criativo', icon: '💡', descricao: 'Unique e memorável' },
];

export const LAYOUTS: { key: LayoutType; label: string; icon: string; descricao: string }[] = [
  { key: 'hero-centered', label: 'Hero Centralizado', icon: '⬛', descricao: 'Conteúdo centralizado com imagem de fundo' },
  { key: 'hero-split', label: 'Hero Dividido', icon: '⬜', descricao: 'Texto de um lado, imagem do outro' },
  { key: 'hero-full', label: 'Hero Fullscreen', icon: '📱', descricao: 'Tela cheia com banner' },
  { key: 'grid', label: 'Grade', icon: '⊞', descricao: 'Layout em grid para produtos' },
  { key: 'sidebar', label: 'Sidebar', icon: '📋', descricao: 'Menu lateral com conteúdo' },
];
