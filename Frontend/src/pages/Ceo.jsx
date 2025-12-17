import React from "react";

const Ceo = () => {
  return (
    <section className="w-full py-10 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="https://i.ibb.co/8gXKdFsC/Kartik-CEO.png"  // replace with your image path
            alt="CEO"
            className="w-120 h-[560px] rounded-2xl shadow-xl"
          />
        </div>

        {/* Content Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Our Visionary Leader
          </h2>

          <div className="w-20 h-1 bg-blue-600 mb-6"></div>

          <p className="text-blue-600 font-semibold mb-1">
            CEO, NK Skilledge Pvt. Ltd.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Mr. Kartik Mendhe
          </h3>

          <p className="text-gray-600 leading-relaxed mb-4">
            Leading the company with vision, innovation, and strong technical
            expertise, Mr. Kartik Mendhe is the driving force behind NK
            SkillEdge's mission to bridge the gap between education and
            employability.
          </p>

          {/* Quote Box */}
          <div className="border-l-4 border-orange-600 bg-orange-50 p-2 rounded-lg mb-4">
            <p className="text-gray-700 italic">
              "Our vision is to create a generation of skilled professionals who
              are not just job seekers but job creators. We believe in empowering
              youth with practical knowledge that transforms careers and lives."
            </p>
          </div>

          <p className="text-gray-600 leading-relaxed mb-4">
            With experience as an Ex-Intern at The DataStack, Mr. Mendhe brings
            valuable industry insights and technical expertise to our training
            programs. His leadership has been instrumental in shaping the
            company’s growth and impact.
          </p>

          {/* Button */}
          <a href="https://wa.me/917498784109?text=Hi%20NK%20SkillEdge,%20I%20would%20like%20to%20know%20more%20about%20your%20programs" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-lg transition duration-300">
            Connect with Our CEO
          </a>
        </div>

      </div>

      {/* Director Section */}
      <div className="max-w-6xl mx-auto px-6 mt-20 pt-12 border-t-2 border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">

          {/* Content Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Our Strategic Leader
            </h2>

            <div className="w-16 h-0.5 bg-blue-600 mb-4"></div>

            <p className="text-blue-600 font-semibold mb-1 text-sm">
              Director, NK SkillEdge Pvt. Ltd.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Mr. Nikhil Pardhi
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Responsible for strategic supervision, growth planning, and operational leadership, Mr. Nikhil Pardhi ensures that every initiative aligns with our core mission of empowering students through practical training and real-world exposure.
            </p>

            {/* Quote Box - Smaller */}
            <div className="border-l-4 border-orange-600 bg-orange-50 p-3 rounded-lg mb-4">
              <p className="text-gray-700 text-sm italic">
                "Success is built on strong foundations, strategic planning, and a commitment to excellence. Every student deserves the opportunity to shine."
              </p>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              With a keen focus on operational excellence and sustainable growth, Mr. Pardhi drives the organizational vision forward, ensuring that NK SkillEdge maintains its commitment to quality education and skill development.
            </p>

            {/* Button - Secondary */}
            <a href="https://www.linkedin.com/in/nikhil-pardhi-15a77a376/" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-lg transition duration-300">
              Connect with Director
            </a>
          </div>

          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src="https://i.ibb.co/F4L8sgVM/nikhil.jpg"
              alt="Director"
              className="w-80 h-96 rounded-2xl shadow-lg object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Ceo;
