import React from "react";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="app-root">
      <header className="hero">
        <div className="container">
          <h1 className="name">Rajiv Shrestha</h1>
          <p className="tag">CS Student • Cybersecurity Enthusiast</p>
          <p className="lead">Building secure, usable web apps — now focusing on security and penetration testing.</p>
        </div>
      </header>

      <main className="container main">
        <div className="layout">
          <div className="content">
            <section className="about">
              <h2>About</h2>
              <p>
                2nd‑year Computer Science student. Started in web development (HTML, CSS, JS) and
                now transitioning into cybersecurity. I participate in CTFs and hackathons to sharpen practical skills.
              </p>
            </section>

            <section className="projects">
              <h2>Selected Projects & Hackathons</h2>
              <div className="cards">
                <article className="card">
                  <h3>SEEKHANEPAL — KIST Hackathon</h3>
                  <p>Platform helping students discover interests with interactive demos and an AI chatbot. Teachers can enroll.</p>
                  <p className="muted">Live: <a href="https://seekhanepal.vercel.app/" target="_blank" rel="noopener noreferrer">seekhanepal.vercel.app</a></p>
                </article>

                <article className="card">
                  <h3>SarkarSevaSaathi — 100x Nepal Hackathon 2025</h3>
                  <p>Team Control Bits — Built <em>Form Mitra Smart</em>, a GovTech web app to help citizens fill government forms correctly.</p>
                  <p className="muted">Hackathon: <a href="https://100x-hackathon.vercel.app/about" target="_blank" rel="noopener noreferrer">100x Nepal Hackathon</a></p>
                </article>

                <article className="card">
                  <h3>Network Security Scanner</h3>
                  <p>Bash-based network reconnaissance and port scanning tool used for learning network security and assessments.</p>
                </article>
              </div>
            </section>
          </div>

          <aside className="sidebar">
            <h3>Skills & Tools</h3>
            <div className="badges">
              <img src="https://img.shields.io/badge/Linux-FCC624?style=flat&logo=linux&logoColor=black" alt="Linux"/>
              <img src="https://img.shields.io/badge/Bash-4EAA25?style=flat&logo=gnu-bash&logoColor=white" alt="Bash"/>
              <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white" alt="HTML5"/>
              <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white" alt="CSS3"/>
              <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black" alt="JS"/>
              <img src="https://img.shields.io/badge/Java-007396?style=flat&logo=openjdk&logoColor=white" alt="Java"/>
              <img src="https://img.shields.io/badge/PHP-777BB4?style=flat&logo=php&logoColor=white" alt="PHP"/>
            </div>

            <h3>Currently Learning</h3>
            <ul>
              <li>Cybersecurity fundamentals, penetration testing, OWASP Top 10</li>
              <li>Networking: TCP/IP, DNS, firewalls</li>
              <li>Linux & Bash for automation and security tooling</li>
              <li>Web app security & secure coding</li>
            </ul>
          </aside>
        </div>

  <section className="contact">
          <h2>Contact</h2>
          <p>Email: <a href="mailto:rajiv@example.com">rajiv@example.com</a></p>
          <p>GitHub: <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">github.com/yourusername</a></p>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <small>© 2025 Rajiv Shrestha — Crafted with focus on security and clarity.</small>
        </div>
      </footer>
    </div>
  );
};

export default App;
