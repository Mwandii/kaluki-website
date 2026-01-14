import { useState } from 'react';

function Services() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const onlineSchooling = [
    'Live online Kiswahili lessons',
    'Live online CRE lessons',
    'Homework assistance and follow-up',
    'Exam revision and learner support',
    'Flexible scheduling'
  ];

  const employmentKiswahili = [
    'Available for full-time or part-time roles',
    'Primary or secondary level',
    'Kenyan curriculum experience',
    'Strong language foundation and assessment support'
  ];

  const employmentCRE = [
    'Available for full-time or part-time roles',
    'Faith-based and values-centered teaching',
    'Curriculum-aligned lesson delivery',
    'Student mentorship and guidance'
  ];

  return (
    <section
      id="services"
      className="py-16 md:py-18 px-6 md:px-12 lg:px-24 bg-stone-50"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-3">
          Services
        </h2>
        <p className="text-center text-[#2C3E3A] mb-4">
          Flexible teaching services for students and institutions
        </p>
        <p className="text-center text-sm italic text-gray-500 leading-relaxed mb-12 md:mb-16">
          *Malezi bora ya mwanafunzi*
        </p>

        {/* Services Container */}
        <div className="flex flex-col gap-6 md:gap-8">
          {/* Online Schooling */}
          <div className=''>
            <button
              onClick={() => toggleSection('online')}
              className="w-full flex items-center justify-between py-6 px-10 bg-gray-50 hover:bg-gray-100 hover:cursor-pointer hover:rounded-full transition-colors"
            >
              <span className="text-lg md:text-xl font-semibold text-black">
                Online Schooling
              </span>
              <svg
                className={`w-6 h-6 text-[#2C3E3A] transition-transform ${
                  openSection === 'online' ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                openSection === 'online' ? 'max-h-80' : 'max-h-0'
              }`}
            >
              <ul className="px-6 pb-6 space-y-3 text-[#5F6C67]">
                {onlineSchooling.map((item, index) => (
                  <li key={index} className="text-sm md:text-base">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Employment – Kiswahili */}
          <div>
            <button
              onClick={() => toggleSection('kiswahili')}
              className="w-full flex items-center justify-between py-6 px-10 bg-gray-50 hover:bg-gray-100 hover:cursor-pointer hover:rounded-full transition-colors"
            >
              <span className="text-lg md:text-xl font-semibold text-black">
                Employment – Kiswahili Teacher
              </span>
              <svg
                className={`w-6 h-6 text-[#2C3E3A] transition-transform ${
                  openSection === 'kiswahili' ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                openSection === 'kiswahili' ? 'max-h-80' : 'max-h-0'
              }`}
            >
              <ul className="px-6 pb-6 space-y-3 text-[#5F6C67]">
                {employmentKiswahili.map((item, index) => (
                  <li key={index} className="text-sm md:text-base">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Employment – CRE */}
          <div>
            <button
              onClick={() => toggleSection('cre')}
              className="w-full flex items-center justify-between py-6 px-10 bg-gray-50 hover:bg-gray-100 hover:cursor-pointer hover:rounded-full transition-colors"
            >
              <span className="text-lg md:text-xl font-semibold text-black">
                Employment – CRE Teacher
              </span>
              <svg
                className={`w-6 h-6 text-[#2C3E3A] transition-transform ${
                  openSection === 'cre' ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                openSection === 'cre' ? 'max-h-80' : 'max-h-0'
              }`}
            >
              <ul className="px-6 pb-6 space-y-3 text-[#5F6C67]">
                {employmentCRE.map((item, index) => (
                  <li key={index} className="text-sm md:text-base">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Small note */}
        <p className="text-center text-sm text-gray-500 mt-12 italic">
          Available for either subject or both, depending on your needs.
        </p>
      </div>
    </section>
  );
}

export default Services;
