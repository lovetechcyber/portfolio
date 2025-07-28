const blogPosts = [
  {
    id: 'devsecops-best-practices',
    title: 'Top 5 DevSecOps Practices for Modern Teams',
    summary: 'How to secure your CI/CD pipelines and embed security into your code lifecycle.',
    date: 'July 2025',
    content: `
DevSecOps integrates security into DevOps processes from the very beginning.

**Top practices include:**
1. Automated security testing in CI/CD
2. Regular static and dynamic scans
3. Secrets management with tools like Vault
4. Threat modeling during sprint planning
5. Compliance checks built into deployment pipelines

Start embedding security early to reduce cost and improve trust.
    `,
  },
  {
    id: 'pentest-mistakes',
    title: 'Common Penetration Testing Mistakes & How to Avoid Them',
    summary: 'Many orgs run pen tests without value. Here’s what to avoid.',
    date: 'June 2025',
    content: `
Penetration testing is only valuable when properly scoped and executed.

**Mistakes to avoid:**
- No defined scope or goals
- Testing only once a year
- Ignoring social engineering
- Not fixing discovered vulnerabilities

Use results to drive real change.
    `,
  },
];

export default blogPosts;
