import React from "react";
import { Container } from "@/components/Container";

interface Testimonial {
  title: string;
  description: string;
  buttonText: string;
}

const testimonialsData: Testimonial[] = [
  {
    title: "Personal",
    description:
      "Discover RTIsolution plans for personal/individual. Unlock information and transparency with the perfect plan.",
    buttonText: "Know More",
  },
  {
    title: "Business",
    description:
      "Discover RTIsolution plans for business. Unlock information and transparency with the perfect plan.",
    buttonText: "Know More",
  },
  {
    title: "Social",
    description:
      "Discover RTIsolution plans for social and other organizations. Unlock information and transparency with the perfect plan.",
    buttonText: "Know More",
  },
];

export const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-8 lg:grid-cols-3">
        {testimonialsData.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </Container>
  );
};

interface TestimonialCardProps {
  title: string;
  description: string;
  buttonText: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  title,
  description,
  buttonText,
}) => {
  return (
    <div className="flex flex-col justify-between bg-gray-100 p-8 rounded-lg shadow-lg dark:bg-trueGray-800">
      <h3 className="mb-4 text-lg font-bold text-gray-800 dark:text-gray-200">
        {title}
      </h3>
      <p className="mb-6 text-gray-600 dark:text-gray-400">{description}</p>
      <button className="px-4 py-2 text-sm font-semibold text-white bg-yellow-500 rounded-lg hover:bg-yellow-600">
        {buttonText}
      </button>
    </div>
  );
};
