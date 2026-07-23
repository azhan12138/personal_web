export interface NavigationItem {
  readonly labelZh: string;
  readonly labelEn: string;
  readonly href: `#${string}`;
}

export interface HeroContent {
  readonly eyebrow: string;
  readonly heading: readonly [string, string, string];
  readonly statement: string;
  readonly role: string;
  readonly location: string;
  readonly status: string;
  readonly portrait: {
    readonly src: string;
    readonly alt: string;
    readonly width: number;
    readonly height: number;
  };
}

export interface Competition {
  readonly year: string;
  readonly name: string;
  readonly result: string;
}

export interface EducationEntry {
  readonly period: string;
  readonly dateTime: string;
  readonly stage: string;
  readonly city: string;
  readonly school: string;
  readonly schoolEn: string;
  readonly college: string;
  readonly degree: string;
  readonly summary: string;
  readonly courses: readonly string[];
  readonly focus?: string;
  readonly honors?: readonly string[];
  readonly competitions?: readonly Competition[];
}

export interface EducationContent {
  readonly eyebrow: string;
  readonly heading: readonly [string, string];
  readonly introduction: string;
  readonly entries: readonly EducationEntry[];
}

export interface CurrentFocusContent {
  readonly eyebrow: string;
  readonly heading: readonly [string, string];
  readonly body: string;
}

export interface ProjectImage {
  readonly src: string;
  readonly alt: string;
  readonly width: number;
  readonly height: number;
}

export interface ExplorationProject {
  readonly index: string;
  readonly type: string;
  readonly period: string;
  readonly title: string;
  readonly lede: string;
  readonly description: string;
  readonly link?: {
    readonly href: string;
    readonly label: string;
  };
  readonly images?: readonly ProjectImage[];
  readonly process?: readonly string[];
}

export interface ExplorationsContent {
  readonly eyebrow: string;
  readonly heading: readonly [string, string];
  readonly projects: readonly ExplorationProject[];
}

export interface JourneyMilestone {
  readonly year: string;
  readonly dateTime: string;
  readonly title: string;
  readonly description: string;
}

export interface JourneyContent {
  readonly eyebrow: string;
  readonly heading: readonly [string, string];
  readonly milestones: readonly JourneyMilestone[];
}

export interface ContactContent {
  readonly eyebrow: string;
  readonly heading: readonly [string, string, string];
  readonly email: string;
  readonly github: {
    readonly label: string;
    readonly href: string;
  };
}

export interface SiteContent {
  readonly navigation: readonly NavigationItem[];
  readonly hero: HeroContent;
  readonly education: EducationContent;
  readonly currentFocus: CurrentFocusContent;
  readonly explorations: ExplorationsContent;
  readonly journey: JourneyContent;
  readonly contact: ContactContent;
}

export const siteContent: SiteContent = {
  navigation: [
    { labelZh: "教育", labelEn: "Education", href: "#education" },
    { labelZh: "探索", labelEn: "Work", href: "#work" },
    { labelZh: "经历", labelEn: "Journey", href: "#journey" },
    { labelZh: "联系", labelEn: "Contact", href: "#contact" },
  ],
  hero: {
    eyebrow: "AI PRODUCT · INDEPENDENT BUILDER · 2026",
    heading: ["罗仕展，", "在产品与智能体之间", "寻找新的创造方式。"],
    statement: "我想看看，AI 能不能让一个人的想法走得更远。",
    role: "专注 AI Native 的 AI 产品经理与独立开发者",
    location: "目前在上海",
    status: "上海交通大学管理科学与工程硕士在读",
    portrait: {
      src: "assets/portrait-primary.jpg",
      alt: "罗仕展在思考者雕塑前的照片",
      width: 630,
      height: 630,
    },
  },
  education: {
    eyebrow: "01 / EDUCATION & ACADEMIC FOUNDATION",
    heading: ["教育经历，", "是我理解问题的起点。"],
    introduction:
      "从数据、建模与商业分析，到运筹优化、强化学习与智能体研究，我的学习路径也构成了今天做 AI 产品的底层方法。",
    entries: [
      {
        period: "2025.09 — 2028.03（预计）",
        dateTime: "2025-09/2028-03",
        stage: "硕士在读",
        city: "上海",
        school: "上海交通大学",
        schoolEn: "SHANGHAI JIAO TONG UNIVERSITY",
        college: "安泰经济与管理学院",
        degree: "管理科学与工程 · 硕士",
        summary:
          "在运筹与数据分析的基础上，开始系统接触强化学习、智能体建模与仿真，并持续在这一方向学习与深耕。",
        courses: [
          "运筹学：确定性模型",
          "运筹学：随机性模型",
          "计算文本分析",
          "强化学习",
          "多元统计分析",
          "智能体建模与仿真",
        ],
        focus:
          "持续探索 Agent 的决策、协作与模拟机制，以及它们如何进入真实产品与研发流程。相关研究仍在进行中。",
      },
      {
        period: "2021.09 — 2025.06",
        dateTime: "2021-09/2025-06",
        stage: "本科",
        city: "成都",
        school: "西南财经大学",
        schoolEn: "SOUTHWESTERN UNIVERSITY OF FINANCE AND ECONOMICS",
        college: "管理科学与工程学院",
        degree: "大数据管理与应用 · 学士",
        summary:
          "在统计、编程与管理决策之间建立跨学科基础，也通过研究与竞赛第一次把模型用于解释真实世界的问题。",
        courses: [
          "机器学习与数据挖掘",
          "统计学",
          "Python 程序设计",
          "数据库原理与应用",
          "管理决策模型与方法",
          "数据智能前沿",
        ],
        honors: [
          "本科生国家奖学金",
          "四川省优秀毕业生",
          "感恩科学家奖学金",
          "校级三好学生",
        ],
        competitions: [
          {
            year: "2024",
            name: "全国市场调查与分析大赛",
            result: "四川省一等奖",
          },
          {
            year: "2023",
            name: "全国企业竞争模拟大赛",
            result: "全国三等奖",
          },
        ],
      },
    ],
  },
  currentFocus: {
    eyebrow: "02 / NOW",
    heading: ["专注 AI Native 的", "AI 产品经理与独立开发者"],
    body:
      "在上海交通大学攻读管理科学与工程硕士，我正在学习强化学习、智能体建模与仿真。从产品、智能体到独立开发，我持续探索如何和 AI 一起，把好奇心慢慢变成真实世界里的作品。",
  },
  explorations: {
    eyebrow: "03 / SELECTED EXPLORATIONS",
    heading: ["探索不是答案，", "是我留下的路径。"],
    projects: [
      {
        index: "01",
        type: "移动应用 · 独立开发",
        period: "2026",
        title: "Sprout / 芽",
        lede:
          "把长期目标、日常任务与情绪记录，变成一株会慢慢生长的植物。",
        description:
          "我从用户研究与多轮 PRD 出发，用 AI 辅助工具完成产品设计、实现与迭代，跑通从问题定义到可用产品的独立开发闭环。它不只关注完成了多少，也关心一个人如何温和地继续前进。",
        link: {
          href: "https://github.com/azhan12138/sprout-app-clean",
          label: "查看 Sprout GitHub",
        },
        images: [
          {
            src: "assets/sprout-habitat.jpg",
            alt: "Sprout 栖息地页面",
            width: 540,
            height: 1200,
          },
          {
            src: "assets/sprout-labor.jpg",
            alt: "Sprout 劳作页面",
            width: 540,
            height: 1200,
          },
          {
            src: "assets/sprout-review.jpg",
            alt: "Sprout 回顾页面",
            width: 540,
            height: 1200,
          },
        ],
      },
      {
        index: "02",
        type: "桌面智能体 · 开源实验",
        period: "2026",
        title: "SoulCompanion",
        lede: "一个拥有记忆、情绪状态与主动关怀能力的桌面 AI 小伙伴。",
        description:
          "我在这个项目里持续探索：当 Agent 不只回答问题，而是能记住、理解并在合适的时候主动出现，人与 AI 的关系会发生什么变化。",
        link: {
          href: "https://github.com/azhan12138/SoulCompanion",
          label: "查看 SoulCompanion GitHub",
        },
        images: [
          {
            src: "assets/soul-chat.png",
            alt: "SoulCompanion 对话界面",
            width: 894,
            height: 507,
          },
        ],
      },
      {
        index: "03",
        type: "AI 视觉识别 · 进行中",
        period: "NOW",
        title: "真实世界的视觉识别实验",
        lede:
          "让 Spec、Agent 实现、独立评估与真实数据验证形成可恢复的研发闭环。",
        description:
          "项目仍在进行中。出于隐私与数据安全考虑，仅公开研究方向与方法，不展示业务数据和内部实现。",
        process: ["Context", "Spec", "Implement", "Evaluate"],
      },
    ],
  },
  journey: {
    eyebrow: "04 / JOURNEY",
    heading: ["一路走来，问题在变，", "好奇心没有。"],
    milestones: [
      {
        year: "2021",
        dateTime: "2021",
        title: "从数据与管理出发",
        description:
          "进入西南财经大学，建立统计、建模、编程与商业分析基础。",
      },
      {
        year: "2023",
        dateTime: "2023",
        title: "用模型理解真实问题",
        description:
          "在研究、竞赛与团队协作中，学习把复杂问题转化为可分析、可行动的结构。",
      },
      {
        year: "2024",
        dateTime: "2024",
        title: "从分析走向业务决策",
        description:
          "进入真实业务场景，开始用数据支持资源分配、运营判断与跨团队协作。",
      },
      {
        year: "2025",
        dateTime: "2025",
        title: "开始做 AI 产品",
        description:
          "在源氏木语参与 AI 售后辅助、模拟对练与客服数据洞察产品，学习让智能体进入真实工作流。",
      },
      {
        year: "2025—",
        dateTime: "2025",
        title: "研究智能体，也亲手创造",
        description:
          "进入上海交通大学攻读硕士，持续接触强化学习、智能体建模与仿真，也把研究问题带回产品实践。",
      },
      {
        year: "现在",
        dateTime: "2026",
        title: "成为独立开发者",
        description:
          "把个人产品与 AI Native 研发方式，当作一场长期、公开但克制的实验。",
      },
    ],
  },
  contact: {
    eyebrow: "05 / KEEP IN TOUCH",
    heading: ["如果你也在想 AI 与人", "还能怎样一起创造，", "欢迎来聊聊。"],
    email: "18702530496@163.com",
    github: {
      label: "GitHub / azhan12138",
      href: "https://github.com/azhan12138",
    },
  },
};
