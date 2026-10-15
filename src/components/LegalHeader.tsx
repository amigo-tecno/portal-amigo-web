import Link from 'next/link';
import { ArrowLeft, Shield } from 'lucide-react';

interface LegalHeaderProps {
  title: string;
  subtitle: string;
  lastUpdated: string;
}

export default function LegalHeader({ title, subtitle, lastUpdated }: LegalHeaderProps) {
  return (
    <header className=" border-b border-slate-200 bg-white/80 backdrop-blur sticky top-0 z-50\>
 <div className=\max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between\>
 <Link 
 href=\/\ 
 className=\inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors\
 >
 <ArrowLeft size={16} /> Voltar ao Portal Amigo
 </Link>
 <div className=\flex items-center gap-2 text-xs font-semibold px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-200\>
 <Shield size={14} /> Conformidade LGPD & Termos
 </div>
 </div>
 </header>
 );
}
