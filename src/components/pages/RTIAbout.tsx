import React from "react";
import { SectionTitle } from "@/components/SectionTitle";
import { Video } from "@/components/Video";
const AboutRTI = () => {
  const awards = [
    "Award 1",
    "Award 2",
    "Award 3",
    "Award 4",
    "Award 5",
    "Award 6",
    "Award 7",
    "Award 8",
    "Award 9",
  ];

  const mediaMentions = [
    "Media 1",
    "Media 2",
    "Media 3",
    "Media 4",
    "Media 5",
    "Media 6",
    "Media 7",
    "Media 8",
  ];

  return (
    <div className="container font-serif mx-auto px-4 py-10 bg-gray-100">
      {/* Title Section */}
      <SectionTitle
        preTitle="Watch a video"
        title="What is RTIsolution all about?"
      >
        RTIsolution is a VC-backed legaltech startup empowering the masses through
        affordable result-driven legal solutions. We’re helping people in
        exercising their Right to Information, Consumer Rights, and fixing
        legal issues.
      </SectionTitle>

      {/* Video Section */}
      <Video videoId="fZ0D0cnR88E" />


      

     
      {/* Awards and Media Mentions Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Awards Section */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-center">Awards</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {awards.map((award, index) => (
              <div
                key={index}
                className="w-32 h-32 bg-yellow-200 flex items-center justify-center rounded-md text-center shadow-md"
              >
                {award}
              </div>
            ))}
          </div>
        </div>

        {/* Media Mentions Section */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-center">
            Media Mentions & Publications
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {mediaMentions.map((media, index) => (
              <div
                key={index}
                className="w-32 h-32 bg-gray-300 flex items-center justify-center rounded-md text-center shadow-md"
              >
                {media}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutRTI;
