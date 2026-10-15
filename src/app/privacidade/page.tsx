import Link from "next/link";
import { ArrowLeft, Shield, Mail, FileText, CheckCircle2, Lock } from "lucide-react";

export const metadata = {
  title: "Política de Privacidade (LGPD) | Portal Amigo",
  description: "Conheça nossa Política de Privacidade e como o Portal Amigo protege seus dados pessoais em conformidade com a LGPD (Lei Federal 13.709/2018).",
};

export default function PrivacidadePage() {
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
          <div className="flex items-center gap-2 text-xs font-semibold px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-200">
            <Shield size={14} /> Lei Geral de Proteção de Dados (LGPD)
          </div>
        </div>
      </header>

      {/* Hero da Política */}
      <section className="bg-gradient-to-b from-white to-slate-50 border-b border-slate-200 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
            Transparência & Governança
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Política de Privacidade e Proteção de Dados
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl">
            Esta política estabelece o compromisso do <strong className="text-slate-900">Portal Amigo</strong> com a segurança, confidencialidade e respeito absoluto aos dados pessoais dos usuários de todo o nosso ecossistema.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-xs text-slate-500">
            <span><strong>Vigência:</strong> Outubro de 2026</span>
            <span>•</span>
            <span><strong>Controlador:</strong> Portal Amigo Tecnologia</span>
            <span>•</span>
            <span><strong>Canal DPO:</strong> privacidade@portalamigo.com.br</span>
          </div>
        </div>
      </section>

      {/* Conteúdo Jurídico Estruturado */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 leading-relaxed space-y-10 text-sm sm:text-base">
        {/* Seção 1 */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center text-sm font-extrabold">1</span>
            Visão Geral e Escopo
          </h2>
          <p className="text-slate-600">
            O <strong>Portal Amigo</strong> (operado sob o domínio <code>portalamigo.com.br</code>) é o ecossistema tecnológico central que integra plataformas especializadas em educação, inteligência geoespacial e serviços corporativos, incluindo o <strong>Prepára ENEM</strong> (<code>enem.portalamigo.com.br</code>) e o <strong>Amigo Geo</strong> (<code>geo.portalamigo.com.br</code>).
          </p>
          <p className="text-slate-600">
            Esta Política de Privacidade se aplica a todos os visitantes, estudantes, produtores rurais, peritos, profissionais técnicos e clientes cadastrados em qualquer uma de nossas soluções digitais, em estrita conformidade com a <strong>Lei Geral de Proteção de Dados Pessoais (Lei Federal nº 13.709/2018 - LGPD)</strong>.
          </p>
        </section>

        {/* Seção 2 */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center text-sm font-extrabold">2</span>
            Dados Coletados e Finalidades
          </h2>
          <p className="text-slate-600">
            Coletamos apenas as informações estritamente necessárias para a prestação eficiente e segura dos nossos serviços:
          </p>
          <div className="grid gap-4 sm:grid-cols-2 pt-2">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-600" /> Dados Cadastrais & Autenticação
              </h3>
              <p className="text-xs text-slate-600">
                Nome completo, endereço de e-mail, número de telefone/WhatsApp, senha criptografada e CPF/documento para faturamento, emissão de certidões e controle de sessão única por usuário.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-600" /> Dados Educacionais (Prepára ENEM)
              </h3>
              <p className="text-xs text-slate-600">
                Respostas de simulados, histórico de acertos por disciplina, estatísticas de evolução via Teoria de Resposta ao Item (TRI) e redações submetidas para correção assistida por IA.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-600" /> Dados Territoriais (Amigo Geo)
              </h3>
              <p className="text-xs text-slate-600">
                Coordenadas geográficas, perímetros de imóveis rurais (KML/KMZ), dados públicos de CAR/SIGEF consultados e laudos periciais e ambientais gerados sob demanda pelo usuário.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-600" /> Dados Técnicos & Conexão
              </h3>
              <p className="text-xs text-slate-600">
                Endereço IP, data e hora de acesso, tipo de navegador, sistema operacional e identificadores de sessão com a finalidade exclusiva de segurança e cumprimento do Marco Civil da Internet.
              </p>
            </div>
          </div>
        </section>

        {/* Seção 3 */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center text-sm font-extrabold">3</span>
            Bases Legais para Tratamento (Art. 7º da LGPD)
          </h2>
          <p className="text-slate-600">
            Todo tratamento de dados pessoais realizado pelo Portal Amigo está respaldado em fundamentos legais válidos:
          </p>
          <ul className="space-y-2 text-slate-600 list-disc pl-5 text-sm">
            <li><strong>Execução de Contrato (Art. 7º, V):</strong> Para liberar acesso às plataformas, processar análises territoriais e disponibilizar simulados e correções.</li>
            <li><strong>Cumprimento de Obrigação Legal (Art. 7º, II):</strong> Manutenção de registros de conexão nos termos do Art. 15 da Lei nº 12.965/2014 (Marco Civil da Internet).</li>
            <li><strong>Legítimo Interesse (Art. 7º, IX):</strong> Aperfeiçoamento da segurança, prevenção a fraudes de login simultâneo e aprimoramento contínuo da usabilidade.</li>
            <li><strong>Consentimento (Art. 7º, I):</strong> Quando aplicável, para o envio de comunicados educacionais e newsletters opcionais.</li>
          </ul>
        </section>

        {/* Seção 4 */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center text-sm font-extrabold">4</span>
            Segurança da Informação e Armazenamento
          </h2>
          <p className="text-slate-600">
            Adotamos medidas técnicas e organizacionais de padrão internacional para resguardar seus dados contra acessos não autorizados, perdas ou adulterações:
          </p>
          <ul className="space-y-2 text-slate-600 text-sm">
            <li className="flex items-start gap-2">
              <Lock size={16} className="text-emerald-600 mt-1 flex-shrink-0" />
              <span><strong>Criptografia em Trânsito e Repouso:</strong> Comunicação 100% protegida por protocolos TLS/HTTPS modernos e senhas protegidas com algoritmos de hash criptográfico (bcrypt/argon2).</span>
            </li>
            <li className="flex items-start gap-2">
              <Lock size={16} className="text-emerald-600 mt-1 flex-shrink-0" />
              <span><strong>Bloqueio de Sessão Simultânea:</strong> Cada conta possui sessão criptografada única e vinculada ao dispositivo ativo. Ao realizar login em um novo aparelho, sessões anteriores são automaticamente invalidadas por segurança.</span>
            </li>
            <li className="flex items-start gap-2">
              <Lock size={16} className="text-emerald-600 mt-1 flex-shrink-0" />
              <span><strong>Infraestrutura em Nuvem Auditada:</strong> Nossos servidores residem em datacenters certificados (AWS São Paulo - sa-east-1 e Vercel Serverless), com firewall perimetral, proteção contra ataques DDoS e backups automáticos.</span>
            </li>
          </ul>
        </section>

        {/* Seção 5 */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center text-sm font-extrabold">5</span>
            Compartilhamento com Terceiros
          </h2>
          <p className="text-slate-600">
            O Portal Amigo <strong>não comercializa, não aluga e não compartilha</strong> dados pessoais de seus usuários para fins de publicidade de terceiros. O compartilhamento ocorre exclusivamente nos seguintes cenários:
          </p>
          <ul className="space-y-2 text-slate-600 text-sm list-disc pl-5">
            <li><strong>Provedores de Infraestrutura e Pagamento:</strong> Processadores de pagamento bancário/PIX/cartão homologados e plataformas de hospedagem em nuvem que operam sob rigorosos acordos de confidencialidade (DPA).</li>
            <li><strong>Bases de Dados Públicas Governamentais:</strong> No Amigo Geo, consultas são feitas diretamente a repositórios geoespaciais públicos oficiais (SICAR/SFB, INCRA/SIGEF, IBAMA, MapBiomas e INPE).</li>
            <li><strong>Determinação Judicial ou Legal:</strong> Quando exigido por ordem judicial, autoridade policial competente ou pela Autoridade Nacional de Proteção de Dados (ANPD).</li>
          </ul>
        </section>

        {/* Seção 6 */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center text-sm font-extrabold">6</span>
            Seus Direitos como Titular (Art. 18 da LGPD)
          </h2>
          <p className="text-slate-600">
            Você possui pleno controle sobre seus dados e pode exercer a qualquer momento os seguintes direitos mediante solicitação expressa:
          </p>
          <div className="grid gap-3 sm:grid-cols-2 text-xs text-slate-700 pt-2">
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
              <strong>Confirmação e Acesso:</strong> Confirmar a existência de tratamento e consultar seus dados.
            </div>
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
              <strong>Correção:</strong> Solicitar a atualização de dados incompletos, inexatos ou desatualizados.
            </div>
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
              <strong>Anonimização ou Exclusão:</strong> Requerer a exclusão dos dados tratados com base em consentimento.
            </div>
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
              <strong>Portabilidade:</strong> Solicitar a entrega de seus dados para migração a outro prestador de serviços.
            </div>
          </div>
        </section>

        {/* Seção 7: Canal DPO */}
        <section className="bg-emerald-900 text-white rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-bold flex items-center gap-2 text-emerald-300">
            <Mail size={20} /> Canal com o Encarregado de Dados (DPO)
          </h2>
          <p className="text-emerald-100 text-sm leading-relaxed">
            Para exercer qualquer um dos seus direitos previstos na LGPD, esclarecer dúvidas sobre esta Política de Privacidade ou fazer solicitações sobre o tratamento de seus dados, entre em contato direto com o nosso Encarregado pelo tratamento de dados pessoais:
          </p>
          <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-700/50 text-sm space-y-1">
            <p><strong>Encarregado (DPO):</strong> Comitê de Segurança e Privacidade do Portal Amigo</p>
            <p><strong>E-mail direto:</strong> <a href="mailto:privacidade@portalamigo.com.br" className="text-emerald-300 underline font-semibold">privacidade@portalamigo.com.br</a></p>
            <p><strong>Suporte ao Usuário:</strong> <a href="mailto:suporte@portalamigo.com.br" className="text-emerald-300 underline font-semibold">suporte@portalamigo.com.br</a></p>
            <p className="text-xs text-emerald-200/80 pt-1">Prazo regulamentar de resposta: até 15 (quinze) dias úteis.</p>
          </div>
        </section>
      </main>

      {/* Footer Simples de Navegação */}
      <footer className="border-t border-slate-200 bg-white py-8 text-center text-xs text-slate-500">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Portal Amigo. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <Link href="/termos" className="hover:text-slate-800 font-semibold">Termos de Uso</Link>
            <Link href="/cookies" className="hover:text-slate-800 font-semibold">Política de Cookies</Link>
            <Link href="/" className="hover:text-slate-800 font-semibold">Início</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
