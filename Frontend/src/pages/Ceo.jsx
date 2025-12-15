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

          <div className="w-20 h-1 bg-purple-500 mb-6"></div>

          <p className="text-purple-600 font-semibold mb-1">
            CEO, NK Skilledge Pvt. Ltd.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Mr. Kartik Mendhe
          </h3>

          <p className="text-gray-600 leading-relaxed mb-6">
            Leading the company with vision, innovation, and strong technical
            expertise, Mr. Kartik Mendhe is the driving force behind NK
            SkillEdge's mission to bridge the gap between education and
            employability.
          </p>

          {/* Quote Box */}
          <div className="border-l-4 border-purple-500 bg-purple-50 p-5 rounded-lg mb-6">
            <p className="text-gray-700 italic">
              "Our vision is to create a generation of skilled professionals who
              are not just job seekers but job creators. We believe in empowering
              youth with practical knowledge that transforms careers and lives."
            </p>
          </div>

          <p className="text-gray-600 leading-relaxed mb-8">
            With experience as an Ex-Intern at The DataStack, Mr. Mendhe brings
            valuable industry insights and technical expertise to our training
            programs. His leadership has been instrumental in shaping the
            company’s growth and impact.
          </p>

          {/* Button */}
          <a href="https://www.linkedin.com/in/kartik-mendhe-0b617528a/" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full shadow-lg transition duration-300">
            Connect with Our CEO
          </a>
        </div>

      </div>
    </section>
  );
};

export default Ceo;
