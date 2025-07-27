import React from 'react';

const industries = [
  {
    name: 'Fintech',
    description: 'We build and secure financial web apps with GDPR compliance, real-time monitoring, and audit trails.',
  },
  {
    name: 'Healthtech',
    description: 'HIPAA-compliant systems with secure infrastructure, encrypted data handling, and user access control.',
  },
  {
    name: 'SaaS Platforms',
    description: 'Multi-tenant web apps with secure-by-design architecture and automated threat detection.',
  },
  {
    name: 'E-commerce',
    description: 'Secure payment gateways, PCI-DSS compliance, and fraud prevention with strong authentication.',
  },
  {
    name: 'Government & NGOs',
    description: 'Privacy-focused apps with secure deployment pipelines, data protection, and transparency controls.',
  },
];

const Industries = () => {
  return (
    <section className="py-16 px-6 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">Industries We Serve</h2>
        <p className="text-gray-600 text-lg">
          We bring secure development to high-impact industries where trust and compliance matter most.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {industries.map((industry, index) => (
          <div key={index} className="bg-gray-50 border-l-4 border-blue-800 shadow-sm p-6 rounded-xl">
            <h3 className="text-2xl text-blue-900 font-semibold mb-2">{industry.name}</h3>
            <p className="text-gray-700">{industry.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Industries;
