import React from 'react';

const services = [
  {
    title: 'Web App Development',
    description: 'We build secure, scalable web applications using React, Node.js, Django, and more.',
    points: [
      'Custom dashboards, SaaS platforms, and e-commerce',
      'Security integrated from the start',
      'Modern tech stack (React, Node.js, Django)',
    ],
  },
  {
    title: 'Cybersecurity Services',
    description: 'End-to-end protection for your digital assets with compliance and risk mitigation.',
    points: [
      'Penetration testing, audit reports, secure code review',
      'WAF implementation, Zero Trust security model',
      'Cloud Security: AWS, Azure, Infrastructure-as-Code (IaC)',
    ],
  },
  {
    title: 'DevSecOps & CI/CD',
    description: 'Automate security in your development pipeline for safe, continuous delivery.',
    points: [
      'CI/CD pipelines with automated security scans',
      'DevSecOps integration from day one',
      'Real-time threat detection & compliance automation',
    ],
  },
  {
  title: 'Cybersecurity Projects',
  description: 'Specialized services and consulting for offensive and defensive security operations.',
  points: [
    'Penetration Testing (Web, Network, Wireless)',
    'Network Traffic Analysis & Forensics',
    'Advanced Threat Defense Systems & Firewalls',
    'Incident Response & Vulnerability Remediation',
  ],
},

];

const Services = () => {
  return (
    <section className="py-16 px-6 bg-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-blue-900">Our Services</h2>
        <p className="text-lg">Secure-by-design solutions for web development, cybersecurity, and DevSecOps.</p>
      </div>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-blue-800 mb-2">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
              {service.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
