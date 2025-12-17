import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Laptop,
  Code,
  Factory,
  Briefcase,
  Users,
  Share2,
  CheckCircle,
} from "lucide-react";

const Service = () => {
  const [selectedService, setSelectedService] = useState(null);
  const navigate = useNavigate();

  // 🔹 ALL SERVICES DATA
  const services = {
    "web-development": {
      title: "Web Development Training",
      description:
        "Our comprehensive web development program covers both front-end and back-end technologies, ensuring you become a full-stack developer ready for the industry.",
      image: "https://i.ibb.co/NdyCNntk/web-development.jpg",
      duration: "3–6 months",
      projects: "5+ real-world projects",
      certification: "Industry-recognized",
      features: [
        "HTML5, CSS3, JavaScript (ES6+)",
        "React.js & modern frameworks",
        "Node.js & Express.js",
        "MongoDB & SQL databases",
        "REST API development",
        "Git & GitHub",
      ],
      icon: Laptop,
    },

    "app-development": {
      title: "App Development Training",
      description:
        "Learn to build high-performance mobile applications for Android and iOS using modern technologies.",
      image: "https://i.ibb.co/Dc1dBnW/Appdeve.webp",
      duration: "4–6 months",
      projects: "3+ mobile apps",
      certification: "Industry-recognized",
      features: [
        "Android Development (Java / Kotlin)",
        "iOS Development (Swift)",
        "React Native & Flutter",
        "REST API & Backend Integration",
        "UI/UX Design Principles",
        "App Deployment & Play Store Publishing",
      ],
      icon: Code,
    },

    "industrial-training": {
      title: "Industrial Training & Skill Development",
      description:
        "Hands-on industry-focused training programs with real-world projects and expert mentorship.",
      image:
        "https://media.istockphoto.com/id/2203784032/photo/business-professionals-actively-discussing-ideas-and-strategies-during-a-corporate-meeting.webp",
      duration: "2–6 months",
      projects: "Industry projects",
      certification: "Industry-recognized",
      features: [
        "Live Industry-Level Projects",
        "Mentorship from Industry Experts",
        "Hands-on Practical Training",
        "Use of Modern Industry Tools",
        "Team Collaboration & Agile Practices",
        "Professional Portfolio Development",
      ],
      icon: Factory,
    },

    "career-guidance": {
      title: "Career Guidance & Placement Support",
      description:
        "Personalized career guidance and placement support to help you achieve your career goals.",
      image:
        "https://img.freepik.com/free-photo/top-view-career-written-note-with-stickers-notepad-white-background-job-office-copybook-salary-college-business-color_179666-19734.jpg",
      duration: "Ongoing",
      projects: "Interview-ready portfolio",
      certification: "Placement support",
      features: [
        "One-on-One Career Counseling",
        "Resume & CV Building",
        "Mock Interviews with Feedback",
        "Soft Skills & Communication Training",
        "Job & Internship Assistance",
        "Career Roadmap Planning",
      ],
      icon: Briefcase,
    },

    "technical-workshops": {
      title: "Technical Workshops",
      description:
        "Expert-led workshops on emerging technologies and industry tools.",
      image:
        "https://media.istockphoto.com/id/1349104991/photo/e-learning-online-education-concept.jpg",
      duration: "2–5 days",
      projects: "Hands-on labs",
      certification: "Workshop certificate",
      features: [
        "Live Expert-Led Sessions",
        "Hands-on Practical Labs",
        "Latest Industry Technologies",
        "Mini Projects & Case Studies",
        "Doubt Clearing & Q&A Sessions",
        "Workshop Completion Certificate",
      ],
      icon: Users,
    },

    "social-media": {
      title: "Social Media Marketing",
      description:
        "Learn effective social media strategies to grow brands and generate leads.",
      image: "https://i.ibb.co/n8mCwmCJ/Social.webp",
      duration: "2–3 months",
      projects: "Live campaigns",
      certification: "Industry-recognized",
      features: [
        "Social Media Strategy & Planning",
        "Content Creation & Branding",
        "Paid Ads (Facebook, Instagram, Google)",
        "Audience Growth Techniques",
        "Analytics, Insights & Reporting",
        "Live Campaign Management",
      ],
      icon: Share2,
    },
  };

  // ✅ ENROLL BUTTON HANDLER
  const handleEnroll = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    } else {
      navigate(`/enroll/${selectedService}`);
    }
  };

  // 🔹 DETAIL VIEW
  if (selectedService) {
    const service = services[selectedService];

    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
            <p className="text-gray-600 mb-6">{service.description}</p>

            <ul className="space-y-3 mb-6">
              {service.features.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-emerald-500" size={20} />
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-gray-600 mb-8">
              <strong>Duration:</strong> {service.duration} |{" "}
              <strong>Projects:</strong> {service.projects} |{" "}
              <strong>Certification:</strong> {service.certification}
            </p>

            <div className="flex gap-4">
              <button
                onClick={handleEnroll}
                className="px-6 py-3 rounded-full bg-emerald-500 text-white hover:bg-emerald-600"
              >
                Enroll Now
              </button>

              <button
                onClick={() => setSelectedService(null)}
                className="px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700"
              >
                Back to Services
              </button>
            </div>
          </div>

          <div className="w-full max-w-lg h-64 md:h-80 overflow-hidden rounded-2xl shadow-xl">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    );
  }

  // 🔹 GRID VIEW
  return (
    <section id="services" className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 underline decoration-blue-600">
          What We Offer
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(services).map(([key, service]) => {
            const Icon = service.icon;
            return (
              <div
                key={key}
                onClick={() => setSelectedService(key)}
                className="cursor-pointer bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-xl"
              >
                <Icon className="mx-auto mb-4 text-blue-600" size={40} />
                <h3 className="text-xl font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description.slice(0, 80)}...
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Service;
