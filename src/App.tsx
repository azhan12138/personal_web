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

function Education() {
  const { education } = siteContent;

  return (
    <section
      className="education shell section-rule"
      id="education"
      aria-labelledby="education-title"
    >
      <div className="section-intro">
        <p className="section-index">{education.eyebrow}</p>
        <div>
          <h2 id="education-title">
            {education.heading[0]}
            <br />
            {education.heading[1]}
          </h2>
          <p>{education.introduction}</p>
        </div>
      </div>

      <div className="education-list">
        {education.entries.map((entry) => (
          <article className="education-entry" key={entry.school}>
            <div className="education-period">
              <time dateTime={entry.dateTime}>{entry.period}</time>
              <span>
                {entry.stage} · {entry.city}
              </span>
            </div>

            <div className="education-school">
              <p>{entry.schoolEn}</p>
              <h3>{entry.school}</h3>
              <span className="education-college">{entry.college}</span>
              <strong>{entry.degree}</strong>
              <span className="education-summary">{entry.summary}</span>
            </div>

            <div className="education-details">
              <div className="education-detail">
                <p>核心课程 / COURSEWORK</p>
                <ul className="tag-list">
                  {entry.courses.map((course) => (
                    <li key={course}>{course}</li>
                  ))}
                </ul>
              </div>

              {entry.focus ? (
                <div className="education-detail">
                  <p>当前研究关注 / CURRENT FOCUS</p>
                  <p className="detail-copy">{entry.focus}</p>
                </div>
              ) : null}

              {entry.honors ? (
                <div className="education-detail">
                  <p>代表荣誉 / HONORS</p>
                  <ul className="tag-list honor-list">
                    {entry.honors.map((honor) => (
                      <li key={honor}>{honor}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {entry.competitions ? (
                <div className="education-detail">
                  <p>代表竞赛 / COMPETITIONS</p>
                  <ol className="competition-list">
                    {entry.competitions.map((competition) => (
                      <li key={competition.name}>
                        <time dateTime={competition.year}>
                          {competition.year}
                        </time>
                        <span>{competition.name}</span>
                        <strong>{competition.result}</strong>
                      </li>
                    ))}
                  </ol>
                </div>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function App() {
  return (
    <>
      <SiteHeader />
      <main id="top">
        <Hero />
        <Education />
      </main>
    </>
  );
}
