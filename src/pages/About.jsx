import React from 'react';

const team = [
  {
    name: 'Okwubali Prince',
    role: 'Founder & CEO',
    bio: 'Cybersecurity-focused full-stack developer with a passion for building secure digital products from day one.',
    linkedin: 'https://linkedin.com/in/prince-okwubali-52b4021b0',
  },
  {
    name: 'Paul Oghene',
    role: 'Assistant',
    bio: 'Technical assistant with experience supporting project execution and secure deployments.',
    linkedin: '',
  },
];

const About = () => {
  return (
    <section className="py-16 px-6 bg-gray-50 text-gray-900">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">About LoveTechCyber</h2>
        <p className="text-lg text-gray-600">
          At LoveTechCyber, we believe every digital product should be born secure.
        </p>
      </div>

      <div className="max-w-4xl mx-auto mb-16">
        <h3 className="text-2xl font-semibold text-blue-800 mb-2">Our Mission</h3>
        <p className="text-gray-700 mb-6">
          To help startups and businesses launch secure, scalable, and compliant web applications
          by integrating cybersecurity from the very first line of code.
        </p>

        <h3 className="text-2xl font-semibold text-blue-800 mb-2">Our Vision</h3>
        <p className="text-gray-700">
          To become a leading global provider of secure-by-design software and DevSecOps automation
          tools, making the web safer—one project at a time.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold text-blue-900 mb-8 text-center">Our Team</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition">
              <h4 className="text-xl font-semibold text-blue-800">{member.name}</h4>
              <p className="text-sm text-gray-500 mb-2">{member.role}</p>
              <p className="text-gray-700 text-sm mb-4">{member.bio}</p>
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline text-sm"
                >
                  LinkedIn Profile
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
