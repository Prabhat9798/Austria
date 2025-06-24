import { useState } from "react";
import Slider from "react-slick";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Testimonal.css";
import "../styles/Testimonal.css";

// testimonal image

import purvanshi from "../assets/studentimg/1_preview_rev_1.png";
import shagun from "../assets/studentimg/ShagunShah_preview_rev_1 (1).png";
import ayush from "../assets/studentimg/3_preview_rev_1.png";
import shweta from "../assets/studentimg/6_preview_rev_1.png";
import abhay from "../assets/studentimg/7_preview_rev_1.png";
import naveen from "../assets/studentimg/naveen1.png";
import akansha from "../assets/studentimg/AkankshaMourya_preview_rev_1.png";
import arshiya from "../assets/studentimg/11_preview_rev_1.png";
import Taranjit from "../assets/studentimg/Taranjeet (2)_preview_rev_1.png";
import kripal from "../assets/studentimg/9_preview_rev_1.png";
import prasad from "../assets/studentimg/prasad.png";
import antony from "../assets/studentimg/5_preview_rev_1.png";
import shodhan from "../assets/Updated-Testimonal/shodhanupdated.png";

// university
import purvanshiuniversity from "../assets/Updated-Testimonal/purvanshiuniversity.png";
import shagununiversity from "../assets/Updated-Testimonal/shagununiversity.png";
import ayushuniversity from "../assets/Updated-Testimonal/ayushuniversity.png";
import naveen_university from "../assets/Updated-Testimonal/naveenuniversity.png";
import akanshauniversity from "../assets/Updated-Testimonal/akanshauniversity.png";
import shwetaUniversity from "../assets/Updated-Testimonal/shwetauniversity.png";
import kripaluniversity from "../assets/Updated-Testimonal/kripaluniversity.gif";
import abhayuniversity from "../assets/Updated-Testimonal/abhayuniversity.png";
import taranjituniversity from "../assets/Updated-Testimonal/taranjituniversity.png";
import prasaduniversity from "../assets/Updated-Testimonal/prasaduniversity.png";
import arshiyauniversity from "../assets/Updated-Testimonal/arshiyauniversity.png";
import antonyuniversity from "../assets/Updated-Testimonal/antonyuniversity.png";

import TestiCard from "./testiCard";

function Testimonal() {
  const [sliderRef, setSliderRef] = useState(null);

  const sliderSettings = {
    // arrows: true,

    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 200,
    infinite: true,
    cssEase: "ease",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const hotelCards = [
    {
      imageSrc: purvanshi,
      name: "Purvanshi Sharma",
      para1: "The best part about the Germanywale team is that they don't",
      para2: `treat you as a customer. `,

      videoLink:
        "https://www.instagram.com/p/CXsiGOVvMjI/?igsh=MTEyZ2E5b3Z5b2xqdA==",
      course: "MSc in Data Science",
      university: purvanshiuniversity,
    },
    {
      imageSrc: shagun,
      name: "Shagun Shah",
      para1:
        "Won't lie. Was a little skeptical about Germanywale in the start.",
      para2: `But it proved me wrong in every way possible. `,
      videoLink: "https://www.youtube.com/@germanywale_official/featured",
      course: "MSc in Data Science",
      university: shagununiversity,
    },
    {
      imageSrc: ayush,
      name: "Ayush Baid",
      para1:
        "The mentors are easy to reach and talk to, the process is simplified ",
      para2: `and their advice on writing SOPs and shortlisting universities.`,

      videoLink:
        "https://www.instagram.com/p/CcpG3vktcIC/?igsh=MWVtazVtN2U3ODl1bA==",
      course: "Masters in Management",
      university: ayushuniversity,
    },
    {
      imageSrc: shweta,
      name: "Shweta Kumar",
      para1:
        " Germanywale is one of the best consulting firms I have come across. ",
      para2: `Their advice and service were very genuine. `,
      pricingText: "USD 50/Day",
      course: "Masters in Non-Financials Intensive",
      videoLink:
        "https://www.instagram.com/p/C1Gy9xuLP6J/?igsh=MXkybmt3cDloNjAyYg==",

      university: shwetaUniversity,
    },
    {
      imageSrc: abhay,
      name: "Abhay Ahuja",
      para1:
        " The whole process was very transparent it marked my expectations.",
      para2: `I was kept well informed about the ongoing developments.`,

      videoLink: "https://youtube.com/shorts/znoo0fz9ioA?si=sCzDbJrLX5DXeDpR",
      university: abhayuniversity,
      course: "Masters in Agriculture, Ecology and Societies",
    },
    {
      imageSrc: naveen,
      name: "Naveen Verma",
      para1:
        "My experience with Germanywale has been nothing short of my high expectations.",
      para2: ` Their flexibility with assigning mentors is excellent`,

      videoLink: "https://youtu.be/dTmGfOmDpkk?si=PMdvZk4QSdaa98CH",
      university: naveen_university,
      course: "MSc in Biological Resources",
    },
    {
      imageSrc: akansha,
      name: "Akanksha Mourya",
      para1:
        "Genuinely I was very worried about my application before joining Germanywale. Team always gives me confidence and assurance",
      para2: `that I will get an admit.`,

      videoLink: "https://youtu.be/yFigyCOADqQ?si=kV5zBjVhyc2_gG-v",
      university: akanshauniversity,
      course: "Master's in molecular life science",
    },
    {
      imageSrc: Taranjit,
      name: "Taranjit Kaur",
      para1:
        "I would never forget the key role played by Team Germanywale in university shortlisting. They were available beyond",
      para2: ` the time, no matter what type of concern I have.`,

      videoLink:
        "https://www.instagram.com/p/CkRB7KdLhTW/?igsh=bmw5aG56dG15emJu",
      university: taranjituniversity,
      course: "International Management and Leadership (MA)",
    },
    {
      imageSrc: kripal,
      name: "Kripal Kishor",
      para1:
        "Whenever I had a doubt , the team was always there to help me out.",
      para2: ` The team gave me hope and proper guidance and motivated  me a lot to go beyond.`,

      videoLink: "https://youtu.be/3TiiJCuJHoE?si=xMHmDDw8e10lz9uc",
      university: kripaluniversity,
      course: "Masters in Intelligent Manufacturing",
    },
    {
      imageSrc: prasad,
      name: "Prasad Patil",
      para1:
        "Germanywale provided exceptional support and engagement, promptly ",
      para2: ` addressing all my questions and doubts. Their patience and reliability eased my journey.`,

      videoLink: "https://youtube.com/shorts/Lo2OrJkqmR0?si=iPjX7u43FKzg6HKu",
      university: prasaduniversity,
      course: "Masters in Wind energy Engineering",
    },
    {
      imageSrc: arshiya,
      name: "Arshiya Sharma",
      para1:
        "Saurabh and the entire team were in touch with me consistently the whole time & were always there  if I had any doubts. I would highly  ",
      para2: `recommend Germanywale to my  everyone.`,

      videoLink: "https://youtu.be/kYGHHRW0JKA?si=CrF9YAbS6DXdlxu2",
      university: arshiyauniversity,
      course:
        "Master's in International Business- Focus on healthcare management",
    },
    {
      imageSrc: antony,
      name: "Antony Reddy",
      para1:
        "My entire application process with Germanywale has been extremely smooth.Everyone in",
      para2: ` the team is \n exceptional and very helpful.`,

      videoLink: "https://youtube.com/shorts/xVFs-veJimQ?si=Mndtadq8RinUXfCR",
      university: antonyuniversity,
      course: "Master of Business Administration",
    },
    {
      imageSrc: shodhan,
      name: "Shodhan",
      para1:
        "Choosing Germanywale for my study abroad journey was the best decision I ever made, as their personalized guidance led me to my",
      para2: ` dream university with immense support.`,

      videoLink:
        "https://www.instagram.com/p/C6lA9JeOWm_/?igsh=MWdybDB5N2N4YWV1dQ==",
      university: shagununiversity,
      course: "Master’s in Electromobility",
    },
  ];

  return (
    <>
      <div className="container" id="review"
      style={{
        fontFamily:"Gilroy"
      }}>
        <section className="px-4 py-4 sm:px-6 sm:py-8 lg:px-10 lg:py-10 ">
          <div className="md:px-4 pt-4">
            <div className="flex justify-center items-center px-2 sm:px-5">
              <div className="text-center w-[100%]">
                <h3
                  className="text-2xl  sm:text-4xl font-bold mt-4 mb-10 text-[#002147] text-4xl font-semibold leading-[150%] text-center overflow-hidden  bg-gradient-to-r from-[#E56D09] via-[#D83E13] to-[#D83E13] bg-clip-text text-transparent"
                  style={{ fontFamily: "Gilroy-Medium" }}
                >
                  What Our Student Speak
                </h3>
              </div>
              <div>
                <button
                  className="rounded-md"
                  onClick={() => sliderRef?.slickNext()} // Use slickNext() to move to the next slide
                >
                  <TbPlayerTrackNextFilled
                    color="#DB4A11"
                    style={{
                      fontSize: "1.5rem",
                    }}
                  />
                </button>
              </div>
            </div>
            <div className="w-full">
              <Slider ref={setSliderRef} {...sliderSettings}>
                {hotelCards.map((card, index) => (
                  <>
                    <TestiCard item={card} />
                  </>
                ))}
              </Slider>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default Testimonal;
