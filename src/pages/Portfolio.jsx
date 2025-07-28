import React from 'react';
import health from '../assets/health.png'; // Replace with your actual images
import fintec from '../assets/fintec.png';

const projects = [
  {
    name: 'HealthSecure SaaS',
    image: health,
    description: 'A HIPAA-compliant healthtech SaaS platform with real-time security monitoring and secure-by-design development using React + Node.js.',
    stack: ['React', 'Node.js', 'MongoDB', 'JWT', 'HIPAA'],
  },
  {
    name: 'FinTrack Dashboard',
    image: fintec,
    description: 'Secure admin dashboard for a fintech startup with CI/CD security scans and infrastructure-as-code on AWS.',
    stack: ['Django', 'AWS', 'IaC', 'CI/CD', 'GDPR'],
  },
  {
  name: 'BankNet Penetration Test',
  image: 'https://picsum.photos/seed/pentest/600/400', // Replace with real image if available
  description: 'Conducted a comprehensive black-box penetration test for a fintech API using Burp Suite, Nmap, and Metasploit. Delivered a full vulnerability assessment and remediation plan.',
  stack: ['Burp Suite', 'OWASP', 'Nmap', 'Metasploit'],
},
{
  name: 'SecureGov Network Defense',
  image: 'https://picsum.photos/seed/network/600/400',
  description: 'Designed and deployed a layered defense system for a government agency using IDS/IPS, firewall segmentation, and real-time threat monitoring.',
  stack: ['Snort', 'pfSense', 'Splunk', 'Wireshark'],
},
{
  name: 'Healthcare Threat Simulation',
  image: 'https://picsum.photos/seed/simulation/600/400',
  description: 'Simulated real-world attacks on a HIPAA-regulated health platform to evaluate response time and network resilience.',
  stack: ['MITRE ATT&CK', 'Kali Linux', 'Nessus', 'Syslog'],
}

];

const Portfolio = () => {
  return (
    <section className="py-16 px-6 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Work</h2>
        <p className="text-lg text-gray-600">A glimpse of secure web applications we’ve built or helped secure.</p>
      </div>

      <div className="grid gap-10 md:grid-cols-2 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="rounded-xl shadow-md hover:shadow-xl transition overflow-hidden">
            <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-blue-800 mb-2">{project.name}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech, i) => (
                  <span key={i} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
