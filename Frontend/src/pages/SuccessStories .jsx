import React from "react";

const stories = [
  {
    name: "Khushi Kawale",
    role: "Intern At Nodenext",
    image: "https://i.ibb.co/8L47sxt7/Khushi-Kawale.png",
    quote:
      "The industrial training at NK SkillEdge gave me the practical skills I needed to secure a job as a web developer. The hands-on projects were invaluable!",
  },
  {
    name: "Vishal Karemore",
    role: "KIA",
    image: "https://i.ibb.co/wFTBz4ng/Gemini-Generated-Image-443quk443quk443q.png",
    quote:
      "The career guidance and interview preparation helped me land an internship at my dream startup. Thank you NK SkillEdge!",
  },
  {
    name: "Ronak Madankar",
    role: "Software Engineer at DataStack",
    image: "https://i.ibb.co/bRLM0gXb/Ronak-Pardhi.png",
    quote:
      "The app development training was comprehensive and up-to-date with industry standards. It directly helped me in my current role.",
  },
];

const SuccessStories = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Success Stories
          </h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Cards */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((story, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden 
                         transition-all duration-500 hover:-translate-y-3 
                         hover:shadow-2xl animate-fadeIn"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-full h-64 object-cover 
                             transition-transform duration-500 
                             group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-purple-600">
                  {story.name}
                </h3>
                <p className="text-sm text-teal-600 font-medium mb-4">
                  {story.role}
                </p>

                <p className="text-gray-900 leading-relaxed text-sm ">
                  “{story.quote}”
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind animation */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fadeIn {
            animation: fadeIn 0.8s ease forwards;
          }
        `}
      </style>
    </section>
  );
};

export default SuccessStories;
