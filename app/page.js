'use client';

import { useEffect, useState, useCallback } from 'react';

export default function Home() {
  const GLOBAL = {
  // was "w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8"
  container: "w-full max-w-screen-1xl mx-auto px-12 md:px-16 lg:px-50 py-5",
  // w-full max-w-screen-1xl mx-auto px-12 md:px-16 lg:px-50 py-5 flex items-center justify-between
  //container: "w-full max-w-none mx-auto px-4 md:px-6 lg:px-8",
  sectionPadding: "py-20",
  headerPadding: "pt-20",
};

  const SIZES = {
    h1: "text-6xl md:text-8xl lg:text-9xl",
    h2: "text-3xl lg:text-6xl",
    h3: "text-2xl lg:text-5xl",
    body: "text-lg md:text-4xl",
    small: "text-lg md:text-3xl", // Increased from text-base md:text-lg
    // Add new size for footer if needed
    footer: "text-lg md:text-xl", // New constant for footer text
  };

  const [loadingPercent, setLoadingPercent] = useState(0);
  const [loadingDone, setLoadingDone] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Loading animation
  useEffect(() => {
    let percent = 0;
    const interval = setInterval(() => {
      percent += Math.floor(Math.random() * 10) + 5;
      if (percent > 100) percent = 100;
      setLoadingPercent(percent);
      if (percent === 100) {
        clearInterval(interval);
        setTimeout(() => setLoadingDone(true), 500);
      }
    }, 150);
    return () => clearInterval(interval);
  }, []);

  // Scroll nav highlight
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = 'home';
      sections.forEach((section) => {
        const top = section.offsetTop - 150;
        if (window.scrollY >= top) {
          current = section.getAttribute('id');
        }
      });
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Resume download
  const downloadResume = useCallback(() => {
    const a = document.createElement('a');
    a.href = '/CV_.pdf';
    a.download = 'Enhui_Li_Resume.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      {!loadingDone && (
        <div className="loading-screen fixed inset-0 bg-black z-[9999] flex flex-col items-center justify-center">
          <div className="text-center w-full max-w-3xl px-4">
            {/* 更大的 Code 图标 */}
            <div className="relative mb-10">
              <i className="fas fa-code text-9xl text-emerald-500"></i>
              <div className="absolute -top-4 -right-8 bg-emerald-500 text-black text-2xl font-bold px-4 py-2 rounded">ENG</div>
            </div>

            {/* 更大更粗的进度条 */}
            <div className="progress-bar mx-auto mb-6 w-full max-w-3xl h-8">
              <div className="progress-fill h-full bg-emerald-500" style={{ width: `${loadingPercent}%` }}></div>
            </div>

            {/* 更大的百分比文字 */}
            <div className="flex items-center justify-center text-emerald-400 font-mono text-5xl mb-4">
              <i className="fas fa-terminal mr-4"></i> {loadingPercent}%
            </div>

            {/* 更大的命令行文字 */}
            <div className="mt-6 font-mono text-gray-400 text-3xl">&gt; import &#123; Enhui &#125; from './engineer'</div>
          </div>

          {/* 更大的底部版权 */}
          <div className="absolute bottom-12 text-gray-400 font-mono text-2xl">© 2026 Enhui Li</div>
        </div>
      )}

      {loadingDone && (
        <>
          <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
            <div className={"w-full max-w-screen-1xl mx-auto px-12 md:px-16 lg:px-50 py-5 flex items-center justify-between"}>
              <a href="#home" className="flex items-center space-x-2" onClick={closeMobileMenu}>
                <i className="fas fa-code text-emerald-500 text-5xl"></i>
                <span className="font-bold text-5xl">
                  <span className="text-emerald-500">&lt;</span>Enhui<span className="text-emerald-500">/&gt;</span>
                </span>
              </a>

              <nav className="hidden md:flex items-center space-x-12">
                {[['home','Home'],['about','About'],['skills','Skills'],['projects','Projects'],['experience','Experience'],['contact','Contact']].map(([id, label]) => (
                  <a key={id} href={`#${id}`} className={`${SIZES.small} font-medium hover:text-emerald-500 ${activeSection===id ? 'text-emerald-500' : 'text-white'}`}>
                    {label}
                  </a>
                ))}

                {/* MUCH LARGER SOCIAL ICONS + MORE SPACING */}
                <div className="flex items-center space-x-10">
                  <a href="https://github.com/Enhui-Li" target="_blank"><i className="fab fa-github text-4xl text-gray-300 hover:text-emerald-500"></i></a>
                  <a href="https://www.linkedin.com/in/enhui-li-7b2222347/" target="_blank"><i className="fab fa-linkedin text-4xl text-gray-300 hover:text-emerald-500"></i></a>
                  <a href="https://instagram.com/lenhuili" target="_blank"><i className="fab fa-instagram text-4xl text-gray-300 hover:text-emerald-500"></i></a>
                  <a href="https://facebook.com/profile.php?id=61564896759056" target="_blank"><i className="fab fa-facebook text-4xl text-gray-300 hover:text-emerald-500"></i></a>
                </div>

                {/* MUCH BIGGER RESUME BUTTON + MORE LEFT SPACING */}
                <button onClick={downloadResume} className="ml-8 bg-emerald-500 hover:bg-emerald-600 text-black px-10 py-4 rounded-md text-3xl font-semibold">Resume</button>
              </nav>

              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white text-3xl">
                <i className="fas fa-bars"></i>
              </button>
            </div>

            {mobileMenuOpen && (
              <div className="md:hidden bg-black/95 backdrop-blur-md flex flex-col space-y-4 px-6 py-4 border-t border-gray-800">
                {['home','about','skills','projects','experience','contact'].map(id => (
                  <a key={id} href={`#${id}`} className="text-white text-xl" onClick={closeMobileMenu}>
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </a>
                ))}
                <div className="flex space-x-6 pt-2">
                  <a href="https://github.com/Enhui-Li" target="_blank"><i className="fab fa-github text-xl text-gray-300 hover:text-emerald-500"></i></a>
                  <a href="https://www.linkedin.com/in/enhui-li-7b2222347/" target="_blank"><i className="fab fa-linkedin text-xl text-gray-300 hover:text-emerald-500"></i></a>
                  <a href="https://www.instagram.com/lenhuili" target="_blank"><i className="fab fa-instagram text-xl text-gray-300 hover:text-emerald-500"></i></a>
                  <a href="https://www.facebook.com/profile.php?id=61564896759056" target="_blank"><i className="fab fa-facebook text-xl text-gray-300 hover:text-emerald-500"></i></a>
                </div>
                <button onClick={() => { downloadResume(); closeMobileMenu(); }} className="bg-emerald-500 text-black py-3 rounded-md text-xl font-semibold">Resume</button>
              </div>
            )}
          </header>

          <main className={GLOBAL.headerPadding}>
            {/* -------------------------------
            ✅ HOME: FULL CONTENT + MUCH LARGER FONTS + BIGGER BUTTONS + MORE SPACING
            ------------------------------- */}
            <section id="home" className={`min-h-screen ${GLOBAL.sectionPadding} flex items-center relative overflow-hidden`}>
              <div className={GLOBAL.container}>
                <div className="grid md:grid-cols-2 gap-100 items-center">
                  <div>
                    {/* ✅ 更大的标签：更宽、更大字体、更大内边距 */}
                    <div className="inline-flex items-center rounded-full bg-emerald-500/20 text-emerald-500 px-10 py-4 text-3xl border border-emerald-500/20 mb-8 backdrop-blur-sm">
                      <i className="fas fa-terminal mr-3"></i> Software Engineer · Open to Work
                    </div>
                    
                    <h1 className={`${SIZES.h1} font-bold mb-6`}>
                      Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-600">Enhui Li</span>
                    </h1>
                    
                    <div className="text-4xl text-gray-400 mb-8">
                      I build <span className="font-mono text-emerald-500">reliable, real‑world software</span>
                    </div>
                    
                    {/* ✅ 加宽容器 + 加大行距（leading-loose / leading-relaxed） */}
                    <p className={`${SIZES.body} text-gray-400 mb-12 max-w-6xl leading-relaxed`}>
                      I'm a Computer Science student at CityU Hong Kong with internship experience in enterprise
                      microservices and banking transaction systems. I've co‑authored a published ML paper and built
                      data pipelines for game analytics. I write clean, maintainable code and I'm ready to contribute to
                      production systems.
                    </p>
                    
                    {/* ✅ 超级大按钮：更宽、更大、字体更大 */}
                    <div className="flex gap-6 flex-wrap">
                      <a href="#projects" className="bg-emerald-500 hover:bg-emerald-600 text-black px-14 py-5 rounded-md text-3xl font-bold transition shadow-md hover:shadow-emerald-500/30">View My Work</a>
                      <a href="#contact" className="border border-emerald-500 text-emerald-500 hover:bg-emerald-500/10 px-14 py-5 rounded-md text-3xl font-bold transition">Contact Me</a>
                    </div>
                  </div>

                  {/* MUCH LARGER PROFILE PICTURE */}
                  <div className="relative hidden md:block flex justify-center">
                    <div className="relative w-full max-w-4xl">
                      <div className="rounded-2xl overflow-hidden border-6 border-emerald-500/30 shadow-2xl shadow-emerald-500/20">
                        <img src="/profile_.png" alt="Profile" className="w-full object-cover" />
                      </div>
                      {/* ✅ EVEN BIGGER FONT + BIGGER BOXES AROUND PROFILE PICTURE */}
                      <div className="absolute -top-8 -right-8 bg-gray-900/90 backdrop-blur p-6 rounded-lg text-emerald-500 font-mono text-2xl font-bold border border-emerald-500/40">Microservices</div>
                      <div className="absolute top-28 -left-8 bg-gray-900/90 backdrop-blur p-6 rounded-lg text-emerald-500 font-mono text-2xl font-bold border border-emerald-500/40">Banking Systems</div>
                      <div className="absolute bottom-28 -right-6 bg-gray-900/90 backdrop-blur p-6 rounded-lg text-emerald-500 font-mono text-2xl font-bold border border-emerald-500/40">ML / Data</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <i className="fas fa-arrow-down text-emerald-500 text-xl"></i>
              </div>
            </section>

            {/* -------------------------------
            ✅ ABOUT: BALANCED + CENTERED (PIC + TEXT CLOSE TOGETHER)
            ------------------------------- */}
            <section id="about" className={`${GLOBAL.sectionPadding} bg-black/50`}>
              <div className={GLOBAL.container}>
                <div className="text-center mb-12">
                  <h2 className={`${SIZES.h2} font-bold`}>About <span className="text-emerald-500">Me</span></h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mt-2 rounded-full"></div>
                </div>
                {/* Same gap as home: gap-20 */}
                <div className="grid md:grid-cols-2 gap-20 items-center">
                  <div className="flex justify-center">
                    {/* LARGER ABOUT IMAGE (same scale as profile pic) */}
                    <div className="relative max-w-3xl">
                      <img src="/about_me.jpg" alt="About me" className="rounded-xl shadow-2xl border-6 border-emerald-500/30 w-full" />
                    </div>
                  </div>
                  <div>
                    <h3 className={`${SIZES.h3} font-bold mb-6`}><span className="text-emerald-500">&lt;</span> Software Engineer <span className="text-emerald-500">/&gt;</span></h3>
                    {/* WIDER CONTAINER + MORE LINE SPACING + BIGGER TEXT */}
                    <p className={`${SIZES.body} text-gray-400 mb-12 max-w-6xl leading-relaxed`}>
                      I'm a software engineer with hands‑on experience in enterprise microservices (Heilongjiang Rural
                      Credit Union) and banking ATMP systems (C, UE/ACIDE, WinSQL). I've also led a big data Tetris
                      analytics project and co‑authored a petroleum price forecasting paper (CONF‑SEML 2023). I'm
                      comfortable across the stack: Java, Python, JavaScript, SQL, and Linux/Unix. I'm looking for
                      software engineering roles where I can build practical, scalable solutions.
                    </p>
                    {/* BIGGER INFO BOXES */}
                    <div className="grid grid-cols-2 gap-4 text-2xl font-mono mb-8">
                      <div className="bg-gray-900 p-4 rounded-lg border border-gray-800"><span className="text-emerald-500">const</span> <span className="text-purple-400">name</span> = <span className="text-yellow-300">'Enhui Li'</span>;</div>
                      <div className="bg-gray-900 p-4 rounded-lg border border-gray-800"><span className="text-emerald-500">const</span> <span className="text-purple-400">location</span> = <span className="text-yellow-300">'Hong Kong'</span>;</div>
                      <div className="bg-gray-900 p-4 rounded-lg border border-gray-800"><span className="text-emerald-500">const</span> <span className="text-purple-400">email</span> = <span className="text-yellow-300">'enhuili826@gmail.com'</span>;</div>
                      <div className="bg-gray-900 p-4 rounded-lg border border-gray-800"><span className="text-emerald-500">const</span> <span className="text-purple-400">status</span> = <span className="text-yellow-300">'Open for work'</span>;</div>
                    </div>
                    {/* MATCHING BIG DOWNLOAD BUTTON (same as home page buttons) */}
                    <div className="mt-6">
                      <button onClick={downloadResume} className="bg-emerald-500 hover:bg-emerald-600 text-black px-14 py-5 rounded-md text-3xl font-bold transition shadow-md hover:shadow-emerald-500/30">
                        Download Resume
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* -------------------------------
            ✅ SKILLS: FINAL SPACING ADJUSTED VERSION
            ------------------------------- */}
            <section id="skills" className={`${GLOBAL.sectionPadding} bg-gradient-to-b from-black to-gray-900`}>
              <div className={GLOBAL.container}>
                <div className="text-center mb-12">
                  <h2 className={`${SIZES.h2} font-bold`}>My <span className="text-emerald-500">Skills</span></h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mt-2 rounded-full mb-4"></div>
                  <p className="text-3xl text-gray-400 max-w-6xl mx-auto leading-relaxed">
                    I've worked with a variety of technologies across web, backend, data, and enterprise systems. Here's a snapshot of my technical toolkit — from core languages to key concepts I apply daily.
                  </p>
                </div>
                <div className="grid md:grid-cols-12 gap-8">
                  <div className="md:col-span-5">
                    {/* INCREASED inner padding for left box */}
                    <div className="bg-gray-900/80 backdrop-blur-sm p-10 rounded-lg border border-gray-800 h-full">
                      <h3 className={`${SIZES.h3} font-bold flex items-center gap-2 mb-10`}><i className="fas fa-chart-line text-emerald-500"></i> Technical Proficiency</h3>
                      <div className="space-y-8">
                        {[
                          { label: 'HTML/CSS', pct: 85 },
                          { label: 'JavaScript', pct: 75 },
                          { label: 'Python', pct: 70 },
                          { label: 'Java', pct: 70 },
                          { label: 'SQL', pct: 65 },
                          { label: 'C / C++', pct: 65 },
                          { label: 'Linux/Unix', pct: 60 },
                        ].map((skill) => (
                          <div key={skill.label}>
                            <div className="flex justify-between mb-3">
                              <span className={SIZES.body}>{skill.label}</span>
                              <span className={`${SIZES.body} text-emerald-500`}>{skill.pct}%</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-4">
                              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-full rounded-full" style={{width:`${skill.pct}%`}}></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-7 space-y-8">
                    {/* INCREASED inner padding for right boxes + MORE space below title */}
                    <div className="bg-gray-900/80 backdrop-blur-sm p-10 rounded-lg border border-gray-800">
                      <h3 className={`${SIZES.h3} font-bold flex items-center gap-2 mb-10`}><i className="fas fa-tools text-emerald-500"></i> Languages & Tools</h3>
                      
                      <div className="mb-8">
                        <h4 className="text-3xl font-bold text-emerald-400 mb-4">Programming Languages</h4>
                        <div className="flex flex-wrap gap-4">
                          {['Python','C','C++','JavaScript','Node.js','Java','HTML','CSS','R','Unix','Linux'].map(l => 
                            <span key={l} className="bg-gray-800 px-6 py-3 rounded-full text-xl font-bold border border-gray-700">{l}</span>
                          )}
                        </div>
                      </div>

                      <div className="mb-8">
                        <h4 className="text-3xl font-bold text-emerald-400 mb-4">Development Tools</h4>
                        <div className="flex flex-wrap gap-4">
                          {['BlueJ','Visual Paradigm','Eclipse','WinSQL','Logisim'].map(t => 
                            <span key={t} className="bg-gray-800 px-6 py-3 rounded-full text-xl font-bold border border-gray-700">{t}</span>
                          )}
                        </div>
                      </div>

                      <div className="mb-8">
                        <h4 className="text-3xl font-bold text-emerald-400 mb-4">Data/Analysis Tools</h4>
                        <div className="flex flex-wrap gap-4">
                          {['TensorFlow','Gephi','Tanagra','Octave','Weka','Log Analysis Tools'].map(t => 
                            <span key={t} className="bg-gray-800 px-6 py-3 rounded-full text-xl font-bold border border-gray-700">{t}</span>
                          )}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-3xl font-bold text-emerald-400 mb-4">Banking/Enterprise Systems</h4>
                        <div className="flex flex-wrap gap-4">
                          {['Service Governance Platforms','ATMP/UE/ACIDE','Protocol Conversion'].map(i => 
                            <span key={i} className="bg-gray-800 px-6 py-3 rounded-full text-xl font-bold border border-gray-700">{i}</span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-900/80 backdrop-blur-sm p-10 rounded-lg border border-gray-800">
                      <h3 className={`${SIZES.h3} font-bold flex items-center gap-2 mb-10`}><i className="fas fa-brain text-emerald-500"></i> Key Concepts</h3>
                      
                      <div className="mb-8">
                        <h4 className="text-3xl font-bold text-emerald-400 mb-4">Software Engineering</h4>
                        <div className="flex flex-wrap gap-4">
                          {['Microservices','OOP','Design Patterns','Graph Algorithms','Advanced Sorting','Socket Programming'].map(c => 
                            <span key={c} className="bg-gray-800 px-6 py-3 rounded-full text-xl font-bold border border-gray-700">{c}</span>
                          )}
                        </div>
                      </div>

                      <div className="mb-8">
                        <h4 className="text-3xl font-bold text-emerald-400 mb-4">Database</h4>
                        <div className="flex flex-wrap gap-4">
                          {['SQL','Normalization','Data Mapping','Data Preprocessing'].map(i => 
                            <span key={i} className="bg-gray-800 px-6 py-3 rounded-full text-xl font-bold border border-gray-700">{i}</span>
                          )}
                        </div>
                      </div>

                      <div className="mb-8">
                        <h4 className="text-3xl font-bold text-emerald-400 mb-4">Data Science</h4>
                        <div className="flex flex-wrap gap-4">
                          {['Regression','Random Forest','Statistical Modeling'].map(i => 
                            <span key={i} className="bg-gray-800 px-6 py-3 rounded-full text-xl font-bold border border-gray-700">{i}</span>
                          )}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-3xl font-bold text-emerald-400 mb-4">Systems & Networking</h4>
                        <div className="flex flex-wrap gap-4">
                          {['Memory/Process Management','TCP/IP','HTTP(S)','Protocol Conversion'].map(i => 
                            <span key={i} className="bg-gray-800 px-6 py-3 rounded-full text-xl font-bold border border-gray-700">{i}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* -------------------------------
            ✅ PROJECTS: FIXED CARD HEIGHT + SKILLS FIXED TO BOTTOM
            ------------------------------- */}
            <section id="projects" className={`${GLOBAL.sectionPadding} bg-black`}>
              <div className={GLOBAL.container}>
                <div className="text-center mb-12">
                  <h2 className={`${SIZES.h2} font-bold`}>My <span className="text-emerald-500">Projects</span></h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mt-2 rounded-full mb-4"></div>
                  <p className="text-3xl text-gray-400 max-w-6xl mx-auto leading-relaxed">
                    Here's a selection of my work – from data analytics to machine learning research. Each project reflects a mix of curiosity, technical depth, and real‑world problem solving.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* PROJECT 1 */}
                  <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 transition-all duration-300 relative group h-[850px] flex flex-col">
                    <div className="relative overflow-hidden flex-shrink-0">
                      <img src="/tetris.png" alt="Tetris project" className="w-full h-80 object-cover" />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                        <a target="_blank" className="bg-emerald-500 hover:bg-emerald-600 text-black rounded-full p-4 transform scale-90 group-hover:scale-100 transition-all duration-200 shadow-lg"><i className="fab fa-github text-xl"></i></a>
                      </div>
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                      <h3 className={`${SIZES.h3} font-bold mb-4`}>Big Data Analysis – Competitive Tetris</h3>
                      <p className={`${SIZES.body} text-gray-400 leading-relaxed mb-auto`}>Led frequent itemset & association rule mining (Apriori) on 10k+ game records, identifying skill clusters. Used Python (Pandas) and Weka.</p>
                      
                      {/* SKILLS FIXED AT BOTTOM */}
                      <div className="mt-8 flex flex-wrap gap-3">
                        <span className="bg-gray-800 text-emerald-300 text-2xl font-bold px-6 py-3 rounded-lg">Python</span>
                        <span className="bg-gray-800 text-emerald-300 text-2xl font-bold px-6 py-3 rounded-lg">Weka</span>
                        <span className="bg-gray-800 text-emerald-300 text-2xl font-bold px-6 py-3 rounded-lg">Data Mining</span>
                      </div>
                    </div>
                  </div>

                  {/* PROJECT 2 */}
                  <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 transition-all duration-300 relative group h-[850px] flex flex-col">
                    <div className="relative overflow-hidden flex-shrink-0">
                      <img src="/petroleum_report.png" alt="ML publication" className="w-full h-80 object-cover" />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                        <a target="_blank" className="bg-emerald-500 hover:bg-emerald-600 text-black rounded-full p-4 transform scale-90 group-hover:scale-100 transition-all duration-200 shadow-lg"><i className="fab fa-github text-xl"></i></a>
                      </div>
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                      <h3 className={`${SIZES.h3} font-bold mb-4`}>Petroleum Price Forecasting (SEML 2023)</h3>
                      <p className={`${SIZES.body} text-gray-400 leading-relaxed mb-auto`}>Co‑developed linear regression & random forest models for global oil price prediction. Paper published in CONF‑SEML 2023.</p>
                      
                      {/* SKILLS FIXED AT BOTTOM */}
                      <div className="mt-8 flex flex-wrap gap-3">
                        <span className="bg-gray-800 text-emerald-300 text-2xl font-bold px-6 py-3 rounded-lg">Scikit-learn</span>
                        <span className="bg-gray-800 text-emerald-300 text-2xl font-bold px-6 py-3 rounded-lg">Pandas</span>
                        <span className="bg-gray-800 text-emerald-300 text-2xl font-bold px-6 py-3 rounded-lg">Random Forest</span>
                      </div>
                    </div>
                  </div>

                  {/* PROJECT 3 */}
                  <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 transition-all duration-300 relative group h-[850px] flex flex-col">
                    <div className="relative overflow-hidden flex-shrink-0">
                      <img src="/petroleum.png" alt="Car price pipeline" className="w-full h-80 object-cover" />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                        <a target="_blank" className="bg-emerald-500 hover:bg-emerald-600 text-black rounded-full p-4 transform scale-90 group-hover:scale-100 transition-all duration-200 shadow-lg"><i className="fab fa-github text-xl"></i></a>
                      </div>
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                      <h3 className={`${SIZES.h3} font-bold mb-4`}>Car Price Prediction Pipeline</h3>
                      <p className={`${SIZES.body} text-gray-400 leading-relaxed mb-auto`}>Object‑oriented Python pipeline for car price prediction via linear regression (Oxford University project‑based course).</p>
                      
                      {/* SKILLS FIXED AT BOTTOM */}
                      <div className="mt-8 flex flex-wrap gap-3">
                        <span className="bg-gray-800 text-emerald-300 text-2xl font-bold px-6 py-3 rounded-lg">Python</span>
                        <span className="bg-gray-800 text-emerald-300 text-2xl font-bold px-6 py-3 rounded-lg">OOP</span>
                        <span className="bg-gray-800 text-emerald-300 text-2xl font-bold px-6 py-3 rounded-lg">Linear Regression</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* -------------------------------
            ✅ EXPERIENCE & EDUCATION: FULLY UPGRADED
            ------------------------------- */}
            <section id="experience" className={`${GLOBAL.sectionPadding} bg-gradient-to-b from-gray-900 to-black`}>
              <div className={GLOBAL.container}>
                <div className="text-center mb-12">
                  <h2 className={`${SIZES.h2} font-bold`}>Experience & <span className="text-emerald-500">Education</span></h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mt-2 rounded-full mb-4"></div>
                  {/* ✅ WIDER DESCRIPTION (MATCH ALL OTHER SECTIONS) */}
                  <p className="text-3xl text-gray-400 max-w-6xl mx-auto leading-relaxed">
                    A look at the internships and academic path that built my foundation in software engineering – from microservices to banking systems and beyond.
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                  {/* WORK EXPERIENCE */}
                  <div>
                    {/* ✅ MORE SPACE BELOW TITLE */}
                    <div className="flex items-center gap-2 mb-10">
                      <i className="fas fa-briefcase text-emerald-500 text-2xl"></i>
                      <h3 className={`${SIZES.h3} font-bold`}>Work Experience</h3>
                    </div>

                    <div className="space-y-12 relative border-l-2 border-emerald-500/30 pl-6 ml-4">
                      <div>
                        <div className="absolute -left-3 w-3 h-3 bg-emerald-500 rounded-full"></div>
                        <h4 className="text-4xl font-bold mb-2">Software Engineer Intern</h4>
                        
                        {/* ✅ BIGGER COMPANY & DATE FONT */}
                        <p className="text-emerald-400 text-2xl font-bold mb-4">
                          Shenzhou Digital Rongxin Software Co., Ltd. | Beijing, China | Dec 2025 – Jan 2026
                        </p>
                        
                        {/* ✅ SMALLER DESCRIPTION + LOOSER LINE SPACING */}
                        <p className="text-3xl text-gray-400 leading-relaxed mb-6">
                          Contributed to Heilongjiang Rural Credit Union's microservices platform: data mapping, protocol conversion, and online loan transaction interfaces (disbursement, repayment). Cross‑system debugging & log analysis.
                        </p>
                        
                        {/* ✅ MUCH LARGER SKILL TAGS */}
                        <div className="flex flex-wrap gap-3">
                          <span className="bg-gray-800 text-xl font-bold px-6 py-3 rounded-lg text-emerald-300">Java</span>
                          <span className="bg-gray-800 text-xl font-bold px-6 py-3 rounded-lg text-emerald-300">Microservices</span>
                          <span className="bg-gray-800 text-xl font-bold px-6 py-3 rounded-lg text-emerald-300">SQL</span>
                        </div>
                      </div>

                      <div>
                        <div className="absolute -left-3 w-3 h-3 bg-emerald-500 rounded-full"></div>
                        <h4 className="text-4xl font-bold mb-2">Software Engineer Intern</h4>
                        
                        {/* ✅ BIGGER COMPANY & DATE FONT */}
                        <p className="text-emerald-400 text-2xl font-bold mb-4">
                          Harbin FeiJie Technology Co., Ltd. | Harbin, China | Jan 2024 – Feb 2024
                        </p>
                        
                        {/* ✅ SMALLER DESCRIPTION + LOOSER LINE SPACING */}
                        <p className="text-3xl text-gray-400 leading-relaxed mb-6">
                          Developed and maintained ATMP transaction system (C, UE/ACIDE tools, WinSQL). Involved in full workflow: message parsing, core banking communication, performance optimization.
                        </p>
                        
                        {/* ✅ MUCH LARGER SKILL TAGS */}
                        <div className="flex flex-wrap gap-3">
                          <span className="bg-gray-800 text-xl font-bold px-6 py-3 rounded-lg text-emerald-300">C</span>
                          <span className="bg-gray-800 text-xl font-bold px-6 py-3 rounded-lg text-emerald-300">Banking systems</span>
                          <span className="bg-gray-800 text-xl font-bold px-6 py-3 rounded-lg text-emerald-300">Unix</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* EDUCATION */}
                  <div>
                    {/* ✅ MORE SPACE BELOW TITLE */}
                    <div className="flex items-center gap-2 mb-10">
                      <i className="fas fa-graduation-cap text-emerald-500 text-2xl"></i>
                      <h3 className={`${SIZES.h3} font-bold`}>Education</h3>
                    </div>

                    <div className="space-y-8">
                      <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
                        <div className="flex justify-between flex-wrap items-center mb-6">
                          <h4 className="text-4xl font-bold">BSc Computer Science</h4>
                          {/* ✅ BIGGER DATE FONT */}
                          <span className="text-emerald-400 text-2xl font-bold">Sep 2024 – June 2028 (Expected)</span>
                        </div>
                        
                        {/* ✅ BIGGER SCHOOL NAME */}
                        <p className="text-gray-300 text-xl font-semibold mb-4">City University of Hong Kong</p>
                        
                        {/* ✅ SMALLER DESCRIPTION + LOOSER LINE SPACING */}
                        <p className="text-3xl text-gray-400 leading-relaxed">
                          Full Tuition Scholarship, Dean's List (2024-25), CityU Tiger Talent Award. Tiger Ambassador, Excellence Committee Member. IELTS 8.0 (Listening 8.5, Reading 8.5).
                        </p>
                      </div>

                      <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
                        <div className="flex justify-between flex-wrap items-center mb-6">
                          <h4 className="text-4xl font-bold">High School (A‑Level)</h4>
                          {/* ✅ BIGGER DATE FONT */}
                          <span className="text-emerald-400 text-2xl font-bold">Sep 2021 – June 2024</span>
                        </div>
                        
                        {/* ✅ BIGGER SCHOOL NAME */}
                        <p className="text-gray-300 text-xl font-semibold mb-4">Harbin No.9 High School International Department</p>
                        
                        {/* ✅ SMALLER DESCRIPTION + LOOSER LINE SPACING */}
                        <p className="text-3xl text-gray-400 leading-relaxed">
                          4A* in Mathematics, Further Mathematics, Physics, Chemistry.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* -------------------------------
            ✅ CONTACT: FULLY UPGRADED
            ------------------------------- */}
            <section id="contact" className={`${GLOBAL.sectionPadding} bg-black`}>
              <div className={GLOBAL.container}>
                <div className="text-center mb-12">
                  <h2 className={`${SIZES.h2} font-bold`}>Get In <span className="text-emerald-500">Touch</span></h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mt-2 rounded-full mb-4"></div>
                  {/* ✅ WIDER DESCRIPTION (MATCH ALL OTHER SECTIONS) */}
                  <p className="text-3xl text-gray-400 max-w-6xl mx-auto leading-relaxed">
                    Have a project, an opportunity, or just want to chat? I'd love to hear from you. Reach out anytime.
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-10">
                  {/* LEFT CONTACT INFO */}
                  <div className="space-y-10">
                    {/* EMAIL */}
                    <div className="flex items-start gap-6">
                      <div className="bg-emerald-500/10 p-6 rounded-lg">
                        <i className="fas fa-envelope text-emerald-500 text-4xl"></i>
                      </div>
                      <div>
                        <h4 className="font-bold text-4xl mb-2">Email</h4>
                        <p className="text-3xl text-gray-400">enhuili826@gmail.com</p>
                      </div>
                    </div>

                    {/* PHONE */}
                    <div className="flex items-start gap-6">
                      <div className="bg-emerald-500/10 p-6 rounded-lg">
                        <i className="fas fa-phone-alt text-emerald-500 text-4xl"></i>
                      </div>
                      <div>
                        <h4 className="font-bold text-4xl mb-2">Phone</h4>
                        <p className="text-3xl text-gray-400">+852 5126 5936</p>
                      </div>
                    </div>

                    {/* LOCATION */}
                    <div className="flex items-start gap-6">
                      <div className="bg-emerald-500/10 p-6 rounded-lg">
                        <i className="fas fa-map-marker-alt text-emerald-500 text-4xl"></i>
                      </div>
                      <div>
                        <h4 className="font-bold text-4xl mb-2">Location</h4>
                        <p className="text-3xl text-gray-400">Ma On Shan, Hong Kong</p>
                      </div>
                    </div>

                    {/* SOCIAL ICONS */}
                    <div className="flex gap-5 pt-4">
                      <a href="https://github.com/Enhui-Li" target="_blank" className="bg-gray-800 hover:bg-emerald-500/20 p-6 rounded-lg transition">
                        <i className="fab fa-github text-emerald-500 text-5xl"></i>
                      </a>
                      <a href="https://www.linkedin.com/in/enhui-li-7b2222347/" target="_blank" className="bg-gray-800 hover:bg-emerald-500/20 p-6 rounded-lg transition">
                        <i className="fab fa-linkedin text-emerald-500 text-5xl"></i>
                      </a>
                      <a href="https://www.instagram.com/lenhuili" target="_blank" className="bg-gray-800 hover:bg-emerald-500/20 p-6 rounded-lg transition">
                        <i className="fab fa-instagram text-emerald-500 text-5xl"></i>
                      </a>
                      <a href="https://www.facebook.com/profile.php?id=61564896759056" target="_blank" className="bg-gray-800 hover:bg-emerald-500/20 p-6 rounded-lg transition">
                        <i className="fab fa-facebook text-emerald-500 text-5xl"></i>
                      </a>
                    </div>

                    {/* MAP: TALLER + LESS WIDE - NO BORDER */}
                    <div className="rounded-lg overflow-hidden mt-8">
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.439205608908!2d114.17014507556202!3d22.337039141562265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f10!3m3!1m2!1s0x3404073400f3ef35%3A0xeb61704ffb0ba959!2sCity%20University%20of%20Hong%20Kong%20(CityU)!5e0!3m2!1sen!2shk!4v1747827412027!5m2!1sen!2shk" 
                        width="90%" 
                        height="600" 
                        style={{border:0}} 
                        allowFullScreen 
                        loading="lazy"
                      ></iframe>
                    </div>
                  </div>

                  {/* RIGHT CONTACT FORM */}
                  <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg border border-gray-800 p-10 relative overflow-hidden">
                    <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-teal-600/20 blur-xl"></div>
                    <div className="relative z-10">
                      <h3 className={`${SIZES.h3} font-bold mb-8 text-center md:text-left`}>Send Me a Message</h3>

                      <form 
                        className="space-y-6"
                        onSubmit={(e) => {
                          e.preventDefault();

                          // 获取表单值
                          const name = e.target[0].value.trim();
                          const email = e.target[1].value.trim();
                          const subject = e.target[2].value.trim();
                          const message = e.target[3].value.trim();

                          // 验证不能为空
                          if (!name || !email || !subject || !message) {
                            alert("Please fill in ALL fields (Name, Email, Subject, Message) before sending.");
                            return;
                          }

                          // 拼接mailto真实发邮件
                          const mailtoLink = `mailto:enhuili826@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
                            `From: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
                          )}`;

                          // 打开邮件客户端发送
                          window.open(mailtoLink, "_blank");
                        }}
                      >
                        <div>
                          <input 
                            type="text" 
                            placeholder="Your Name" 
                            className="w-full bg-gray-800 border-gray-700 rounded-md px-6 py-4 text-white text-3xl focus:outline-none focus:ring-2 focus:ring-emerald-500" 
                          />
                        </div>
                        <div>
                          <input 
                            type="email" 
                            placeholder="Your Email" 
                            className="w-full bg-gray-800 border-gray-700 rounded-md px-6 py-4 text-white text-3xl focus:outline-none focus:ring-2 focus:ring-emerald-500" 
                          />
                        </div>
                        <div>
                          <input 
                            type="text" 
                            placeholder="Subject" 
                            className="w-full bg-gray-800 border-gray-700 rounded-md px-6 py-4 text-white text-3xl focus:outline-none focus:ring-2 focus:ring-emerald-500" 
                          />
                        </div>
                        <div>
                          <textarea 
                            rows="6" 
                            placeholder="Message" 
                            className="w-full bg-gray-800 border-gray-700 rounded-md px-6 py-4 text-white text-3xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                          ></textarea>
                        </div>
                        <button 
                          type="submit" 
                          className="bg-emerald-500 hover:bg-emerald-600 text-black font-bold py-4 px-6 rounded-md transition w-full shadow-md hover:shadow-emerald-500/30 text-3xl"
                        >
                          Send Message
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* FOOTER - FINAL ENHANCED VERSION */}
            <footer className="bg-gray-900 border-t border-gray-800">
              <div className={GLOBAL.container + " py-20 px-16 md:px-24 lg:px-28"}>
                <div className="grid md:grid-cols-4 gap-12">
                  <div className="md:col-span-2">
                    <a className="flex items-center space-x-2 mb-8" href="#home">
                      <i className="fas fa-code text-emerald-500 text-5xl"></i>
                      <span className="font-bold text-5xl">
                        <span className="text-emerald-500">&lt;</span>Enhui<span className="text-emerald-500">/&gt;</span>
                      </span>
                    </a>
                    {/* Wider container for description */}
                    <p className={`${SIZES.small} text-gray-400 mb-8 max-w-3xl`}>
                      A passionate software engineer specializing in creating exceptional digital experiences. Let's work together to bring your ideas to life.
                    </p>
                    <div className="flex space-x-8">
                      <a href="https://github.com/Enhui-Li" target="_blank" className="text-gray-400 hover:text-emerald-500 transition text-5xl"><i className="fab fa-github"></i></a>
                      <a href="https://www.linkedin.com/in/enhui-li-7b2222347/" target="_blank" className="text-gray-400 hover:text-emerald-500 transition text-5xl"><i className="fab fa-linkedin"></i></a>
                      <a href="https://www.instagram.com/lenhuili" target="_blank" className="text-gray-400 hover:text-emerald-500 transition text-5xl"><i className="fab fa-instagram"></i></a>
                      <a href="https://www.facebook.com/profile.php?id=61564896759056" target="_blank" className="text-gray-400 hover:text-emerald-500 transition text-5xl"><i className="fab fa-facebook"></i></a>
                    </div>
                  </div>

                  <div>
                    <h3 className={`text-4xl font-bold mb-8`}>Quick Links</h3>
                    <ul className="space-y-6">
                      <li><a className={`text-3xl text-gray-400 hover:text-emerald-500 transition`} href="#home">Home</a></li>
                      <li><a className={`text-3xl text-gray-400 hover:text-emerald-500 transition`} href="#about">About</a></li>
                      <li><a className={`text-3xl text-gray-400 hover:text-emerald-500 transition`} href="#skills">Skills</a></li>
                      <li><a className={`text-3xl text-gray-400 hover:text-emerald-500 transition`} href="#projects">Projects</a></li>
                      <li><a className={`text-3xl text-gray-400 hover:text-emerald-500 transition`} href="#experience">Experience</a></li>
                      <li><a className={`text-3xl text-gray-400 hover:text-emerald-500 transition`} href="#contact">Contact</a></li>
                    </ul>
                  </div>

                  <div>
                    <h3 className={`text-4xl font-bold mb-8`}>Contact Info</h3>
                    <ul className="space-y-6">
                      <li className="flex items-center text-gray-400">
                        <i className="fas fa-envelope text-emerald-500 text-3xl mr-4"></i>
                        <span className={`text-3xl`}>enhuili826@gmail.com</span>
                      </li>
                      <li className="flex items-center text-gray-400">
                        <i className="fas fa-map-marker-alt text-emerald-500 text-3xl mr-4"></i>
                        <span className={`text-3xl`}>Hong Kong</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="border-t border-gray-800 mt-20 pt-10 flex flex-col md:flex-row justify-between items-center">
                  <p className={`text-3xl text-gray-400 mb-4 md:mb-0`}>© 2026 Enhui Li. All rights reserved.</p>
                  <button onClick={() => window.scrollTo({top:0,behavior:'smooth'})} className="scroll-to-top inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-black transition text-2xl">
                    <i className="fas fa-arrow-up"></i>
                  </button>
                </div>
              </div>
            </footer>
          </main>
        </>
      )}
    </>
  );
}