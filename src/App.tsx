import React, { useEffect, useState } from "react";
import "./App.css";

const App: React.FC = () => {
  const [active, setActive] = useState<string>('current');

  useEffect(() => {
    const ids = ['current', 'skills', 'projects', 'contact'];
    const sections = ids.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting) {
            setActive(id);
            entry.target.classList.add('in-view');
          } else {
            entry.target.classList.remove('in-view');
          }
        });
      },
      { root: null, rootMargin: '0px 0px -60% 0px', threshold: 0.12 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-root">
      <header className="hero">
        <div className="container hero-row">
          <div className="hero-left">
            <h1 className="name">Rajiv Shrestha</h1>
            <p className="tag">CS Student • Cybersecurity Enthusiast</p>
            <p className="lead">Building secure, usable web apps — now focusing on security and penetration testing.</p>
          </div>

          <nav className="site-nav" aria-label="Main navigation">
              <ul className="nav-list">
                <li><a href="#current" className={active === 'current' ? 'active' : ''}>Current</a></li>
                <li><a href="#skills" className={active === 'skills' ? 'active' : ''}>Skills</a></li>
                <li><a href="#projects" className={active === 'projects' ? 'active' : ''}>Projects</a></li>
                <li><a href="#contact" className={active === 'contact' ? 'active' : ''}>Contact</a></li>
              </ul>
          </nav>

          <div className="header-actions">
            <a className="btn" href="mailto:rajivsth0713@gmail.com">Email</a>
            <a className="btn ghost" href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
          </div>
        </div>
      </header>

         <main className="container main">
          <section id="current" className="current fade-up">
            <h2 className="section-title">What I'm doing now</h2>
            <p className="lead">I am a 2nd‑year Computer Science student transitioning from web development into cybersecurity. Currently focusing on web application security, penetration testing, and practical network security. I participate in CTFs and hackathons to sharpen hands-on skills.</p>
          </section>

          <section id="skills" className="skills fade-up">
            <h2 className="section-title">Skills & Tools</h2>

            <div className="skills-grid">
              <div className="skill-block">
                <h3>Security & Tools</h3>
                <div className="badges">
                  <img src="https://img.shields.io/badge/Linux-FCC624?style=flat&logo=linux&logoColor=black" alt="Linux" />
                  <img src="https://img.shields.io/badge/Bash-4EAA25?style=flat&logo=gnu-bash&logoColor=white" alt="Bash" />
                  {/* <img src="https://img.shields.io/badge/Nmap-2BC4FF?style=flat&logo=nmap&logoColor=white" alt="Nmap" /> */}
                </div>
                <ul className="tool-list">
                  <li>Nmap</li>
                  <li>Burp Suite</li>
                  <li>Wireshark</li>
                  <li>Metasploit</li>
                  {/* <li>tcpdump</li> */}
                  <li>SSH / OpenSSH</li>
                </ul>
              </div>

              <div className="skill-block">
                <h3>Web Development</h3>
                <div className="badges">
                  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white" alt="HTML5" />
                  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white" alt="CSS3" />
                  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black" alt="JavaScript" />
                  <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black" alt="React" />
                </div>
                <ul className="tool-list">
                  <li>HTML5</li>
                  <li>CSS3 / Responsive Design</li>
                  <li>JavaScript (ES6+)</li>
                  <li>React</li>
                  <li>Node.js / Express (basic)</li>
                  <li>PHP / Java (familiar)</li>
                </ul>
              </div>
            </div>
           </section>

          <section id="projects" className="projects">
            <h2 className="section-title">Selected Projects & Hackathons</h2>
             <div className="cards">
               <article className="card fade-up">
                 <h3>SEEKHANEPAL — KIST Hackathon</h3>
                 <p>Platform helping students discover interests with interactive demos and an AI chatbot. Teachers can enroll.</p>
                 <p className="muted">Live: <a href="https://seekhanepal.vercel.app/" target="_blank" rel="noopener noreferrer">seekhanepal.vercel.app</a></p>
               </article>

               <article className="card fade-up">
                 <h3>SarkarSevaSaathi — 100x Nepal Hackathon 2025</h3>
                 <p>Team Control Bits — Built <em>Form Mitra Smart</em>, a GovTech web app to help citizens fill government forms correctly.</p>
                 <p className="muted">Hackathon: <a href="https://100x-hackathon.vercel.app/about" target="_blank" rel="noopener noreferrer">100x Nepal Hackathon</a></p>
               </article>

               <article className="card fade-up">
                 <h3>Network Security Scanner</h3>
                 <p>Bash-based network reconnaissance and port scanning tool used for learning network security and assessments.</p>
               </article>

              <article className="card fade-up">
                <h3>SafeMCP — Contributor</h3>
                <p>Contributed code and security fixes to the SafeMCP open-source project, focusing on hardening and reliability improvements.</p>
                <p className="muted">Repository: <a href="https://github.com/rajivsthh/safemcp" target="_blank" rel="noopener noreferrer">github.com/rajivsthh/safemcp</a></p>
              </article>
             </div>
           </section>

          <section id="contact" className="contact fade-up">
            <h2 className="section-title">Contact</h2>
              <div className="contact-card">
                <p>Email: <a href="mailto:rajivsth0713@gmail.com">rajivsth0713@gmail.com</a></p>
                <p>GitHub: <a href="https://github.com/rajivsthh" target="_blank" rel="noopener noreferrer">github.com/rajivsthh</a></p>
              </div>
          </section>
         </main>

      <footer className="footer">
        <div className="container" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <small>© 2025 Rajiv Shrestha — Crafted with focus on security and clarity.</small>
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
