import Link from 'next/link';

// Helper function to resolve subpath correctly
const asset = (path) => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '/wellness-nest';
  return `${basePath}${path.startsWith('/') ? path : `/${path}`}`;
};

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0b1329', color: '#94a3b8', padding: '50px 20px 80px', borderTop: '1px solid #1e293b', fontFamily: 'system-ui, sans-serif' }}>
      <style>{`
        .footer-container {
          max-width: 1152px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
        }
        @media (min-width: 768px) {
          .footer-container {
            grid-template-columns: auto minmax(0, 1fr);
            gap: 40px 60px;
            align-items: start;
          }
        }
        .footer-links {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          gap: 12px 20px;
          justify-content: flex-start;
        }
        @media (min-width: 768px) {
          .footer-links {
            justify-content: flex-end;
            flex-wrap: nowrap; /* Ép buộc nằm trên 1 hàng ngang tuyệt đối trên Desktop */
            gap: 24px;
          }
        }
      `}</style>

      <div className="footer-container">
        
        {/* Cột 1: Logo */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <img 
              src={asset('/logo-trimmed.png')} 
              alt="Wellness Nest" 
              style={{ height: '40px', width: 'auto', objectFit: 'contain' }} 
            />
          </div>
          <p style={{ fontSize: '0.82rem', color: '#64748b', maxWidth: '220px', lineHeight: '1.4', margin: 0 }}>
            Independent Research &amp; Product Verification Lab.
          </p>
        </div>

        {/* Cột 2 - Hàng 1: Legal Links (Khớp chuẩn xác tên route trong thư mục app/) */}
        <div className="footer-links">
          <Link href="/privacy-policy" style={{ color: '#e2e8f0', textDecoration: 'none', fontSize: '0.85rem', fontWeight: '600', whiteSpace: 'nowrap' }}>Privacy Policy</Link>
          <Link href="/terms-of-service" style={{ color: '#e2e8f0', textDecoration: 'none', fontSize: '0.85rem', fontWeight: '600', whiteSpace: 'nowrap' }}>Terms of Service</Link>
          <Link href="/affiliate-disclosure" style={{ color: '#e2e8f0', textDecoration: 'none', fontSize: '0.85rem', fontWeight: '600', whiteSpace: 'nowrap' }}>Affiliate Disclosure</Link>
          <Link href="/contact" style={{ color: '#e2e8f0', textDecoration: 'none', fontSize: '0.85rem', fontWeight: '600', whiteSpace: 'nowrap' }}>Contact</Link>
        </div>

        {/* Cột 2 - Hàng 2: Text Block & Disclaimer */}
        <div style={{ width: '100%', maxWidth: '900px', display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.83rem', lineHeight: '1.5', color: '#94a3b8', textAlign: 'left' }}>
          <p style={{ margin: 0 }}>
            This is an independent guide and is not operated by Wellness Nest. It contains affiliate links; we may earn a commission on eligible purchases at no extra cost to you. Product claims are the merchant&apos;s own.
          </p>
          <p style={{ margin: 0 }}>
            These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.
          </p>
          <p style={{ margin: 0 }}>
            Contact: <a href="mailto:daniaengracia26377@gmail.com" style={{ color: '#38bdf8', textDecoration: 'none' }}>daniaengracia26377@gmail.com</a>
          </p>
          <p style={{ margin: 0, color: '#64748b', fontSize: '0.78rem', paddingTop: '8px', borderTop: '1px solid #1e293b' }}>
            © 2026 Wellness Nest Shilajit Guide. Wellness Nest and ShilaSource are trademarks of their respective owners.
          </p>
        </div>

      </div>
    </footer>
  );
}
