import React from 'react';

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-[#f5fafe]" style={{ fontFamily: "Gilroy" }}>
      <div className="container mx-auto max-w-[82%]">
        {/* Heading Row */}
        <div className="flex flex-wrap -mx-4 mb-12">
          <div className="w-full px-4">
            <h2 className="text-[#002147] text-4xl font-semibold leading-[150%] text-center">
              Why Choose <span className="text-[#0487f3] bg-gradient-to-r from-[#E56D09] via-[#D83E13] to-[#D83E13] bg-clip-text text-transparent">Austria?</span>
            </h2>
          </div>
        </div>

        {/* USP Row */}
        <div className="flex flex-wrap -mx-4">
          {/* University Partners */}
          <div className="w-1/2 md:w-1/4 px-4 mb-8">
            <div className="flex flex-col items-center justify-start">
              <img 
                className="h-16 mb-4" 
                src="https://publicassets.leverageedu.com/studyAbroad/handshake.png" 
                alt="850+ University Partners"
              />
              <h3 className="text-center text-[#002147] text-lg font-normal">
                <span className="font-semibold">University</span> Partners
              </h3>
            </div>
          </div>

          {/* Success Stories */}
          <div className="w-1/2 md:w-1/4 px-4 mb-8">
            <div className="flex flex-col items-center justify-start">
              <img 
                className="h-16 mb-4" 
                src="https://publicassets.leverageedu.com/studyAbroad/trophy.png" 
                alt="45,000+ Success Stories"
              />
              <h3 className="text-center text-[#002147] text-lg font-normal">
                <span className="font-semibold">Success</span> Stories
              </h3>
            </div>
          </div>

          {/* Scholarship */}
          <div className="w-1/2 md:w-1/4 px-4 mb-8">
            <div className="flex flex-col items-center justify-start">
              <img 
                className="h-16 mb-4" 
                src="https://publicassets.leverageedu.com/studyAbroad/scholarship.png" 
                alt="Scholarship up to 50%*"
              />
              <h3 className="text-center text-[#002147] text-lg font-normal">
                <span className="font-semibold">Scholarship</span> Support
              </h3>
            </div>
          </div>

          {/* Courses */}
          <div className="w-1/2 md:w-1/4 px-4 mb-8">
            <div className="flex flex-col items-center justify-start">
              <img 
                className="h-16 mb-4" 
                src="https://publicassets.leverageedu.com/studyAbroad/gradCap.png" 
                alt="Courses starting at ₹8 Lakhs*"
              />
              <h3 className="text-center text-[#002147] text-lg font-normal">
                Diverse <span className="font-semibold">Courses</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;