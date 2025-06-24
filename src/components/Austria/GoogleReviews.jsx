import React from "react";
import { FaStar, FaHeart } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Gautam Nandakumar",
    testimonial:
      "It was a Wonderful experience with germanywale. Dheeraj sir was so kind.",
    rating: 5,
    liked: true
  },
 {
    id: 2,
    name: "Utkarsh Singh Sikarwar",
    testimonial:
      "I had a great experience with Germanywale team. The team was knowledgeable, responsive, and guided me through each step of the process, from university selection to document preparation and visa application. Their personalized approach made everything smooth.",
    rating: 5,
    liked: true,
    meta: "12 reviews · 2 photos · 8 months ago"
  },
   {
    id: 3,
    name: "Abhay Ahuja",
    testimonial:
      "The consulting services I used for public universities were truly first class and I am completely satisfied. The team Germanywale were extremely competent and professional. They helped me find the best path for my academic goals and were with me throughout the process.",
    rating: 5,
    liked: true,
    meta: "4 reviews · Edited 2 months ago",
    reply: "Thanks Abhay! - Germanywale Team"
  },
    {
    id: 4,
    name: "Himanshi Yadav",
    testimonial:
      "Great experience. Everyone was so helpful and supportive during this whole process.",
    rating: 5,
    liked: true,
    meta: "1 review · 2 months ago"
  },
  {
    id: 5,
    name: "Ayush Yadav",
    testimonial:
      "Germanywale offers solid support for students aiming to study in Germany, from applications to visas. Super professional and really supportive throughout the whole process!",
    rating: 5,
    liked: true,
    meta: "1 review · 2 months ago"
  },
 {
    id: 6,
    name: "Geshna",
    testimonial:
      "Had an amazing experience with Germanywale! Their attention to detail and quick responses to my queries made the complete process incredibly smooth. Highly recommended.",
    rating: 5,
    liked: false,
    meta: "3 reviews · 2 months ago"
  }
];

const GoogleReviews = () => {
  // Array of colors for the initials
  const colors = [
    "bg-blue-500",
    "bg-green-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-indigo-500",
    "bg-teal-500",
  ];

  return (
    <section className="py-16 px-6 lg:px-12 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-4xl font-bold text-gray-900 mb-4">
       
            <span className="bg-gradient-to-r from-[#E56D09] via-[#D83E13] to-[#D83E13] bg-clip-text text-transparent">Success </span>
            <span>Stories</span>
          </h2>
          <p className="text-xl text-gray-600">From Dreamers to Achievers</p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white border-0 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="p-6">
                {/* Profile Header */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className="relative">
                    <div
                      className={`w-12 h-12 rounded-full ${colors[index % colors.length]} flex items-center justify-center text-white font-bold text-xl`}
                    >
                      {testimonial.name.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <h3 className=""
                    style={{
                        fontFamily:"Gilroy-SemiBold"
                    }}>
                      {testimonial.name}
                    </h3>
                    <div className="flex mt-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`${i < testimonial.rating ? "text-yellow-400" : "text-gray-300"} text-sm`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className=" text-sm leading-relaxed mb-4 line-clamp-4">
                  {testimonial.testimonial}
                </p>

                {/* Footer */}
                <div className="flex justify-end">
                  <FaHeart
                    className={`text-lg ${testimonial.liked ? "text-red-500 fill-red-500" : "text-gray-300"}`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;