import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-12 min-h-screen px-6 mt-8 md:px-16 lg:px-24 pt-20 md:pt-16 pb-2 bg-[#F9FAFB] max-w-7xl">
        
        {/* Left side: Text content and social icons */}
        <div className="flex flex-col items-center md:items-start max-w-lg">
          {/* Social icons - stacked vertically on both mobile and desktop */}
          <div className="flex md:flex-col gap-4 md:gap-4 mb-5 md:mb-6 text-xl md:text-2xl">
            <a
              href="https://www.linkedin.com/in/linet-wavinya-44566b297/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 hover:text-black transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=linetkwavinya@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 hover:text-black transition-colors"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://wa.me/254740962074"
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 hover:text-black transition-colors"
            >
              <FaWhatsapp />
            </a>
          </div>

          {/* Text content */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold mb-2 text-black">
              Hi I'm Linet
            </h1>
            <h2 className="text-sm md:text-base text-gray-700 font-semibold mb-5">
              Kiswahili | Fasihi | CRE Teacher
            </h2>
            <p className="text-xs md:text-base text-gray-500 mb-6 leading-relaxed max-w-md">
             I am an experienced educator with a passion for inspiring students and helping them grow academically and personally. I specialize in designing effective learning environments, delivering engaging lessons, and supporting diverse learning needs both in the classroom and beyond. I work across curriculum planning, student assessment, classroom management, and educational technology, and I enjoy integrating digital tools to make learning more interactive and impactful. I love empowering students, improving learning outcomes, and creating a positive, supportive educational experience for every learner.
             </p>
            <button 
            onClick={() => document.getElementById("contact")?.scrollIntoView({behavior: "smooth"})}
             className="bg-black text-white px-7 py-4 rounded-full font-medium hover:bg-gray-600 cursor-pointer hover:shadow-md hover:-translate-y-1 shadow-gray-600 transition-colors inline-flex items-center gap-2">
              Contact Me
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right side: Profile image */}
        <div className="shrink-0">
          <div className="relative">
            <div className="shadow-md rounded-full w-56 h-56 md:w-82 md:h-82 lg:h-92 lg:w-92 overflow-hidden">
              <img
                src="/Images/linet2.jpeg"
                alt="Lynette"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
  );
}

export default Hero;