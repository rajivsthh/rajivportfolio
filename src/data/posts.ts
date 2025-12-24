export type Post = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string; // HTML or simple text
};

const posts: Post[] = [
  {
    id: "secure-deploy",
    title: "Secure deployment basics for small apps",
    date: "2025-11-01",
    excerpt: "A short checklist to deploy small web apps safely: secrets, HTTPS, and CI checks.",
    content: `
      <p>Deploying a small web app doesn't need to be risky. Follow a few practical steps:</p>
      <ol>
        <li>Keep secrets out of source control — use environment variables or a secret manager.</li>
        <li>Enable HTTPS by default (use managed TLS on your host).</li>
        <li>Run basic security scans in CI — lint, dependency checks, and a quick SAST tool.</li>
        <li>Log and monitor errors; use rate limits to protect endpoints.</li>
      </ol>
      <p>These basics raise the floor for safety and make it more practical to iterate quickly.</p>
    `,
  },
  {
    id: "safe-t1912-stego-response-exfiltration",
    title: "SAFE-T1912: Stego Response Exfiltration",
    date: "2025-11-26",
    excerpt: "Stego Response Exfiltration: hiding exfil payloads in AI/MCP responses using zero-width chars, encoded blobs, and structured steganography.",
    content: `
      <h3>Overview</h3>
      <p><strong>Tactic:</strong> Exfiltration (ATK-TA0010)<br/><strong>Technique ID:</strong> SAFE-T1912<br/><strong>Severity:</strong> High</p>

      <h3>Description</h3>
      <p>Stego Response Exfiltration is a technique where attackers embed covert payloads inside AI-generated or MCP-generated responses. These payloads are commonly hidden in code blocks, JSON structures, logs, or markdown elements that users frequently copy or paste into external systems. The embedded content may consist of zero-width Unicode characters, encoded payloads, or structured steganographic data that allows attackers to exfiltrate information without detection.</p>

      <p>From a technical perspective, the attack exploits the tendency of AI-generated structured outputs to appear trustworthy. MCP systems often generate code, configuration, or schema-based responses; attackers manipulate these formats to insert high‑entropy data or invisible characters that remain undetected by basic sanitation. When users transfer these outputs into IDEs, build systems, cloud consoles, or other environments, the payload propagates and is eventually decoded or executed by downstream processes.</p>

      <h3>Attack Vectors</h3>
      <p><strong>Primary Vector:</strong> Payload hidden inside LLM/MCP response code blocks or structured outputs.</p>
      <p><strong>Secondary Vectors:</strong></p>
      <ul>
        <li>Stealth encoding via zero-width characters (U+200B, U+200C, U+2060).</li>
        <li>Embedding malicious instructions inside comments, JSON fields, or whitespace.</li>
        <li>Hidden payloads inside comments, markdown, or unused configuration parameters.</li>
      </ul>

      <h3>Technical Details</h3>
      <h4>Prerequisites</h4>
      <ul>
        <li>Attacker can influence or manipulate a model response.</li>
        <li>User copies or transfers content from the MCP response into another environment.</li>
      </ul>

      <h4>Attack Flow</h4>
      <pre><code>Start -> Prepare hidden payload -> Prime model to produce predictable structure -> Inject hidden data -> Model outputs embedded payload -> User copies AI output -> Hidden data travels via user action -> Attacker extracts data</code></pre>

      <h3>Example Scenario</h3>
      <pre><code>{
  "config": {
    "theme": "light",
    "user_settings": "ZW1iZGRlZF9leGZpbF9kYXRh"
  }
}
      </code></pre>

      <h3>Detection & Mitigation</h3>
      <p><strong>Indicators:</strong> suspicious base64/hex blobs in configuration blocks; presence of zero-width Unicode characters; unexpected large code blocks unrelated to intent.</p>
      <p><strong>Mitigations:</strong></p>
      <ul>
        <li>SAFE-M-003: Output Sanitization — Strip zero-width characters and detect suspicious encoding patterns.</li>
        <li>SAFE-M-014: Model Response Validation — Enforce schema validation to detect hidden or unexpected fields.</li>
        <li>SAFE-M-021: Content Security Filtering — Reject high-entropy payloads inside text responses.</li>
      </ul>

      <h3>Detection Rule Example (Sigma-style)</h3>
      <pre><code>title: Stego Payload Embedded in MCP Responses
id: 7b29c1c4-9730-4e13-9ef0-52e48cbb2c61
status: experimental
description: Detects suspicious zero-width characters or encoded blobs in MCP responses.
author: rajivsthh
date: 2025/11/26
detection:
  selection:
    response.text|re:
      - '\\u200b'
      - '\\u200c'
      - '^[A-Za-z0-9+/]{20,}={0,2}$'
  condition: selection
level: high</code></pre>

      <h3>Related Techniques</h3>
      <ul>
        <li>SAFE-T1006: User Social Engineering Install</li>
        <li>SAFE-T1704: Compromised-Server Pivot</li>
      </ul>

      <h3>References</h3>
      <ul>
        <li><a href="https://modelcontextprotocol.io/specification">Model Context Protocol Specification</a></li>
        <li><a href="https://owasp.org/www-project-top-10-for-large-language-model-applications/">OWASP Top 10 for LLM Applications</a></li>
      </ul>
    `,
  },
  {
    id: "nmap-basics",
    title: "Nmap quick-start: fast reconnaissance",
    date: "2025-10-10",
    excerpt: "How to use Nmap for quick, useful network reconnaissance during assessments.",
    content: `
      <p>Nmap is a powerful tool — here's a quick way to get useful results without noise:</p>
      <ul>
        <li><code>nmap -sS -Pn -p- target</code> for a fast TCP scan of open ports.</li>
        <li>Follow up with service/version detection: <code>nmap -sV -sC target</code>.</li>
        <li>Use timing templates carefully (<code>-T4</code>) on friendly networks to save time.</li>
      </ul>
      <p>Always get authorization before scanning networks you don't own.</p>
    `,
  },
];

export default posts;
