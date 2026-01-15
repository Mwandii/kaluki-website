function About() {
  return (
    <section id="about" className="py-16 md:py-18 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-12 md:mb-16">
          About Me
        </h2>

        {/* Content Container */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          {/* Image */}
          <div className="w-full  flex justify-center">
            <div className="relative w-64 h-64 md:w-100 md:h-80 lg:w-120 lg:h-80">
              <img
                src="https://images.unsplash.com/photo-1573167474706-deb8c54d0bc7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGJsYWNrJTIwZmVtYWxlJTIwdGVhY2hlcnxlbnwwfHwwfHx8MA%3D%3D"
                alt="Developer illustration"
                className="w-full h-full object-cover rounded-2xl shadow-[0_8px_24px_#6B8E7F26]"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 flex flex-col space-y-6">
            <p className="text-base  text-gray-500 leading-relaxed">
              Experienced in integrating educational technology and delivering dynamic instruction. Skilled in student engagement, lesson development, and classroom innovation to support productive and inclusive learning.
            </p>
            
            <p className="text-base text-gray-500 leading-relaxed">
              I enjoy empowering learners to explore new ideas and develop essential skills for the future. With expertise in modern teaching tools and personalized learning strategies, I help students grow academically and build real-world competencies.
            </p>

            {/* CV Download Button */}
            <div className="pt-4">
              <a 
  href="/cv/LINET WAVINYA CV 2026JAN.pdf" 
  download
>
              <button className="bg-black text-white px-8 py-3 rounded-md font-medium hover:bg-gray-700 hover:cursor-pointer transition-colors inline-flex items-center gap-2 shadow-md hover:shadow-lg">
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                  />
                </svg>
                Download CV
              </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;