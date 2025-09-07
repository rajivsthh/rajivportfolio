import React from "react";

const App: React.FC = () => {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#fff" }}>
      {/* Header */}
      <header style={{
        background: "linear-gradient(135deg, #2c3e50 0%, #3498db 100%)",
        color: "white",
        padding: "4rem 1rem",
        textAlign: "center" as const,
      }}>
        <h1 style={{
          margin: "0 0 1rem 0",
          fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
          fontWeight: "700",
          letterSpacing: "-1px",
        }}>
          Rajiv Shrestha
        </h1>
        <p style={{
          margin: "0",
          fontSize: "clamp(1.2rem, 3vw, 1.4rem)",
          opacity: 0.95,
          fontWeight: "300",
        }}>
          Computer Science Student • Cybersecurity Enthusiast
        </p>
      </header>

      {/* About Section */}
      <section style={{
        padding: "4rem 2rem",
        maxWidth: "800px",
        margin: "0 auto",
        textAlign: "center" as const,
      }}>
        <p style={{
          fontSize: "clamp(1.1rem, 2.5vw, 1.3rem)",
          lineHeight: "1.8",
          color: "#555",
          margin: "0",
          fontWeight: "400",
        }}>
          2nd-year CS student who started with <strong style={{ color: "#3498db" }}>web development</strong> foundations 
          and is now transitioning into <strong style={{ color: "#e74c3c" }}>cybersecurity</strong>. 
          Passionate about ethical hacking, network security, and building secure solutions.
        </p>
      </section>

      {/* Skills */}
      <section style={{ 
        background: "#f8f9fa", 
        padding: "3rem 2rem" 
      }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 style={{
            textAlign: "center" as const,
            fontSize: "clamp(1.8rem, 4vw, 2.2rem)",
            marginBottom: "2rem",
            color: "#333",
            fontWeight: "600",
          }}>
            Skills
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1.5rem",
          }}>
            {[
              { category: "Security", skills: ["Ethical Hacking", "Network Scanning", "Bash Scripting"] },
              { category: "Development", skills: ["HTML", "CSS", "JavaScript", "Java", "React", "Full-Stack"] },
              { category: "Systems", skills: ["Linux", "Networking", "System Administration"] }
            ].map((item, index) => (
              <div key={index} style={{
                background: "white",
                padding: "2rem",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}>
                <h3 style={{
                  margin: "0 0 1rem 0",
                  color: "#2c3e50",
                  fontSize: "1.2rem",
                  fontWeight: "600",
                }}>
                  {item.category}
                </h3>
                <ul style={{
                  listStyle: "none",
                  padding: "0",
                  margin: "0",
                }}>
                  {item.skills.map((skill, idx) => (
                    <li key={idx} style={{
                      padding: "0.3rem 0",
                      color: "#666",
                      fontSize: "0.95rem",
                    }}>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section style={{
        padding: "4rem 2rem",
        maxWidth: "1200px",
        margin: "0 auto",
      }}>
        <h2 style={{
          textAlign: "center" as const,
          fontSize: "clamp(1.8rem, 4vw, 2.2rem)",
          marginBottom: "3rem",
          color: "#333",
          fontWeight: "600",
        }}>
          Featured Projects
        </h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "2rem",
        }}>
          {[
            {
              title: "SEEKHANEPAL",
              description: "Learning platform developed during hackathon, currently being refined",
              image: "https://via.placeholder.com/400x200/3498db/ffffff?text=SEEKHANEPAL",
            },
            {
              title: "Sports Booking System",
              description: "Web application for booking sports courts with Google Maps integration",
              image: "https://via.placeholder.com/400x200/27ae60/ffffff?text=Booking+System",
            },
            {
              title: "Network Scanner",
              description: "Bash script for network device scanning and port detection",
              image: "https://via.placeholder.com/400x200/e74c3c/ffffff?text=Network+Scanner",
            }
          ].map((project, index) => (
            <div key={index} style={{
              background: "white",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              overflow: "hidden",
              transition: "transform 0.3s ease",
            }}>
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
              />
              <div style={{ padding: "2rem" }}>
                <h3 style={{
                  margin: "0 0 1rem 0",
                  color: "#333",
                  fontSize: "1.3rem",
                  fontWeight: "600",
                }}>
                  {project.title}
                </h3>
                <p style={{
                  margin: "0",
                  color: "#666",
                  lineHeight: "1.6",
                  fontSize: "1rem",
                }}>
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section style={{
        background: "#2c3e50",
        color: "white",
        padding: "3rem 2rem",
        textAlign: "center" as const,
      }}>
        <h2 style={{
          fontSize: "clamp(1.8rem, 4vw, 2.2rem)",
          marginBottom: "2rem",
          fontWeight: "600",
        }}>
          Get In Touch
        </h2>
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          flexWrap: "wrap" as const,
        }}>
          {[
            { label: "Email", value: "rajiv@example.com", href: "mailto:rajiv@example.com" },
            { label: "GitHub", value: "github.com/yourusername", href: "https://github.com/yourusername" },
            { label: "LinkedIn", value: "linkedin.com/in/yourprofile", href: "https://linkedin.com/in/yourprofile" }
          ].map((contact, index) => (
            <a key={index}
              href={contact.href}
              target={contact.href.startsWith('http') ? "_blank" : undefined}
              rel={contact.href.startsWith('http') ? "noopener noreferrer" : undefined}
              style={{
                color: "#3498db",
                textDecoration: "none",
                fontSize: "1.1rem",
                fontWeight: "500",
                transition: "color 0.3s ease",
              }}
            >
              {contact.value}
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: "#1a1a1a",
        color: "#999",
        textAlign: "center" as const,
        padding: "1.5rem",
        fontSize: "0.9rem",
      }}>
        © 2025 Rajiv Shrestha. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
