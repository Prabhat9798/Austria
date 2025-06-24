import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      icon: "https://publicassets.leverageedu.com/studyAbroad/DreamCourse.png",
      title: "World-class education\nat <span class='font-semibold'>low tuition fees</span>"
    },
    {
      icon: "https://publicassets.leverageedu.com/studyAbroad/assistance.png",
      title: "<span class='font-semibold'>English-taught</span> programs\nin diverse fields"
    },
    {
      icon: "https://publicassets.leverageedu.com/studyAbroad/testPrep.png",
      title: "<span class='font-semibold'>Central European</span> hub\nfor easy travel"
    },
    {
      icon: "https://publicassets.leverageedu.com/studyAbroad/visa.png",
      title: "<span class='font-semibold'>1-year</span> post-study\nwork opportunities"
    },
    {
      icon: "https://publicassets.leverageedu.com/studyAbroad/financial.png",
      title: "<span class='font-semibold'>Affordable</span> living\nin safe cities"
    },
    {
      icon: "https://publicassets.leverageedu.com/studyAbroad/acco.png",
      title: "Vibrant culture &\n<span class='font-semibold'>international</span> community"
    }
  ];

  return (
    <section className="py-16 md:py-20" style={{ fontFamily: "Gilroy" }}>
      <div className="container mx-auto w-[80%]">
        {/* Heading Row */}
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <h2 className="text-[#002147] text-4xl font-semibold leading-[150%] text-center">
              Austria <span className="text-[#0487f3] bg-gradient-to-r from-[#E56D09] via-[#D83E13] to-[#D83E13] bg-clip-text text-transparent">Advantage</span>
            </h2>
          </div>
        </div>

        {/* Services Grid */}
        <div className="flex flex-wrap mt-10">
          {services.map((service, index) => (
            <div key={index} className="w-1/2 md:w-1/3 px-4 mb-8">
              {/* Mobile View */}
              <div className="md:hidden flex items-start">
                <img 
                  width="48" 
                  height="48" 
                  className="flex-shrink-0 mr-3" 
                  src={service.icon} 
                  alt="Service Icon"
                />
                <div>
                  <h3 className="text-[#002147] text-lg font-normal leading-tight whitespace-pre-line" 
                      dangerouslySetInnerHTML={{ __html: service.title }} />
                </div>
              </div>
              
              {/* Desktop View */}
              <div className="hidden md:flex flex-col items-center text-center">
                <img 
                  className="h-12 mb-4" 
                  src={service.icon} 
                  alt="Service Icon"
                />
                <h3 className="text-[#002147] text-lg font-normal leading-tight whitespace-pre-line"
                    dangerouslySetInnerHTML={{ __html: service.title }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;