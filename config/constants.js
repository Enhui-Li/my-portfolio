export const GLOBAL = {
  container: "w-full max-w-screen-1xl mx-auto px-12 md:px-16 lg:px-20 py-5",
  sectionPadding: "py-20",
  headerPadding: "pt-20",
};

export const SIZES = {
  h1: "text-6xl md:text-8xl lg:text-9xl",
  h2: "text-5xl md:text-6xl",
  h3: "text-3xl md:text-4xl",
  body: "text-xl md:text-2xl",
  small: "text-lg md:text-xl",
};

export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const SOCIAL_LINKS = [
  { icon: "fab fa-github", url: "https://github.com/Enhui-Li" },
  { icon: "fab fa-linkedin", url: "https://www.linkedin.com/in/enhui-li-7b2222347/" },
];

export const PROJECTS = [
  {
    title: "Big Data Analysis – Competitive Tetris",
    img: "/tetris.png",
    desc: "Led frequent itemset & association rule mining (Apriori) on 10k+ game records, identifying skill clusters. Used Python (Pandas) and Weka.",
    skills: ["Python", "Weka", "Data Mining"],
    github: "https://github.com/Enhui-Li/tetris-big-data-analysis",
  },
  {
    title: "Petroleum Price Forecasting (SEML 2023)",
    img: "/petroleum_report.png",
    desc: "Co‑developed linear regression & random forest models for global oil price prediction. Paper published in CONF‑SEML 2023.",
    skills: ["Scikit-learn", "Pandas", "Random Forest"],
    github: "https://github.com/Enhui-Li/petroleum-price-forecasting",
  },
  {
    title: "Car Price Prediction Pipeline",
    img: "/petroleum.png",
    desc: "Object‑oriented Python pipeline for car price prediction via linear regression (Oxford University project‑based course).",
    skills: ["Python", "OOP", "Linear Regression"],
    github: "https://github.com/Enhui-Li/car-price-prediction-pipeline",
  },
];

export const EXPERIENCE = [
  {
    title: "Software Engineer Intern",
    company: "Shenzhou Digital Rongxin Software Co., Ltd.",
    date: "Dec 2025 – Jan 2026",
    desc: "Contributed to Heilongjiang Rural Credit Union's microservices platform: data mapping, protocol conversion, loan interfaces.",
    skills: ["Java", "Microservices", "SQL"],
    pdf: "/shenzhou.pdf",
  },
  {
    title: "Software Engineer Intern",
    company: "Harbin FeiJie Technology Co., Ltd.",
    date: "Jan 2024 – Feb 2024",
    desc: "Developed and maintained ATMP transaction system (C, UE/ACIDE tools, WinSQL). Full workflow: message parsing, banking communication.",
    skills: ["C", "Banking systems", "Unix"],
    pdf: "/FeiJie.pdf",
  },
];

export const SKILLS = [
  { name: "HTML/CSS", percent: 85 },
  { name: "JavaScript", percent: 75 },
  { name: "Python", percent: 70 },
  { name: "Java", percent: 70 },
  { name: "SQL", percent: 65 },
  { name: "C / C++", percent: 65 },
  { name: "Linux/Unix", percent: 60 },
];