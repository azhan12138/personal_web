import { siteContent } from "./content";

function SiteHeader() {
  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="主要导航">
        <a className="wordmark" href="#top" aria-label="返回主页顶部">
          L·SZ
        </a>
        <div className="nav-links">
          {siteContent.navigation.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  const { hero } = siteContent;

  return (
    <section className="hero shell" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">{hero.eyebrow}</p>
        <h1 id="hero-title">
          {hero.heading[0]}
          <br />
          {hero.heading[1]}
          <br />
          <em>{hero.heading[2]}</em>
        </h1>
        <p className="hero-statement">{hero.statement}</p>
        <p className="hero-role">
          <span>{hero.status}</span>
          {hero.role}
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#education">
            了解我的教育经历
          </a>
          <a className="button button-secondary" href="#work">
            查看 AI 探索
          </a>
        </div>
      </div>

      <figure className="hero-portrait">
        <span className="portrait-label">PROFILE / 01</span>
        <img
          src={hero.portrait.src}
          alt={hero.portrait.alt}
          width={hero.portrait.width}
          height={hero.portrait.height}
          fetchPriority="high"
        />
        <figcaption>
          <span>{hero.location}</span>
          <span>硕士在读 · 持续探索中</span>
        </figcaption>
      </figure>
    </section>
  );
}

export function App() {
  return (
    <>
      <SiteHeader />
      <main id="top">
        <Hero />
      </main>
    </>
  );
}
