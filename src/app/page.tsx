"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Wheat,
  MapPin,
  Briefcase,
  ExternalLink,
  ShieldCheck,
  Cpu,
  Sparkles,
  Layers,
  CheckCircle2,
  Database,
  ArrowRight,
  FileCheck,
  TrendingUp,
  Award,
  Globe2,
  Clock,
  Compass,
  FileText,
  UserPlus,
  Coins,
  BadgeDollarSign
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50 text-slate-900 selection:bg-emerald-500 selection:text-white">
      {/* 1. Header / Navbar de Alto Padrão */}
      <header className="sticky top-0 z-50 glass-nav transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3.5 group">
            {/* Logo Oficial Infinito */}
            <div className="relative w-10 h-7 transition-transform group-hover:scale-105">
              <svg viewBox="0 0 100 60" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="navBrandGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#2ecc71" />
                    <stop offset="100%" stopColor="#2563eb" />
                  </linearGradient>
                </defs>
                <circle cx="34" cy="12" r="6" fill="#2ecc71" />
                <circle cx="66" cy="12" r="6" fill="#2563eb" />
                <path
                  d="M34 26 C22 26 12 36 12 45 C12 53 20 57 28 57 C38 57 46 45 50 39 C54 45 62 57 72 57 C80 57 88 53 88 45 C88 36 78 26 66 26 C57 26 52 33 50 36 C48 33 43 26 34 26 Z"
                  stroke="url(#navBrandGrad)"
                  strokeWidth="7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-xl font-black tracking-tight text-slate-900">
                PORTAL <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">AMIGO</span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mt-0.5">
                Soluções Inteligentes
              </span>
            </div>
          </Link>

          {/* Links de navegação */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a href="#produtos" className="hover:text-slate-900 transition-colors">Nossos Produtos</a>
            <a href="#agricola" className="hover:text-emerald-600 flex items-center gap-1.5 transition-colors">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Amigo Agrícola
            </a>
            <a href="#geo" className="hover:text-blue-600 flex items-center gap-1.5 transition-colors">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span> Amigo Geo
            </a>
          </nav>

          {/* Ações */}
          <div className="flex items-center gap-3">
            <a
              href="https://amigoagricola.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 text-xs font-bold px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all shadow-xs"
            >
              <span>Acessar Agrícola</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
            <a
              href="https://geo.portalamigo.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2.5 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition-all shadow-xs"
            >
              <span>Abrir Amigo Geo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* 2. Hero Section de Alto Impacto */}
      <section className="relative pt-16 pb-20 sm:pt-24 sm:pb-28 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100/60 border-b border-slate-200">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f015_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f015_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-200 bg-white/80 shadow-xs mb-8">
            <Sparkles className="w-4 h-4 text-emerald-500" />
            <span className="text-xs font-semibold text-slate-700">Ecossistema de Tecnologia & Inteligência Digital</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] max-w-4xl mx-auto">
            Plataformas especializadas que aceleram seus negócios e o <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">agronegócio brasileiro</span>.
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            Reunimos inteligência territorial geoespacial, cotações de commodities em tempo real, marketplace de fazendas e tecnologia robusta desenhada para máxima segurança e resultados.
          </p>

          {/* Cards Rápidos de Escolha no Hero */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
            <a
              href="#agricola"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/30 transition-all hover:-translate-y-0.5"
            >
              <Wheat className="w-5 h-5" />
              <span>Conhecer Amigo Agrícola</span>
            </a>
            <a
              href="#geo"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-base shadow-lg shadow-slate-900/10 hover:shadow-slate-900/20 transition-all hover:-translate-y-0.5"
            >
              <MapPin className="w-5 h-5 text-orange-400" />
              <span>Explorar Amigo Geo</span>
            </a>
          </div>

          {/* Métricas e Prova Social */}
          <div className="mt-16 pt-10 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl font-extrabold text-slate-900">R$ 500 Mi+</span>
              <span className="text-xs sm:text-sm font-medium text-slate-500 mt-1">Em Fazendas & Imóveis Rurais</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl font-extrabold text-slate-900">8,5 Mi</span>
              <span className="text-xs sm:text-sm font-medium text-slate-500 mt-1">Imóveis SICAR Auditáveis</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl font-extrabold text-slate-900">100% Real Time</span>
              <span className="text-xs sm:text-sm font-medium text-slate-500 mt-1">Cotações Soja, Milho e Boi</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl font-extrabold text-slate-900">100%</span>
              <span className="text-xs sm:text-sm font-medium text-slate-500 mt-1">Bases Federais & Nuvem Segura</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Seletor / Âncora de Produtos */}
      <section id="produtos" className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
              Portfólio Oficial
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3">
              Soluções criadas para resolver problemas reais
            </h2>
          </div>

          {/* Grid dos Dois Produtos Principais + Teaser Vagas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {/* Card Teaser 1: Amigo Agrícola */}
            <div className="group relative rounded-3xl p-8 bg-gradient-to-br from-white to-emerald-50/40 border border-emerald-100 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-md shadow-emerald-600/30 mb-6 group-hover:scale-105 transition-transform">
                  <Wheat className="w-7 h-7" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">Agronegócio & Imobiliário</span>
                  <span className="text-xs text-slate-400">• amigoagricola.com.br</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Amigo Agrícola</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Portal e marketplace especializado na compra e venda de fazendas, áreas agrícolas, áreas de preservação e pecuária. Conta com cotações diárias de commodities, diretório de corretores credenciados e empresas do agro.
                </p>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 font-medium mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Catálogo de fazendas e propriedades rurais com fotos em alta definição</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Cotações agrícolas atualizadas: Soja, Milho, Boi Gordo e Bezerro</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Rede de corretores CRECI credenciados e empresas parceiras do agro</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6 border-t border-emerald-100/80 flex items-center justify-between">
                <a
                  href="#agricola"
                  className="text-xs font-bold text-slate-600 hover:text-slate-900"
                >
                  Ver detalhes da plataforma ↓
                </a>
                <a
                  href="https://amigoagricola.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white shadow-xs transition-all"
                >
                  <span>Abrir Amigo Agrícola</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Card Teaser 2: GEO */}
            <div className="group relative rounded-3xl p-8 bg-gradient-to-br from-white to-blue-50/40 border border-blue-100 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-600/30 mb-6 group-hover:scale-105 transition-transform">
                  <MapPin className="w-7 h-7" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800">Agronegócio & Geoespacial</span>
                  <span className="text-xs text-slate-400">• geo.portalamigo.com.br</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Amigo Geo</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Inteligência territorial e segurança jurídica para o agronegócio. Cruze fazendas com SIGEF/INCRA, CAR, embargos do IBAMA, alertas do DETER/PRODES e emita relatórios com foto de satélite e contorno dinâmico.
                </p>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 font-medium mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Certificação oficial SIGEF & parcelas do INCRA</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Auditoria de conformidade ambiental (CAR, IBAMA, PRODES)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Relatório técnico com satélite e contorno em alta definição</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6 border-t border-blue-100/80 flex items-center justify-between">
                <a
                  href="#geo"
                  className="text-xs font-bold text-slate-600 hover:text-slate-900"
                >
                  Ver detalhes da plataforma ↓
                </a>
                <a
                  href="https://geo.portalamigo.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white shadow-xs transition-all"
                >
                  <span>Abrir Amigo Geo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SEÇÃO DETALHADA: Amigo Agrícola */}
      <section id="agricola" className="py-20 sm:py-28 bg-gradient-to-b from-white to-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Texto & Recursos */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold">
                <Wheat className="w-3.5 h-3.5" />
                Plataforma de Negócios & Cotações Rurais
              </div>
              
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                O marketplace definitivo para negociações de <span className="text-emerald-600">fazendas e terras</span>.
              </h2>
              
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                Desenvolvemos o Amigo Agrícola para conectar produtores rurais, investidores e corretores credenciados a oportunidades de alto valor. Encontre propriedades rurais auditadas, acompanhe cotações diárias de commodities agrícolas e impulsione seus negócios no campo.
              </p>

              {/* Grid de Diferenciais */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm mb-3">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Cotações Agro em Tempo Real</h4>
                  <p className="text-xs text-slate-500">Soja, Milho, Boi Gordo e Bezerro com referências regionais de mercado.</p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm mb-3">
                    <Layers className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Fazendas & Áreas Selecionadas</h4>
                  <p className="text-xs text-slate-500">Anúncios ricos com metragens, aptidão de solo, benfeitorias e recursos hídricos.</p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm mb-3">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Corretores Credenciados</h4>
                  <p className="text-xs text-slate-500">Profissionais verificados com registro CRECI para máxima segurança jurídica.</p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm mb-3">
                    <Award className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Planos & Destaques Premium</h4>
                  <p className="text-xs text-slate-500">Ferramentas de visibilidade máxima para imobiliárias e corretores autônomos.</p>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="https://amigoagricola.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md shadow-emerald-600/20 transition-all hover:-translate-y-0.5"
                >
                  <span>Explorar Imóveis no Amigo Agrícola</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="https://amigoagricola.com.br/#planos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-bold text-sm transition-all shadow-xs"
                >
                  <span>Anunciar uma Propriedade</span>
                </a>
              </div>
            </div>

            {/* Imagem Real do Sistema Amigo Agrícola */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl p-2 bg-white shadow-2xl border border-slate-200/80 overflow-hidden group">
                <div className="relative rounded-2xl overflow-hidden border border-slate-100 bg-white">
                  <img
                    src="/screenshot-agricola.png"
                    alt="Vitrine de Imóveis e Fazendas - Amigo Agrícola"
                    className="w-full h-auto object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SEÇÃO DETALHADA: Amigo Geo */}
      <section id="geo" className="py-20 sm:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Imagem Real do Sistema GEO */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative rounded-3xl p-2 bg-white shadow-2xl border border-slate-200/80 overflow-hidden group">
                <div className="relative rounded-2xl overflow-hidden border border-slate-100 bg-white">
                  <img
                    src="/screenshot-geo.png"
                    alt="Diagnóstico Territorial Real - Amigo Geo"
                    className="w-full h-auto object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Texto & Recursos do GEO */}
            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-xs font-bold">
                <Globe2 className="w-3.5 h-3.5" />
                Segurança Jurídica & Auditoria Agrária
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Análise territorial completa de imóveis rurais em <span className="text-blue-600">segundos</span>.
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                O Amigo Geo unifica as maiores bases fundiárias e ambientais do Brasil em uma única interface cartográfica veloz. Ideal para corretores, produtores rurais, bancos, cooperativas e escritórios de advocacia agrária.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm mb-3">
                    <Database className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">59+ Camadas Oficiais</h4>
                  <p className="text-xs text-slate-500">Cruze dados do SIGEF, SNCI, SICAR, IBAMA, INCRA e FUNAI instantaneamente.</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm mb-3">
                    <FileText className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Laudos com Foto de Satélite</h4>
                  <p className="text-xs text-slate-500">Emita diagnósticos com a demarcação perimétrica do imóvel em alta resolução.</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm mb-3">
                    <Layers className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Upload KML & KMZ</h4>
                  <p className="text-xs text-slate-500">Suba arquivos de fazendas de até 20 MiB com cálculo topológico automático.</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm mb-3">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Due Diligence Rural</h4>
                  <p className="text-xs text-slate-500">Prevenção contra embargos e disputas de sobreposição imobiliária.</p>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="https://geo.portalamigo.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md shadow-slate-900/20 transition-all hover:-translate-y-0.5"
                >
                  <ArrowRight className="w-4 h-4 text-emerald-400" />
                  <span>Abrir Amigo Geo</span>
                </a>
                <a
                  href="https://geo.portalamigo.com.br/#planos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-bold text-sm transition-all shadow-xs"
                >
                  <span>Consultar Planos e Preços</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* 7. Footer Unificado & Institucional */}
      <footer className="bg-white text-slate-600 text-sm py-16 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            {/* Coluna 1: Marca */}
            <div className="space-y-4 md:col-span-1">
              <div className="flex items-center gap-3">
                <div className="w-8 h-6">
                  <svg viewBox="0 0 100 60" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="footerBrandGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#2ecc71" />
                        <stop offset="100%" stopColor="#2563eb" />
                      </linearGradient>
                    </defs>
                    <circle cx="34" cy="12" r="6" fill="#2ecc71" />
                    <circle cx="66" cy="12" r="6" fill="#2563eb" />
                    <path
                      d="M34 26 C22 26 12 36 12 45 C12 53 20 57 28 57 C38 57 46 45 50 39 C54 45 62 57 72 57 C80 57 88 53 88 45 C88 36 78 26 66 26 C57 26 52 33 50 36 C48 33 43 26 34 26 Z"
                      stroke="url(#footerBrandGrad)"
                      strokeWidth="7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                </div>
                <span className="font-extrabold text-base text-slate-900 tracking-tight">PORTAL AMIGO</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Ecossistema de plataformas tecnológicas inteligentes integrando agronegócio, geoespacial, inteligência artificial e carreiras com alta confiabilidade e segurança.
              </p>
              <div className="text-[11px] text-slate-400 font-mono">
                portalamigo.com.br
              </div>
            </div>

            {/* Coluna 2: Amigo Agrícola */}
            <div className="space-y-3">
              <h5 className="font-bold text-slate-900 text-xs uppercase tracking-wider">Amigo Agrícola</h5>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="https://amigoagricola.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 transition-colors">
                    Página Inicial
                  </a>
                </li>
                <li>
                  <a href="https://amigoagricola.com.br/#planos" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 transition-colors">
                    Planos e Anúncios
                  </a>
                </li>
                <li>
                  <a href="https://amigoagricola.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 transition-colors">
                    Cotações de Commodities
                  </a>
                </li>
                <li>
                  <a href="https://amigoagricola.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 transition-colors">
                    Imóveis Rurais & Fazendas
                  </a>
                </li>
              </ul>
            </div>

            {/* Coluna 3: Amigo Geo */}
            <div className="space-y-3">
              <h5 className="font-bold text-slate-900 text-xs uppercase tracking-wider">Amigo Geo</h5>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="https://geo.portalamigo.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                    Plataforma do Agro
                  </a>
                </li>
                <li>
                  <a href="https://geo.portalamigo.com.br/cadastro" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                    Mapa Interativo (Criar Conta)
                  </a>
                </li>
                <li>
                  <a href="https://geo.portalamigo.com.br/#planos" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                    Planos e Créditos
                  </a>
                </li>
                <li>
                  <span className="text-slate-400">SIGEF, CAR & IBAMA</span>
                </li>
              </ul>
            </div>

            {/* Coluna 4: Suporte e Ecossistema */}
            <div className="space-y-3">
              <h5 className="font-bold text-slate-900 text-xs uppercase tracking-wider">Ecossistema & Suporte</h5>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="mailto:suporte@portalamigo.com.br" className="hover:text-slate-900 transition-colors">
                    suporte@portalamigo.com.br
                  </a>
                </li>
                <li>
                  <a href="mailto:contato@portalamigo.com.br" className="hover:text-slate-900 transition-colors">
                    contato@portalamigo.com.br
                  </a>
                </li>
                <li>
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-[11px] font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Todos os sistemas operacionais
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>© 2026 Portal Amigo. Todos os direitos reservados.</p>
            <div className="flex items-center gap-6">
              <Link href="/termos" className="hover:text-slate-800 transition-colors">
                Termos de Uso
              </Link>
              <Link href="/privacidade" className="hover:text-slate-800 transition-colors">
                Privacidade
              </Link>
              <Link href="/cookies" className="hover:text-slate-800 transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
