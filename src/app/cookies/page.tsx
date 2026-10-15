import Link from "next/link";
import { ArrowLeft, Cookie, ShieldCheck, CheckCircle2, Settings } from "lucide-react";

export const metadata = {
  title: "Política de Cookies | Portal Amigo",
  description: "Entenda como e por que o Portal Amigo utiliza cookies para garantir a segurança, performance e melhoria contínua da sua experiência.",
};

export default function CookiesPage() {
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
          <div className="flex items-center gap-2 text-xs font-semibold px-3 py-1 bg-amber-50 text-amber-800 rounded-full border border-amber-200">
            <Cookie size={14} className="text-amber-600" /> Transparência sobre Cookies
          </div>
        </div>
      </header>

      {/* Hero dos Cookies */}
      <section className="bg-gradient-to-b from-white to-slate-50 border-b border-slate-200 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4">
            Gestão de Preferências
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Política de Gestão de Cookies
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl">
            Explicamos de forma clara e transparente o que são cookies, quais categorias utilizamos em nossas páginas e como você pode gerenciar suas preferências de privacidade a qualquer instante.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-xs text-slate-500">
            <span><strong>Última atualização:</strong> Outubro de 2026</span>
            <span>•</span>
            <span><strong>Conformidade:</strong> LGPD e Marco Civil da Internet</span>
          </div>
        </div>
      </section>

      {/* Conteúdo dos Cookies */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 leading-relaxed space-y-10 text-sm sm:text-base">
        {/* Seção 1 */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center text-sm font-extrabold">1</span>
            O que são Cookies?
          </h2>
          <p className="text-slate-600">
            Cookies são pequenos arquivos de texto armazenados no navegador do seu dispositivo (computador, tablet ou smartphone) quando você visita um site. Eles desempenham funções fundamentais para o funcionamento da web, como lembrar que você já está logado, armazenar preferências de idioma e garantir a integridade da comunicação com os servidores.
          </p>
        </section>

        {/* Seção 2: Categorias */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center text-sm font-extrabold">2</span>
            Categorias de Cookies Utilizados
          </h2>
          <div className="space-y-4 pt-2">
            {/* Categoria 1 */}
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <ShieldCheck size={18} className="text-emerald-600" />
                  Cookies Estritamente Necessários (Obrigatórios)
                </h3>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 uppercase">
                  Sempre Ativos
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Essenciais para a segurança e navegação básica nas plataformas do Portal Amigo. Incluem autenticação de sessão criptografada (JWT), persistência do token de acesso, verificação de concorrência de dispositivos e proteção contra ataques de falsificação de requisições entre sites (CSRF). A desativação desses cookies inviabiliza o login e uso das ferramentas.
              </p>
            </div>

            {/* Categoria 2 */}
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <Settings size={18} className="text-blue-600" />
                  Cookies de Desempenho e Métricas (Analíticos)
                </h3>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800 uppercase">
                  Opcionais
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Nos auxiliam a entender como os visitantes interagem com nossas páginas, quais funcionalidades são mais acessadas e eventuais erros de carregamento que possam surgir. As métricas coletadas são anônimas ou agregadas (ex.: Google Analytics / telemetria da Vercel). Você pode recusar esses cookies sem prejuízo das funcionalidades principais.
              </p>
            </div>
          </div>
        </section>

        {/* Seção 3: Banner de Consentimento */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center text-sm font-extrabold">3</span>
            Como Gerenciar suas Preferências
          </h2>
          <p className="text-slate-600">
            Ao acessar o Portal Amigo pela primeira vez, você é recepcionado por nosso banner de consentimento em conformidade com a LGPD. Nele, você pode selecionar:
          </p>
          <ul className="space-y-2 text-slate-600 text-sm list-disc pl-5">
            <li><strong>Aceitar todos:</strong> Autoriza o uso de cookies necessários e analíticos.</li>
            <li><strong>Recusar opcionais:</strong> Mantém ativos unicamente os cookies estritamente necessários para autenticação e segurança.</li>
          </ul>
          <p className="text-slate-600 text-xs pt-2">
            Adicionalmente, você pode a qualquer momento limpar ou bloquear cookies diretamente nas configurações de privacidade do seu navegador (Google Chrome, Mozilla Firefox, Safari, Microsoft Edge ou Opera).
          </p>
        </section>

        {/* Seção 4: Contato */}
        <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-bold text-slate-100">Dúvidas sobre Cookies?</h2>
          <p className="text-slate-300 text-sm">
            Para dúvidas ou esclarecimentos adicionais a respeito do armazenamento local e da nossa gestão de cookies, entre em contato com nossa equipe técnica:
          </p>
          <p className="text-sm">
            <a href="mailto:privacidade@portalamigo.com.br" className="text-emerald-400 font-semibold underline">
              privacidade@portalamigo.com.br
            </a>
          </p>
        </section>
      </main>

      {/* Footer Simples de Navegação */}
      <footer className="border-t border-slate-200 bg-white py-8 text-center text-xs text-slate-500">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Portal Amigo. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacidade" className="hover:text-slate-800 font-semibold">Política de Privacidade</Link>
            <Link href="/termos" className="hover:text-slate-800 font-semibold">Termos de Uso</Link>
            <Link href="/" className="hover:text-slate-800 font-semibold">Início</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
