import Link from "next/link";
import { ArrowLeft, FileCheck, CheckCircle2, AlertTriangle, Scale, ShieldAlert } from "lucide-react";

export const metadata = {
  title: "Termos de Uso e Condições Gerais | Portal Amigo",
  description: "Termos de Uso e Condições Gerais de Navegação e Contratação dos serviços digitais do Portal Amigo (Prepára ENEM e Amigo Geo).",
};

export default function TermosPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased">
      {/* Header Fixo */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft size={16} /> Voltar ao Portal Amigo
          </Link>
          <div className="flex items-center gap-2 text-xs font-semibold px-3 py-1 bg-blue-50 text-blue-700 rounded-full border border-blue-200">
            <Scale size={14} /> Contrato de Adesão & Condições Gerais
          </div>
        </div>
      </header>

      {/* Hero dos Termos */}
      <section className="bg-gradient-to-b from-white to-slate-50 border-b border-slate-200 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-4">
            Instrumento Jurídico
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Termos de Uso e Condições Gerais
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl">
            Bem-vindo ao <strong className="text-slate-900">Portal Amigo</strong>. Ao acessar ou utilizar qualquer plataforma do nosso ecossistema, você concorda expressamente com os termos e regras estabelecidos neste instrumento.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-xs text-slate-500">
            <span><strong>Última revisão:</strong> Outubro de 2026</span>
            <span>•</span>
            <span><strong>Abrangência:</strong> portalamigo.com.br e subdomínios</span>
            <span>•</span>
            <span><strong>Suporte Jurídico:</strong> contato@portalamigo.com.br</span>
          </div>
        </div>
      </section>

      {/* Conteúdo dos Termos */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 leading-relaxed space-y-10 text-sm sm:text-base">
        {/* Seção 1 */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-extrabold">1</span>
            Objeto e Aceitação
          </h2>
          <p className="text-slate-600">
            Estes Termos de Uso regem a utilização dos serviços e conteúdos digitais disponibilizados pelo <strong>Portal Amigo</strong>, compreendendo as plataformas de preparação para o Exame Nacional do Ensino Médio (<strong>Prepára ENEM</strong>) e a solução de inteligência geoespacial e laudos territoriais (<strong>Amigo Geo</strong>).
          </p>
          <p className="text-slate-600">
            A navegação, o cadastro ou a contratação de qualquer plano constitui aceite integral, irrestrito e automático das condições aqui descritas. Se você discordar de qualquer cláusula, deverá abster-se imediatamente de utilizar os serviços.
          </p>
        </section>

        {/* Seção 2 */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-extrabold">2</span>
            Cadastro, Acesso e Política de Sessão Única
          </h2>
          <p className="text-slate-600">
            Para usufruir dos recursos avançados, o usuário deve ser civilmente capaz e fornecer informações verídicas, completas e atualizadas no momento do cadastro.
          </p>
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 space-y-2 text-slate-700">
            <h3 className="font-bold text-amber-900 text-sm flex items-center gap-2">
              <ShieldAlert size={16} className="text-amber-600" />
              Proibição Estrita de Acesso Simultâneo e Compartilhamento de Contas
            </h3>
            <p className="text-xs text-amber-900/90 leading-relaxed">
              O acesso às contas é <strong>pessoal, individual e intransferível</strong>. Nossas plataformas contam com tecnologia ativa de bloqueio de login concorrente. Caso uma conta autenticada seja conectada em um novo navegador ou dispositivo móvel, a sessão anterior será automaticamente encerrada por segurança. É terminantemente vedado o rateio ou cessão de credenciais a terceiros sob pena de rescisão contratual sem restituição.
            </p>
          </div>
        </section>

        {/* Seção 3 */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-extrabold">3</span>
            Regras Específicas por Plataforma
          </h2>
          <div className="space-y-4 pt-2">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-600" /> Prepára ENEM (Plataforma Educacional)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Destinada ao treinamento e simulação de provas. As pontuações estimadas via Teoria de Resposta ao Item (TRI) e as análises de redação geradas por Inteligência Artificial possuem caráter pedagógico e orientador, não garantindo nota oficial homologada pelo INEP.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <CheckCircle2 size={16} className="text-blue-600" /> Amigo Geo (Inteligência Territorial & Ambiental)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                As sobreposições e cruzamentos espaciais utilizam dados públicos oficiais de fontes governamentais (SICAR, SIGEF/INCRA, IBAMA, ICMBio, FUNAI e MapBiomas). Os laudos diagnósticos, plantas cadastrais e demonstrativos em PDF constituem ferramentas de auditoria e suporte técnico para produtores, corretores, advogados e peritos, devendo ser complementados por vistoria em campo quando exigido por órgãos ambientais ou cartórios de registro de imóveis.
              </p>
            </div>
          </div>
        </section>

        {/* Seção 4 */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-extrabold">4</span>
            Planos, Assinaturas e Política de Cancelamento
          </h2>
          <p className="text-slate-600">
            Determinadas funcionalidades estão condicionadas à contratação de assinaturas ou planos de créditos pré-pagos:
          </p>
          <ul className="space-y-2 text-slate-600 text-sm list-disc pl-5">
            <li><strong>Período de Teste:</strong> Quando disponibilizado, o período de teste grátis com recursos liberados tem duração determinada e expira automaticamente sem cobrança oculta.</li>
            <li><strong>Direito de Arrependimento (CDC):</strong> Em conformidade com o Art. 49 do Código de Defesa do Consumidor (Lei nº 8.078/1990), o contratante tem o prazo de até 7 (sete) dias corridos a contar da primeira assinatura para solicitar o cancelamento e reembolso integral através dos canais de suporte.</li>
            <li><strong>Renovação Automática:</strong> Assinaturas recorrentes podem ser canceladas pelo usuário a qualquer momento no painel de controle, mantendo-se o acesso até o término do ciclo já pago.</li>
          </ul>
        </section>

        {/* Seção 5 */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-extrabold">5</span>
            Propriedade Intelectual
          </h2>
          <p className="text-slate-600">
            Todos os softwares, códigos-fonte, algoritmos de cruza espacial, motores de renderização, logomarcas, interfaces visuais e bases de dados proprietárias do Portal Amigo são de titularidade exclusiva da empresa, protegidos pela legislação de direitos autorais e propriedade industrial (Leis nº 9.609/1998 e 9.610/1998).
          </p>
          <p className="text-slate-600 text-xs">
            É vedada a reprodução, engenharia reversa, raspagem massiva automatizada (web scraping não autorizado) ou redistribuição comercial não expressamente outorgada.
          </p>
        </section>

        {/* Seção 6 */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-extrabold">6</span>
            Foro e Legislação Aplicável
          </h2>
          <p className="text-slate-600">
            Estes Termos são regidos integralmente pelas leis da República Federativa do Brasil. Para a solução de quaisquer controvérsias decorrentes da execução deste contrato, elege-se o Foro da Comarca de domicílio do consumidor ou, subsidiariamente, o foro central da sede da empresa.
          </p>
        </section>
      </main>

      {/* Footer Simples de Navegação */}
      <footer className="border-t border-slate-200 bg-white py-8 text-center text-xs text-slate-500">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Portal Amigo. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacidade" className="hover:text-slate-800 font-semibold">Política de Privacidade</Link>
            <Link href="/cookies" className="hover:text-slate-800 font-semibold">Política de Cookies</Link>
            <Link href="/" className="hover:text-slate-800 font-semibold">Início</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
