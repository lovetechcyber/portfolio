import React from 'react';

const milestones = [
  {
    quarter: 'Q3 2025',
    goals: [
      '🚀 Launch website & portfolio',
      '🤝 Secure 5 B2B clients',
      '🛡 Offer free security audits to generate leads',
    ],
  },
  {
    quarter: 'Q4 2025',
    goals: [
      '🛠 Launch first DevSecOps automation tool',
      '👨‍💻 Expand technical team',
      '🌍 Target international clients (US, UK, EU, Saudi Arabia)',
    ],
  },
];

const Roadmap = () => {
  return (
    <section className="py-16 px-6 bg-gray-50 text-gray-900">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Roadmap</h2>
        <p className="text-lg text-gray-600">
          We’re building toward a secure-by-default web future. Here’s what’s next for LoveTechCyber.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-10">
        {milestones.map((milestone, index) => (
          <div key={index} className="bg-white shadow-md rounded-xl p-6 border-l-4 border-blue-700">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">{milestone.quarter}</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {milestone.goals.map((goal, i) => (
                <li key={i}>{goal}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Roadmap;
