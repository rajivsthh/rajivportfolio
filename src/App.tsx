import React from "react";

const App: React.FC = () => {
  return (
    <div>
      {/* Header */}
      <header
        style={{
          background: "#222",
          color: "white",
          padding: "2rem 1rem",
          textAlign: "center" as const,
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h1
          style={{
            margin: "0 0 0.5rem 0",
            fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
          }}
        >
          Rajiv Shrestha
        </h1>
        <p
          style={{
            margin: "0",
            fontSize: "clamp(1rem, 2.5vw, 1.1rem)",
            opacity: 0.9,
          }}
        >
          Linux • Networking • Bash • Cybersecurity Enthusiast
        </p>
      </header>

      {/* About Section */}
      <section
        style={{
          padding: "clamp(2rem, 5vw, 3rem) clamp(1rem, 3vw, 2rem)",
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <h2
          style={{
            textAlign: "center" as const,
            fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
            marginBottom: "clamp(1.5rem, 3vw, 2rem)",
            color: "#333",
          }}
        >
          About Me
        </h2>
        
        {/* Intro paragraph */}
        <div style={{
          textAlign: "center" as const,
          marginBottom: "2rem",
        }}>
          <p
            style={{
              fontSize: "clamp(1.1rem, 2.8vw, 1.3rem)",
              lineHeight: "1.6",
              color: "#333",
              fontWeight: "500",
              maxWidth: "90%",
              margin: "0 auto",
            }}
          >
            Hi, I'm <strong style={{ color: "#646cff" }}>Rajiv Shrestha</strong>, a passionate 2nd-year Computer Science student 
            on a journey to master cybersecurity.
          </p>
        </div>

        {/* Skills & Journey */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "2rem",
          marginBottom: "2rem",
        }}>
          {/* Technical Journey */}
          <div style={{
            background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
            padding: "2rem",
            borderRadius: "12px",
            borderLeft: "4px solid #646cff",
          }}>
            <h3 style={{
              margin: "0 0 1rem 0",
              color: "#333",
              fontSize: "1.2rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}>
              🚀 <span>Technical Journey</span>
            </h3>
            <p style={{
              margin: "0",
              color: "#555",
              lineHeight: "1.6",
              fontSize: "1rem",
            }}>
              Started with <strong>web development</strong> foundations (HTML, CSS, JavaScript, Java) 
              and evolved into building full-stack applications. Now transitioning into 
              <strong style={{ color: "#dc3545" }}> cybersecurity</strong> with hands-on experience 
              in ethical hacking, network security, and penetration testing.
            </p>
          </div>

          {/* Current Focus */}
          <div style={{
            background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
            padding: "2rem",
            borderRadius: "12px",
            borderLeft: "4px solid #28a745",
          }}>
            <h3 style={{
              margin: "0 0 1rem 0",
              color: "#333",
              fontSize: "1.2rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}>
              🎯 <span>Current Focus</span>
            </h3>
            <p style={{
              margin: "0",
              color: "#555",
              lineHeight: "1.6",
              fontSize: "1rem",
            }}>
              Actively developing expertise in <strong>cybersecurity</strong> through practical 
              projects and competitions. Proficient in <strong>Bash scripting</strong>, 
              <strong> network scanning (Nmap)</strong>, and security assessment tools. 
              Always exploring new technologies and methodologies.
            </p>
          </div>
        </div>

        {/* Achievements & Interests */}
        <div style={{
          background: "white",
          padding: "2rem",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          textAlign: "center" as const,
        }}>
          <h3 style={{
            margin: "0 0 1.5rem 0",
            color: "#333",
            fontSize: "1.3rem",
          }}>
            🏆 What Drives Me
          </h3>
          <p style={{
            fontSize: "clamp(1rem, 2.5vw, 1.1rem)",
            lineHeight: "1.7",
            color: "#555",
            margin: "0",
          }}>
            I thrive on solving complex problems and building solutions that make a difference. 
            Whether it's developing a <strong>sports booking platform</strong>, creating 
            <strong> educational tools like SEEKHANEPAL</strong>, or diving deep into 
            <strong style={{ color: "#dc3545" }}> network security</strong>, I'm always eager to learn, 
            compete in hackathons, and push the boundaries of what's possible with technology.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section
        style={{
          background: "#f8f9fa",
          padding: "clamp(2rem, 5vw, 3rem) clamp(1rem, 3vw, 1.5rem)",
        }}
      >
        <h2
          style={{
            textAlign: "center" as const,
            fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
            marginBottom: "clamp(1.5rem, 3vw, 2rem)",
            color: "#333",
          }}
        >
          Projects
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "clamp(1rem, 3vw, 2rem)",
            maxWidth: "1200px",
            margin: "auto",
            padding: "0 0.5rem",
          }}
        >
          {/* SEEKHANEPAL */}
          <div
            style={{
              background: "white",
              padding: "clamp(1.5rem, 4vw, 2rem)",
              borderRadius: "12px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            <img
              src="https://via.placeholder.com/400x200/646cff/ffffff?text=SEEKHANEPAL"
              alt="SEEKHANEPAL"
              style={{
                width: "100%",
                borderRadius: "8px",
                marginBottom: "1rem",
              }}
            />
            <h3
              style={{
                margin: "0 0 1rem 0",
                color: "#333",
                fontSize: "clamp(1.2rem, 3vw, 1.4rem)",
              }}
            >
              SEEKHANEPAL
            </h3>
            <p
              style={{
                margin: "0",
                color: "#666",
                lineHeight: "1.6",
                fontSize: "clamp(0.95rem, 2.2vw, 1rem)",
              }}
            >
              Hackathon project learning platform, currently being refined.
            </p>
          </div>

          {/* Futsal Booking */}
          <div
            style={{
              background: "white",
              padding: "clamp(1.5rem, 4vw, 2rem)",
              borderRadius: "12px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            <img
              src="https://via.placeholder.com/400x200/28a745/ffffff?text=Futsal+Booking"
              alt="Futsal Booking"
              style={{
                width: "100%",
                borderRadius: "8px",
                marginBottom: "1rem",
              }}
            />
            <h3
              style={{
                margin: "0 0 1rem 0",
                color: "#333",
                fontSize: "clamp(1.2rem, 3vw, 1.4rem)",
              }}
            >
              Futsal & Sports Court Booking System
            </h3>
            <p
              style={{
                margin: "0",
                color: "#666",
                lineHeight: "1.6",
                fontSize: "clamp(0.95rem, 2.2vw, 1rem)",
              }}
            >
              Web app for booking sports courts with Google Maps integration.
            </p>
          </div>

          {/* Network Scanner */}
          <div
            style={{
              background: "white",
              padding: "clamp(1.5rem, 4vw, 2rem)",
              borderRadius: "12px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            <img
              src="https://via.placeholder.com/400x200/dc3545/ffffff?text=Network+Scanner"
              alt="Network Scanner"
              style={{
                width: "100%",
                borderRadius: "8px",
                marginBottom: "1rem",
              }}
            />
            <h3
              style={{
                margin: "0 0 1rem 0",
                color: "#333",
                fontSize: "clamp(1.2rem, 3vw, 1.4rem)",
              }}
            >
              Network Scanner
            </h3>
            <p
              style={{
                margin: "0",
                color: "#666",
                lineHeight: "1.6",
                fontSize: "clamp(0.95rem, 2.2vw, 1rem)",
              }}
            >
              Bash script that scans devices in the network for open ports.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        style={{
          padding: "clamp(2rem, 5vw, 3rem) clamp(1rem, 3vw, 2rem)",
          maxWidth: "800px",
          margin: "auto",
        }}
      >
        <h2
          style={{
            textAlign: "center" as const,
            fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
            marginBottom: "clamp(1.5rem, 3vw, 2rem)",
            color: "#333",
          }}
        >
          Skills
        </h2>
        <ul
          style={{
            listStyle: "none",
            padding: "0",
            maxWidth: "100%",
            margin: "0 auto",
          }}
        >
          <li style={cardStyle}>Linux Administration & System Configuration</li>
          <li style={cardStyle}>Networking & Network Security</li>
          <li style={cardStyle}>Bash Scripting & Automation</li>
          <li style={cardStyle}>Web Development: HTML, CSS, JS, React + TypeScript</li>
          <li style={cardStyle}>Cybersecurity: Penetration Testing & Cloud Security</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section
        style={{
          background: "#f8f9fa",
          padding: "clamp(2rem, 5vw, 3rem) clamp(1rem, 3vw, 2rem)",
          textAlign: "center" as const,
        }}
      >
        <h2
          style={{
            fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
            marginBottom: "clamp(1.5rem, 3vw, 2rem)",
            color: "#333",
          }}
        >
          Contact
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column" as const,
            gap: "clamp(0.8rem, 2vw, 1rem)",
            alignItems: "center",
          }}
        >
          <p style={{ margin: 0, fontSize: "clamp(1rem, 2.5vw, 1.1rem)" }}>
            Email:{" "}
            <a
              href="mailto:rajiv0713@gmail.com"
              style={{
                color: "#646cff",
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              rajivsth0713@gmail.com
            </a>
          </p>
          <p style={{ margin: 0, fontSize: "clamp(1rem, 2.5vw, 1.1rem)" }}>
            GitHub:{" "}
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#646cff",
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              {/* github.com/yourusername */}
            </a>
          </p>
          <p style={{ margin: 0, fontSize: "clamp(1rem, 2.5vw, 1.1rem)" }}>
            LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#646cff",
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              {/* linkedin.com/in/yourprofile */}
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: "#222",
          color: "white",
          textAlign: "center" as const,
          padding: "2rem 1rem",
        }}
      >
        <p
          style={{
            margin: "0",
            opacity: 0.8,
            fontSize: "clamp(0.9rem, 1.8vw, 1rem)",
          }}
        >
          © 2025 Rajiv Shrestha | All Rights Reserved
        </p>
      </footer>
    </div>
  );
};

// Card style reused in Skills
const cardStyle: React.CSSProperties = {
  background: "white",
  margin: "clamp(0.8rem, 2vw, 1rem) 0",
  padding: "clamp(1rem, 3vw, 1.5rem)",
  borderRadius: "8px",
  borderLeft: "4px solid #646cff",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  fontSize: "clamp(0.95rem, 2.5vw, 1.1rem)",
  color: "#555",
};

export default App;
