import React from "react";

const Services = [
  {
    title: "10 mins RTI/Legal Micro Consultation",
    description:
      "Sometimes it’s better to consult an RTI Expert/Lawyer before investing time, money, and efforts in filing an RTI application or pursuing a legal course of action.",
    image: "/path/to/clock-icon.png", // Replace with the actual image path
  },
  {
    title: "Anonymous RTI Online",
    description:
      "File Anonymous RTI online through RTIsolution Services. The RTIsolution Legal Team will mitigate the risk of threats or assaults by filing RTI app on your behalf.",
    image: "/path/to/anonymous-icon.png", // Replace with the actual image path
  },
  {
    title: "Online RTI Filing",
    description:
      "Now File RTI Online with RTIsolution from the comfort of your home, without any hassle, and we will meticulously draft and dispatch it to the authority concerned.",
    image: "/path/to/online-filing-icon.png", // Replace with the actual image path
  },
  {
    title: "Online RTI First Appeal Filing",
    description:
      "Avail the Online First Appeal Filing services by RTIsolution at affordable pricing. We will draft and dispatch your First Appeal to the concerned authority.",
    image: "/path/to/first-appeal-icon.png", // Replace with the actual image path
  },
];

const AnimatedCard = ({ title, description, image }: any) => {
  return (
    <div className="flex flex-col items-start p-6 transition-transform transform bg-white border rounded-lg shadow-md hover:scale-105 hover:bg-gray-100">
      {/* Icon */}
      <div className="flex items-center justify-center w-36 h-36 bg-amber-400 rounded-lg mb-4">
        <img src={image} alt={title} className="w-16 h-16 mb-4" />
      </div>
      {/* Title */}
      <h3 className="mb-2 text-lg font-semibold text-gray-800">{title}</h3>

      {/* Description */}
      <p className="text-sm text-gray-600">{description}</p>

      {/* Buy Now Button */}
      <button className="mt-4 px-4 py-2 text-white bg-amber-400 rounded-lg hover:bg-amber-600">
        Buy Now
      </button>
    </div>
  );
};

const RTIServices = () => {
  return (
    <div>
      {/* Red Full-Width Box */}
      <div className="w-full bg-green-500 py-6">
        <div className="container mx-auto flex flex-wrap justify-around items-center gap-6 text-center">
          {/* Icon and Text 1 */}
          <div className="flex flex-col items-center">
            <img
              src="/path/to/happy-user-icon.png" // Replace with actual icon path
              alt="Happy Users"
              className="w-12 h-12 mb-2"
            />
            <span className="text-xl font-bold text-white">
              32000+ Happy Users
            </span>
          </div>

          {/* Icon and Text 2 */}
          <div className="flex flex-col items-center">
            <img
              src="/path/to/support-icon.png" // Replace with actual icon path
              alt="Support"
              className="w-12 h-12 mb-2"
            />
            <span className="text-xl font-bold text-white">
              Chat/Email Support
            </span>
          </div>

          {/* Icon and Text 3 */}
          <div className="flex flex-col items-center">
            <img
              src="/path/to/lawyer-icon.png" // Replace with actual icon path
              alt="Experienced Lawyers"
              className="w-12 h-12 mb-2"
            />
            <span className="text-xl font-bold text-white">
              Experienced Lawyers
            </span>
          </div>

          {/* Icon and Text 4 */}
          <div className="flex flex-col items-center">
            <img
              src="/path/to/success-icon.png" // Replace with actual icon path
              alt="Success Rate"
              className="w-12 h-12 mb-2"
            />
            <span className="text-xl font-bold text-white">
              93% Success Rate
            </span>
          </div>
        </div>
      </div>

      {/* Dynamic Cards Section */}
      <div className="container mx-auto my-10">
        <h2 className="text-5xl font-serif font-extrabold text-center text-gray-800">
          Our RTI Services
        </h2>
        <div className="grid gap-8 mt-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
          {Services?.map((item, index) => (
            <AnimatedCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RTIServices;
