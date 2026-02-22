import React, { createContext, useContext, useState, type ReactNode } from 'react';
import type { LandingConfig, TipoNegocio, EstiloVisual, LayoutType, CorPrimaria, ImagemUpload } from './types';

interface LandingBuilderContextType {
  config: LandingConfig;
  step: number;
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  setStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  setTipoNegocio: (tipo: TipoNegocio) => void;
  setEstiloVisual: (estilo: EstiloVisual) => void;
  setLayout: (layout: LayoutType) => void;
  setCorPrimaria: (cor: CorPrimaria) => void;
  setTitulo: (titulo: string) => void;
  setSubtitulo: (subtitulo: string) => void;
  setDescricao: (descricao: string) => void;
  setCtaTexto: (texto: string) => void;
  addImagem: (imagem: ImagemUpload) => void;
  removeImagem: (id: string) => void;
  reset: () => void;
}

const initialConfig: LandingConfig = {
  tipoNegocio: null,
  estiloVisual: null,
  layout: null,
  corPrimaria: 'blue',
  imagens: [],
  titulo: '',
  subtitulo: '',
  descricao: '',
  ctaTexto: 'Entre em Contato',
};

const LandingBuilderContext = createContext<LandingBuilderContextType | undefined>(undefined);

export const LandingBuilderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<LandingConfig>(initialConfig);
  const [step, setStep] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => Math.max(0, s - 1));

  const setTipoNegocio = (tipo: TipoNegocio) => setConfig((c) => ({ ...c, tipoNegocio: tipo }));
  const setEstiloVisual = (estilo: EstiloVisual) => setConfig((c) => ({ ...c, estiloVisual: estilo }));
  const setLayout = (layout: LayoutType) => setConfig((c) => ({ ...c, layout: layout }));
  const setCorPrimaria = (cor: CorPrimaria) => setConfig((c) => ({ ...c, corPrimaria: cor }));
  const setTitulo = (titulo: string) => setConfig((c) => ({ ...c, titulo }));
  const setSubtitulo = (subtitulo: string) => setConfig((c) => ({ ...c, subtitulo }));
  const setDescricao = (descricao: string) => setConfig((c) => ({ ...c, descricao }));
  const setCtaTexto = (texto: string) => setConfig((c) => ({ ...c, ctaTexto: texto }));

  const addImagem = (imagem: ImagemUpload) => setConfig((c) => ({ ...c, imagens: [...c.imagens, imagem] }));
  const removeImagem = (id: string) => setConfig((c) => ({ ...c, imagens: c.imagens.filter((i) => i.id !== id) }));

  const reset = () => {
    setConfig(initialConfig);
    setStep(0);
  };

  return (
    <LandingBuilderContext.Provider
      value={{
        config,
        step,
        darkMode,
        setDarkMode,
        setStep,
        nextStep,
        prevStep,
        setTipoNegocio,
        setEstiloVisual,
        setLayout,
        setCorPrimaria,
        setTitulo,
        setSubtitulo,
        setDescricao,
        setCtaTexto,
        addImagem,
        removeImagem,
        reset,
      }}
    >
      {children}
    </LandingBuilderContext.Provider>
  );
};

export const useLandingBuilder = () => {
  const context = useContext(LandingBuilderContext);
  if (!context) throw new Error('useLandingBuilder must be used within LandingBuilderProvider');
  return context;
};
