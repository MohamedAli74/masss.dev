// ================================================================
// MASSS Homepage — React App
// ================================================================

const { useState, useEffect } = React;

// ================================================================
// LOGO ICON COMPONENT
// ================================================================
function LogoIcon({ size = 36, gradientId = "icon-gradient" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="52" y2="52" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00f5a0" />
          <stop offset="1" stopColor="#6366f1" />
        </linearGradient>
      </defs>
      <rect width="52" height="52" rx="12" fill="#111118" />
      <path
        d="M11 43 L11 16 L26 31 L41 16 L41 43"
        stroke={`url(#${gradientId})`}
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="11" cy="16" r="3.5" fill="#00f5a0" />
      <circle cx="26" cy="31" r="3.5" fill="#6366f1" />
      <circle cx="41" cy="16" r="3.5" fill="#00f5a0" />
    </svg>
  );
}

// ================================================================
// BUTTON COMPONENT
// ================================================================
function Button({
  label,
  variant = "primary",
  onClick = null,
  href = null,
  className = "",
  disabled = false,
  type = "button",
  children
}) {
  const buttonClass = `btn btn-${variant} ${className}`.trim();
  const content = children || label;

  if (href) {
    return (
      <a href={href} className={buttonClass} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {content}
    </button>
  );
}

// ================================================================
// HEADER COMPONENT
// ================================================================
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header>
      <div className="header-container">
        <a
          href="#"
          className="logo"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        >
          <LogoIcon size={36} gradientId="header-logo-gradient" />
          <span className="logo-wordmark">MAS<span>SS</span></span>
        </a>

        <nav className="header-nav">
          <button className="nav-link" onClick={() => scrollTo('products')}>Work</button>
          <button className="nav-link" onClick={() => scrollTo('engineering')}>Engineering</button>
          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>

      {menuOpen && (
        <div className="mobile-nav">
          <button className="nav-link" onClick={() => scrollTo('products')}>Work</button>
          <button className="nav-link" onClick={() => scrollTo('engineering')}>Engineering</button>
        </div>
      )}
    </header>
  );
}

// ================================================================
// HERO SECTION
// ================================================================
function Hero() {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero">
      <div className="glow-mint-hero"></div>
      <div className="glow-violet-hero"></div>

      <div className="hero-container">
        <h1 className="hero-headline">Get more done.</h1>

        <p className="hero-subheadline">
          MASSS is a small software studio. We build Software that works as fast as you think.
        </p>

        <div className="hero-cta-group">
          <Button label="Our work" variant="primary" onClick={scrollToProducts} />
          <Button
            label="Engineering"
            variant="ghost"
            onClick={() => document.getElementById('engineering')?.scrollIntoView({ behavior: 'smooth' })}
          />
        </div>
      </div>
    </section>
  );
}

// ================================================================
// ENGINEERING SECTION
// ================================================================
function Engineering() {
  const pillars = [
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#00f5a0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Secure by default",
      description: "Auth, encryption, and data handling aren't afterthoughts. They're the foundation everything else is built on."
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="3" width="20" height="5" rx="2" stroke="#6366f1" strokeWidth="2"/>
          <rect x="2" y="10" width="20" height="5" rx="2" stroke="#6366f1" strokeWidth="2"/>
          <rect x="2" y="17" width="20" height="5" rx="2" stroke="#6366f1" strokeWidth="2"/>
        </svg>
      ),
      title: "Built to scale",
      description: "Architected to grow. Whether it's ten users or ten thousand, the infrastructure holds without a rewrite."
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#00c9ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Fast everywhere",
      description: "Every layer is optimized — from the first byte to the last render. Nothing ships slow."
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M12 20h9" stroke="#00f5a0" strokeWidth="2" strokeLinecap="round"/>
          <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" stroke="#00f5a0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Written to last",
      description: "Clean, readable code with no shortcuts. Easy to debug, easy to extend, easy for anyone to pick up."
    }
  ];

  return (
    <section id="engineering">
      <div className="engineering-container">
        <span className="section-label">Engineering</span>
        <h2 className="section-heading">Built to a standard, not a deadline.</h2>
        <div className="engineering-grid">
          {pillars.map((p, i) => (
            <div key={i} className="engineering-card glass-card">
              <div className="feature-icon">{p.icon}</div>
              <h3 className="feature-title">{p.title}</h3>
              <p className="feature-description">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ================================================================
// PRODUCT CARD COMPONENT
// ================================================================
function ProductCard({ name, description, status, statusVariant, cta, href, comingSoon, features: featureList, highlighted }) {
  return (
    <div className={`glass-card product-card${highlighted ? ' product-card--highlighted' : ''}`}>
      <div className="product-card-header">
        <h3 className="product-card-title">{name}</h3>
        {status && (
          <span className={`pill pill-${statusVariant}`}>{status}</span>
        )}
      </div>
      <p className="product-card-description">{description}</p>
      {featureList && (
        <ul className="product-feature-list">
          {featureList.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      )}
      <div className="product-card-footer">
        <Button
          label={cta}
          variant={comingSoon ? "secondary" : "primary"}
          href={comingSoon ? null : href}
          disabled={comingSoon}
        />
      </div>
    </div>
  );
}

// ================================================================
// PRODUCTS SECTION
// ================================================================
function Products({ highlightedProduct }) {
  const products = [
    {
      name: "TrackIt",
      description: "A job application tracker. Fast, minimal, and built to help you get hired.",
      status: "Live",
      statusVariant: "mint",
      cta: "Open TrackIt",
      href: "https://trackit.masss.dev",
      comingSoon: false,
      features: ["Organize every application, from submission to contract", "AI-powered ATS resume scoring with actionable suggestions", "Generate tailored cover letters in seconds"]
    },
    {
      name: "Prompt Master",
      description: "Unlock AI-powered productivity. The ultimate companion for prompt engineers and AI power users.",
      status: "Live",
      statusVariant: "mint",
      cta: "Open Prompt Master",
      href: "https://chromewebstore.google.com/detail/Prompt%20Master/kbgapbhjhkolgcagaeefmpkmpmmmaflb",
      comingSoon: false,
      features: ["Turns a rough idea into a fully structured prompt in one click", "Pinpoints exactly which prompt components are missing as you type", "Cloud-powered AI for faster, smarter prompt generation"]
    }
  ];

  return (
    <section id="products">
      <div className="products-container">
        <span className="section-label">Work</span>
        <h2 className="section-heading">What we've made.</h2>
        <div className="products-grid">
          {products.map((product, idx) => (
            <ProductCard
              key={idx}
              {...product}
              highlighted={highlightedProduct === product.name.toLowerCase().replace(/\s/g, '')}
            />
          ))}
        </div>
      </div>
    </section>
  );
}


// ================================================================
// FOOTER COMPONENT
// ================================================================
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-top">
          <a
            href="#"
            className="footer-logo"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            <LogoIcon size={28} gradientId="footer-logo-gradient" />
            <span className="logo-wordmark footer-wordmark">MAS<span>SS</span></span>
          </a>
          <p className="footer-tagline">Get more done.</p>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            © {currentYear} MASSS. All rights reserved.
          </div>
          <div className="footer-links">
            <a href="mailto:mohamedali243.123@gmail.com" className="header-contact">
              Contact
            </a>
            <a href="#terms">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ================================================================
// INTRO SCREEN COMPONENT
// ================================================================
function IntroScreen({ fading }) {
  return (
    <div className={`intro-screen${fading ? ' fading-out' : ''}`}>
      <div className="intro-logo-wrap">
        <svg width="80" height="80" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="intro-gradient" x1="0" y1="0" x2="52" y2="52" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00f5a0" />
              <stop offset="1" stopColor="#6366f1" />
            </linearGradient>
          </defs>
          <rect width="52" height="52" rx="12" fill="#111118" />
          <path
            className="masss-path"
            d="M11 43 L11 16 L26 31 L41 16 L41 43"
            stroke="url(#intro-gradient)"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle className="masss-node masss-node-1" cx="11" cy="16" r="3.5" fill="#00f5a0" />
          <circle className="masss-node masss-node-2" cx="26" cy="31" r="3.5" fill="#6366f1" />
          <circle className="masss-node masss-node-3" cx="41" cy="16" r="3.5" fill="#00f5a0" />
        </svg>
        <div className="masss-wordmark-anim">
          MAS<span>SS</span>
        </div>
      </div>
    </div>
  );
}

// ================================================================
// MAIN APP
// ================================================================
function App() {
  // 'playing' → 'fading' → 'done'
  const [introState, setIntroState] = useState('playing');
  const [highlightedProduct, setHighlightedProduct] = useState(null);

  useEffect(() => {
    // All animations complete by ~1.9s — hold briefly, then fade
    const fadeTimer = setTimeout(() => setIntroState('fading'), 2400);
    // Remove from DOM after fade transition (0.6s)
    const doneTimer = setTimeout(() => setIntroState('done'), 3000);
    return () => { clearTimeout(fadeTimer); clearTimeout(doneTimer); };
  }, []);

  useEffect(() => {
    const redirect = sessionStorage.getItem('masss-redirect');
    if (!redirect) return;
    sessionStorage.removeItem('masss-redirect');
    history.replaceState(null, '', redirect);

    // Normalize path to match product names e.g. /Prompt-Master → promptmaster
    const slug = redirect.replace('/', '').toLowerCase().replace(/[-\s]/g, '');
    setHighlightedProduct(slug);

    // Scroll to product card after intro finishes
    setTimeout(() => {
      document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
    }, 3200);

    // Remove highlight after 4 seconds
    setTimeout(() => setHighlightedProduct(null), 7000);
  }, []);

  // Lock scroll while intro is visible
  useEffect(() => {
    if (introState !== 'done') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [introState]);

  return (
    <>
      {introState !== 'done' && <IntroScreen fading={introState === 'fading'} />}
      <Header />
      <Hero />
      <Products highlightedProduct={highlightedProduct} />
      <Engineering />
      <Footer />
    </>
  );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
