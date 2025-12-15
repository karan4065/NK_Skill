import React from "react";
import { Github, Linkedin, Mail, Code } from "lucide-react";

const coreTeam = [
  {
    name: "Mr. Nikhil Pardhi",
    role: "Director, NK SkillEdge Pvt. Ltd.",
    desc: "Responsible for strategic supervision, growth planning, and operational leadership.",
    img: "https://i.ibb.co/F4L8sgVM/nikhil.jpg",
  },
  {
    name: "Ms. Tanvi Gore",
    role: "Chief Marketing Officer (CMO)",
    desc: "Heads marketing, branding, outreach initiatives, and student engagement programs.",
    img: "https://i.ibb.co/27btpmNZ/Tanvi-Gore-C.jpg",
  },
  {
    name: "Ms. Prajakta Bobade",
    role: "Chief Operating Officer (COO)",
    desc: "Oversees daily operations, team coordination, and end-to-end project management.",
    img: "https://i.ibb.co/XfrkYK83/Prajakta-Bobade-C.jpg",
  },
  {
    name: "Ms. Neha Pardhi",
    role: "Chief Technology Officer (CTO)",
    desc: "Leads technical strategy, product development, and innovation initiatives.",
    img: "https://i.ibb.co/s9XGXJSG/Neha-Pardhi-C.jpg",
  },
];

const developers = [
  {
    name: "Mr. Karan Jadhav",
    role: "MERN Stack Developer",
    desc: "Specializes in building scalable full-stack applications using MongoDB, Express, React, and Node.js.",
    img: "karan.jpg",
    expertise: ["React", "Node.js", "MongoDB", "Express.js"],
    social: {
      github: "https://github.com/karan4065",
      linkedin: "https://www.linkedin.com/in/karan-jadhav-573968322/",
      email: "karanjadhav4065@gmail.com",
    },
  },
  {
    name: "Mr. Divyansh Bharbat",
    role: "Full-Stack Developer",
    desc: "Expert in frontend & backend development with strong focus on performance and Backend technology.",
    img: "divyansh.jpg",
    expertise: ["React", "Node.js", "Firebase", "Tailwind CSS"],
    social: {
      github: "https://github.com/Divyanshbharbat/",
      linkedin: "https://www.linkedin.com/in/divyansh-bharbat-2a620a2b5/",
      email: "bharbatdivyansh1@gmail.com",
    },
  },
];

const CoreTeam = () => {
  return (
    <section id="team" className="py-10 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Main Heading */}
        <div className="text-center mb-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Meet Our <span className="text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">Exceptional Team</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Talented professionals dedicated to empowering the next generation of developers and digital leaders.
          </p>
        </div>

        {/* Core Team Section */}
        <div className="mb-8">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">Leadership Team</h3>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {coreTeam.map((member, i) => (
              <div
                key={i}
                className="group animate-in fade-in slide-in-from-bottom-4 duration-700"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div
                  className="bg-white rounded-2xl shadow-lg overflow-hidden
                             transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                >
                  {/* Image Container */}
                  <div className="relative h-56 overflow-hidden bg-gray-200">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6 text-center">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-purple-600 font-semibold text-sm mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {member.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Developers Section */}
        <div className="border-t-2 border-gray-200 pt-8">
          <div className="text-center mb-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              Developer <span className="text-transparent bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text">Team</span>
            </h3>
            <p className="text-gray-600 mt-4">Skilled developers crafting exceptional digital experiences</p>
          </div>

          {/* Developer Cards */}
          <div className="grid gap-12 md:grid-cols-2 lg:max-w-4xl lg:mx-auto">
            {developers.map((dev, i) => (
              <div
                key={i}
                className="group animate-in fade-in slide-in-from-bottom-8 duration-700"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="relative h-full">
                  {/* Card Container */}
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                    
                    {/* Image Section */}
                    <div className="relative h-64 md:h-80 overflow-hidden bg-gradient-to-br from-purple-600 to-indigo-600">
                      <img
                        src={dev.img}
                        alt={dev.name}
                        className="w-full h-full object-cover object-[center_30%] group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    {/* Content Section */}
                    <div className="p-4 md:p-4 space-y-2">
                      <div>
                        <h4 className="text-2xl font-bold text-gray-900 mb-2">
                          {dev.name}
                        </h4>
                        <div className="flex items-center gap-2 mb-3">
                          <Code size={16} className="text-cyan-600" />
                          <p className="text-cyan-600 font-semibold text-sm">
                            {dev.role}
                          </p>
                        </div>
                      </div>

                      <p className="text-gray-600 leading-relaxed">
                        {dev.desc}
                      </p>

                      {/* Expertise Tags */}
                      <div className="flex flex-wrap gap-2">
                        {dev.expertise.map((tech, j) => (
                          <span
                            key={j}
                            className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full hover:bg-purple-200 transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Social Links */}
                      <div className="flex gap-4 pt-2 border-t border-gray-200">
                        <a
                          href={dev.social.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-900 text-gray-900 hover:text-white rounded-lg transition-all duration-300 font-semibold"
                        >
                          <Github size={16} />
                          <span className="hidden sm:inline text-xs">GitHub</span>
                        </a>
                        <a
                          href={dev.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-100 hover:bg-blue-600 text-blue-600 hover:text-white rounded-lg transition-all duration-300 font-semibold"
                        >
                          <Linkedin size={16} />
                          <span className="hidden sm:inline text-xs">LinkedIn</span>
                        </a>
                        <a
                          href={`mailto:${dev.social.email}`}
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-red-100 hover:bg-red-600 text-red-600 hover:text-white rounded-lg transition-all duration-300 font-semibold"
                        >
                          <Mail size={16} />
                          <span className="hidden sm:inline text-xs">Email</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreTeam;
