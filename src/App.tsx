import { useEffect } from "react";
import { siteContent } from "./content";

function useScrollReveal() {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    document.documentElement.classList.add("reveal-ready");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("reveal-ready");
    };
  }, []);
}

function SiteHeader() {
  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="主要导航">
        <a className="wordmark" href="#top" aria-label="返回主页顶部">
          L·SZ
        </a>
        <div className="nav-links">
          {siteContent.navigation.map((item) => (
            <a
              href={item.href}
              key={item.href}
              aria-label={`${item.labelZh} / ${item.labelEn}`}
            >
              <span>{item.labelZh}</span>
              <span className="nav-english"> / {item.labelEn}</span>
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
    <section
      className="hero shell"
      id="hero"
      aria-labelledby="hero-title"
    >
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
      data-reveal
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

function CurrentFocus() {
  const { currentFocus } = siteContent;

  return (
    <section
      className="current-focus shell section-rule"
      id="focus"
      aria-labelledby="focus-title"
      data-reveal
    >
      <p className="section-index">{currentFocus.eyebrow}</p>
      <h2 id="focus-title">
        {currentFocus.heading[0]}
        <br />
        {currentFocus.heading[1]}
      </h2>
      <p>{currentFocus.body}</p>
    </section>
  );
}

function Explorations() {
  const { explorations } = siteContent;

  return (
    <section
      className="explorations shell"
      id="work"
      aria-labelledby="work-title"
    >
      <div className="section-intro work-intro" data-reveal>
        <p className="section-index">{explorations.eyebrow}</p>
        <h2 id="work-title">
          {explorations.heading[0]}
          <br />
          {explorations.heading[1]}
        </h2>
      </div>

      <div className="project-list">
        {explorations.projects.map((project) => (
          <article className="project" key={project.title} data-reveal>
            <div className="project-meta">
              <span>{project.index}</span>
              <span>{project.type}</span>
              <span>{project.period}</span>
            </div>

            <div className="project-copy">
              <h3>{project.title}</h3>
              <p className="project-lede">{project.lede}</p>
              <p>{project.description}</p>
              {project.link ? (
                <a
                  className="text-link"
                  href={project.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.link.label}
                  <span aria-hidden="true"> ↗</span>
                </a>
              ) : null}
            </div>

            {project.images ? (
              <figure
                className={
                  project.images.length > 1
                    ? "project-media sprout-gallery"
                    : "project-media soul-frame"
                }
                aria-label={`${project.title} 项目界面`}
              >
                {project.images.map((image) => (
                  <img
                    key={image.src}
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    loading="lazy"
                    decoding="async"
                  />
                ))}
              </figure>
            ) : null}

            {project.process ? (
              <figure
                className="process-visual"
                aria-label="经过公开性处理的视觉识别研发闭环"
              >
                <figcaption>
                  LIMITED DISCLOSURE · RESEARCH IN PROGRESS
                </figcaption>
                <ol>
                  {project.process.map((step, index) => (
                    <li key={step}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <strong>{step}</strong>
                    </li>
                  ))}
                </ol>
                <p>REAL DATA VALIDATION · DETAILS WITHHELD</p>
              </figure>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}

function Journey() {
  const { journey } = siteContent;

  return (
    <section
      className="journey shell section-rule"
      id="journey"
      aria-labelledby="journey-title"
    >
      <div className="section-intro journey-intro" data-reveal>
        <p className="section-index">{journey.eyebrow}</p>
        <h2 id="journey-title">
          {journey.heading[0]}
          <br />
          {journey.heading[1]}
        </h2>
      </div>

      <ol className="timeline" data-reveal>
        {journey.milestones.map((milestone) => (
          <li key={`${milestone.year}-${milestone.title}`}>
            <time dateTime={milestone.dateTime}>{milestone.year}</time>
            <strong>{milestone.title}</strong>
            <p>{milestone.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function SiteFooter() {
  const { contact } = siteContent;

  return (
    <footer
      className="site-footer"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="footer-grid shell" data-reveal>
        <p className="section-index">{contact.eyebrow}</p>
        <h2 id="contact-title">
          {contact.heading[0]}
          <br />
          {contact.heading[1]}
          <br />
          <em>{contact.heading[2]}</em>
        </h2>
        <div className="footer-links">
          <a href={`mailto:${contact.email}`}>
            {contact.email}
            <span aria-hidden="true"> ↗</span>
          </a>
          <a
            href={contact.github.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {contact.github.label}
            <span aria-hidden="true"> ↗</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export function App() {
  useScrollReveal();

  return (
    <>
      <SiteHeader />
      <main id="top">
        <Hero />
        <Education />
        <CurrentFocus />
        <Explorations />
        <Journey />
      </main>
      <SiteFooter />
    </>
  );
}
