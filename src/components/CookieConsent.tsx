'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Cookie, X, Check } from 'lucide-react';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('amigo_cookie_consent');
    if (!consent) {
      const t = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('amigo_cookie_consent', 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem('amigo_cookie_consent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Consentimento de cookies"
      style={{
        position: 'fixed',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 9999,
        width: 'min(600px, calc(100vw - 32px))',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        border: '1px solid rgba(16,185,129,0.25)',
        borderRadius: '16px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(16,185,129,0.1)',
        padding: '20px 24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '14px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
        <div style={{
          width: '36px', height: '36px', borderRadius: '10px', flexShrink: 0,
          background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <Cookie size={18} style={{ color: '#10b981' }} />
        </div>
        <div style={{ flex: 1 }}>
          <p style={{ color: '#f1f5f9', fontWeight: 700, fontSize: '14px', marginBottom: '6px' }}>
            Nós usamos cookies 🍪
          </p>
          <p style={{ color: '#64748b', fontSize: '12px', lineHeight: '1.6' }}>
            Utilizamos cookies essenciais para autenticação e cookies analíticos (Google Analytics) para melhorar a plataforma.
            Ao continuar, você concorda com nossa{' '}
            <Link href="/cookies" style={{ color: '#10b981', textDecoration: 'underline' }}>
              Política de Cookies
            </Link>{' '}
            e{' '}
            <Link href="/privacidade" style={{ color: '#10b981', textDecoration: 'underline' }}>
              Política de Privacidade (LGPD)
            </Link>.
          </p>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
        <button
          onClick={decline}
          style={{
            display: 'flex', alignItems: 'center', gap: '6px',
            padding: '8px 16px', borderRadius: '8px', fontSize: '12px', fontWeight: 600, cursor: 'pointer',
            background: 'transparent', border: '1px solid rgba(255,255,255,0.12)', color: '#64748b',
          }}
        >
          <X size={13} /> Recusar opcionais
        </button>
        <button
          onClick={accept}
          style={{
            display: 'flex', alignItems: 'center', gap: '6px',
            padding: '8px 20px', borderRadius: '8px', fontSize: '12px', fontWeight: 700, cursor: 'pointer',
            background: 'linear-gradient(135deg, #059669, #10b981)',
            border: 'none', color: '#fff',
            boxShadow: '0 4px 12px rgba(5,150,105,0.35)',
          }}
        >
          <Check size={13} /> Aceitar todos
        </button>
      </div>
    </div>
  );
}