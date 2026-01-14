import { useState } from 'react';

function Education() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <section
      id="education"
      className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-white"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2C3E3A] mb-3">
          Education
        </h2>
        <p className="text-center text-[#5F6C67] mb-4">
          Academic background and professional training
        </p>
        <p className="text-center text-sm italic text-[#6B8E7F] mb-12 md:mb-16">
          *Elimu ni msingi wa maendeleo*
        </p>

        {/* Education Items */}
        <div className="flex flex-col gap-6">
          {/* Masters Degree */}
          <div>
            <button
              onClick={() => toggleSection('masters')}
              className="w-full flex items-center justify-between p-6 bg-stone-50 hover:bg-stone-100 transition-colors"
            >
              <div>
                <p className="text-sm text-[#6B8E7F] mb-1">
                  Master’s Degree
                </p>
                <span className="text-lg md:text-xl font-semibold text-[#2C3E3A]">
                  Master of Arts – Mount Kenya University
                </span>
              </div>
              <svg
                className={`w-6 h-6 text-[#6B8E7F] transition-transform ${
                  openSection === 'masters' ? 'rotate-180' : ''
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
                openSection === 'masters' ? 'max-h-48' : 'max-h-0'
              }`}
            >
              <div className="px-6 pb-6 text-[#5F6C67] text-sm md:text-base">
                <p>
                  Completed a Master of Arts degree at Mount Kenya University,
                  with advanced training in subject mastery, educational research,
                  and learner-centered teaching approaches.
                </p>
              </div>
            </div>
          </div>

          {/* Bachelors Degree */}
          <div>
            <button
              onClick={() => toggleSection('bachelors')}
              className="w-full flex items-center justify-between p-6 bg-stone-50 hover:bg-stone-100 transition-colors"
            >
              <div>
                <p className="text-sm text-[#6B8E7F] mb-1">
                  Bachelor’s Degree
                </p>
                <span className="text-lg md:text-xl font-semibold text-[#2C3E3A]">
                  Bachelor of Arts – Embu University
                </span>
              </div>
              <svg
                className={`w-6 h-6 text-[#6B8E7F] transition-transform ${
                  openSection === 'bachelors' ? 'rotate-180' : ''
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
                openSection === 'bachelors' ? 'max-h-48' : 'max-h-0'
              }`}
            >
              <div className="px-6 pb-6 text-[#5F6C67] text-sm md:text-base">
                <p>
                  Pursued a Bachelor of Arts degree at Embu University,
                  building a strong academic foundation in Kiswahili,
                  Christian Religious Education, and effective teaching practice.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Closing line */}
        <p className="text-center text-sm text-[#6B8E7F] mt-12 italic">
          Grounded in knowledge, guided by values.
        </p>
      </div>
    </section>
  );
}

export default Education;
