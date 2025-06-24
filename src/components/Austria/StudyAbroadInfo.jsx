import React from 'react';

const StudyAbroadInfo = () => {
  return (
    <section className="py-20 bg-[#f5fafe]">
      <div className="container mx-auto max-w-[82%]">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <h2 className="text-[#002147] font-rubik text-4xl font-semibold leading-[150%] text-left mb-6">
              Study Abroad with <span className="text-[#0487f3]">Austria Edu</span>
            </h2>
            
            <div>
              <div className="studyAbroadInfo_description__sBOwb">
                <p className="mb-4">
                  As per government estimates, a little over 9,00,000 Indians were studying abroad in 2022. 
                  This grew to 1.31 million in 2023 and 1.33 million in 2024. As per some estimates, 
                  around 1.5 to 2 million Indians will be studying abroad in 2025.
                </p>
                <p className="mb-4">
                  India has the second-largest number of students studying overseas, surpassed only by China. 
                  In 2019, Indians spent USD 37 billion on higher education overseas and in 2025, 
                  the spending is expected to cross USD 70 billion.
                </p>
              </div>
              
              <span className="text-[#0487f3] cursor-pointer">Read more ...</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudyAbroadInfo;