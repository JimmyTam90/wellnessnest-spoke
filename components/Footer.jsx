import Link from 'next/link';

// Helper function to resolve subpath correctly
const asset = (path) => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '/wellness-nest';
  return `${basePath}${path.startsWith('/') ? path : `/${path}`}`;
};

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0b1329', color: '#94a3b8', padding: '60px 20px 80px', borderTop: '1px solid #1e293b', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ maxWidth: '1152px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'auto minmax(0, 1fr)', gap: '40px 60px', alignItems: 'start' }} className="footer-grid">
        
        {/* Cột 1: Logo (chiếm 2 hàng trên desktop) */}
        <div style={{ gridRow: 'span 2' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <img 
              src={asset('/logo-trimmed.png')} 
              alt="Wellness Nest" 
              style={{ height: '42px', width: 'auto', objectFit: 'contain' }} 
            />
          </div>
          <p style={{ fontSize: '0.85rem', color: '#64748b', maxWidth: '220px', lineHeight: '1.4' }}>
            Independent Research &amp; Product Verification Lab.
          </p>
        </div>

        {/* Cột 2 - Hàng 1: Legal Links (Cố định góc trên bên phải) */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', flexWrap: 'wrap', gap: '24px' }}>
          <Link href="/privacy" style={{ color: '#e2e8f0', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '600' }}>Privacy Policy</Link>
          <Link href="/terms" style={{ color: '#e2e8f0', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '600' }}>Terms of Service</Link>
          <Link href="/affiliate-disclosure" style={{ color: '#e2e8f0', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '600' }}>Affiliate Disclosure</Link>
          <Link href="/contact" style={{ color: '#e2e8f0', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '600' }}>Contact</Link>
        </div>

        {/* Cột 2 - Hàng 2: Text Block & Disclaimer (Tràn đều sang trái, lấp đầy khoảng trống) */}
        <div style={{ width: '100%', maxWidth: '900px', display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '0.85rem', lineHeight: '1.6', color: '#94a3b8', textAlign: 'left' }}>
          <p style={{ margin: 0 }}>
            This is an independent guide and is not operated by Wellness Nest. It contains affiliate links; we may earn a commission on eligible purchases at no extra cost to you. Product claims are the merchant&apos;s own.
          </p>
          <p style={{ margin: 0 }}>
            These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.
          </p>
          <p style={{ margin: 0 }}>
            Contact: <a href="mailto:daniaengracia26377@gmail.com" style={{ color: '#38bdf8', textDecoration: 'none' }}>daniaengracia26377@gmail.com</a>
          </p>
          <p style={{ margin: 0, color: '#64748b', fontSize: '0.8rem', paddingTop: '8px', borderTop: '1px solid #1e293b' }}>
            © 2026 Wellness Nest Shilajit Guide. Wellness Nest and ShilaSource are trademarks of their respective owners.
          </p>
        </div>

      </div>
    </footer>
  );
}
