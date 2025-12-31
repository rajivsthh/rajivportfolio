import React, { useEffect, useState } from "react";
import "./App.css";
import posts from "./data/posts";

const App: React.FC = () => {
  const [active, setActive] = useState<string>("about");
  const [selectedPost, setSelectedPost] = useState<string | null>(null);
  const [onlySection, setOnlySection] = useState<string | null>(null);

  useEffect(() => {
    const ids = ["about", "contributions", "skills", "projects", "blog", "contact"];
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting) {
            setActive(id);
            entry.target.classList.add("in-view");
          } else {
            entry.target.classList.remove("in-view");
          }
        });
      },
      { root: null, rootMargin: "0px 0px -55% 0px", threshold: 0.12 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // when onlySection changes, toggle a root class so CSS can hide/show sections
  useEffect(() => {
    const root = document.querySelector('.app-root');
    if (!root) return;
    if (onlySection) root.classList.add('only-show');
    else root.classList.remove('only-show');
    // focus the section for keyboard users
    if (onlySection) {
      const el = document.getElementById(onlySection);
      if (el) el.focus();
    }
  }, [onlySection]);

  return (
    <div className="app-root">
      <header className="hero">
        <div className="container hero-row">
          <div className="hero-left">
            <h1 className="name">Rajiv Shrestha</h1>
            <p className="tagline">Learning. Breaking. Securing.</p>
            <p className="tag">Nepal • Cybersecurity • Penetration Testing • Cloud Security</p>
            <p className="lead">I focus on practical security: web app hardening, penetration testing fundamentals, and cloud security concepts. I build, test, and iterate — learning every step of the way.</p>
          </div>

          <nav className="site-nav" aria-label="Main navigation">
            <ul className="nav-list">
              <li>
                <a href="#about" className={active === "about" ? "active" : ""}>About</a>
              </li>
              <li>
                <a
                  href="#contributions"
                  className={active === "contributions" ? "active" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    setOnlySection("contributions");
                    const el = document.getElementById("contributions");
                    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                >
                  Contributions
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className={active === "skills" ? "active" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    // show only skills section
                    setOnlySection("skills");
                    const el = document.getElementById("skills");
                    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                >
                  Skills
                </a>
              </li>
              <li>
                  <a href="#projects" className={active === "projects" ? "active" : ""}>Projects</a>
                </li>
                <li>
                  <a href="#blog" className={active === "blog" ? "active" : ""}>Blog</a>
                </li>
              {/* Goals removed — intentionally omitted from nav */}
              <li>
                <a href="#contact" className={active === "contact" ? "active" : ""}>Contact</a>
              </li>
            </ul>
          </nav>

          <div className="header-actions">
            <a className="btn" href="mailto:rajivsth0713@gmail.com">Email</a>
            <button
              className="btn ghost"
              onClick={(e) => {
                e.preventDefault();
                // show only the resume section (no download)
                setOnlySection("resume");
                const el = document.getElementById("resume");
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              aria-label="Open Rajiv Shrestha resume (view)"
            >
              Resume
            </button>
          </div>
        </div>
      </header>

      <main className="container main">
        <section id="about" className="about fade-up section">
          <h2 className="section-title">About Me</h2>
          <p className="lead">I started with web development and gradually moved into cybersecurity after realizing how critical secure systems are. I'm a 2nd-year Computer Science student at KIST College. My work focuses on practical learning: building small tools, participating in CTFs, and contributing to open documentation. I approach security with curiosity and persistence — aiming to become a confident penetration tester and cloud security practitioner.</p>
        </section>

  <section id="contributions" className="contributions fade-up section">
          <h2 className="section-title">Contributions</h2>
          <div className="contrib-list">
            <article className="card">
              <h3>SAFE-MCP — Documentation Contributor</h3>
              <p className="muted">I contribute to SAFE‑MCP by organizing and clarifying attacker technique documentation, turning research into practical, actionable writeups. My work includes maintaining SAFE‑T1006 and SAFE‑T1912 writeups, improving detection guidance, and curating mitigation notes that teams can apply in detection and response workflows.</p>
              <p className="muted">Repository: <a href="https://github.com/rajivsthh/safemcp" target="_blank" rel="noopener noreferrer">github.com/rajivsthh/safemcp</a></p>
            </article>

            <article className="card">
              <h3>100x Hackathon — Participant</h3>
              <p className="muted">Participated in rapid-prototype hackathons (Team Control Bits) focusing on problem solving, teamwork, and building usable prototypes under tight deadlines.</p>
            </article>

            <article className="card">
              <h3>KIST College — Projects & Activities</h3>
              <p className="muted">Active in college projects and group activities at KIST College. Work includes collaborative software projects, learning deployments, and presenting technical solutions.</p>
            </article>
          </div>
        </section>

  <section id="skills" className="skills fade-up section">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            <div className="skill-block">
              <h3>Cybersecurity</h3>
              <ul className="tool-list">
                <li>Penetration testing fundamentals</li>
                <li>Network reconnaissance (Nmap, tcpdump)</li>
                <li>Web security basics (OWASP mindset, Burp)</li>
              </ul>
            </div>

            <div className="skill-block">
              <h3>Development</h3>
              <ul className="tool-list">
                <li>HTML, CSS, JavaScript (ES6+), React</li>
                <li>PHP basics, Java (basic)</li>
                <li>Databases: MySQL</li>
              </ul>
            </div>

            <div className="skill-block">
              <h3>Tools</h3>
              <ul className="tool-list">
                <li>Burp Suite, Wireshark, Metasploit</li>
                <li>Virtual machines (VMs), Docker basics</li>
                <li>Git & GitHub</li>
              </ul>
            </div>

            <div className="skill-block">
              <h3>Linux</h3>
              <ul className="tool-list">
                <li>Arch, Parrot, Kali</li>
                <li>Bash scripting and command-line tooling</li>
              </ul>
            </div>
          </div>
        </section>

  <section id="projects" className="projects fade-up section">
          <h2 className="section-title">Selected Projects</h2>
          <p className="lead muted">Short summaries and links for quick review.</p>
          <div className="cards project-grid">
            {/* SEEKHANEPAL */}
            <article className="card project-card">
              <div className="project-header">
                <h3>SEEKHANEPAL — KIST Hackathon</h3>
                <div className="tech-list">
                  <span className="tag">React</span>
                </div>
              </div>
              <p>Platform to help students discover interests with interactive demos and an AI assistant.</p>
              <div className="card-actions">
                <a className="btn-link" href="https://seekhanepal.vercel.app/" target="_blank" rel="noopener noreferrer">Live</a>
                <a className="btn-link" href="https://github.com/rajivsthh/seekhanepal" target="_blank" rel="noopener noreferrer">Source</a>
              </div>
            </article>

            {/* SarkarSevaSaathi */}
            <article className="card project-card">
              <div className="project-header">
                <h3>SarkarSevaSaathi — 100x Hackathon</h3>
                <div className="tech-list">
                  <span className="tag">Fullstack</span>
                </div>
              </div>
              <p>Form Mitra Smart — a govtech web app to help citizens complete government forms accurately.</p>
              <div className="card-actions">
                <a className="btn-link" href="https://100x-hackathon.vercel.app/about" target="_blank" rel="noopener noreferrer">Hackathon</a>
              </div>
            </article>

            {/* Network Scanner */}
            <article className="card project-card">
              <div className="project-header">
                <h3>Network Security Scanner</h3>
                <div className="tech-list">
                  <span className="tag">Bash</span>
                </div>
              </div>
              <p>Bash-based tool for network reconnaissance and learning practical scanning techniques.</p>
            </article>

            {/* SafeMCP */}
            <article className="card project-card">
              <div className="project-header">
                <h3>SAFE-MCP — Documentation Contributor</h3>
                <div className="tech-list">
                  <span className="tag">Security</span>
                </div>
              </div>
              <p>Helping organize and maintain attacker technique writeups to improve clarity and usability for practitioners.</p>
              <div className="card-actions">
                <a className="btn-link" href="https://github.com/rajivsthh/safemcp" target="_blank" rel="noopener noreferrer">Repository</a>
              </div>
            </article>
          </div>
        </section>

  <section id="blog" className="blog fade-up section">
          <h2 className="section-title">Blog</h2>
          <p className="lead muted">Short posts on security, tooling, and practical learning.</p>
          <div className="blog-list">
            {posts.map((p) => (
              <article key={p.id} className="card post-card" onClick={() => setSelectedPost(p.id)} role="button" tabIndex={0} onKeyPress={(e) => { if (e.key === 'Enter') setSelectedPost(p.id); }}>
                <div className="post-head">
                  <h3>{p.title}</h3>
                  <small className="muted">{p.date}</small>
                </div>
                <p className="muted">{p.excerpt}</p>
              </article>
            ))}
          </div>
        </section>

    <section id="resume" className="resume fade-up section" tabIndex={-1}>
            <h2 className="section-title">Resume</h2>
            <div className="resume-frame">
              {/* embed the committed resume PDF so clicking Resume shows only the resume */}
              <iframe
                src="/resume.pdf"
                title="Rajiv Shrestha Resume"
                aria-label="Resume PDF viewer"
                frameBorder={0}
                style={{ width: '100%', height: '70vh', borderRadius: 8 }}
              />
            </div>
          </section>

        {selectedPost && (() => {
          const post = posts.find((x) => x.id === selectedPost);
          if (!post) return null;
          return (
            <div className="post-modal" role="dialog" aria-modal="true">
              <div className="post-modal-content">
                <button className="modal-close" onClick={() => setSelectedPost(null)} aria-label="Close post">×</button>
                <h2>{post.title}</h2>
                <small className="muted">{post.date}</small>
                <div className="post-body" dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>
            </div>
          );
        })()}

        {/* Goals section removed per request */}

        <section id="contact" className="contact fade-up section">
          <h2 className="section-title">Contact</h2>
          <div className="contact-card">
            <p>Email: <a href="mailto:rajivsth0713@gmail.com">rajivsth0713@gmail.com</a></p>
            <p>GitHub: <a href="https://github.com/rajivsthh" target="_blank" rel="noopener noreferrer">github.com/rajivsthh</a></p>
          </div>
        </section>
        {onlySection && (
          <div className="only-close">
            <button className="btn ghost" onClick={() => setOnlySection(null)}>Show all sections</button>
          </div>
        )}
      </main>

      <footer className="footer">
        <div className="container footer-row">
          <small>© {new Date().getFullYear()} Rajiv Shrestha — Learning. Breaking. Securing.</small>
          <div className="socials">
            <a href="https://github.com/rajivsthh" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="mailto:rajivsth0713@gmail.com">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
