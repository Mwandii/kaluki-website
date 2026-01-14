import { useState } from 'react';

function Education() {
  const [flipped, setFlipped] = useState(null);

  const toggleFlip = (card) => {
    setFlipped(flipped === card ? null : card);
  };

  return (
    <section
      id="education"
      className="relative py-20 md:py-16 px-6 md:px-12 lg:px-24 
                 bg-linear-to-b from-stone-50 via-stone-50 to-stone-100"
    >
      {/* Background accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[500px] h-[500px] 
                        bg-[#2C3E3A]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-3">
          Education
        </h2>
        <p className="text-center text-[#2C3E3A] mb-4">
          Academic qualifications and professional training
        </p>
        <p className="text-center text-sm italic text-gray-500 mb-12">
          *Elimu ni msingi wa maendeleo*
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Masters */}
          <div
            className="relative h-72 perspective cursor-pointer group"
            onClick={() => toggleFlip('masters')}
          >
            <div
              className={`absolute inset-0 transition-transform duration-500 transform-style-preserve-3d ${
                flipped === 'masters' ? 'rotate-y-180' : ''
              }`}
            >
              {/* Front */}
              <div className="absolute inset-0 rounded-2xl 
                bg-linear-to-br from-white via-stone-50 to-stone-100
                border border-stone-200
                shadow-[0_14px_36px_rgba(0,0,0,0.1)]
                p-8 flex flex-col justify-between items-center
                backface-hidden
                transition-all duration-300
                group-hover:-translate-y-2
                group-hover:shadow-[0_24px_48px_rgba(0,0,0,0.14)]">

  {/* Top label */}
  <span className="text-xs uppercase tracking-widest text-gray-500">
    Postgraduate Degree
  </span>

  {/* Center content */}
  <div className="text-center">
    <h3 className="text-2xl font-semibold tracking-tight text-black">
      Master of Arts
    </h3>

    <div className="w-12 h-0.5 bg-black/20 rounded-full mx-auto my-3" />

    <p className="text-sm text-[#2C3E3A] tracking-wide">
      Mount Kenya University
    </p>
  </div>

  {/* Bottom credibility row */}
  <div className="w-full flex justify-between items-center text-xs text-gray-500">
    <span>Completed</span>
    <span className="italic">Tap to view details</span>
  </div>
</div>


              {/* Back */}
              <div className="absolute inset-0 rounded-2xl 
                bg-linear-to-br from-stone-100 via-white to-stone-50
                border border-stone-200
                shadow-[0_12px_32px_rgba(0,0,0,0.1)]
                p-8 flex flex-col justify-between
                rotate-y-180 backface-hidden">

  {/* Header */}
  <div className="text-center">
    <p className="text-lg font-semibold text-black tracking-tight">
      Master of Arts
    </p>
    <p className="text-xs uppercase tracking-widest text-gray-500 mt-1">
      Postgraduate Qualification
    </p>
  </div>

  {/* Divider */}
  <div className="w-12 h-0.5 bg-black/20 rounded-full mx-auto my-4" />

  {/* Highlights */}
  <ul className="text-sm text-[#2C3E3A] space-y-2 text-center">
    <li>• Advanced subject mastery</li>
    <li>• Research-driven academic training</li>
    <li>• High-level professional competence</li>
    <li>• Curriculum depth & instructional leadership</li>
  </ul>

  {/* Credibility row */}
  <div className="flex justify-center gap-6 text-center mt-4">
    <div>
      <p className="text-xl font-bold text-black">✔</p>
      <p className="text-xs text-gray-500">Completed</p>
    </div>
    <div>
      <p className="text-xl font-bold text-black">PG</p>
      <p className="text-xs text-gray-500">Level</p>
    </div>
  </div>

  {/* Certificate action */}
  <a
    href="/certificates/masters.pdf"
    download
    className="mt-4 text-xs text-black underline underline-offset-4 text-center 
               hover:text-gray-600 transition"
  >
    Download Master’s Certificate
  </a>
</div>

            </div>
          </div>

          {/* Bachelors */}
          <div
            className="relative h-72 perspective cursor-pointer group"
            onClick={() => toggleFlip('bachelors')}
          >
            <div
              className={`absolute inset-0 transition-transform duration-500 transform-style-preserve-3d ${
                flipped === 'bachelors' ? 'rotate-y-180' : ''
              }`}
            >
              {/* Front */}
              <div className="absolute inset-0 rounded-2xl 
                bg-linear-to-br from-white via-stone-50 to-stone-100
                border border-stone-200
                shadow-[0_14px_36px_rgba(0,0,0,0.1)]
                p-8 flex flex-col justify-between items-center
                backface-hidden
                transition-all duration-300
                group-hover:-translate-y-2
                group-hover:shadow-[0_24px_48px_rgba(0,0,0,0.14)]">

  {/* Top label */}
  <span className="text-xs uppercase tracking-widest text-gray-500">
    Undergraduate Degree
  </span>

  {/* Center content */}
  <div className="text-center">
    <h3 className="text-2xl font-semibold tracking-tight text-black">
      Bachelor of Arts
    </h3>

    <div className="w-12 h-0.5 bg-black/20 rounded-full mx-auto my-3" />

    <p className="text-sm text-[#2C3E3A] tracking-wide">
      Embu University
    </p>
  </div>

  {/* Bottom credibility row */}
  <div className="w-full flex justify-between items-center text-xs text-gray-500">
    <span>Graduated</span>
    <span className="italic">Tap to view details</span>
  </div>
</div>


              {/* Back */}
             <div className="absolute inset-0 rounded-2xl 
                bg-linear-to-br from-stone-100 via-white to-stone-50
                border border-stone-200
                shadow-[0_12px_32px_rgba(0,0,0,0.1)]
                p-8 flex flex-col justify-between
                rotate-y-180 backface-hidden">

  {/* Header */}
  <div className="text-center">
    <p className="text-lg font-semibold text-black tracking-tight">
      Bachelor of Arts
    </p>
    <p className="text-xs uppercase tracking-widest text-gray-500 mt-1">
      Undergraduate Degree
    </p>
  </div>

  {/* Divider */}
  <div className="w-12 h-0.5 bg-black/20 rounded-full mx-auto my-4" />

  {/* Highlights */}
  <ul className="text-sm text-[#2C3E3A] space-y-2 text-center">
    <li>• Kiswahili & Christian Religious Education</li>
    <li>• Strong academic & teaching foundation</li>
    <li>• Classroom-ready professional training</li>
    <li>• Curriculum-aligned pedagogy</li>
  </ul>

  {/* Credibility row */}
  <div className="flex justify-center gap-6 text-center mt-4">
    <div>
      <p className="text-xl font-bold text-black">✔</p>
      <p className="text-xs text-gray-500">Graduated</p>
    </div>
    <div>
      <p className="text-xl font-bold text-black">UG</p>
      <p className="text-xs text-gray-500">Level</p>
    </div>
  </div>

  {/* Certificate action */}
  <a
    href="/certificates/bachelors.pdf"
    download
    className="mt-4 text-xs text-black underline underline-offset-4 text-center 
               hover:text-gray-600 transition"
  >
    Download Bachelor’s Certificate
  </a>
</div>

            </div>
          </div>
        </div>

        {/* Closing line */}
        <p className="text-center text-sm text-gray-500 mt-14 italic">
          Grounded in knowledge, guided by values.
        </p>
      </div>
    </section>
  );
}

export default Education;
