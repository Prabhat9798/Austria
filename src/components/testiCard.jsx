import React from "react";
import playIcon from "../assets/Updated-Testimonal/play.svg";
// import "../styles/Testimonial.css";

const TestiCard = ({ item }) => {
  return (
    <>
      {/* <div className="flex flex-col">
        <div className="bg-gradient-to-r from-[#fff4eb] via-[#ffdfd8] to-[#ffdfd8] rounded-t-lg flex flex-col">
            <div className="min-h-[7rem] mb-auto m-5">
              <div
                className="newtesti_content text-left pt-2 text-lg"
                style={{ fontFamily: "Gilroy-Medium" }}
              >
                {item.para1}
              </div>

              <div
                className=" text-left w-60 mb-1 text-lg newtesti_content2 "
                style={{ fontFamily: "Gilroy-Medium" }}
                dangerouslySetInnerHTML={{
                  __html: item.para2,
                }}
              ></div>
            </div>
          
          <div className="flex items-end justify-around relative" style={{top:'-70px'}}>
            <div className="ml-6">
              <div
                className="text-left "
                style={{ fontFamily: "Gilroy-Medium" }}
              >
                <p className="font-bold text-md">{item.name}</p>
              </div>
              <p
                className="text-left text-xs w-48 student_name font-normal"
                style={{ fontFamily: "Gilroy-Medium" }}
              >
                {item.course}
              </p>
              <div
                className="mt-3 w-1/2 sm:w-3/5 h-12 object-contain"
                style={{ fontFamily: "Gilroy-Medium" }}
              >
                <img
                  src={item.university}
                  alt="university"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
            <div>
              <div
                style={{
                  aspectRatio: "1 / 1", // Adjust this ratio as needed
                  minWidth: "10rem", // Minimum width of the container
                  // maxWidth: "10rem",
                }}
              >
                <div className="object-cover" />
                <img
                  src={item.imageSrc}
                  alt="images"
                  className="object-cover h-auto bottom-0 lg:h-40 xl:object-cover xl:h-60"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="bg-gradient-to-r rounded-b-lg pt-5 from-[#ea7d06] via-[#DF3C19] to-[#DF3C19] text-[#FFFFFF] py-3 rounded-sm flex items-center px-2 sm:px-10 text-md cursor-pointer relative" style={{top:'-70px'}}
          onClick={() => window.open(item.videoLink, "_blank")}
        >
          <img src={playIcon} alt="playbtn" className="h-10" />
          <h3
            className="ml-4 mb-2 text-xl storytitle"
            style={{ fontFamily: "Gilroy-Medium" }}
          >
            Watch their story
          </h3>
        </div>
      </div> */}

      <div className="bg-[#F5F6F8] testiWidth rounded-t-lg">
        <div className="relative p-2 sm:p-4 pb-1 min-h-[20rem] md:min-h-[20rem]  ">
          <div className="min-h-[7rem] mb-auto">
            <div
              className="  text-left pt-2 text-sm sm:text-lg"
              style={{ fontFamily: "Gilroy-Medium" }}
            >
              {item.para1}
            </div>

            <div
              className=" text-left w-60 mb-1 text-sm sm:text-lg  "
              style={{ fontFamily: "Gilroy-Medium" }}
              dangerouslySetInnerHTML={{
                __html: item.para2,
              }}
            ></div>
          </div>

          <div className="absolute bottom-2 ml-1">
            <div className="text-left " style={{ fontFamily: "Gilroy-Medium" }}>
              <p className="font-semibold text-lg">{item.name}</p>
            </div>
            <p
              className="text-left text-xs w-48  font-normal"
              style={{ fontFamily: "Gilroy-Medium" }}
            >
              {item.course}
            </p>
            <div
              className="mt-3 w-1/2 sm:w-3/5 h-12 object-contain"
              style={{ fontFamily: "Gilroy-Medium" }}
            >
              <img
                src={item.university}
                alt="university"
                className="h-full w-full object-contain"
              />
            </div>
          </div>

          <div className="absolute right-0 sm:right-0 bottom-0 overflow-hidden h-auto xl:h-56 w-36 sm:w-48 xl:w-48">
            <div
              style={{
                aspectRatio: "1 / 1", // Adjust this ratio as needed
                minWidth: "11rem",
                maxWidth: "12rem",
              }}
            >
              <div className="object-cover" />
              <img
                src={item.imageSrc}
                alt="images"
                className="object-cover h-auto bottom-0 lg:h-40 xl:object-cover xl:h-60"
              />
            </div>
          </div>
        </div>
        <div
          className="bg-gradient-to-r pt-4 rounded-b-lg from-[#ea7d06] via-[#DF3C19] to-[#DF3C19] text-[#FFFFFF] py-3 rounded-sm flex items-center px-2 sm:px-10 text-md  cursor-pointer"
          onClick={() => window.open(item.videoLink, "_blank")}
        >
          <img src={playIcon} alt="playbtn" className="h-10" />
          <h3
            className="ml-2 text__18 storytitle"
            style={{ fontFamily: "Gilroy-Medium" }}
          >
            Watch their story
          </h3>
        </div>
      </div>
    </>
  );
};

export default TestiCard;
