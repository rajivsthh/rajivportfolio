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
