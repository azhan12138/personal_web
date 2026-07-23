const variants = ["A", "B", "C"];

const variantNames = {
  A: "Editorial Ledger / 编辑档案",
  B: "Research Brief / 研究简报",
  C: "Open Notebook / 开放笔记",
};

const links = {
  github: "https://github.com/azhan12138",
  sprout: "https://github.com/azhan12138/sprout-app-clean",
  soul: "https://github.com/azhan12138/SoulCompanion",
  email: "mailto:18702530496@163.com",
};

const arrow = `<span aria-hidden="true">↗</span>`;

const nav = (
  modifier = "",
  firstHref = "#work",
  firstLabel = "探索 / Work",
) => `
  <nav class="site-nav ${modifier}">
    <a class="wordmark" href="#top" aria-label="返回顶部">L·SZ</a>
    <div class="nav-links">
      <a href="${firstHref}">${firstLabel}</a>
      <a href="#journey">经历 / Journey</a>
      <a href="#contact">联系 / Contact</a>
    </div>
  </nav>
`;

const projectLinks = (href, label = "查看 GitHub") => `
  <a class="text-link" href="${href}" target="_blank" rel="noreferrer">
    ${label} ${arrow}
  </a>
`;

function variantA() {
  return `
    <div class="page variant-a" id="top">
      ${nav("", "#education", "教育 / Education")}

      <header class="a-hero shell">
        <div class="a-hero-copy">
          <p class="eyebrow">AI PRODUCT · INDEPENDENT BUILDER · 2026</p>
          <h1>罗仕展，<br />在产品与智能体之间<br /><em>寻找新的创造方式。</em></h1>
          <p class="hero-statement">我想看看，AI 能不能让一个人的想法走得更远。</p>
          <div class="hero-actions">
            <a class="button primary" href="#education">了解我的教育经历</a>
            <a class="button ghost" href="#work">查看 AI 探索</a>
          </div>
        </div>

        <figure class="a-portrait">
          <img src="./assets/portrait-primary.jpg" alt="罗仕展在思考者雕塑前的照片" />
          <figcaption>
            <span>目前在上海</span>
            <span>硕士在读 · 持续探索中</span>
          </figcaption>
        </figure>
      </header>

      <section class="a-education shell section-rule" id="education">
        <div class="education-intro">
          <p class="section-index">01 / EDUCATION & ACADEMIC FOUNDATION</p>
          <div>
            <h2>教育经历，<br />是我理解问题的起点。</h2>
            <p>
              从数据、建模与商业分析，到运筹优化、强化学习与智能体研究，
              我的学习路径也构成了今天做 AI 产品的底层方法。
            </p>
          </div>
        </div>

        <div class="education-list">
          <article class="education-entry">
            <div class="education-period">
              <time>2025.09 — 2028.03</time>
              <span>硕士在读 · 上海</span>
            </div>
            <div class="education-school">
              <p>ANTAI COLLEGE OF ECONOMICS & MANAGEMENT</p>
              <h3>上海交通大学</h3>
              <strong>管理科学与工程 · 硕士</strong>
              <span>
                在运筹与数据分析的基础上，开始系统接触强化学习、智能体建模与仿真，
                并持续在这一方向学习与深耕。
              </span>
            </div>
            <div class="education-details">
              <div class="education-detail">
                <p>核心课程 / COURSEWORK</p>
                <ul class="course-list">
                  <li>运筹学：确定性模型</li>
                  <li>运筹学：随机性模型</li>
                  <li>计算文本分析</li>
                  <li>强化学习</li>
                  <li>多元统计分析</li>
                  <li>智能体建模与仿真</li>
                </ul>
              </div>
              <div class="education-detail">
                <p>当前研究关注 / CURRENT FOCUS</p>
                <p class="detail-copy">
                  Agent 的决策、协作与模拟机制，以及它们如何进入真实产品与研发流程。
                  相关研究仍在进行中。
                </p>
              </div>
            </div>
          </article>

          <article class="education-entry">
            <div class="education-period">
              <time>2021.09 — 2025.06</time>
              <span>本科 · 成都</span>
            </div>
            <div class="education-school">
              <p>SCHOOL OF MANAGEMENT SCIENCE & ENGINEERING</p>
              <h3>西南财经大学</h3>
              <strong>大数据管理与应用 · 学士</strong>
              <span>
                在统计、编程与管理决策之间建立跨学科基础，
                也通过研究与竞赛第一次把模型用于解释真实世界的问题。
              </span>
            </div>
            <div class="education-details">
              <div class="education-detail">
                <p>核心课程 / COURSEWORK</p>
                <ul class="course-list">
                  <li>机器学习与数据挖掘</li>
                  <li>统计学</li>
                  <li>Python 程序设计</li>
                  <li>数据库原理与应用</li>
                  <li>管理决策模型与方法</li>
                  <li>数据智能前沿</li>
                </ul>
              </div>
              <div class="education-detail">
                <p>代表荣誉 / HONORS</p>
                <ul class="honor-list">
                  <li>本科生国家奖学金</li>
                  <li>四川省优秀毕业生</li>
                  <li>感恩科学家奖学金</li>
                  <li>校级三好学生</li>
                </ul>
              </div>
              <div class="education-detail">
                <p>代表竞赛 / COMPETITIONS</p>
                <ol class="competition-list">
                  <li>
                    <time>2024</time>
                    <span>全国市场调查与分析大赛</span>
                    <strong>四川省一等奖</strong>
                  </li>
                  <li>
                    <time>2023</time>
                    <span>全国企业竞争模拟大赛</span>
                    <strong>全国三等奖</strong>
                  </li>
                </ol>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section class="a-now shell section-rule">
        <p class="section-index">02 / NOW</p>
        <div>
          <h2>专注 AI Native 的<br />AI 产品经理与独立开发者</h2>
        </div>
        <p>
          在上海交通大学攻读管理科学与工程硕士，开始系统接触强化学习、智能体建模与仿真。
          从产品、智能体到独立开发，我正在学习如何和 AI 一起，把好奇心慢慢变成真实世界里的作品。
        </p>
      </section>

      <section class="a-work shell" id="work">
        <div class="section-heading">
          <p class="section-index">03 / SELECTED EXPLORATIONS</p>
          <h2>探索不是答案，<br />是我留下的路径。</h2>
        </div>

        <article class="a-project feature-project">
          <div class="project-meta">
            <span>01</span>
            <span>移动应用 · 独立开发</span>
            <span>2026</span>
          </div>
          <div class="project-copy">
            <h3>Sprout / 芽</h3>
            <p class="project-lede">把长期目标、日常任务与情绪记录，变成一株会慢慢生长的植物。</p>
            <p>
              我从用户访谈与多轮 PRD 出发，用 AI 全栈工具完成产品设计、开发与迭代。
              它不只关注“完成了多少”，更关心一个人如何温和地继续前进。
            </p>
            ${projectLinks(links.sprout)}
          </div>
          <div class="sprout-triptych" aria-label="Sprout 应用截图">
            <img src="./assets/sprout-habitat.jpg" alt="Sprout 栖息地页面" />
            <img src="./assets/sprout-labor.jpg" alt="Sprout 劳作页面" />
            <img src="./assets/sprout-review.jpg" alt="Sprout 回顾页面" />
          </div>
        </article>

        <article class="a-project split-project">
          <div class="project-meta">
            <span>02</span>
            <span>桌面智能体 · 开源实验</span>
            <span>2026</span>
          </div>
          <div class="project-copy">
            <h3>SoulCompanion</h3>
            <p class="project-lede">一个拥有记忆、情绪状态与主动关怀能力的桌面 AI 小伙伴。</p>
            <p>
              我在这个项目里探索：当 Agent 不只回答问题，而是能记住、理解并适时主动出现，人与 AI 的关系会发生什么变化。
            </p>
            ${projectLinks(links.soul)}
          </div>
          <div class="soul-frame">
            <img src="./assets/soul-chat.png" alt="SoulCompanion 对话界面" />
          </div>
        </article>

        <article class="a-project discreet-project">
          <div class="project-meta">
            <span>03</span>
            <span>AI 视觉识别 · 进行中</span>
            <span>NOW</span>
          </div>
          <div class="project-copy">
            <h3>真实世界的视觉识别实验</h3>
            <p class="project-lede">让 Spec、Agent 实现、独立评估与真实数据验证形成可恢复的研发闭环。</p>
            <p>项目仍在进行中。出于隐私与数据安全考虑，仅公开研究方向与方法，不展示业务数据和内部实现。</p>
          </div>
          <div class="redacted-visual" aria-label="经过模糊处理的实验示意图">
            <span>CONTEXT</span><span>SPEC</span><span>IMPLEMENT</span><span>EVALUATE</span>
            <i></i><i></i><i></i>
          </div>
        </article>
      </section>

      <section class="a-journey shell section-rule" id="journey">
        <div class="section-heading compact">
          <p class="section-index">04 / JOURNEY</p>
          <h2>一路走来，问题在变，<br />好奇心没有。</h2>
        </div>
        <ol class="timeline-list">
          <li><time>2021</time><strong>从数据与管理出发</strong><p>进入西南财经大学，建立统计、建模、编程与商业分析基础。</p></li>
          <li><time>2023</time><strong>用模型理解真实问题</strong><p>在研究、竞赛与团队协作中，学习把复杂问题变成可分析、可行动的结构。</p></li>
          <li><time>2024</time><strong>从分析走向业务决策</strong><p>进入真实业务场景，用数据支持资源分配与运营判断。</p></li>
          <li><time>2025</time><strong>开始做 AI 产品</strong><p>在源氏木语参与 AI 售后问答、模拟对练与数据洞察产品，不公开内部指标与系统细节。</p></li>
          <li><time>2025—</time><strong>研究智能体，也亲手创造</strong><p>上海交通大学硕士在读，持续接触强化学习、智能体建模与仿真。</p></li>
          <li><time>现在</time><strong>成为独立开发者</strong><p>把个人产品与 AI Native 研发方式，当作一场长期、公开但克制的实验。</p></li>
        </ol>
      </section>

      <footer class="a-footer" id="contact">
        <div class="shell footer-grid">
          <p class="section-index">05 / KEEP IN TOUCH</p>
          <h2>如果你也在想 AI 与人<br />还能怎样一起创造，<br /><em>欢迎来聊聊。</em></h2>
          <div class="footer-links">
            <a href="${links.email}">18702530496@163.com ${arrow}</a>
            <a href="${links.github}" target="_blank" rel="noreferrer">GitHub / azhan12138 ${arrow}</a>
          </div>
        </div>
      </footer>
    </div>
  `;
}

function variantB() {
  return `
    <div class="page variant-b" id="top">
      <aside class="b-rail">
        <a class="b-mark" href="#top">LSZ<br /><small>2026</small></a>
        <div class="b-rail-middle">
          <span>AI PRODUCT</span>
          <span>AGENT RESEARCH</span>
          <span>INDEPENDENT DEV</span>
        </div>
        <a href="${links.email}" class="b-mail">CONTACT ↗</a>
      </aside>

      <div class="b-document">
        <header class="b-header">
          <div class="b-topline">
            <span>PERSONAL RESEARCH BRIEF</span>
            <span>SHANGHAI · CN</span>
            <span>UPDATED 07 / 2026</span>
          </div>
          <div class="b-intro">
            <div>
              <p class="eyebrow">PROFILE / 罗仕展</p>
              <h1>让一个人的想法，<br />借助 AI 走得更远。</h1>
              <p class="b-deck">
                上海交通大学管理科学与工程硕士在读。专注 AI Native 的 AI 产品经理、独立开发者与智能体探索者。
              </p>
            </div>
            <figure>
              <img src="./assets/portrait-primary.jpg" alt="罗仕展肖像" />
              <figcaption>Product × Agent × Research</figcaption>
            </figure>
          </div>
        </header>

        <section class="b-section b-thesis">
          <header><span>SECTION 01</span><h2>当前命题</h2></header>
          <div class="b-thesis-grid">
            <p class="dropcap">我关注的是，当 AI 从工具变成协作者，产品经理、研究者和独立开发者的工作方式会怎样改变。</p>
            <dl>
              <div><dt>正在学习</dt><dd>强化学习、智能体建模与仿真</dd></div>
              <div><dt>正在实践</dt><dd>AI 产品、桌面 Agent、AI Native 研发</dd></div>
              <div><dt>工作原则</dt><dd>从真实问题出发，让证据进入产品</dd></div>
            </dl>
          </div>
        </section>

        <section class="b-section" id="work">
          <header><span>SECTION 02</span><h2>研究与作品索引</h2></header>
          <div class="b-index-table">
            <article>
              <span class="b-number">001</span>
              <div><p class="b-type">MOBILE PRODUCT / 2026</p><h3>Sprout / 芽</h3></div>
              <p>把任务、情绪与长期目标转化为植物生长体验。探索“温和成长”如何成为产品机制，而不是一句口号。</p>
              <div class="b-thumb sprout"><img src="./assets/sprout-habitat.jpg" alt="Sprout 界面" /></div>
              ${projectLinks(links.sprout, "Repository")}
            </article>
            <article>
              <span class="b-number">002</span>
              <div><p class="b-type">DESKTOP AGENT / 2026</p><h3>SoulCompanion</h3></div>
              <p>围绕长期记忆、情绪状态与主动触发，尝试让桌面 Agent 从一次性对话走向持续陪伴。</p>
              <div class="b-thumb soul"><img src="./assets/soul-chat.png" alt="SoulCompanion 界面" /></div>
              ${projectLinks(links.soul, "Repository")}
            </article>
            <article class="confidential">
              <span class="b-number">003</span>
              <div><p class="b-type">VISION R&D / IN PROGRESS</p><h3>视觉识别实验</h3></div>
              <p>以真实数据验证 Agent 研发闭环。出于隐私与数据安全考虑，公开材料仅保留研究方法。</p>
              <div class="b-confidential-stamp">LIMITED<br />DISCLOSURE</div>
              <span class="status-dot">ONGOING</span>
            </article>
          </div>
        </section>

        <section class="b-section" id="journey">
          <header><span>SECTION 03</span><h2>成长记录</h2></header>
          <div class="b-journey-grid">
            <article><time>2021</time><h3>数据与管理</h3><p>在西南财经大学建立统计、建模与商业分析基础。</p></article>
            <article><time>2023</time><h3>研究与竞赛</h3><p>从复杂问题中寻找结构，也在团队协作中学习表达与决策。</p></article>
            <article><time>2024</time><h3>真实业务</h3><p>从数据分析走向能影响业务行动的产品与判断。</p></article>
            <article><time>2025</time><h3>AI 产品</h3><p>在源氏木语将知识、工作流和智能体带入售后业务。</p></article>
            <article><time>2025—</time><h3>智能体研究</h3><p>上海交通大学硕士在读，持续探索智能体建模与仿真。</p></article>
            <article><time>NOW</time><h3>独立创造</h3><p>让产品、代码和研究问题在个人项目中不断相遇。</p></article>
          </div>
        </section>

        <footer class="b-section b-contact" id="contact">
          <header><span>SECTION 04</span><h2>建立联系</h2></header>
          <p>如果你正在做 AI 产品、研究智能体，或只是对新的创造方式感到好奇，我们可以交换问题。</p>
          <div>
            <a href="${links.email}">EMAIL ↗</a>
            <a href="${links.github}" target="_blank" rel="noreferrer">GITHUB ↗</a>
          </div>
        </footer>
      </div>
    </div>
  `;
}

function variantC() {
  return `
    <div class="page variant-c" id="top">
      ${nav("c-nav")}

      <header class="c-cover">
        <div class="c-cover-copy">
          <p class="eyebrow">OPEN NOTEBOOK · NO. 001</p>
          <h1>我还没有答案。<br /><em>但我正在把问题做成产品。</em></h1>
          <p>
            我是罗仕展，一名专注 AI Native 的 AI 产品经理与独立开发者。
            我想看看，AI 能不能让一个人的想法走得更远。
          </p>
          <a class="c-arrow-link" href="#work">翻开我的探索 ↓</a>
        </div>
        <div class="c-cover-photo">
          <img src="./assets/portrait-secondary.jpg" alt="罗仕展在湖边张开双臂的照片" />
          <div class="photo-note">Still learning.<br />Still building.</div>
        </div>
        <div class="c-status-strip">
          <span>上海交通大学硕士在读</span>
          <span>AI PRODUCT / AGENTS / INDEPENDENT DEV</span>
          <span>AVAILABLE FOR CONVERSATIONS</span>
        </div>
      </header>

      <section class="c-letter shell-narrow">
        <p class="c-margin-note">A short note<br />关于我</p>
        <div>
          <p class="large-prose">
            我从数据和建模出发，后来发现，比得到一个漂亮的分析结果更吸引我的，是把理解变成一个真的有人使用的产品。
          </p>
          <p>
            在 AI 产品工作中，我开始接触知识库、工作流与智能体；在研究生阶段，我继续学习强化学习、智能体建模与仿真；
            在独立开发中，我尝试让这些想法离开文档，成为可以运行、可以被质疑、也可以继续长大的东西。
          </p>
        </div>
      </section>

      <section class="c-work" id="work">
        <div class="shell c-work-heading">
          <p class="section-index">THREE FIELD NOTES</p>
          <h2>三份还在生长的探索记录</h2>
        </div>

        <article class="c-story c-sprout">
          <div class="c-story-title">
            <span>FIELD NOTE 01 · PRODUCT</span>
            <h3>Sprout / 芽</h3>
            <p>如果任务管理不是催促，而是一种温和的生长，会发生什么？</p>
            ${projectLinks(links.sprout)}
          </div>
          <div class="c-sprout-gallery">
            <img src="./assets/sprout-habitat.jpg" alt="Sprout 栖息地" />
            <img src="./assets/sprout-labor.jpg" alt="Sprout 劳作" />
            <img src="./assets/sprout-review.jpg" alt="Sprout 回顾" />
          </div>
          <blockquote>“我想做的不是更高效的清单，而是一种更愿意被长期坚持的体验。”</blockquote>
        </article>

        <article class="c-story c-soul">
          <div class="c-soul-visual">
            <div class="c-orbit orbit-one"></div><div class="c-orbit orbit-two"></div>
            <img src="./assets/soul-idle.png" alt="SoulCompanion 待机形象" />
          </div>
          <div class="c-story-title">
            <span>FIELD NOTE 02 · AGENT</span>
            <h3>SoulCompanion</h3>
            <p>
              当一个 AI 能记住你的偏好、状态和重要事件，并在合适的时候主动出现，它还是工具吗？
              这是我用桌面 Agent 尝试回答的问题。
            </p>
            ${projectLinks(links.soul)}
          </div>
        </article>

        <article class="c-story c-vision">
          <div class="c-story-title">
            <span>FIELD NOTE 03 · R&D</span>
            <h3>AI 视觉识别实验</h3>
            <p>
              一个经过模糊处理的进行中项目。比模型本身更让我着迷的，是如何让 Agent 从 Spec 出发，持续实现、评估并面对真实数据。
            </p>
          </div>
          <div class="c-process-map">
            <span>SPEC</span><i>→</i><span>BUILD</span><i>→</i><span>EVALUATE</span><i>→</i><span>LEARN</span>
            <small>DETAILS WITHHELD · RESEARCH IN PROGRESS</small>
          </div>
        </article>
      </section>

      <section class="c-journey shell-narrow" id="journey">
        <p class="c-margin-note">Timeline<br />成长路径</p>
        <div class="c-chapters">
          <article><span>CHAPTER 01 · 2021</span><h3>先学会看见结构</h3><p>数据、统计和建模，是我理解复杂世界的第一套语言。</p></article>
          <article><span>CHAPTER 02 · 2023—2024</span><h3>再把问题放进现实</h3><p>研究、竞赛与业务实践让我明白：好的答案必须经得起真实约束。</p></article>
          <article><span>CHAPTER 03 · 2025</span><h3>开始让 AI 进入产品</h3><p>从售后知识到模拟对练，我开始设计人与智能体共同工作的方式。</p></article>
          <article><span>CHAPTER 04 · NOW</span><h3>继续做一个学生</h3><p>读研、研究智能体、独立开发，也允许自己持续修正问题。</p></article>
        </div>
      </section>

      <footer class="c-footer" id="contact">
        <div class="shell-narrow c-footer-grid">
          <p class="c-margin-note">Next page<br />下一页</p>
          <div>
            <h2>也许我们可以从一个<br />还没有答案的问题开始。</h2>
            <a href="${links.email}">18702530496@163.com ${arrow}</a>
            <a href="${links.github}" target="_blank" rel="noreferrer">github.com/azhan12138 ${arrow}</a>
          </div>
        </div>
      </footer>
    </div>
  `;
}

const renderers = { A: variantA, B: variantB, C: variantC };

function getVariant() {
  const key = new URLSearchParams(window.location.search).get("variant")?.toUpperCase();
  return variants.includes(key) ? key : "A";
}

function render(variant) {
  document.getElementById("prototype-root").innerHTML = renderers[variant]();
  document.getElementById("variant-label").textContent = `${variant} — ${variantNames[variant]}`;
  document.documentElement.dataset.variant = variant;
  window.scrollTo({ top: 0, behavior: "instant" });
}

function navigate(step) {
  const current = getVariant();
  const index = variants.indexOf(current);
  const next = variants[(index + step + variants.length) % variants.length];
  const url = new URL(window.location.href);
  url.searchParams.set("variant", next);
  window.history.replaceState({}, "", url);
  render(next);
}

document.getElementById("previous-variant").addEventListener("click", () => navigate(-1));
document.getElementById("next-variant").addEventListener("click", () => navigate(1));

window.addEventListener("keydown", (event) => {
  const target = event.target;
  const isEditing = target.matches("input, textarea, [contenteditable='true']");
  if (isEditing) return;
  if (event.key === "ArrowLeft") navigate(-1);
  if (event.key === "ArrowRight") navigate(1);
});

window.addEventListener("popstate", () => render(getVariant()));
render(getVariant());
